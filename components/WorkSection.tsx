import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "SA Grounds and Gardens",
    subtitle: "Complete brand identity and web presence for tech startup",
    image: "/SAGGWebsite.png",
    heroimage: "/SAGG.png",
    landscapeImages: [
      "/SAGG-landscape1.jpg",
      "/SAGG-landscape2.jpg", 
      "/SAGG-landscape3.jpg"
    ],
    portraitImages: [
      "/SAGG-portrait1.jpg",
      "/SAGG-portrait2.jpg"
    ],
    slug: "sa-grounds-and-gardens",
    description: "A comprehensive digital transformation project that redefined how this tech startup connects with their audience. We created a bold, modern brand identity paired with an intuitive web platform that converts visitors into customers.",
    services: ["Brand Identity", "Web Design", "Digital Strategy", "UX/UI Design", "Social Media Management"],
    year: "2025",
    website: "https://www.sagroundsandgardens.com.au",
    client: "SA Grounds and Gardens"
  },
  {
    id: 2,
    title: "Mintaro Cottage",
    subtitle: "E-commerce platform and marketing strategy for sustainable coffee brand",
    image: "/MintaroCottage.png",
    heroimage: "/MC.png",
    landscapeImages: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=400&fit=crop"
    ],
    portraitImages: [
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=600&fit=crop"
    ],
    slug: "organic-coffee-co",
    description: "From bean to cup, we crafted every touchpoint of this sustainable coffee brand's digital presence. The e-commerce platform we built doubled their online sales while their new marketing strategy grew their social following by 300%.",
    services: ["E-commerce Development", "Marketing Strategy", "Social Media", "Photography"],
    year: "2024",
    client: "Bean & Brew Co."
  },
  {
    id: 3,
    title: "Coming soon",
    subtitle: " ",
    heroimage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    landscapeImages: [
      
    ],
    portraitImages: [
      
    ],
    slug: "Creative-agency-rebrand",
    description: "Coming soon",
    services: ["Brand Strategy", "Visual Identity", "Website Design", "E-Commerce"],
    year: "2025",
    client: "Coming soon"
  }
];

export function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  // Calculate visible projects for desktop (2 at a time)
  const getVisibleProjects = () => {
    const visibleProjects: typeof projects = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    return visibleProjects;
  };

  return (
    <section id="work" className="h-screen bg-[#443627] flex items-center justify-center relative overflow-hidden">
      <div className="w-full h-full flex flex-col">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 bg-[#443627] px-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white text-left">
            Partners + Projects
          </h2>
        </motion.div>

        {/* Carousel - Full Width */}
        <div className="flex-1 relative pb-20">
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

          {/* Carousel Container - Full Width No Rounded Corners */}
          <div className="h-full w-full overflow-hidden mb-16">
            {/* Mobile: Single project view */}
            <div className="md:hidden h-full">
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
                  onClick={() => handleProjectClick(project)}
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
                    <div className="relative z-10 h-full flex items-end">
                      <div className="w-full p-8" style={{ backgroundColor: '#443627' }}>
                        <div className="text-white">
                          <motion.h3
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-3xl sm:text-4xl nunito-sans-black mb-4 group-hover:text-primary-foreground transition-colors"
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
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: 2 projects side by side - Full Width */}
            <div className="hidden md:flex gap-2 h-full">
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={`${project.id}-${currentIndex}-${index}`}
                  className="flex-1 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative w-full h-full overflow-hidden">
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
                    <div className="relative z-10 h-full flex items-end">
                      <div className="w-full p-8" style={{ backgroundColor: '#443627' }}>
                        <div className="text-white">
                          <h3 className="text-3xl lg:text-4xl xl:text-5xl nunito-sans-black mb-4 group-hover:text-primary-foreground transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed mb-6">
                            {project.subtitle}
                          </p>
                          
                          {/* Click indicator */}
                          <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                            <span className="text-sm uppercase tracking-wider">View Project</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Moved outside and lower */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#F18F01] scale-125' 
                    : 'bg-[#F18F01]/40 hover:bg-[#F18F01]/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Popup Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={closePopup}
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-2/5 bg-white z-50 overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <X className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                </button>

                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <ImageWithFallback
                    src={selectedProject.heroimage || selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Project Meta */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span>{selectedProject.year}</span>
                    <span>•</span>
                    <span>{selectedProject.client}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-3xl md:text-4xl nunito-sans-black text-gray-900 mb-3">
                    {selectedProject.title}
                  </h3>

                  {/* Project Subtitle */}
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {selectedProject.subtitle}
                  </p>

                  {/* Project Description */}
                  <div className="mb-8">
                    <h4 className="text-lg nunito-sans-bold text-gray-900 mb-3">About This Project</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mb-8">
                    <h4 className="text-lg nunito-sans-bold text-gray-900 mb-3">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Landscape Images */}
                  {selectedProject.landscapeImages && (
                    <div className="mb-8">
                      <h4 className="text-lg nunito-sans-bold text-gray-900 mb-4">Project Gallery</h4>
                      <div className="space-y-4">
                        {selectedProject.landscapeImages.map((image, index) => (
                          <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                            <ImageWithFallback
                              src={image}
                              alt={`${selectedProject.title} gallery image ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Portrait Images */}
                  {selectedProject.portraitImages && (
                    <div className="mb-8">
                      <div className="grid grid-cols-2 gap-4">
                        {selectedProject.portraitImages.map((image, index) => (
                          <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                            <ImageWithFallback
                              src={image}
                              alt={`${selectedProject.title} detail image ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <button className="w-full bg-[#443627] text-white py-4 px-6 rounded-lg nunito-sans-semibold hover:bg-[#443627]/90 transition-colors duration-300">
                      Get In Touch About This Project
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}