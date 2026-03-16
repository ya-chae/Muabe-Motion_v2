import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface DemoItem {
  title: string;
  subtitle: string;
  img: string;
  videoUrl: string;
}

interface VideoModalProps {
  demo: DemoItem;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ demo, onClose }) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isPortrait = windowSize.height > windowSize.width;
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1280;
  
  // 가로 영상(aspectRatio > 1)이고, 모바일/태블릿 기기이며, 현재 세로 모드(isPortrait)인 경우 회전 적용
  const shouldRotate = isPortrait && aspectRatio && aspectRatio > 1 && (isMobile || isTablet);
  const isFullScreen = isMobile || isTablet;

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const { videoWidth, videoHeight } = e.currentTarget;
    if (videoWidth && videoHeight) {
      setAspectRatio(videoWidth / videoHeight);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-0/95 backdrop-blur-xl p-0 md:p-8">
      {!isFullScreen && (
        <div
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />
      )}
      
      <div
        className={`relative overflow-hidden flex items-center justify-center ${
          isFullScreen 
            ? 'w-full h-full bg-black' // 배경을 검은색으로 통일
            : 'bg-surface rounded-[32px] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] w-full max-w-[1200px]'
        }`}
        style={{ 
          width: shouldRotate ? '100vh' : '100%',
          height: shouldRotate ? '100vw' : 'auto',
          aspectRatio: isFullScreen ? 'none' : (aspectRatio ? `${aspectRatio}` : '16/9'),
          transform: shouldRotate ? 'rotate(90deg)' : 'none',
          transformOrigin: 'center',
        }}
      >
        <video
          src={demo.videoUrl}
          className="w-full h-full object-contain" // 절대 자르지 않고 전체 비율 유지
          controls={!isMobile && !isTablet}
          autoPlay
          loop
          muted={isMobile || isTablet}
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
        />

        {/* Text Overlay - 상단에 정보 표시 (회전 시에도 영상 상단에 위치하도록 컨테이너 내부 유지) */}
        <div className="absolute top-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-1 text-accent">{demo.title}</p>
          <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-white leading-tight">{demo.subtitle}</h3>
        </div>

        {/* Close Button - 영상을 기준으로 우측 상단에 위치, 크기 축소 */}
        <button
          onClick={onClose}
          className={`absolute z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform duration-300 ${
            isFullScreen ? 'top-6 right-6 md:top-8 md:right-8' : 'top-4 right-4 md:top-6 md:right-6'
          }`}
        >
          <X size={isMobile ? 20 : 24} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
