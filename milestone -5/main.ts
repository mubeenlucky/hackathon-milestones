document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumePreview = document.getElementById('resume-preview');
    if (resumePreview) {
        resumePreview.innerHTML = `
            <h2>${name}</h2>
            <p contenteditable ="true">Email: ${email}</p>
            <p contenteditable ="true">Phone:  ${phone}</p>
            <h3>Education</h3>
            <p contenteditable ="true">${education}</p>
            <h3>Experience</h3>
            <p contenteditable ="true">${experience}</p>
            <h3>Skills</h3>
            <p contenteditable ="true">${skills}</p>
        `;
    }
    const uniquePath = `${window.location.origin}/resume/${encodeURIComponent(name)}`;
    const shareableLink = document.getElementById('shareable-link');
    if (shareableLink) {
        shareableLink.innerHTML = `Shareable Link: <a href="${uniquePath}" target="_blank">${uniquePath}</a>`;
        shareableLink.style.display = 'block';
    }

    const downloadButton = document.getElementById('download-pdf');
    if (downloadButton) {
        downloadButton.style.display = 'block';
        downloadButton.onclick = () => downloadPDF(name, email, experience,skills,education,phone);
    }
});

function downloadPDF(name: string, email: string, experience: string, skills:string,education:string,phone:string) {
    const pdfContent = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
     <h3>Education</h3>
         <p>${education}</p>
     <h3>Skills</h3>
         <p>${skills}</p>
        <p >Phone:${phone}</p>



    `;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${name}_resume.pdf`;
    link.click();
}
;
