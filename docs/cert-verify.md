# Certificate Verification

Scan the QR code on the certificate or paste the token below.

<input id="tokenInput" style="width:80%" placeholder="Paste token here">
<button id="verifyBtn">Verify</button>

<div id="verifyResult" style="margin-top:20px"></div>

<script src="https://cdn.jsdelivr.net/npm/jsrsasign"></script>
<script>
// Load public key (PEM) - hosted in repo at /assets/keys/public.pem
async function fetchPublicKey() {
  const r = await fetch('/assets/keys/public.pem');
  return r.text();
}

function verifyJWSWithPEM(jws, publicPem) {
  // Using jsrsasign to verify RS256 JWS
  try {
    const isValid = KJUR.jws.JWS.verify(jws, publicPem, ["RS256"]);
    if (!isValid) return { valid:false, message:'Signature invalid' };
    const payload = JSON.parse(KJUR.jws.JWS.parse(jws).payloadPP);
    return { valid:true, payload };
  } catch(e) {
    return { valid:false, message: e.toString() };
  }
}

document.getElementById('verifyBtn').addEventListener('click', async () => {
  const token = document.getElementById('tokenInput').value.trim();
  if (!token) { alert('Paste a token or use ?token=... in URL'); return; }
  const pub = await fetchPublicKey();
  const result = verifyJWSWithPEM(token, pub);
  const out = document.getElementById('verifyResult');
  if (result.valid) {
    out.innerHTML = `<h3 style="color:green">Valid certificate</h3>
      <p><strong>Name:</strong> ${result.payload.name}</p>
      <p><strong>Course:</strong> ${result.payload.course}</p>
      <p><strong>Modules:</strong> ${result.payload.modules.join(', ')}</p>
      <p><strong>Issued at:</strong> ${new Date(result.payload.iat*1000).toLocaleString()}</p>`;
  } else {
    out.innerHTML = `<h3 style="color:red">Invalid certificate</h3><p>${result.message}</p>`;
  }
});

// Auto-check token via query param
window.addEventListener('DOMContentLoaded', async () => {
  const urlToken = new URLSearchParams(location.search).get('token');
  if (urlToken) {
    document.getElementById('tokenInput').value = urlToken;
    document.getElementById('verifyBtn').click();
  }
});
</script>
