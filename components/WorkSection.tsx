import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Digital Brand Revolution",
    subtitle: "Complete brand identity and web presence for tech startup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    slug: "digital-brand-revolution"
  },
  {
    id: 2,
    title: "Organic Coffee Co.",
    subtitle: "E-commerce platform and marketing strategy for sustainable coffee brand",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop&crop=center",
    slug: "organic-coffee-co"
  },
  {
    id: 3,
    title: "Creative Agency Rebrand",
    subtitle: "Full rebrand and digital transformation for established creative studio",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop&crop=center",
    slug: "creative-agency-rebrand"
  }
];

export function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleProjectClick = (slug: string) => {
    // Navigate to project detail page
    window.location.href = `/project/${slug}`;
  };

  // Calculate visible projects for desktop (3 at a time)
  const getVisibleProjects = () => {
    const visibleProjects: typeof projects = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    return visibleProjects;
  };

  return (
    <section id="work" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
  
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See beyond
          </p>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-deuterium-ultra text-white mb-4">
            Our work speaks
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel Container */}
          <div className="relative h-[70vh] overflow-hidden rounded-2xl">
            {/* Mobile: Single project view */}
            <div className="md:hidden">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`absolute inset-0 cursor-pointer ${
                    index === currentIndex ? 'z-10' : 'z-0'
                  }`}
                  initial={{ opacity: 0, x: index > currentIndex ? 300 : -300 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : index > currentIndex ? 300 : -300,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  onClick={() => handleProjectClick(project.slug)}
                >
                  <div className="relative w-full h-full group">
                    {/* Hero Image */}
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-end p-8">
                      <div className="text-white">
                        <motion.h3
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="text-3xl sm:text-4xl font-deuterium-ultra mb-4 group-hover:text-primary-foreground transition-colors"
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                          className="text-lg text-white/90 max-w-2xl leading-relaxed"
                        >
                          {project.subtitle}
                        </motion.p>
                        
                        {/* Click indicator */}
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                          className="mt-6 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors"
                        >
                          <span className="text-sm uppercase tracking-wider">View Project</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: 3 projects side by side */}
            <div className="hidden md:flex gap-4 h-full">
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={`${project.id}-${currentIndex}-${index}`}
                  className="flex-1 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleProjectClick(project.slug)}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    {/* Hero Image */}
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-2xl lg:text-3xl font-deuterium-ultra mb-3 group-hover:text-primary-foreground transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm lg:text-base text-white/90 leading-relaxed mb-4">
                          {project.subtitle}
                        </p>
                        
                        {/* Click indicator */}
                        <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                          <span className="text-xs uppercase tracking-wider">View Project</span>
                          <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}