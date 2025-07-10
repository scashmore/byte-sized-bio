import { Box, Heading, Text, Link } from '@chakra-ui/react';
import ResponsiveEmbed from './responsiveEmbed';
import { useColorModeValue } from './ui/color-mode';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  embedUrl?: string;
  image?: string;
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardBg = useColorModeValue('lavender.200', 'lavender.700');
  const accent = useColorModeValue('gold.500', 'gold.300');
  const title = useColorModeValue('lavender.700', 'white');
  const textColor = useColorModeValue('fg', 'lavender.100');

  const renderMedia = () => {
    if (project.embedUrl) {
      return <ResponsiveEmbed embedUrl={project.embedUrl} title={project.title} />;
    }

    if (project.image?.endsWith('.mp4')) {
      return (
        <video
          controls
          style={{ width: '100%', marginTop: '1rem', borderRadius: '4px' }}
        >
          <source src={project.image} type="video/mp4" />
        </video>
      );
    }

    if (project.image) {
      return (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          style={{ width: '100%', marginTop: '1rem', borderRadius: '4px' }}
        />
      );
    }

    return null;
  };

  return (
    <Box
      bg={cardBg}
      borderRadius="md"
      p={5}
      mb={8}
      boxShadow="md"
      color={textColor}
    >
      <Heading size="md" color={title} mb={2}>
        {project.title}
      </Heading>
      <Text mb={2}>{project.description}</Text>
      <Text color={textColor} fontWeight="bold" mb={2}>
        Tech: <Text as="span" fontWeight="normal" color={textColor}>{project.techStack.join(', ')}</Text>
      </Text>
      {renderMedia()}
      <Box mt={4}>
        {project.demoUrl && (
          <Link href={project.demoUrl} color={accent} mr={4}>
            Live Demo
          </Link>
        )}
        {project.repoUrl && (
          <Link href={project.repoUrl} color={title}>
            GitHub Repo
          </Link>
        )}
      </Box>
    </Box>
  );
};
