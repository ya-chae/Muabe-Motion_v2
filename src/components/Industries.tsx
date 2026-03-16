import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Palette, BarChart3, Building2 } from 'lucide-react';

const Industries: React.FC = () => {
  const cards = [
    { title: "Education", icon: <BookOpen />, desc: "상호작용 교육 콘텐츠" },
    { title: "Commerce", icon: <Palette />, desc: "상품 이해를 높이는 쇼핑 경험" },
    { title: "Marketing", icon: <BarChart3 />, desc: "참여형 캠페인·브랜드 경험" },
    { title: "Public", icon: <Building2 />, desc: "공공·기관 디지털 서비스" }
  ];

  return (
    <section id="industries" className="section-padding container-custom overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <p className="label-text mb-6">Application Areas</p>
        <h2 className="h2-section mb-10 text-text-1">Where Fits</h2>
        <p className="section-lead mx-auto max-w-[62ch] break-keep">
          실시간 반응이 필요한 <br className="block md:hidden" /> 모든 콘텐츠 환경에 적용됩니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-surface border border-white/10 p-12 rounded-[40px] flex flex-col items-center text-center transition-all duration-300 hover:border-accent/40 hover:bg-bg-1 group shadow-xl"
          >
            <div className="text-accent mb-10 p-6 bg-bg-1 rounded-3xl group-hover:scale-110 transition-all duration-300 shadow-sm">
              {React.cloneElement(card.icon as React.ReactElement<any>, { size: 36 })}
            </div>
            <h4 className="h3-card mb-6 text-text-1 group-hover:text-white transition-colors">{card.title}</h4>
            <p className="caption-text !leading-relaxed font-medium">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
