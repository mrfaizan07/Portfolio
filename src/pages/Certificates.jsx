import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import certificatesData from '../data/certificates.json'

const Certificates = () => {
  const certificatesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mohd Faizan Certifications',
    itemListElement: certificatesData.map((cert, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        name: cert.title,
        credentialCategory: 'Certificate',
        recognizedBy: {
          '@type': 'Organization',
          name: cert.issuer,
        },
        dateCreated: cert.date,
      },
    })),
  }

  return (
    <>
      <SEO
        title="Certificates | Mohd Faizan Software Developer Certifications"
        description="View Mohd Faizan's professional certificates in data science, Python, software engineering, frontend development and technology training."
        keywords="Mohd Faizan certificates, Mohd Faizan developer certificates, software developer certification, Data Science certificate, Python certificate, IBM certificate, Oracle certificate, Software Engineering certificate, Frontend Developer certification"
        path="/certificates"
        schema={[certificatesSchema]}
      />

    <div className="container mx-auto px-6 py-24 max-w-7xl">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
          My <span className="text-brand-primary">Certificates</span>
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Formal recognition of my skills and knowledge from industry leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-colors"
          >
            <div className="relative h-48 bg-dark-bg overflow-hidden flex items-center justify-center">
              {/* To add real images, place them in public/certificates/ */}
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-white/5 hidden flex-col items-center justify-center text-text-muted">
                <span className="text-4xl mb-2">🎓</span>
                <span className="text-xs">Image missing</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <div className="flex justify-between items-center text-sm text-text-muted">
                <span className="text-brand-secondary font-semibold">{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Certificates
