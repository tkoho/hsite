import React from 'react';

export function HeroVideo() {
  return (
    <div className="relative mx-auto max-w-[500px] lg:max-w-none">
      <div className="absolute inset-0 bg-[#3AAA35] rounded-full blur-3xl opacity-20" />
      <video
        src="/websiteVideo.mp4"
        poster="/videoThumbnail.png"
        controls
        className="relative rounded-lg shadow-2xl w-full"
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}