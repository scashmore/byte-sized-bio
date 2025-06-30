import React, { useEffect, useState } from 'react';

interface SocialLink {
  platform: string;
  url: string;
}

interface AboutData {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  socialLinks: SocialLink[];
}

const About: React.FC = () => {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch('/data/about.json')
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error('Failed to load about data:', err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <img
        src={data.profileImage}
        alt={`${data.name} profile`}
        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
      />
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <p>{data.bio}</p>
      <div>
        <h3>Find me on:</h3>
        <ul>
          {data.socialLinks.map((link) => (
            <li key={link.platform}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
