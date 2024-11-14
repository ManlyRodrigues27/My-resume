import React from 'react';
import resumeFile from '../assets/resume.docx';

function Resume() {
  return (
    <div style={{ padding: '20px' }}>
      <section>
        <h2>Professional Summary</h2>
        <p>A motivated and detail-oriented Computer Engineering student with a diploma background...</p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <h3>Flutter Developer (Internship)</h3>
        <p><strong>Company:</strong> Branding Catalyst</p>
        <p><strong>Duration:</strong> 2 months</p>
        <p>Responsibilities: Developed, tested, and maintained mobile application features...</p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>Fr. Conceicao Rodrigues College of Engineering - Bachelor’s in Electronics...</li>
          <li>Bhausaheb Vartak Polytechnic - Diploma in Computer Engineering (75.25%)</li>
          <li>Holy Cross Convent School - SSC (83.60%)</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <p>HTML, CSS, Bootstrap, React, Angular, Node.js, Django, Jinja, Python, MongoDB...</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Quizzyverse:</strong> A gamified quiz website developed using Django and Jinja...</li>
          <li><strong>Indian Winner:</strong> A website for Indian Olympic winners, created with...</li>
        </ul>
      </section>

      <section>
        <h2>Certifications & Achievements</h2>
        <p>Management Head – Hackathon 2023, Table Tennis Winner – Singles & Doubles...</p>
      </section>

      <section>
        <h2>Hobbies</h2>
        <p>Playing cricket, gaming (PUBG Mobile), traveling</p>
      </section>

      <button onClick={() => window.open(resumeFile)} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Download Resume
      </button>
    </div>
  );
}

export default Resume;
