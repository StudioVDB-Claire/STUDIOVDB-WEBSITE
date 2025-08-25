import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
      style={{ backgroundColor: '#ADF5FF' }}
    >
      {/* IMAGE SIDE */}
      <motion.div
        className="relative w-full lg:w-3/5 h-[60vh] lg:h-screen"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="SAGGDesktop.jpeg"
          alt="Studio VDB About"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div
        className="relative flex items-center justify-center w-full lg:w-2/5 bg-[#ADF5FF] lg:bg-transparent"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl p-8 sm:p-12 lg:p-16 bg-[#ADF5FF]/90 lg:bg-[#ADF5FF]/70 rounded-2xl lg:rounded-none">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black nunito-sans-black text-[#443627]">
            Think, Play, Build.
          </h2>
          <div className="mt-6 space-y-4 text-lg sm:text-xl text-[#443627] leading-relaxed">
            <p>
              Design-led creative agency building brands that connect, spark curiosity, 
              and stick in people's minds. We create bold, memorable identities backed by 
              strategy and care about ideas that work, and work with people who care.
            </p>
            <p>
              From branding and web design to organic marketing and content strategy, we 
              help ambitious businesses find their voice and stand out in a noisy world. 
              Our clients range from fresh startups to growing companies ready to level up, 
              and we work best with people who care as much about their craft as we do about 
              ours.
            </p>
            <p>
              Our goal is simple: create work that looks great now, performs brilliantly, and 
              grows with you as your business evolves.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}