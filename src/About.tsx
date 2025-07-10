import React, { useEffect, useState } from 'react';
import {
  Container,
  ProfileSection,
  BioBox,
  Carousel,
  SectionHeading,
  SocialLinksList,
} from './components/aboutComponents';
import { useColorModeValue } from './components/ui/color-mode';

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

  const bg = useColorModeValue('lavender.400', 'lavender.900');
  const cardBg = useColorModeValue('lavender.200', 'lavender.700');
  const accent = useColorModeValue('gold.500', 'gold.300');
  const textColor = useColorModeValue('fg', 'lavender.100');

  useEffect(() => {
    // Load about.json
    fetch('/data/about/about.json')
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error('Failed to load about data:', err));

    // Set known profile image path
    setProfileImage('/data/about/profile-picture/profile-picture.jpeg');

    // Hardcoded (for now) list of carousel images (update filenames as needed)
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
    <Container bg={bg}>
      <ProfileSection
        accent={accent}
        profileImage={profileImage}
        name={data.name}
        title={data.title}
        textColor={textColor}
      />
      <BioBox cardBg={cardBg} textColor={textColor}>
        {data.bio}
      </BioBox>
      <SectionHeading accent={accent}>My Menagerie</SectionHeading>
      <Carousel images={carouselImages} />
      <SectionHeading accent={accent}>Find me on:</SectionHeading>
      <SocialLinksList
        socialLinks={data.socialLinks}
        accent={accent}
        textColor={textColor}
      />
    </Container>
  );
};

export default About;