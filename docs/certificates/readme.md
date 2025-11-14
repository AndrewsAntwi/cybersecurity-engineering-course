<input id="certName" placeholder="Your full name" style="padding:.5rem; width:60%;">
<button class="cert-btn" onclick="issueCert()">Download Certificate</button>

<script>
function issueCert(){
  const name = document.getElementById('certName').value || 'Learner';
  // compute moduleSummary from localStorage using progress.js
  const data = JSON.parse(localStorage.getItem('lms_progress_v1') || '{}');
  const done = Object.keys(data).filter(k=>data[k]).join(', ');
  createCertificate(name, 'Cybersecurity Engineering Course', done || 'Foundations');
}
</script>
