import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-40 pb-40"
      style={{ backgroundColor: '#ADF5FF' }}
    >
      {/* Intro line above */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 text-center"
      >
        <h3 className="text-2xl sm:text-3xl font-medium nunito-sans-black" style={{ color: '#443627' }}>
          We believe the best ideas come when you
        </h3>
      </motion.div>

      {/* Grid layout for words */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-0">
          {/* Think - Right aligned (on left col) */}
          <motion.div
            className="lg:col-span-1 text-right"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 
              className="text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] nunito-sans-regular leading-none"
              style={{ color: '#443627' }}
            >
              Think
            </h1>
          </motion.div>

          {/* Play - Center */}
          <motion.div
            className="lg:col-span-1 text-center"
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 
              className="text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] nunito-sans-regular italic leading-none"
              style={{ color: '#D80C0C', fontStyle: 'italic' }}
            >
              Play
            </h1>
          </motion.div>

          {/* Build - Left aligned (on right col) */}
          <motion.div
            className="lg:col-span-1 text-left"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h1 
              className="text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] nunito-sans-bold leading-none underline decoration-8 underline-offset-8"
              style={{ color: '#443627', textDecorationColor: '#F18F01' }}
            >
              Build
            </h1>
          </motion.div>
        </div>

      {/* Large padding and Lottie Animation - Full Width */}
      <motion.div 
        className="relative z-10 mt-32 mb-2 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-64 sm:h-80 lg:h-96">
          <DotLottieReact
            src="https://lottie.host/807d0893-8df5-4b0a-9f79-a36a54990a51/vnIXh1VRFI.lottie"
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Body Text BELOW image/text block */}
      <motion.div 
        className="relative max-w-4xl text-center mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        viewport={{ once: true }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }} 
          viewport={{ once: true }}
          className="text-xl sm:text-2xl leading-relaxed"
          style={{ color: '#443627' }}
        >
          Design-led creative agency building brands that connect, spark curiosity, and stick in people's minds. 
          We create bold, memorable identities backed by strategy and care about ideas that work, and work with people who care. <br />
          
          <br />From branding and web design to organic marketing and content strategy, we help ambitious businesses find their voice and stand out in a noisy world. 
          Our clients range from fresh startups to growing companies ready to level up, and we work best with people who care as much about their craft as we do about ours. <br />
         
          <br />Our goal is simple: create work that looks great now, performs brilliantly, and grows with you as your business evolves.
        </motion.p>
      </motion.div>
    </section>
  );
}