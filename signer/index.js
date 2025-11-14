// signer/index.js
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const { SignJWT, importPKCS8 } = require('jose'); // Top-level import only

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: '10kb' }));

// Load private key
const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH || './keys/private.pem';
if (!fs.existsSync(PRIVATE_KEY_PATH)) {
  console.error('Private key not found at', PRIVATE_KEY_PATH);
  process.exit(1);
}
const PRIVATE_PEM = fs.readFileSync(PRIVATE_KEY_PATH, 'utf8');

// API key check
const SIGNER_API_KEY = process.env.SIGNER_API_KEY || 'please-set-a-secure-token';

// Import private key as CryptoKey
const importPrivateKey = async (pem) => {
  return await importPKCS8(pem, 'RS256');
};
const privateCryptoKeyPromise = importPrivateKey(PRIVATE_PEM);

// POST /sign
app.post('/sign', async (req, res) => {
  try {
    const apiKey = req.get('x-api-key') || req.body.apiKey;
    if (!apiKey || apiKey !== SIGNER_API_KEY) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { name, email, course = 'Cybersecurity Engineering Course', modules = [] } = req.body;
    if (!name) return res.status(400).json({ error: 'Missing name' });

    const now = Math.floor(Date.now() / 1000);
    const payload = {
      sub: email || name,
      name,
      course,
      modules,
      iat: now
    };

    const privateKey = await privateCryptoKeyPromise;

    const jws = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
      .setIssuedAt()
      .sign(privateKey);

    return res.json({ token: jws });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Signing failed', detail: err.toString() });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Certificate signer running on', PORT));

