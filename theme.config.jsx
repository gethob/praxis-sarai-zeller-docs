export default {
  logo: <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Praxis Sarai Zeller Docs</span>,
  project: {
    link: 'https://github.com/your-username/praxis-sarai-zeller'
  },
  docsRepositoryBase: 'https://github.com/your-username/praxis-sarai-zeller/tree/main/docs',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Praxis Sarai Zeller Documentation
      </span>
    )
  },
  primaryHue: 12, // Warm red-orange matching the site's primary color
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Praxis Sarai Zeller Documentation" />
      <meta property="og:description" content="Complete documentation for the Praxis Sarai Zeller psychotherapy practice website" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Praxis Sarai Zeller Docs'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  }
}
