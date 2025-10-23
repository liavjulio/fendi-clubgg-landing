'use client';

import React, { useState } from 'react';

interface SafeVideoProps {
  src: string;
  className?: string;
  fallbackContent?: React.ReactNode;
  [key: string]: any; // Allow other video props
}

const SafeVideo = ({ 
  src, 
  className = '', 
  fallbackContent,
  ...videoProps 
}: SafeVideoProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div className={className}>
        {fallbackContent || (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">🎬</span>
              </div>
              <p className="text-gray-300 font-medium">סרטון לא נמצא</p>
              <p className="text-gray-400 text-sm break-all">{src}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-gray-300 text-sm">טוען סרטון...</p>
          </div>
        </div>
      )}
      <video
        src={src}
        className={className}
        onError={handleError}
        onLoadedData={handleLoadedData}
        {...videoProps}
      >
        <track kind="captions" src="" srcLang="he" label="Hebrew" default />
      </video>
    </>
  );
};

export default SafeVideo;