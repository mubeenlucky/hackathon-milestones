document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumePreview = document.getElementById('resumePreview');
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
});
