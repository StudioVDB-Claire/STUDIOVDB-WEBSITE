import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "SA Grounds and Gardens",
    image: "SAGG Tree.jpeg",
    landscapeImages: [
      "Billboard SAGG.png",
      " "
    ],
    landscapeVideos: [
      "SAGGhomepage.mp4",
      "SAGG Video.mov"
    ],
    portraitImages: [
      "Businesscards.png",
      "SAGGDesktop.jpeg",
      "Hiring.png"
    ],
    portraitImageLinks: [
      "Phone.png",
    ],
    landscapeImageLinks: [
      "#", // Link for first landscape image
      "#", // Link for second landscape image
      "#"  // Link for third landscape image
    ],
    videoLink: "SAGG Video.mov", // Link for the video
    slug: "sa-grounds-and-gardens",
    description: "SA Grounds & Gardens is a South Australian commercial landscaping business built on precision, care, and reliability. Now, with a brand identity, digital presence, and marketing strategy newly established, the company is redefining what it means to be a modern grounds and garden service. From tailor designed maintenance programs to standout visual branding, SA Grounds & Gardens is committed to keeping spaces thriving while presenting a professional image that reflects the quality of their work.",
    services: ["Full Brand Build", "Marketing Foundations", "Website Launch", "Graphic Design", "Marketing Collateral", "Operational Digital Transformation Support"],
    subdescription: "From the ground up we created:\n\nWhen SA Grounds and Gardens first came to me they had a solid reputation in landscaping through word of mouth but no brand identity, website or marketing.\n\n**Brand Direction:** Worked together to define their vision, voice, and look so the brand reflected their core culture and felt as professional as the work they do.\n\n**Logo & Identity:** Designed a fresh new logo and full brand guidelines, giving them a consistent style across every touchpoint.\n\n**Collateral Design:** Business cards, uniform artwork, and vehicle branding - so the brand shows up in real life, not just online.\n\n**Digital Presence** → Launched a fully responsive, SEO-friendly website plus Google Business, Meta, Insta, LinkedIn - the whole digital toolkit.\n\n**Marketing Foundations:** Built custom social templates, content calendars, and a strategy that makes ongoing marketing simple and effective.\n\n**The glow-up?**\n\nSA Grounds & Gardens went from invisible online to looking like the landscaping brand to watch. Now they've got a sharp identity, a site that works as hard as they do, and the confidence to stand out in a competitive market.",
    year: "2025",
    website: "https://www.sagroundsandgardens.com.au",
    client: "SA Grounds and Gardens"
  },
  {
    id: 2,
    title: "Mintaro Cottage",
    subtitle: " ",
    image: "MintaroCottage.png",
    landscapeImages: [
      "MC1.jpg",
    ],
    landscapeVideos: [
      "MintaroCottage.mp4",
      "Mintaro Cottage - Cooking Dinner(1).mp4"
    ],
    portraitImages: [
      "bees.png",
      "MC3.jpeg"
    ],
    portraitImageLinks: [
      "bees.png",
      "reviewmc.png",
    ],
    landscapeImageLinks: [
      " "
    ],
    videoLink: "Mintaro Cottage - Cooking Dinner(1).mp4", // Link for MintaroCottage.mp4
    slug: "Mintaro-Cottage",
    description: "Mintaro Cottage is a boutique South Australian accommodation offering that blends heritage charm with modern comfort. Now, with tailored marketing, refreshed design, and digital support, the cottage now has a polished online presence that reflects the charm and warmth of the experience it offers guests. From brand-aligned graphics to seamless website updates, Mintaro Cottage is positioned to attract new visitors and showcase its unique story in style.",
    services: ["Marketing Strategy", "Graphic Design", "Website Support", "Content Creation", "Photography and Videography"],
    subdescription: "What we delivered:\n\n**Marketing Support:** Developed strategies and campaigns to strengthen their visibility and connect with the right audience.\n\n**Graphic Design:** Created marketing collateral and digital assets that visually matched the charm and authenticity of the property.\n\n**Website Support:** Provided design and content updates to ensure the website stayed fresh, user-friendly, and optimised for conversions.\n\n**Content Creation:** Delivered engaging visuals and messaging to highlight the guest experience and drive bookings.\n\n**The glow-up?**\n\nMintaro Cottage now has the digital presence to match its timeless character — making it easier than ever for travellers to discover, connect, and book their next stay.",
    year: "2024",
    client: "Mintaro Cottage"
  },
  {
    id: 3,
    title: "Coming Soon",
    subtitle: " ",
    image: "SMIX.png",
    heroimage:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    landscapeImages: [],
    landscapeVideos: [],
    portraitImages: [],
    portraitImageLinks: [],
    landscapeImageLinks: [],
    videoLink: "#",
    slug: "coming-soon",
    description: "Something new is in the works. Quietly being built. Carefully designed. Patiently refined.",
    services: ["Still under wraps."],
    subdescription: "What we delivered (so far):\n\nConcepts shaping into something bigger.\n\nFoundations being laid for a whole new experience.\n\nDetails hidden (for now).\n\n**Creative Direction:** Ideas are evolving into something bold, modern, and unlike the rest.\n\n**Design Support:** Crafting visuals that hint at what's next - without giving the game away.\n\n**Digital Build:** Constructing a platform that feels seamless, intuitive, and future-ready.\n\n**The glow-up?**\n\nYou'll see it soon. But for now, think of this as the calm before the glow.",
    year: "2025",
    client: "TBA"
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
    <section id="work" className="min-h-screen bg-[#443627] flex items-center justify-center relative overflow-hidden py-8">
      <div className="w-full min-h-screen flex flex-col">
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
        <div className="flex-1 relative pb-8 min-h-[80vh]">
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
          <div className="h-full w-full overflow-hidden mb-8 min-h-[70vh]">
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
                  <div className="relative w-full h-full group flex flex-col">
                    {/* Hero Image - Takes up most of the space */}
                    <div className="flex-1 relative">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                    </div>

                    {/* Content - Fixed height at bottom */}
                    <div className="relative z-20 h-20 flex items-center">
                      <div className="w-full p-1" style={{ backgroundColor: '#443627' }}>
                        <div className="text-white">
                          <h3 className="text-xl sm:text-1xl nunito-sans-black mb-2 text-white line-clamp-2 leading-tight">
                            {project.title}
                          </h3>
                          
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
                  <div className="relative w-full h-full overflow-hidden flex flex-col">
                    {/* Hero Image - Takes up most of the space */}
                    <div className="flex-1 relative">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                    </div>

                    {/* Content - Fixed height at bottom */}
                    <div className="relative z-10 h-28 flex items-center">
                      <div className="w-full p-4" style={{ backgroundColor: '#443627' }}>
                        <div className="text-white">
                          <h3 className="text-xl lg:text-2xl xl:text-3xl nunito-sans-black mb-2 text-white line-clamp-2 leading-tight">
                            {project.title}
                          </h3>
                          
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
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
                className="fixed top-0 right-0 h-full w-full md:w-3/5 lg:w-3/5 z-50 overflow-y-auto bg-white"
              >
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <X className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                </button>

                <section className="w-full flex flex-col">
                  {/* TITLE */}
                  <motion.div
                    className="w-full px-8 sm:px-12 lg:px-16 pt-24 pb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] text-black tracking-tight">
                      {selectedProject.title}
                    </h1>
                  </motion.div>

                  {/* DESCRIPTION */}
                  <motion.div
                    className="px-8 sm:px-12 lg:px-16 pb-16 max-w-5xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-black">
                      {selectedProject.description}
                    </p>
                  </motion.div>

                  {/* SCOPE */}
                  <motion.div
                    className="px-8 sm:px-12 lg:px-16 pb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold mb-6 text-black uppercase tracking-wide">Scope</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedProject.services.map((service, index) => (
                        <div key={index} className="text-lg text-black">
                          {service}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* LANDSCAPE VIDEO - After Scope (SA Grounds and Gardens only) */}
                  {selectedProject.id === 1 && selectedProject.landscapeVideos && selectedProject.landscapeVideos.length > 0 && selectedProject.landscapeVideos[0] && (
                    <motion.div
                      className="w-full relative"
                      style={{ height: '60vh' }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href={selectedProject.videoLink || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full h-full group relative overflow-hidden"
                      >
                        <video
                          src={selectedProject.landscapeVideos[0]}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </a>
                    </motion.div>
                  )}

                  {/* PORTRAIT VIDEOS - After Scope (Mintaro Cottage only) */}
                  {selectedProject.id === 2 && selectedProject.landscapeVideos && selectedProject.landscapeVideos.length > 0 && (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* First portrait video */}
                        {selectedProject.landscapeVideos[0] && (
                          <a 
                            href={selectedProject.videoLink || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <video
                              src={selectedProject.landscapeVideos[0]}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        )}
                        
                        {/* Second portrait image instead of video */}
                        {selectedProject.portraitImages && selectedProject.portraitImages[0] && (
                          <a 
                            href={selectedProject.portraitImageLinks?.[0] || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <ImageWithFallback
                              src={selectedProject.portraitImages[0]}
                              alt={`${selectedProject.title} shot 1`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                  {/* FIRST PORTRAIT IMAGES - After landscape video (SA Grounds and Gardens only) */}
                  {selectedProject.id === 1 && selectedProject.portraitImages && selectedProject.portraitImages.length >= 2 && (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* First portrait image - clickable */}
                        <a 
                          href={selectedProject.portraitImageLinks?.[0] || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                        >
                          <ImageWithFallback
                            src={selectedProject.portraitImages[0]}
                            alt={`${selectedProject.title} shot 1`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </a>
                        
                        {/* Second portrait image - clickable */}
                        <a 
                          href={selectedProject.portraitImageLinks?.[1] || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                        >
                          <ImageWithFallback
                            src={selectedProject.portraitImages[1] || selectedProject.portraitImages[0]}
                            alt={`${selectedProject.title} shot 2`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </a>
                      </div>
                    </motion.div>
                  )}


                  {/* SUB-DESCRIPTION */}
                  {selectedProject.subdescription && (
                    <motion.div
                      className="px-8 sm:px-12 lg:px-16 py-20 max-w-4xl mx-auto"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Process Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                      >
                        <h3 className="text-2xl sm:text-3xl font-black mb-8 text-black">
                          {selectedProject.id === 1 ? 'From the ground up we created:' : selectedProject.id === 3 ? 'What we delivered (so far):' : 'What we delivered:'}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                          {selectedProject.id === 1 
                            ? 'When SA Grounds and Gardens first came to me they had a solid reputation in landscaping through word of mouth but no brand identity, website or marketing.'
                            : selectedProject.id === 3
                            ? 'Concepts shaping into something bigger.\n\nFoundations being laid for a whole new experience.\n\nDetails hidden (for now).'
                            : 'Tailored marketing, refreshed design, and digital support to strengthen their online presence and attract new visitors.'
                          }
                        </p>

                        <div className="space-y-8">
                          {selectedProject.id === 1 ? [
                            {
                              title: 'Brand Direction',
                              description: 'Worked together to define their vision, voice, and look so the brand reflected their core culture and felt as professional as the work they do.'
                            },
                            {
                              title: 'Logo & Identity',
                              description: 'Designed a fresh new logo and full brand guidelines, giving them a consistent style across every touchpoint.'
                            },
                            {
                              title: 'Collateral Design',
                              description: 'Business cards, uniform artwork, and vehicle branding - so the brand shows up in real life, not just online.'
                            },
                            {
                              title: 'Digital Presence',
                              description: 'Launched a fully responsive, SEO-friendly website plus Google Business, Meta, Insta, LinkedIn - the whole digital toolkit.'
                            },
                            {
                              title: 'Marketing Foundations',
                              description: 'Built custom social templates, content calendars, and a strategy that makes ongoing marketing simple and effective.'
                            }
                          ].map((item, index) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="border-l-2 border-black/30 pl-6"
                            >
                              <h4 className="text-xl font-semibold mb-2 text-black">{item.title}:</h4>
                              <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </motion.div>
                          )) : selectedProject.id === 3 ? [
                            {
                              title: 'Creative Direction',
                              description: 'Ideas are evolving into something bold, modern, and unlike the rest.'
                            },
                            {
                              title: 'Design Support',
                              description: 'Crafting visuals that hint at what\'s next - without giving the game away.'
                            },
                            {
                              title: 'Digital Build',
                              description: 'Constructing a platform that feels seamless, intuitive, and future-ready.'
                            }
                          ].map((item, index) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="border-l-2 border-black/30 pl-6"
                            >
                              <h4 className="text-xl font-semibold mb-2 text-black">{item.title}:</h4>
                              <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </motion.div>
                          )) : [
                            {
                              title: 'Marketing Support',
                              description: 'Developed strategies and campaigns to strengthen their visibility and connect with the right audience.'
                            },
                            {
                              title: 'Graphic Design',
                              description: 'Created marketing collateral and digital assets that visually matched the charm and authenticity of the property.'
                            },
                            {
                              title: 'Website Support',
                              description: 'Provided design and content updates to ensure the website stayed fresh, user-friendly, and optimised for conversions.'
                            },
                            {
                              title: 'Content Creation',
                              description: 'Delivered engaging visuals and messaging to highlight the guest experience and drive bookings.'
                            }
                          ].map((item, index) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="border-l-2 border-black/30 pl-6"
                            >
                              <h4 className="text-xl font-semibold mb-2 text-black">{item.title}:</h4>
                              <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Results Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-2xl p-8"
                      >
                        <h3 className="text-2xl sm:text-3xl font-black mb-4 text-black">
                          The glow-up?
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {selectedProject.id === 1 
                            ? 'SA Grounds & Gardens went from invisible online to looking like the landscaping brand to watch. Now they\'ve got a sharp identity, a site that works as hard as they do, and the confidence to stand out in a competitive market.'
                            : selectedProject.id === 3
                            ? 'You\'ll see it soon. But for now, think of this as the calm before the glow.'
                            : 'Mintaro Cottage now has the digital presence to match its timeless character - making it easier than ever for travellers to discover, connect, and book their next stay.'
                          }
                        </p>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* LANDSCAPE IMAGES - RESPONSIVE */}
                  {selectedProject.landscapeImages && selectedProject.landscapeImages.length > 0 && (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="">
                        {selectedProject.landscapeImages.filter(img => img && img.trim() !== '').map((image, index) => (
                          <a 
                            key={index}
                            href={selectedProject.landscapeImageLinks?.[index] || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`${selectedProject.title} landscape ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* SECOND PORTRAIT IMAGES*/}
                  {selectedProject.portraitImages && selectedProject.portraitImages.length >= 2 && (
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* For Mintaro Cottage: Second portrait image */}
                        {selectedProject.id === 2 && selectedProject.portraitImages[1] && (
                          <a 
                            href={selectedProject.portraitImageLinks?.[1] || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <ImageWithFallback
                              src={selectedProject.portraitImages[1]}
                              alt={`${selectedProject.title} shot 2`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        )}

                        {/* For SA Grounds and Gardens: Third portrait image */}
                        {selectedProject.id === 1 && selectedProject.portraitImages[2] && (
                          <a 
                            href={selectedProject.portraitImageLinks?.[2] || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <ImageWithFallback
                              src={selectedProject.portraitImages[2]}
                              alt={`${selectedProject.title} shot 3`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        )}
                        
                        {/* For Mintaro Cottage: Video as second item */}
                        {selectedProject.id === 2 && selectedProject.landscapeVideos && selectedProject.landscapeVideos.length > 0 && (
                          <a 
                            href={selectedProject.videoLink || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <video
                              src={selectedProject.landscapeVideos[1] || selectedProject.landscapeVideos[0]}
                              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        )}

                        {/* For SA Grounds and Gardens: Video - clickable */}
                        {selectedProject.id === 1 && selectedProject.landscapeVideos && selectedProject.landscapeVideos.length > 1 && selectedProject.landscapeVideos[1] ? (
                          <a 
                            href={selectedProject.videoLink || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <video
                              src={selectedProject.landscapeVideos[1]}
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        ) : selectedProject.id === 1 && selectedProject.landscapeVideos && selectedProject.landscapeVideos.length > 0 && selectedProject.landscapeVideos[0] ? (
                          <a 
                            href={selectedProject.videoLink || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <video
                              src={selectedProject.landscapeVideos[0]}
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        ) : selectedProject.id === 1 && selectedProject.portraitImages[3] ? (
                          <a 
                            href={selectedProject.portraitImageLinks?.[3] || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] group relative overflow-hidden"
                          >
                            <ImageWithFallback
                              src={selectedProject.portraitImages[3]}
                              alt={`${selectedProject.title} shot 4`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </a>
                        ) : null}
                      </div>
                    </motion.div>
                  )}

                  {/* FINAL CTA SECTION */}
                  <motion.div
                    className="px-8 sm:px-12 lg:px-16 py-24 bg-gray-50"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <div className="max-w-2xl">
                      <h3 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                        Ready to start your project?
                      </h3>
                      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                        Let's create something extraordinary together. Every great project starts with a conversation.
                      </p>
                      <button 
                        onClick={() => {
                          closePopup();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
                      >
                        Get In Touch
                      </button>
                    </div>
                  </motion.div>
                </section>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}