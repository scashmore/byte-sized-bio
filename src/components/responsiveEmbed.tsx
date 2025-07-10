import React, { useEffect, useRef, useState } from 'react';

const ResponsiveEmbed: React.FC<{ embedUrl: string; title: string }> = ({ embedUrl, title }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(700);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.iframeHeight) {
        setHeight(event.data.iframeHeight);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={embedUrl}
      title={title}
      style={{
        width: '100%',
        height: `${height}px`,
        border: '1px solid #ccc',
        marginTop: '1rem',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    />
  );
};

export default ResponsiveEmbed;
