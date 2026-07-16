import { Helmet } from 'react-helmet-async'

const SITE = {
  name: 'Mohd Faizan Portfolio',
  owner: 'Mohd Faizan',
  url: 'https://mohd-faizan-phpq.onrender.com',
  image: 'https://mohd-faizan-phpq.onrender.com/profile.jpg',
  twitterHandle: '@mrfaizan07',
  email: 'mailto:umohdfaizan@gmail.com',
  phone: '+918810743304',
  location: 'Lucknow, Sitapur, Biswan, Uttar Pradesh, India',
  defaultDescription:
    'Mohd Faizan is a Full Stack Developer and AI/ML developer from Uttar Pradesh, India, connected with Integral University and building React, MERN stack, Python, and machine learning projects.',
  defaultKeywords:
    'Mohd Faizan, Mohd Faizan Portfolio, Mohd Faizan Developer, MohdFaizan07, Faizan07, mrfaizan07, faizan061, mrfaizan123, mohd faizan dev, Software Developer Mohd Faizan, Integral University Developer, Integral University Software Developer, Sitapur Software Developer, Biswan Software Developer, Full Stack Developer, MERN Stack Developer, React Developer, Python Developer, AI ML Developer, ByteSoft',
}

const normalizePath = (path) => {
  if (!path || path === '/') return '/'
  return path.startsWith('/') ? path : `/${path}`
}

const SEO = ({
  title,
  description = SITE.defaultDescription,
  keywords = SITE.defaultKeywords,
  type = 'website',
  path = '/',
  image = SITE.image,
  schema = [],
  noindex = false,
}) => {
  const pagePath = normalizePath(path)
  const canonicalUrl = `${SITE.url}${pagePath === '/' ? '' : pagePath}`
  const fullTitle = title.includes(SITE.owner) ? title : `${title} | ${SITE.owner}`

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.owner,
    alternateName: [
      'Mohd Faizan Developer',
      'Mohd Faizan Portfolio',
      'MohdFaizan07',
      'faizan061',
      'mrfaizan123',
      'mohd faizan dev',
      'Faizan07',
      'mrfaizan07',
      'Faizan Software Developer',
      'Integral University Developer',
      'Sitapur Software Developer',
      'Biswan Software Developer',
    ],
    url: SITE.url,
    image,
    email: SITE.email,
    telephone: SITE.phone,
    jobTitle: 'Full Stack Developer and AI/ML Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    homeLocation: [
      {
        '@type': 'Place',
        name: 'Lucknow, Uttar Pradesh, India',
      },
      {
        '@type': 'Place',
        name: 'Sitapur, Uttar Pradesh, India',
      },
      {
        '@type': 'Place',
        name: 'Biswan, Sitapur, Uttar Pradesh, India',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'ByteSoft',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Integral University',
    },
    knowsAbout: [
      'React',
      'Node.js',
      'MongoDB',
      'Python',
      'Machine Learning',
      'Artificial Intelligence',
      'MERN Stack',
      'Software Engineering',
      'Integral University',
      'Sitapur Software Development',
      'Biswan Software Development',
      'MohdFaizan07 Portfolio',
      'Faizan07 Portfolio',
    ],
    sameAs: [
      'https://github.com/mrfaizan07',
      'https://www.linkedin.com/in/mohd-faizan-05a435309/',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE.url,
    name: SITE.name,
    description: SITE.defaultDescription,
    publisher: {
      '@type': 'Person',
      name: SITE.owner,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url,
      },
      ...(pagePath === '/'
        ? []
        : [
            {
              '@type': 'ListItem',
              position: 2,
              name: title.replace(/\s*\|\s*.*/, ''),
              item: canonicalUrl,
            },
          ]),
    ],
  }

  const schemas = [personSchema, websiteSchema, breadcrumbSchema, ...schema]

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE.owner} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE.owner} portfolio preview`} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:creator" content={SITE.twitterHandle} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE.owner} portfolio preview`} />

      {schemas.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEO
