<!-- Include html2pdf + qrcode libraries in mkdocs extra_javascript or include CDN links -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

<div>
  <input id="studentName" placeholder="Student full name">
  <input id="studentEmail" placeholder="Student email (optional)">
  <button id="issueBtn">Issue Signed Certificate</button>
</div>

<div id="certificatePreview" style="display:none; padding:20px; border:1px solid #eee;">
  <div id="qr" style="float:right;"></div>
  <h2>Certificate of Completion</h2>
  <p id="certName"></p>
  <p id="certCourse"></p>
  <p id="certModules"></p>
  <small>Signed token: <span id="certToken" style="word-break:break-all;"></span></small>
</div>

<script>
async function issueCertificate() {
  const name = document.getElementById('studentName').value || 'Learner';
  const email = document.getElementById('studentEmail').value || '';
  const modules = JSON.parse(localStorage.getItem('lms_progress_v1') || '{}');
  const completed = Object.keys(modules).filter(k=>modules[k]);

  // Call signer endpoint
  const signerUrl = 'https://your-signer.example.com/sign'; // replace
  const payload = { name, email, modules: completed };

  // NOTE: use a secure method to call signer (server-side call recommended). If making client call, you must include API key - not ideal.
  const res = await fetch(signerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'REPLACE_WITH_SIGNER_API_KEY' // better to proxy server side
    },
    body: JSON.stringify(payload)
  });
  const json = await res.json();
  if (!json.token) { alert('Signing failed'); return; }
  const token = json.token;

  // Show preview
  document.getElementById('certName').innerText = name;
  document.getElementById('certCourse').innerText = 'Cybersecurity Engineering Course';
  document.getElementById('certModules').innerText = 'Modules: ' + (completed.join(', ') || 'Foundations');

  document.getElementById('certToken').innerText = token;
  document.getElementById('certificatePreview').style.display = 'block';

  // Generate QR linking to verification page
  const verifyUrl = `${location.origin}/cert-verify.html?token=${encodeURIComponent(token)}`;
  document.getElementById('qr').innerHTML = '';
  new QRCode(document.getElementById('qr'), { text: verifyUrl, width: 120, height: 120 });

  // Save issued cert metadata to localStorage for dashboard
  const issued = JSON.parse(localStorage.getItem('lms_issued_certs') || '[]');
  issued.push({ name, email, token, issuedAt: new Date().toISOString(), modules: completed });
  localStorage.setItem('lms_issued_certs', JSON.stringify(issued));

  // Offer download PDF
  const element = document.getElementById('certificatePreview');
  html2pdf().from(element).save(`${name.replace(/\s+/g,'_')}_certificate.pdf`);
}

document.getElementById('issueBtn').addEventListener('click', issueCertificate);
</script>
