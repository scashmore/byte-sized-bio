import React, { useEffect, useState } from 'react';

const Resume: React.FC = () => {
  const [resumeText, setResumeText] = useState<string>('');
  const resumeTextUrl = '/data/resume/resume.txt'; // Plain text version for display
  const resumePdfUrl = '/data/resume/resume.pdf'; // PDF for download

  useEffect(() => {
    fetch(resumeTextUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch resume text');
        return res.text();
      })
      .then(setResumeText)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>Susan Livingston's Resume</h1>
      
      <a
        href={resumePdfUrl}
        download="Susan_Livingston_Resume.pdf"
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        Download PDF
      </a>

      <pre
        style={{
          whiteSpace: 'pre-wrap',
          backgroundColor: '#f9f9f9',
          padding: '1rem',
          borderRadius: '4px',
          maxHeight: '600px',
          overflowY: 'auto',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          lineHeight: '1.4',
        }}
      >
        {resumeText || 'Loading resume...'}
      </pre>
    </div>
  );
};

export default Resume;
