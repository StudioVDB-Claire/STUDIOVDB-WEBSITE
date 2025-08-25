import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Send, Linkedin } from 'lucide-react';
import { Button } from './ui/button-simple';
import { Input } from './ui/input-simple';
import { Textarea } from './ui/textarea-simple';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card-simple';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'claire@studiovdb.com.au',
      link: 'mailto:claire@studiovdb.com.au'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Based in Australia. Available for projects worldwide.',
      link: '#'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Using your Formspree endpoint
      const response = await fetch('https://formspree.io/f/mpwjaeap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Show success popup
        setShowSuccessPopup(true);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Hide popup after 3 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      // You might want to show an error message to the user here
      alert('Failed to send message. Please try again or contact me directly at claire@studiovdb.com.au');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#ADF5FF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 nunito-sans-black" style={{ color: '#443627' }}>
            Let's Work Together
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#443627' }}>
            If you're building something with heart and ambition - I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-2" style={{ backgroundColor: '#443627', borderColor: '#443627' }}>
              <CardHeader>
                <CardTitle className="text-2xl nunito-sans-black" style={{ color: '#ADF5FF' }}>
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block mb-2 text-sm" style={{ color: '#ADF5FF' }}>Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="border-2"
                        style={{ backgroundColor: '#ADF5FF', borderColor: '#ADF5FF', color: '#443627' }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block mb-2 text-sm" style={{ color: '#ADF5FF' }}>Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="border-2"
                        style={{ backgroundColor: '#ADF5FF', borderColor: '#ADF5FF', color: '#443627' }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block mb-2 text-sm" style={{ color: '#ADF5FF' }}>Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      required
                      className="border-2"
                      style={{ backgroundColor: '#ADF5FF', borderColor: '#ADF5FF', color: '#443627' }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block mb-2 text-sm" style={{ color: '#ADF5FF' }}>Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="border-2 resize-none"
                      style={{ backgroundColor: '#ADF5FF', borderColor: '#ADF5FF', color: '#443627' }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-none"
                      style={{ backgroundColor: '#D80C0C', color: '#ADF5FF' }}
                    >
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 nunito-sans-black" style={{ color: '#443627' }}>Get In Touch</h3>
              <p className="mb-8 leading-relaxed" style={{ color: '#443627', opacity: 0.8 }}>
                Ready to discuss your project? Whether you need a complete brand overhaul or just want to chat about possibilities, I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Logo and Contact Information */}
            <div className="space-y-6">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center mb-8"
              >
                <img
                  src="/VDBheader.png"
                  alt="Studio VDB Logo"
                  className="h-16 w-auto object-contain"
                />
              </motion.div>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center p-4 border-2 hover:border-primary/50 transition-all duration-300 group"
                  style={{ backgroundColor: '#443627', borderColor: '#443627' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 flex items-center justify-center mr-4 transition-all duration-300"
                    style={{ backgroundColor: '#D80C0C' }}
                  >
                    <info.icon size={20} style={{ color: '#ADF5FF' }} />
                  </motion.div>
                  <div>
                    <div className="text-sm" style={{ color: '#ADF5FF', opacity: 0.8 }}>{info.title}</div>
                    <div style={{ color: '#ADF5FF' }}>{info.value}</div>
                  </div>
                </motion.a>
              ))}

              {/* Social Links positioned under location */}
              <div className="mt-6">
                <h4 className="text-lg mb-4 nunito-sans-black" style={{ color: '#443627' }}>Follow Studio VDB</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/company/studio-vdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 px-6 py-3 transition-all duration-300"
                    style={{ backgroundColor: '#D80C0C', color: '#ADF5FF' }}
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/studiovdb___"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-3 px-6 py-3 transition-all duration-300"
                    style={{ backgroundColor: '#D80C0C', color: '#ADF5FF' }}
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-8 right-8 z-50 bg-white border-2 border-[#D80C0C] rounded-lg shadow-lg p-6 max-w-sm"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#D80C0C] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#443627]">Message Sent!</h4>
              <p className="text-sm text-[#443627]/80">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}