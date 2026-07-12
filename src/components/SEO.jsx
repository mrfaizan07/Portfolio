import { Helmet } from 'react-helmet-async'

const SITE = {
  name: 'Mohd Faizan Portfolio',
  owner: 'Mohd Faizan',
  url: 'https://mohd-faizan-phpq.onrender.com',
  image: 'https://mohd-faizan-phpq.onrender.com/profile.jpg',
  favicon: '/favicon.svg',
  twitterHandle: '@mrfaizan061',
  email: 'mailto:umohdfaizan@gmail.com',
  phone: '+918810743304',
  location: 'Lucknow, Sitapur, Biswan, Uttar Pradesh, India',
  defaultDescription:
    'Official portfolio of Mohd Faizan, a software developer and full stack developer connected with Integral University. Explore MERN, React, Python and AI/ML projects from Lucknow, Sitapur and Biswan.',
  defaultKeywords:
    'Mohd Faizan, Mohd Faizan Portfolio, faizan portfolio,faizan061,faizan061 developer, faizan developer, Mohd Faizan Developer, MohdFaizan061, Faizan061, mrfaizan061 portfolio, Mohd Faizan Software Developer, software developer, Integral University developer, Integral University software developer, Sitapur software developer, Biswan software developer, Full Stack Developer, React Developer, MERN Stack Developer, AI ML Developer',
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
  publishedTime,
  modifiedTime,
  articleAuthor,
  articleSection,
  tags = [],
}) => {
  const pagePath = normalizePath(path)
  const canonicalUrl = `${SITE.url}${pagePath === '/' ? '' : pagePath}`
  const fullTitle = title.includes(SITE.owner) ? title : `${title} | ${SITE.owner}`

  // ============================================================
  // 1. PERSON SCHEMA (Primary - Rich Snippets)
  // ============================================================
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.owner,
    alternateName: [
      'Mohd Faizan Portfolio',
      'Faizan Developer',
      'Faizan061 portfolio',
      'Mohd faizan061 portfolio',
      'Mohd Faizan Developer',
      'Mohd Faizan Software Developer',
      'MohdFaizan061',
      'Faizan061',
      'mrfaizan061',
      'Integral University Developer',
      'Sitapur Software Developer',
      'Biswan Software Developer',
    ],
    url: SITE.url,
    image: image,
    jobTitle: 'Software Developer and Full Stack Developer',
    description: SITE.defaultDescription,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    homeLocation: [
      {
        '@type': 'Place',
        name: 'Lucknow, Uttar Pradesh, India',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lucknow',
          addressRegion: 'Uttar Pradesh',
          addressCountry: 'India',
        },
      },
      {
        '@type': 'Place',
        name: 'Sitapur, Uttar Pradesh, India',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sitapur',
          addressRegion: 'Uttar Pradesh',
          addressCountry: 'India',
        },
      },
      {
        '@type': 'Place',
        name: 'Biswan, Sitapur, Uttar Pradesh, India',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Biswan',
          addressRegion: 'Uttar Pradesh',
          addressCountry: 'India',
        },
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'ByteSoft',
      url: 'https://mohd-faizan-phpq.onrender.com',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Integral University',
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lucknow',
          addressRegion: 'Uttar Pradesh',
          addressCountry: 'India',
        },
      },
    },
    knowsAbout: [
      'Software Development',
      'Full Stack Development',
      'React',
      'MERN Stack',
      'Python',
      'Machine Learning',
      'Artificial Intelligence',
      'Web Development',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Integral University',
      'Sitapur',
      'Biswan',
    ],
    sameAs: [
      'https://github.com/mrfaizan07',
      'https://www.linkedin.com/in/mohd-faizan-05a435309/',
    ],
    nationality: {
      '@type': 'Country',
      name: 'India',
    },
    birthPlace: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sitapur',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'India',
      },
    },
  }

  // ============================================================
  // 2. WEBSITE SCHEMA
  // ============================================================
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.defaultDescription,
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Person',
      name: SITE.owner,
      url: SITE.url,
    },
    author: {
      '@type': 'Person',
      name: SITE.owner,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: SITE.owner,
    },
    copyrightYear: new Date().getFullYear(),
    isAccessibleForFree: true,
    keywords: SITE.defaultKeywords,
  }

  // ============================================================
  // 3. BREADCRUMB SCHEMA (For rich breadcrumbs in search)
  // ============================================================
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE.url,
    },
  ]

  if (pagePath !== '/') {
    const pageName = title.replace(/\s*\|\s*.*/, '')
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: pageName,
      item: canonicalUrl,
    })
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

  // ============================================================
  // 4. ORGANIZATION SCHEMA (ByteSoft)
  // ============================================================
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ByteSoft',
    url: SITE.url,
    founder: {
      '@type': 'Person',
      name: SITE.owner,
    },
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    sameAs: [
      'https://github.com/mrfaizan07',
      'https://www.linkedin.com/in/mohd-faizan-05a435309/',
    ],
  }

  // ============================================================
  // 5. ARTICLE SCHEMA (If type is article or blogpost)
  // ============================================================
  const articleSchema =
    isArticle || isBlogPost
      ? {
          '@context': 'https://schema.org',
          '@type': isBlogPost ? 'BlogPosting' : 'Article',
          headline: fullTitle,
          description: description,
          image: image,
          author: {
            '@type': 'Person',
            name: articleAuthor || SITE.owner,
            url: SITE.url,
          },
          publisher: {
            '@type': 'Person',
            name: SITE.owner,
            url: SITE.url,
          },
          datePublished: publishedTime || new Date().toISOString(),
          dateModified: modifiedTime || new Date().toISOString(),
          articleSection: articleSection || 'Software Development',
          keywords: keywords,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          ...(tags.length > 0 && { about: tags.map((tag) => ({ '@type': 'Thing', name: tag })) }),
        }
      : null

  // ============================================================
  // 6. FAQ SCHEMA (If FAQ data is passed)
  // ============================================================
  // You can pass FAQ data via schema prop or create a separate component

  // ============================================================
  // 7. PROFILE PAGE SCHEMA (For Google Knowledge Panel)
  // ============================================================
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: fullTitle,
    description: description,
    url: canonicalUrl,
    mainEntity: {
      '@type': 'Person',
      name: SITE.owner,
      alternateName: [
        'Faizan061',
        'MohdFaizan061',
        'mrfaizan061',
        'Mohd Faizan Developer',
      ],
      url: SITE.url,
      image: image,
      jobTitle: 'Software Developer and Full Stack Developer',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Integral University',
      },
      knowsAbout: [
        'Software Development',
        'Full Stack Development',
        'MERN Stack',
        'React',
        'Python',
        'AI/ML',
      ],
    },
  }

  // ============================================================
  // Combine all schemas
  // ============================================================
  const allSchemas = [
    personSchema,
    websiteSchema,
    breadcrumbSchema,
    organizationSchema,
    profilePageSchema,
    ...(articleSchema ? [articleSchema] : []),
    ...schema,
  ]

  // ============================================================
  // Render
  // ============================================================
  return (
    <Helmet>
      {/* -------- PRIMARY SEO -------- */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE.owner} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-snippet:150, max-image-preview:large'
        }
      />
      <meta
        name="googlebot"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-snippet:150, max-image-preview:large'
        }
      />

      {/* -------- CANONICAL & HREFLANG -------- */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hreflang="en-in" href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* -------- FAVICON & THEME -------- */}
      <link rel="icon" type="image/svg+xml" href={SITE.favicon} />
      <link rel="apple-touch-icon" href={SITE.favicon} />
      <link rel="shortcut icon" href={SITE.favicon} type="image/svg+xml" />
      <meta name="theme-color" content="#050816" />
      <meta name="msapplication-TileColor" content="#050816" />

      {/* -------- OPEN GRAPH / FACEBOOK -------- */}
      <meta property="og:type" content={isArticle ? 'article' : type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={`${SITE.owner} portfolio preview`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {articleSection && <meta property="article:section" content={articleSection} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* -------- TWITTER CARDS -------- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:creator" content={SITE.twitterHandle} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE.owner} portfolio preview`} />

      {/* -------- PWA / MOBILE -------- */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={SITE.owner} />
      <meta name="application-name" content={SITE.name} />

      {/* -------- PERFORMANCE HINTS -------- */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://github.com" />
      <link rel="dns-prefetch" href="https://linkedin.com" />

      {/* -------- SECURITY -------- */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* -------- STRUCTURED DATA (JSON-LD) -------- */}
      {allSchemas.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEO
