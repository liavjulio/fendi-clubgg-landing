'use client';

import MediaCarousel from './MediaCarousel';

const Gallery = () => {
  // רשימת כל התמונות והסרטונים שלך
  const mediaItems = [
    // תמונות
    {
      type: 'image' as const,
      src: '/images/fendi/img4.jpeg',
      alt: 'משחק פוקר'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img9.jpeg',
      alt: 'טורניר פוקר'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img10.jpeg',
      alt: 'שחקני פוקר'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img13.jpeg',
      alt: 'משחק פוקר'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img14.jpeg',
      alt: 'טורניר פוקר'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img15.jpeg',
      alt: 'זוכי טורנירים'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img16.jpeg',
      alt: 'אפליקציה'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img17.jpeg',
      alt: 'זכיות'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img18.jpeg',
      alt: 'פרסים'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img19.jpeg',
      alt: 'קהילה'
    },
    {
      type: 'image' as const,
      src: '/images/fendi/img20.jpeg',
      alt: 'מועדון'
    },
    // סרטונים
    {
      type: 'video' as const,
      src: '/images/fendi/video1.mp4',
      alt: 'סרטון הדרכה'
    },
    {
      type: 'video' as const,
      src: '/images/fendi/video2.mp4',
      alt: 'סרטון משחק'
    },
    {
      type: 'video' as const,
      src: '/images/fendi/video3.mp4',
      alt: 'סרטון משחק'
    },
    {
      type: 'video' as const,
      src: '/images/fendi/video4.mp4',
      alt: 'אקשן חי'
    },
    {
      type: 'video' as const,
      src: '/images/fendi/video5.mp4',
      alt: 'סרטון נוסף'
    },
    {
      type: 'video' as const,
      src: '/images/fendi/img1.mp4',
      alt: 'סרטון פוקר'
    },
    {
      type: 'video' as const,
      src: '/images/fendi/img2.mp4',
      alt: 'סרטון בונוס'
    },
    {
      type: 'video' as const,
      src: '/images/fendi/img3.mp4',
      alt: 'מדריך'
    }
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Professional Poker Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-transparent to-gray-900/30"></div>
        
        {/* Simple 4 corner symbols only */}
        <div className="absolute top-12 left-12 text-yellow-500/10 text-4xl">♠</div>
        <div className="absolute top-12 right-12 text-red-400/10 text-4xl">♦</div>
        <div className="absolute bottom-12 left-12 text-yellow-400/10 text-4xl">♣</div>
        <div className="absolute bottom-12 right-12 text-red-500/10 text-4xl">♥</div>
        
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-500/1 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-yellow-400/2 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            גלריית <span className="gold-gradient bg-clip-text text-transparent">תמונות וסרטונים</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            צפה בתמונות וסרטונים מהמועדון שלנו, משחקים חיים, טורנירים וקהילת השחקנים המדהימה
          </p>
        </div>

        {/* Media Carousel */}
        <div className="animate-fade-in">
          <MediaCarousel
            items={mediaItems}
            autoPlay={true}
            autoPlayInterval={6000}
          />
        </div>


      </div>
    </section>
  );
};

export default Gallery;