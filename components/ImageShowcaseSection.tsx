import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ImageShowcaseSection() {
  return (
    <section className="h-screen w-full overflow-hidden">
      <div className="h-full flex flex-col md:flex-row gap-2 md:gap-4 bg-[#443627] p-2 md:p-4 pb-2 md:pb-4">
        {/* Larger Square Image - Left/Top */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 md:flex-[1.2] h-1/2 md:h-full relative overflow-hidden group"
        >
          <ImageWithFallback
            src="/MC1.jpg"
            alt="Studio VDB Creative Work 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
          
          {/* Optional overlay content */}
          <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
        </motion.div>

        {/* Portrait Image - Right/Bottom */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 h-1/2 md:h-full relative overflow-hidden group"
        >
          <ImageWithFallback
            src="/MC3.jpeg"
            alt="Studio VDB Creative Work 2"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
          
          {/* Optional overlay content */}
          <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
        </motion.div>
      </div>
    </section>
  );
}
