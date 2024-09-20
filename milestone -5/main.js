var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumePreview = document.getElementById('resume-preview');
    if (resumePreview) {
        resumePreview.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p contenteditable =\"true\">Email: ").concat(email, "</p>\n            <p contenteditable =\"true\">Phone:  ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p contenteditable =\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable =\"true\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable =\"true\">").concat(skills, "</p>\n        ");
    }
    var uniquePath = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(name));
    var shareableLink = document.getElementById('shareable-link');
    if (shareableLink) {
        shareableLink.innerHTML = "Shareable Link: <a href=\"".concat(uniquePath, "\" target=\"_blank\">").concat(uniquePath, "</a>");
        shareableLink.style.display = 'block';
    }
    var downloadButton = document.getElementById('download-pdf');
    if (downloadButton) {
        downloadButton.style.display = 'block';
        downloadButton.onclick = function () { return downloadPDF(name, email, experience, skills, education, phone); };
    }
});
function downloadPDF(name, email, experience, skills, education, phone) {
    var pdfContent = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n     <h3>Education</h3>\n         <p>").concat(education, "</p>\n     <h3>Skills</h3>\n         <p>").concat(skills, "</p>\n        <p >Phone:").concat(phone, "</p>\n\n\n\n    ");
    var blob = new Blob([pdfContent], { type: 'application/pdf' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "".concat(name, "_resume.pdf");
    link.click();
}
;
