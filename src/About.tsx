import React, { useEffect, useState } from 'react';

interface SocialLink {
  platform: string;
  url: string;
}

interface AboutData {
  name: string;
  title: string;
  bio: string;
  socialLinks: SocialLink[];
}

const About: React.FC = () => {
  const [data, setData] = useState<AboutData | null>(null);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    // Load about.json
    fetch('/data/about/about.json')
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error('Failed to load about data:', err));

    // Set known profile image path
    setProfileImage('/data/about/profile-picture/profile-picture.jpeg');

    // Hardcoded list of carousel images (update filenames as needed)
    setCarouselImages([
      '/data/about/carousel/pic1.jpg',
      '/data/about/carousel/pic2.jpeg',
      '/data/about/carousel/pic3.jpg',
      '/data/about/carousel/pic4.jpeg',
      '/data/about/carousel/pic5.jpg'
    ]);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      {profileImage && (
        <img
          src={profileImage}
          alt={`${data.name} profile`}
          style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }}
        />
      )}
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      {data.bio.split('\n\n').map((paragraph, index) => (
        <p key={index} style={{ marginBottom: '1rem' }}>
            {paragraph}
        </p>
      ))}

      <h3>My Animals</h3>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingBottom: '1rem' }}>
        {carouselImages.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`carousel ${i}`}
            style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
          />
        ))}
      </div>

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
  );
};

export default About;