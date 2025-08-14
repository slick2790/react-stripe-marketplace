import React from 'react';
import { ExternalLink, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

interface SocialLinksProps {
  socialMedia: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
  };
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialMedia }) => {
  const links = [
    { key: 'twitter', url: socialMedia.twitter, icon: Twitter, label: 'Twitter' },
    { key: 'instagram', url: socialMedia.instagram, icon: Instagram, label: 'Instagram' },
    { key: 'linkedin', url: socialMedia.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { key: 'website', url: socialMedia.website, icon: Globe, label: 'Website' }
  ];

  return (
    <div className="flex gap-3">
      {links.map(({ key, url, icon: Icon, label }) => 
        url && (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        )
      )}
    </div>
  );
};

export default SocialLinks;