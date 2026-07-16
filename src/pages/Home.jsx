import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import SEO from '../components/SEO'
import projectsData from '../data/projects.json'

const TypewriterText = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

const Home = () => {
  const [visitors, setVisitors] = useState(1342) // Simulated visitor counter

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Mohd Faizan Portfolio',
    url: 'https://mohd-faizan-phpq.onrender.com',
    mainEntity: {
      '@type': 'Person',
      name: 'Mohd Faizan',
      alternateName: [
        'Mohd Faizan Developer',
        'Mohd Faizan Portfolio',
        'MohdFaizan07',
        'faizan061',
        'mrfaizan123',
        'mohd faizan dev',
        'Faizan07',
        'mrfaizan07',
        'Integral University Developer',
        'Sitapur Software Developer',
        'Biswan Software Developer',
      ],
      jobTitle: 'Full Stack Developer and AI/ML Developer',
      description:
        'Full Stack Developer and Machine Learning enthusiast building React, MERN stack, Python, and AI-powered web applications from Lucknow, Sitapur, and Biswan, Uttar Pradesh, India.',
      image: 'https://mohd-faizan-phpq.onrender.com/profile.jpg',
      sameAs: [
        'https://github.com/mrfaizan07',
        'https://www.linkedin.com/in/mohd-faizan-05a435309/',
      ],
    },
  }

  useEffect(() => {
    // Simulate real-time visitors incrementing slowly
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setVisitors(v => v + 1)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <SEO 
        title="Mohd Faizan Portfolio | Software Developer, Full Stack Developer and AI/ML Engineer"
        description="Official portfolio of Mohd Faizan, a software developer and full stack developer connected with Integral University. Explore MERN, React, Python, AI/ML projects from Lucknow, Sitapur and Biswan."
        keywords="Mohd Faizan, Mohd Faizan Portfolio, Mohd Faizan Developer, MohdFaizan07, Faizan07, mrfaizan07, faizan061, mrfaizan123, mohd faizan dev, Mohd Faizan Software Developer, software developer, Integral University developer, Integral University software developer, Sitapur software developer, Biswan software developer, Full Stack Developer, React Developer, MERN Stack Developer, AI ML Developer"
        path="/"
        schema={[profilePageSchema]}
      />

      <div className="relative flex flex-col items-center overflow-hidden">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
          {/* Animated Background blobs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-secondary/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-brand-accent/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000" />

          <div className="z-10 max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(0,245,255,0.2)] mb-6 relative group"
            >
              {/* Profile Image - User simply places 'profile.jpg' in the /public folder */}
              <img 
                src="/profile.jpg" 
                alt="Mohd Faizan" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if image doesn't exist */}
              <div className="absolute inset-0 bg-dark-bg hidden items-center justify-center text-4xl">
                👨‍💻
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            >
              Hi, I'm <span className="text-gradient">Mohd Faizan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-3xl text-text-muted font-medium h-12"
            >
              I build <span className="text-white"><TypewriterText text="Intelligent AI Web Apps" /></span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed"
            >
               Software Developer, Full Stack Developer, and Machine Learning enthusiast connected with Integral University, crafting modern digital experiences across Lucknow, Sitapur, and Biswan.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Link to="/projects" className="px-8 py-3 rounded-full bg-brand-primary text-dark-bg font-bold shadow-[0_0_15px_rgba(0,245,255,0.5)] hover:scale-105 transition-transform">
                View Projects
              </Link>
              <Link to="/contact" className="px-8 py-3 rounded-full glass-card border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
                Let's Talk
              </Link>
              {/* <a href="/resume.pdf" download className="px-8 py-3 rounded-full glass-card border border-white/20 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                <FaDownload /> Resume
              </a> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex justify-center gap-6 mt-12 text-2xl text-text-muted"
            >
              <a href="https://github.com/mrfaizan07" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors hover:-translate-y-1 transform"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mohd-faizan-05a435309/" className="hover:text-brand-secondary transition-colors hover:-translate-y-1 transform"><FaLinkedin /></a>
              <a href="mailto:umohdfaizan@gmail.com" className="hover:text-brand-accent transition-colors hover:-translate-y-1 transform"><FaEnvelope /></a>
            </motion.div>
          </div>
        </section>

        {/* ================= QUICK STATS SECTION ================= */}
        <section className="w-full max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Projects', value: '8+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Certificates', value: '4' },
              { label: 'Unique Visitors', value: visitors },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center border border-white/5"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-brand-primary uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= FEATURED PROJECTS PREVIEW ================= */}
        <section className="w-full max-w-6xl mx-auto px-6 py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">Featured <span className="text-brand-secondary">Projects</span></h2>
              <p className="text-text-muted">Some of my most recent and impactful work.</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-brand-primary hover:text-white transition-colors font-medium">
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.filter(p => p.featured).slice(0, 2).map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="glass-card overflow-hidden group border border-white/5 hover:border-brand-primary/50 transition-colors"
              >
                <div className="relative h-56 overflow-hidden bg-dark-bg">
                  {/* Images load from /public/projects/ */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-5xl bg-white/5 hidden">
                    💻
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-90" />
                </div>
                <div className="p-6 relative -mt-12 z-10">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-secondary/80 text-white backdrop-blur-md mb-4 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-text-muted text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 text-brand-primary font-medium border border-brand-primary/30 px-6 py-2 rounded-full">
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home
