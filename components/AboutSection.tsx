import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Words */}
        <div className="text-center mb-20">
          <div className="space-y-8 mb-20">
            {/* Think - Left Aligned, comes from left */}
            <motion.div 
              className="text-left"
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 0.2
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-deuterium-ultra text-white leading-none">
                Think
              </h1>
            </motion.div>

            {/* Play - Center Aligned, comes from top */}
            <motion.div 
              className="text-center"
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 0.6
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-deuterium-ultra text-white leading-none">
                Play
              </h1>
            </motion.div>

            {/* Build - Right Aligned with Underline, comes from right */}
            <motion.div 
              className="text-right"
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 1.0
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-deuterium-ultra text-white leading-none underline decoration-primary decoration-4 underline-offset-8">
                Build
              </h1>
            </motion.div>
          </div>

          {/* Description Text */}
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.4
            }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-2xl lg:text-2xl text-white leading-relaxed"
            >
             Design-led creative agency building brands that connect, spark curiosity, and stick in people's minds.               We care about ideas that work, and work with people who care.

            </motion.p>
                    
          </motion.div>
        </div>
      </div>
    </section>
  );
}