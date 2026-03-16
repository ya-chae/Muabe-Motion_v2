import React from 'react';
import { motion } from "motion/react";
import { Apple } from 'lucide-react';

const Products: React.FC = () => {
  const appStoreUrl = "https://apps.apple.com/us/app/vibble/id6756757862";
  const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.muabe.muabe";
  
  // GitHub 리소스 Raw URL
  const graphyVideoUrl = "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/graphy.mp4";
  const vibbleVideoUrl = "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/vibble_%EB%A6%AC%EC%8A%A4%ED%8A%B8%ED%8F%AC%ED%95%A8.mp4";

  return (
    <section id="products" className="section-padding overflow-hidden">
      <div className="space-y-48 md:space-y-80">
        
        {/* Muabe AI Studio Product Block */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1400px] px-6 lg:px-[60px] xl:pr-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-0 items-center">
              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 flex flex-col pt-4 lg:pt-0 lg:pr-8 xl:pr-12"
              >
                <p className="label-text mb-8">Web Tool</p>
                <h3 className="h2-section mb-6 text-text-1">Muabe AI Studio</h3>
                <p className="text-[18px] md:text-[21px] lg:text-[24px] font-bold text-text-2 mb-8 leading-tight break-keep">
                  웹 기반 AI <br className="block md:hidden" /> 인터랙티브 콘텐츠 제작툴
                </p>
                <p className="text-[15px] md:text-[18px] lg:text-[20px] text-text-3 mb-16 lg:mb-40 max-w-[42ch] break-keep leading-relaxed">
                  정적 콘텐츠를 인터랙티브 영상으로 <br /> 즉시 제작할 수 있습니다.
                </p>
                
                <div className="inline-flex items-center gap-5 px-10 py-5 bg-accent/10 border border-accent/20 rounded-full w-fit">
                  <span className="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-[15px] lg:text-[18px] font-black text-accent tracking-[0.25em] uppercase">Coming Soon</span>
                </div>
              </motion.div>

              {/* Video Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 w-full flex justify-center lg:justify-end mt-12 lg:mt-0 2xl:mr-[-20vw]"
              >
                <div className="relative group w-full">
                  <div className="relative overflow-visible transition-all duration-700">
                    <div className="rounded-2xl overflow-hidden drop-shadow-[0_60px_160px_rgba(0,0,0,0.95)] aspect-video">
                      <video 
                        src={graphyVideoUrl}
                        className="w-full h-full object-cover opacity-85 transition-all duration-700 group-hover:opacity-100"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                    <div className="absolute -inset-32 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-[160px] -z-10 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Vibble Product Block */}
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Video Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 w-full flex items-center justify-center lg:justify-start mt-12 lg:mt-0 order-2 lg:order-1"
          >
            <div className="relative group w-full max-w-[432px]">
              <div className="relative overflow-visible transition-all duration-700">
                <div className="relative mx-auto border-[#1a1a1a] bg-[#000] border-[10px] md:border-[14px] rounded-[3rem] md:rounded-[4rem] w-full aspect-[9/19.5] shadow-[0_80px_160px_rgba(0,0,0,0.9)] overflow-hidden">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/5 rounded-full z-20 border border-white/10"></div>
                  <div className="relative w-full h-full bg-black rounded-[2.2rem] md:rounded-[3rem] overflow-hidden">
                    <video 
                      src={vibbleVideoUrl}
                      className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
                <div className="absolute -inset-32 bg-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-[160px] -z-10 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col pt-4 lg:pt-0 lg:-translate-y-8 order-1 lg:order-2"
          >
            <p className="label-text mb-8">Mobile App</p>
            <h3 className="h2-section mb-6 text-text-1">Vibble</h3>
            <p className="text-[18px] md:text-[21px] lg:text-[24px] font-bold text-text-2 mb-8 leading-tight break-keep">
              모바일 인터랙티브 <br className="block md:hidden" /> 숏폼 플랫폼
            </p>
            <p className="text-[15px] md:text-[18px] lg:text-[20px] text-text-3 mb-16 lg:mb-48 max-w-[42ch] break-keep leading-relaxed">
              영상 속 요소와 실시간으로 <br />
              상호작용이 가능한 참여형 숏폼을 제공합니다.
            </p>
            
            <div className="flex flex-nowrap md:flex-wrap gap-4 md:gap-6">
              <a 
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-white/10 px-5 py-4 md:px-8 md:py-5 rounded-2xl md:rounded-3xl flex items-center gap-3 md:gap-5 transition-all hover:bg-white/5 hover:border-white/30 active:scale-95 shadow-2xl flex-1 md:flex-none justify-center md:justify-start"
              >
                <Apple className="text-white w-7 h-7 md:w-10 md:h-10 shrink-0" fill="currentColor" />
                <div className="text-left">
                  <p className="text-[10px] md:text-[13px] text-white/50 font-bold leading-tight uppercase">Download on the</p>
                  <p className="text-[16px] md:text-[24px] text-white font-black leading-tight tracking-tight whitespace-nowrap">App Store</p>
                </div>
              </a>
              
              <a 
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-white/10 px-5 py-4 md:px-8 md:py-5 rounded-2xl md:rounded-3xl flex items-center gap-3 md:gap-5 transition-all hover:bg-white/5 hover:border-white/30 active:scale-95 shadow-2xl flex-1 md:flex-none justify-center md:justify-start"
              >
                <div className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 512 512" className="w-full h-full">
                    <path d="M32.5 13.1c-2.4 2.6-3.8 6.7-3.8 11.9v462c0 5.2 1.4 9.3 3.8 11.9l2.4 2.4L261.2 256 34.9 10.7l-2.4 2.4z" fill="#4285F4"/>
                    <path d="M341.2 336l-80-80-228.7 228.7c3.3 1.1 7.2 1.4 12 1.4 6.7 0 13.5-1.9 20.3-5.7L341.2 336z" fill="#EA4335"/>
                    <path d="M341.2 176L64.8 31.6C58 27.8 51.2 25.9 44.5 25.9c-4.8 0-8.7.3-12 1.4L261.2 256l80-80z" fill="#FBBC04"/>
                    <path d="M482.3 226.9L341.2 176l-80 80 80 80 141.1-50.9c10.4-3.7 16.3-9.5 16.3-19.1 0-9.6-5.9-15.4-16.3-19.1z" fill="#34A853"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-[13px] text-white/50 font-bold leading-tight uppercase">GET IT ON</p>
                  <p className="text-[16px] md:text-[24px] text-white font-black leading-tight tracking-tight whitespace-nowrap">Google Play</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Products;
