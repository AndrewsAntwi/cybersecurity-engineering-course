// createCertificate(name, moduleList, date)
// uses html2pdf library (client-side) to render a PDF
function createCertificate(studentName, courseTitle, moduleSummary) {
  const certHtml = `
    <div style="width:100%; padding:40px; font-family: Arial, sans-serif; text-align:center;">
      <h1 style="font-size:36px; margin-bottom:6px;">Certificate of Completion</h1>
      <p style="font-size:18px; margin-top:0; color:#555;">This certifies that</p>
      <h2 style="font-size:28px; margin:6px 0;">${studentName}</h2>
      <p style="font-size:16px; margin:6px 0; color:#555;">has successfully completed</p>
      <h3 style="font-size:20px; margin:6px 0;">${courseTitle}</h3>
      <p style="margin-top:18px; font-size:14px; color:#444;">Modules Completed: ${moduleSummary}</p>
      <p style="margin-top:36px; font-size:12px; color:#888;">Date: ${new Date().toLocaleDateString()}</p>
    </div>
  `;
  // use html2pdf (must be included via CDN)
  const opt = { filename: `${studentName.replace(/\s+/g,'_')}_certificate.pdf`, html2canvas: { scale: 2 } };
  html2pdf().set(opt).from(certHtml).save();
}
