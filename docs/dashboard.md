# Student Dashboard

Welcome — this dashboard shows your course progress and issued certificates.

<div id="dashboardRoot"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script>
function renderDashboard(){
  const root = document.getElementById('dashboardRoot');
  const progress = JSON.parse(localStorage.getItem('lms_progress_v1')||'{}');
  const issued = JSON.parse(localStorage.getItem('lms_issued_certs')||'[]');

  // Modules
  const modules = Object.keys(progress);
  let html = '<h2>Modules</h2><div>';
  modules.forEach(m => {
    html += `<div style="margin-bottom:8px;">
      <strong>${m}</strong> <span style="margin-left:8px;" class="badge">${progress[m] ? 'Completed' : 'Incomplete'}</span>
    </div>`;
  });
  html += '</div>';

  // Certificates
  html += '<h2 style="margin-top:20px">Issued Certificates</h2>';
  if (issued.length === 0) html += '<p>No certificates issued yet.</p>';
  else {
    html += '<ul>';
    issued.reverse().forEach((c, idx) => {
      html += `<li style="margin-bottom:12px;">
        <strong>${c.name}</strong> — ${new Date(c.issuedAt).toLocaleDateString()}
        <br><small>Modules: ${ (c.modules || []).join(', ')}</small>
        <br><button onclick="verifyToken('${c.token}')">Verify</button>
        <button onclick="downloadTokenPDF('${c.token}', '${c.name.replace(/'/g,'')}' )">Download PDF</button>
      </li>`;
    });
    html += '</ul>';
  }
  root.innerHTML = html;
}

function verifyToken(token) {
  // open verification page in new tab
  const url = `${location.origin}/cert-verify.html?token=${encodeURIComponent(token)}`;
  window.open(url, '_blank');
}

function downloadTokenPDF(token, name) {
  // create a small page and PDF - reuse html2pdf if available
  const html = `<div style="padding:20px;">
    <h2>Certificate</h2>
    <p>Token:</p>
    <p style="word-break:break-all">${token}</p>
  </div>`;
  // fallback: open new window with token
  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
}
document.addEventListener('DOMContentLoaded', renderDashboard);
</script>
