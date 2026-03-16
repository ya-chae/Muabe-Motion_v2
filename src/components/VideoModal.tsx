import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-bg-0/95 backdrop-blur-xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-[1200px] aspect-video bg-surface rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors"
          >
            <X size={24} />
          </button>

          <video
            src={demo.videoUrl}
            className="w-full h-full object-contain bg-black"
            controls
            autoPlay
            playsInline
          />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
            <p className="label-text mb-2 text-accent">{demo.title}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{demo.subtitle}</h3>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VideoModal;
