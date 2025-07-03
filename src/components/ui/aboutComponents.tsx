// AboutComponents.tsx

import React from 'react';
import {
    Box,
    Heading,
    Text,
    Image,
    Flex,
    Link as ChakraLink,
    Stack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from 'lucide-react';

interface StyledProps {
    bg: string;
    cardBg: string;
    accent: string;
    textColor: string;
}

export const Container: React.FC<{ bg: string; children?: React.ReactNode }> = ({ bg, children }) => (
    <Box maxW="800px" mx="auto" px={4} py={6} bg={bg} borderRadius="md" boxShadow="lg">
        {children}
    </Box>
);

export const ProfileSection: React.FC<{ accent: string; profileImage: string | null; name: string; title: string; textColor: string }> = ({
    accent,
    profileImage,
    name,
    title,
    textColor,
}) => (
    <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={6} mb={6}>
        {profileImage && (
            <Image
                src={profileImage}
                alt={`${name} profile`}
                boxSize="150px"
                objectFit="cover"
                borderRadius="full"
                boxShadow="md"
                border="4px solid"
                borderColor={accent}
            />
        )}
        <Box textAlign={{ base: 'center', md: 'left' }}>
            <Heading size="xl" color={accent} mb={1}>
                {name}
            </Heading>
            <Text fontSize="lg" fontWeight="semibold" color={textColor}>
                {title}
            </Text>
        </Box>
    </Flex>
);

export const BioBox: React.FC<{ cardBg: string; textColor: string; children?: React.ReactNode }> = ({ cardBg, textColor, children }) => (
    <Box
        bg={cardBg}
        p={6}
        borderRadius="md"
        boxShadow="md"
        mb={8}
        color={textColor}
        whiteSpace="pre-line"
    >
        {children}
    </Box>
);

export const Carousel: React.FC<{ images: string[] }> = ({ images }) => (
    <Flex overflowX="auto" gap={4} mb={8} pb={2} css={{ scrollbarWidth: 'thin' }}>
        {images.map((url, i) => (
            <Image
                key={i}
                src={url}
                alt={`carousel ${i + 1}`}
                boxSize="200px"
                objectFit="cover"
                borderRadius="md"
                boxShadow="sm"
                cursor="pointer"
                transition="transform 0.3s"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'md' }}
            />
        ))}
    </Flex>
);

export const SectionHeading: React.FC<{ accent: string, children?: React.ReactNode }> = ({ accent, children }) => (
    <Heading size="md" mb={4} color={accent}>
        {children}
    </Heading>
);

export const SocialLinksList: React.FC<{ socialLinks: { platform: string; url: string }[]; accent: string; textColor: string }> = ({
    socialLinks,
    accent,
    textColor,
}) => (
    <Stack as="ul" gap={3} color={textColor} pl={4}>
        {socialLinks.map(({ platform, url }) => (
            <Box as="li" key={platform}>
                <ChakraLink
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={accent}
                    fontWeight="bold"
                    display="inline-flex"
                    alignItems="center"
                    gap={1}
                >
                    {platform} <ExternalLinkIcon />
                </ChakraLink>
            </Box>
        ))}
    </Stack>
);
