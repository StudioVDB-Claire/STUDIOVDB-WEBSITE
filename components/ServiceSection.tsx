import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Megaphone, RefreshCw } from 'lucide-react';
import { useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      icon: Code2,
      title: 'Web Design & Development',
      description: 'Custom, responsive websites that work hard and look sharp. Built with intention and technical precision.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimised', 'SEO Ready'],
      bgClass: 'service-web',
      bgColor: '#443627',
      textColor: 'text-[#ADF5FF]',
      iconColor: 'text-[#ADF5FF]'
    },
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'From logos to full visual systems - bringing clarity, cohesion, and personality to your brand.',
      features: ['Logo Design', 'Visual Systems', 'Brand Guidelines', 'Print & Digital'],
      bgClass: 'service-brand',
      bgColor: '#443627',
      textColor: 'text-[#ADF5FF]',
      iconColor: 'text-[#ADF5FF]'
    },
    {
      icon: Megaphone,
      title: 'Organic Marketing & Content',
      description: 'Strategy-led content, SEO guidance, and storytelling that attracts and retains your ideal audience.',
      features: ['Content Strategy', 'SEO Guidance', 'Social Media', 'Email Marketing'],
      bgClass: 'service-marketing',
      bgColor: '#443627',
      textColor: 'text-[#ADF5FF]',
      iconColor: 'text-[#ADF5FF]'
    },
    {
      icon: RefreshCw,
      title: 'Ongoing Collaboration',
      description: 'Long-term support for updates, launches, and creative problem-solving when you need it most.',
      features: ['Website Updates', 'Content Support', 'Strategy Sessions', 'Creative Problem-solving'],
      bgClass: 'service-collaboration',
      bgColor: '#443627',
      textColor: 'text-[#ADF5FF]',
      iconColor: 'text-[#ADF5FF]'
    }
  ];

  return (
    <section id="services" className="relative">
      {/* Header Section */}
      <div className="h-screen flex items-center justify-center relative z-10" style={{ backgroundColor: '#D80C0C' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-[#ADF5FF] nunito-sans-black">
              Services
            </h2>
            <h3 className="text-2xl sm:text-3xl mb-8 text-[#ADF5FF] nunito-sans-black">Where strategy meets craft</h3>
            <p className="text-xl text-[#ADF5FF] max-w-3xl mx-auto leading-relaxed opacity-90">
              Whether you're launching something new or levelling up what already exists, Studio VDB offers end-to-end creative support:
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Stack */}
      <div ref={containerRef} className="relative" style={{ backgroundColor: '#D80C0C' }}>
        {services.map((service, index) => {
          const start = index / services.length;
          const end = (index + 1) / services.length;
          
          const y = useTransform(scrollYProgress, [start, end], [0, -100]);
          const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
          const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.8]);

          return (
            <motion.div
              key={service.title}
              style={{ 
                y,
                opacity,
                scale,
                backgroundColor: service.bgColor
              }}
              className="sticky top-0 h-screen flex items-center justify-center"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-20 h-20 bg-[#D80C0C]/10 backdrop-blur-sm border border-[#D80C0C]/20 flex items-center justify-center mb-8"
                    >
                      <service.icon size={40} className={service.iconColor} />
                    </motion.div>

                    <div>
                      <h3 className={`text-3xl sm:text-4xl lg:text-5xl mb-6 ${service.textColor} nunito-sans-black`}>
                        {service.title}
                      </h3>
                      <p className={`text-lg sm:text-xl leading-relaxed mb-8 ${service.textColor} opacity-90`}>
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className={`flex items-center ${service.textColor} opacity-80`}
                        >
                          <div className="w-3 h-3 bg-[#D80C0C] mr-4 flex-shrink-0"></div>
                          <span className="text-lg">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center"
                  >
                    {index === 0 ? (
                      // Lottie animation for Web Development (first service)
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
                      >
                        <DotLottieReact
                          src="https://lottie.host/61a6bd5a-9149-4e06-9c1b-ec609bdbeac2/Rkhv3O9DtL.lottie"
                          loop
                          autoplay
                          className="w-full h-full"
                        />
                      </motion.div>
                    ) : index === 1 ? (
                      // Lottie animation for Brand Identity Design (second service)
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
                      >
                        <DotLottieReact
                          src="https://lottie.host/66b88350-a4bb-450f-981c-ae4fbaef34a1/8pjRWCWne5.lottie"
                          loop
                          autoplay
                          className="w-full h-full"
                        />
                      </motion.div>
                    ) : index === 2 ? (
                      // Lottie animation for Organic Marketing (third service)
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
                      >
                        <DotLottieReact
                          src="https://lottie.host/15fff17e-6bda-4acc-b29d-ab1abb61fdbf/J96lNFOOy8.lottie"
                          loop
                          autoplay
                          className="w-full h-full"
                        />
                      </motion.div>
                    ) : index === 3 ? (
                      // Lottie animation for Ongoing Collaboration (fourth service)
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
                      >
                        <DotLottieReact
                          src="https://lottie.host/3a0d8123-681f-42f1-b8c4-899ccf69c728/EYY30KCUPe.lottie"
                          loop
                          autoplay
                          className="w-full h-full"
                        />
                      </motion.div>
                    ) : (
                      // Original animated icon for remaining services (if any)
                      <motion.div
                        animate={{ 
                          y: [0, -20, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-64 h-64 sm:w-80 sm:h-80 border-4 border-[#ADF5FF]/30 flex items-center justify-center"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-32 h-32 sm:w-40 sm:h-40 bg-[#D80C0C]/20 flex items-center justify-center"
                        >
                          <service.icon size={60} className={service.iconColor} />
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
        
        {/* Spacer to create scroll distance */}
        <div className="h-[400vh]" style={{ backgroundColor: '#D80C0C' }}></div>
      </div>
    </section>
  );
}