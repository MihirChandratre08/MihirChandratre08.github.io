/** Central content store — update portfolio here, not in components. */

export const profile = {
  name: 'Mihir Chandratre',
  brand: 'MIHIR CHANDRATRE',
  title: 'M.S. (Pharm.) Pharmaceutical Analysis',
  identity: 'Pharmaceutical Analysis Researcher',
  affiliation: 'NIPER Kolkata',
  location: 'Latur, Maharashtra',
  email: 'chandratremihir@gmail.com',
  phone: '+91-8554094937',
  phoneHref: 'tel:+918554094937',
  emailHref: 'mailto:chandratremihir@gmail.com',
  photo: {
    webp: '/images/profile.webp',
    png: '/images/profile.png',
    alt: 'Professional portrait of Mihir Chandratre',
  },
  cvPath: '/Mihir-Chandratre-CV.pdf',
  cvLabel: 'Download CV',
}

export const social = {
  linkedin: 'https://www.linkedin.com/in/mihir-chandratre',
  github: 'https://github.com/MihirChandratre08',
}

export const seo = {
  title: 'Mihir Chandratre | Pharmaceutical Analysis Researcher',
  description:
    'Mihir Chandratre — M.S. (Pharm.) Pharmaceutical Analysis researcher specializing in HPLC method development, analytical method validation, pharmaceutical research and computational drug discovery.',
  keywords: [
    'Mihir Chandratre',
    'Pharmaceutical Analysis',
    'Analytical R&D',
    'HPLC Method Development',
    'HPLC Method Validation',
    'Pharmaceutical Researcher',
    'NIPER Kolkata',
    'Analytical Scientist',
    'Pharma R&D',
  ],
  siteUrl: 'https://MihirChandratre08.github.io/',
  ogImage: '/images/og-image.webp',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'publication', label: 'Publication' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  heading: 'Mihir Chandratre',
  subtitle: 'M.S. (Pharm.) Pharmaceutical Analysis',
  affiliation: 'NIPER Kolkata',
  statement:
    'Pharmaceutical Analysis Researcher focused on analytical method development, HPLC validation, pharmaceutical characterization, and research-driven drug development.',
  tags: [
    'Analytical R&D',
    'HPLC Method Development',
    'Method Validation',
    'Pharmaceutical Research',
    'Drug Analysis',
  ],
  primaryCta: { label: 'Explore My Research', href: '#research' },
  secondaryCta: { label: 'Download CV', href: '/Mihir-Chandratre-CV.pdf', download: true },
  tertiaryCta: { label: 'LinkedIn', href: social.linkedin, external: true },
}

export const stats = [
  { value: '9.48', label: 'CGPA' },
  { value: 'M.S. Pharm.', label: 'Pharmaceutical Analysis' },
  { value: 'HPLC', label: 'Method Development' },
  { value: '1', label: 'Published Research Paper' },
]

export const about = {
  id: 'about',
  heading: 'Analytical Science meets Research',
  paragraphs: [
    'I am an M.S. (Pharm.) researcher specializing in Pharmaceutical Analysis, with a strong interest in Analytical R&D, chromatographic method development, method validation, pharmaceutical characterization, and research-driven drug development.',
    'My research experience combines experimental pharmaceutical analysis with computational approaches, including HPLC method development and validation, protein and peptide analysis, molecular docking, and analytical characterization.',
    'I am particularly interested in developing robust, reproducible, and scientifically justified analytical methods that contribute to pharmaceutical development and quality assessment.',
  ],
}

export const analyticalSkills = {
  id: 'expertise',
  heading: 'What I Work With',
  subheading: 'Analytical & Instrumental',
  cards: [
    {
      title: 'HPLC',
      subtitle: 'Method Development & Validation',
      items: [
        'RP-HPLC',
        'Gradient optimization',
        'Method validation',
        'Stability-indicating methods',
        'Analytical troubleshooting',
      ],
    },
    {
      title: 'Spectroscopy',
      subtitle: 'Structural & identity analysis',
      items: ['UV-Visible spectroscopy', 'FTIR', 'NMR', 'TLC', 'Column Chromatography'],
    },
    {
      title: 'Protein & Peptide Analysis',
      subtitle: 'Biomolecular workflows',
      items: [
        'Protein analysis',
        'Peptide analysis',
        'Solid Phase Peptide Synthesis',
        'Solid Phase Extraction',
      ],
    },
  ],
}

export const regulatory = {
  heading: 'Analytical Science within a Quality Framework',
  guidelines: ['ICH', 'USFDA', 'cGMP', 'GLP', 'GDP', '21 CFR'],
  practices: [
    'SOP Drafting',
    'CAPA',
    'Deviation',
    'Root Cause Analysis',
    'Regulatory Compliance',
  ],
}

export const computationalTools = {
  heading: 'Computational & Research Tools',
  groups: [
    {
      title: 'Molecular Modelling',
      tools: ['AutoDock', 'MGL Tools', 'BIOVIA Discovery Studio', 'PyMOL', 'Open Babel'],
    },
    {
      title: 'Chemical Drawing / Data',
      tools: ['ChemDraw 16.0', 'GaussView 6.0.16', 'OriginPro'],
    },
    {
      title: 'Chromatography',
      tools: ['Chromeleon 7.3.2'],
    },
    {
      title: 'Productivity',
      tools: ['MS Office'],
    },
  ],
}

export const projects = {
  id: 'research',
  featured: {
    title:
      'Formulation and Characterization of Niclosamide and Ribociclib Dual-Drug Loaded BSA Nanoparticles Decorated with PD-L1 Binding Peptide for Targeted Breast Cancer Therapy',
    shortTitle: 'Niclosamide + Ribociclib Dual-Drug BSA Nanoparticles',
    summary:
      'M.S. research focused on dual-drug BSA nanoparticles decorated with a PD-L1 binding peptide for targeted delivery in breast cancer.',
    tags: [
      'Nanoparticle Drug Delivery',
      'Pharmaceutical Analysis',
      'HPLC',
      'Molecular Docking',
      'Targeted Drug Delivery',
      'Cancer Research',
      'Peptide Synthesis',
    ],
    cta: 'Explore Research',
  },
  secondary: [
    {
      id: 'rp-hplc',
      title: 'Stability-Indicating RP-HPLC Method',
      description:
        'Developed and validated a stability-indicating RP-HPLC method for pharmaceutical degradation studies.',
      tags: [
        'RP-HPLC',
        'Method Development',
        'Method Validation',
        'Forced Degradation',
        'Stability Indicating',
        'Analytical R&D',
      ],
    },
    {
      id: 'polyherbal',
      title: 'Polyherbal Anti-Acne Facewash',
      description: 'Formulation and evaluation of a polyherbal anti-acne facewash.',
      flow: ['Formulation', 'Evaluation', 'Characterization', 'Product Performance'],
      tags: ['Formulation', 'Evaluation', 'Phytopharmaceuticals'],
    },
  ],
}

export const researchDetailSections = [
  {
    number: '01',
    title: 'Research Question',
    body: 'Can niclosamide and ribociclib be co-formulated in BSA nanoparticles decorated with a PD-L1 binding peptide to enable targeted delivery toward overexpressed proteins in breast cancer?',
  },
  {
    number: '02',
    title: 'Scientific Rationale',
    body: 'Combining cytotoxic and CDK-pathway-relevant agents within a protein nanocarrier, while decorating the surface with a PD-L1-binding peptide, aims to improve tumor-selective delivery and support research into dual-drug targeted therapy.',
  },
  {
    number: '03',
    title: 'Formulation Strategy',
    body: 'BSA nanoparticle formulation with dual-drug loading of niclosamide and ribociclib, followed by surface decoration using a PD-L1 binding peptide for targeting.',
  },
  {
    number: '04',
    title: 'Analytical Method Development',
    body: 'Analytical characterization and chromatographic approaches, including HPLC-based method development relevant to quantifying drugs and supporting formulation evaluation.',
  },
  {
    number: '05',
    title: 'Characterization',
    body: 'Pharmaceutical and nanoparticle characterization to assess formulation attributes critical for delivery performance and analytical quality.',
  },
  {
    number: '06',
    title: 'Computational Investigation',
    body: 'Computational support using molecular modelling and docking tools (including AutoDock, Discovery Studio, and related platforms) to investigate ligand–target interactions relevant to the research hypothesis.',
  },
  {
    number: '07',
    title: 'Key Findings',
    body: 'The project integrates formulation science, pharmaceutical analysis, and computational investigation around a dual-drug, peptide-decorated BSA nanoparticle concept for targeted breast cancer research. Detailed quantitative findings can be refined as results are finalized for presentation.',
  },
  {
    number: '08',
    title: 'Research Outcome',
    body: 'Establishes a research framework for dual-drug BSA nanoparticles with PD-L1 peptide decoration, strengthening Mihir’s profile at the intersection of analytical R&D, nanotechnology, and targeted drug delivery.',
  },
]

export const timeline = [
  { year: '2021', title: 'Bachelor of Pharmacy', detail: 'Channabasweshwar Pharmacy College, Latur' },
  { year: '2024', title: 'M.S. Pharmaceutical Analysis', detail: 'NIPER Kolkata' },
  { year: '2025', title: 'Research Project', detail: 'Dual-drug BSA nanoparticle research' },
  { year: '2025', title: 'International Workshop', detail: 'Spectroscopic methods for structural elucidation' },
  { year: '2025', title: 'Publication', detail: 'Clinica Chimica Acta — lipidomics review' },
  { year: '2026', title: 'M.S. Pharm. — Final Phase', detail: 'NIPER Kolkata' },
]

export const education = [
  {
    period: '2024–2026',
    degree: 'M.S. (Pharm.) Pharmaceutical Analysis',
    institute: 'National Institute of Pharmaceutical Education and Research — Kolkata',
    result: 'CGPA: 9.48/10',
  },
  {
    period: '2021–2024',
    degree: 'Bachelor of Pharmacy',
    institute: 'Channabasweshwar Pharmacy College — Latur, Maharashtra',
    result: 'Aggregate: 74.08%',
  },
  {
    period: '2019–2021',
    degree: 'Diploma in Pharmacy',
    institute: 'Dayanand College of Pharmacy — Latur, Maharashtra',
    result: '97.60%',
  },
]

export const earlierEducation = [
  {
    period: '2018–2019',
    degree: 'HSC',
    institute: 'Maharashtra State Board — Shrikishan Somani School, Latur',
    result: 'See CV for percentage',
  },
  {
    period: '2016–2017',
    degree: 'SSC',
    institute: 'Maharashtra State Board',
    result: 'See CV for percentage',
  },
]

export const publication = {
  id: 'publication',
  title: 'Exploring Lipidomics in Biomarker Discovery',
  authors:
    'M. Malarvannan, S. Bhanu Teja Naik, Navratan Soni, Chandratre Mihir Mandar, David Paul.',
  venue: 'Clinica Chimica Acta',
  year: '2025',
  impactFactor: '2.9',
  doi: '10.1016/j.cca.2025.120698',
  doiUrl: 'https://doi.org/10.1016/j.cca.2025.120698',
  articleId: '120698',
}

export const certifications = [
  'ADMET Profiling & Drug-Likeness Analysis',
  'Docking, Homology Modelling & Active Site Prediction',
  'Drug Metabolism & Pharmacokinetics (DMPK)',
  'LC-MS/MS Techniques — Uyirgene International',
]

export const achievements = {
  id: 'achievements',
  items: [
    {
      title: 'District Rank',
      detail: '1st in D.Pharm overall in Latur district',
    },
    {
      title: 'GPAT',
      detail: 'GPAT 2024 Qualified',
    },
    {
      title: 'NIPER',
      detail:
        'NIPER 2024 Qualified — NIPER PG Fellowship, Ministry of Pharmaceuticals, Government of India',
    },
  ],
}

export const conferences = [
  {
    title:
      'Advanced Spectroscopic and Non-Spectroscopic Methods for Structural Elucidation of Chemical Compounds and NCEs',
    detail: '5-day online international workshop — October 2025',
  },
  {
    title: 'Novel Drug Delivery Systems — Edition 2025',
    detail: 'IPA Discussion Group — IPA Kerala State Branch',
  },
]

export const researchInterests = [
  {
    title: 'Analytical Method Development',
    items: ['HPLC', 'Method Validation', 'Stability Studies', 'Analytical Troubleshooting'],
  },
  {
    title: 'Pharmaceutical Research',
    items: ['Nanoparticle Drug Delivery', 'Drug Characterization', 'Targeted Delivery'],
  },
  {
    title: 'Computational Analysis',
    items: ['Molecular Docking', 'Molecular Modelling', 'Drug-Likeness / ADMET'],
  },
]

export const currentlyExploring = [
  'Advanced HPLC Method Development',
  'Analytical QbD',
  'Green Analytical Chemistry',
  'LC-MS/MS',
  'Pharmaceutical Nanotechnology',
  'Computational Drug Discovery',
]

export const contact = {
  id: 'contact',
  heading: "Let's discuss pharmaceutical research.",
  copy: 'Interested in analytical R&D, pharmaceutical research, analytical development, or scientific collaboration? I would be happy to connect.',
}

export const researchModeFocus = [
  { area: 'HPLC', focus: 'Method Development' },
  { area: 'Drug Discovery', focus: 'Molecular Docking' },
  { area: 'Nanotechnology', focus: 'BSA Nanoparticles' },
  { area: 'Analytical Chemistry', focus: 'Validation' },
]

export const sectionPlaceholders = [
  { id: 'about', label: 'About', phase: 'B' },
  { id: 'expertise', label: 'Expertise', phase: 'B' },
  { id: 'research', label: 'Research', phase: 'C' },
  { id: 'education', label: 'Education', phase: 'D' },
  { id: 'publication', label: 'Publication', phase: 'D' },
  { id: 'achievements', label: 'Achievements', phase: 'D' },
  { id: 'contact', label: 'Contact', phase: 'E' },
]

export const github = {
  username: 'MihirChandratre08',
  repo: 'MihirChandratre08.github.io',
  url: 'https://github.com/MihirChandratre08/MihirChandratre08.github.io',
  pagesUrl: 'https://MihirChandratre08.github.io/',
}
