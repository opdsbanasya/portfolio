export const previousProjects = [
  // Professional Work - Featured
  {
    title: "Snoh Vision",
    description:
      "Enterprise-grade live surveillance system backend. High-availability FastAPI service handling real-time video stream processing with 1000+ concurrent users.",
    image: "/portfolio/snohvision.png",
    tags: ["Python", "FastAPI", "MySQL", "Socket.io", "React.js", "SSE", "Redux Toolikit", "Tailwind Css"],
    github: null,
    demo: null,
    isdemo: false,
    category: "Professional",
    featured: true,
    company: {
      name: "BM Infotrade",
      logo: "/companies/bminfotrade.png",
      link: "https://snohai.com/products/snoh-vision/"
    },
    bullets: [
      "Designed scalable FastAPI microservice architecture for high-throughput video stream ingestion and processing.",
      "Implemented WebSocket connections via Socket.io for real-time live feed delivery to multiple concurrent clients.",
      "Optimized database queries with PostgreSQL indexing and connection pooling, reducing latency from 500ms to 50ms per request.",
    ],
  },
  
  {
    title: "Snoh Fusion",
    description:
      "Full-stack MERN application demonstrating clean architecture patterns. RESTful APIs with proper error handling, JWT auth, and MongoDB optimization.",
    image: "/portfolio/snohfusion.png",
    tags: ["MERN", "Express.js", "MongoDB", "JWT", "Redux"],
    github: null,
    demo: null,
    isdemo: false,
    category: "Professional",
    featured: true,
    company: {
      name: "BM Infotrade",
      logo: "/companies/bminfotrade.png",
      link: "https://snohai.com/products/snoh-fusion/"
    },
    bullets: [
      "Built RESTful API architecture with proper error handling and middleware implementation.",
      "Implemented JWT authentication with secure token refresh logic.",
      "Optimized MongoDB queries with indexing and pagination for performance.",
    ],
  },
  {
    title: "Coreweb Software Solutions",
    description:
      "Modern portfolio website for freelance design agency. Built with Next.js SSR for optimal SEO and CMS integration for dynamic content management.",
    image: "/portfolio/coreweb.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Headless CMS", "SEO"],
    github: null,
    demo: null,
    category: "Professional",
    isdemo: false,
    company: {
      name: "Coreweb Software Solutions",
      logo: "/companies/corewebLogo.png",
      link: "https://corewebsolutions.in/"
    },
    featured: true,
    bullets: [
      "Architected Next.js SSR application with dynamic routes for portfolio projects and blog posts.",
      "Integrated headless CMS for content management, enabling non-technical staff to publish updates.",
      "Implemented SEO optimizations: meta tags, structured data, image optimization, and sitemap generation.",
    ],
  },
  {
    title: "Construction-bazaar",
    description:
      "A smart platform connecting homeowners directly with local shops, material suppliers, and construction experts. We've built this to simplify how people find trusted professionals for building their dream homes.",
    image: "/portfolio/constructionbazaar.webp",
    tags: ["React", "NextJS", "Tailwind CSS", "In-House Venture", "B2B & B2C"],
    github: null,
    demo: "https://constructionbazaar.in/",
    category: "Professional",
    isdemo: true,
    company: {
      name: "Coreweb Software Solutions",
      logo: "/companies/corewebLogo.png",
      link: "https://corewebsolutions.in/"
    },
    featured: true,
    bullets: [
      "Developed a smart platform connecting homeowners directly with local shops and construction experts.",
      "Implemented scalable B2B & B2C features to support material suppliers and end users.",
      "Built with React, NextJS, and Tailwind CSS for a highly responsive user experience."
    ],
  },
  {
    title: "Profile Media",
    description:
      "Profile Media delivers premium raw materials to 500+ clients across India, connecting global brands with local creators through trusted quality and industry-leading standards.",
    image: "/portfolio/profilemedia.gif",
    tags: ["React", "NextJS", "Tailwind CSS", "Framer Motion"],
    github: null,
    demo: "https://profilemedia.in/",
    category: "Professional",
    isdemo: true,
    company: {
      name: "Coreweb Software Solutions",
      logo: "/companies/corewebLogo.png",
      link: "https://corewebsolutions.in/"
    },
    featured: true,
    bullets: [
      "Designed a premium platform to showcase raw materials for 500+ clients across India.",
      "Implemented complex animations using Framer Motion to create a highly engaging visual experience.",
      "Optimized site performance with NextJS SSR to handle high traffic and showcase high-quality media."
    ],
  },
  {
    title: "Sign Pro Media",
    description:
      "A B2B business showcase for a premier signage supply partner. Focused on sourcing excellence, quality assurance, and customer-centric leadership.",
    image: "/portfolio/signpromedia.webp",
    tags: ["React", "NextJS", "Tailwind CSS", "Zoho Begin"],
    github: null,
    demo: "https://signpromedia.in/",
    category: "Professional",
    isdemo: true,
    company: {
      name: "Coreweb Software Solutions",
      logo: "/companies/corewebLogo.png",
      link: "https://corewebsolutions.in/"
    },
    featured: true,
    bullets: [
      "Architected a B2B business showcase focusing on sourcing excellence and quality assurance.",
      "Integrated Zoho Begin CRM to automate lead capture and customer relationship management.",
      "Leveraged React and Tailwind CSS for a clean, professional, and accessible user interface."
    ],
  },
  {
    title: "Rama Poultry Care",
    description:
      "Rama Poultry Care started with a simple mission to provide poultry farmers in Jaipur with access to high-quality, genuine medicines and vaccines.",
    image: "/portfolio/ramapoultry.webp",
    tags: ["React", "NextJS", "Tailwind CSS", "Zoho Begin"],
    github: null,
    demo: "https://ramapoultrycare.com/",
    category: "Professional",
    isdemo: true,
    company: {
      name: "Coreweb Software Solutions",
      logo: "/companies/corewebLogo.png",
      link: "https://corewebsolutions.in/"
    },
    featured: true,
    bullets: [
      "Built a seamless platform allowing poultry farmers in Jaipur to access high-quality medicines.",
      "Connected the front-end with Zoho Begin to manage inventory inquiries and customer data effectively.",
      "Delivered a performant NextJS application tailored for easy navigation by local farmers."
    ],
  },
  // Personal Projects
  {
    title: "DevBandhan",
    description:
      "Real-time developer collaboration platform connecting developers based on expertise. Built with MERN stack featuring Socket.io chat, JWT auth, and Razorpay payments.",
    image: "/portfolio/developer-collaboration-platform.jpg",
    tags: ["MERN", "Socket.io", "JWT", "Razorpay", "Redux"],
    github: "https://github.com/opdsbanasya/DevBandhan.git",
    demo: null,
    isdemo: false,
    category: "Personal",
    featured: false,
    bullets: [
      "Designed real-time messaging system using Socket.io with JWT-based authentication for secure communications.",
      "Integrated Razorpay payment gateway for transaction handling and subscription management.",
      "Implemented role-based access control and profile verification system to ensure quality connections.",
    ],
  },
  {
    title: "NetflixGPT",
    description:
      "AI-powered movie discovery platform. Problem: Finding movies manually is tedious. Solution: Integrated Llama API with TMDB for intelligent recommendations. Result: Users discover relevant movies in seconds.",
    image: "/portfolio/netflixgpt.webp",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Llama API", "Redux", "TMDB API"],
    github: "https://github.com/opdsbanasya/NetflixGPT.git",
    demo: "https://netflixgpt-ec55f.web.app/",
    isdemo: true,
    category: "Personal",
    featured: false,
    bullets: [
      "Integrated TMDB API for real-time movie data and Llama API for AI recommendations.",
      "Implemented Firebase Authentication with Redux state management for seamless UX.",
      "Built responsive UI matching Netflix design with smooth animations and mobile optimization.",
    ],
  },
  
  {
    title: "TGI Hotel Landing Page",
    description:
      "Hotel website with backend integration. Problem: Static landing pages don't capture leads. Solution: Node.js backend with MySQL for form submissions. Result: Automated lead capture and email notifications.",
    image: "/portfolio/hotel.webp",
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/opdsbanasya/TGI-Hotel.git",
    demo: "https://tgi-test.netlify.app/",
    isdemo: true,
    category: "Personal",
    featured: false,
    bullets: [
      "Developed React frontend with Node.js/Express backend for contact form processing.",
      "Connected MySQL database for persistent lead storage and email notifications.",
      "Implemented responsive design with SEO optimization for search visibility.",
    ],
  },
  {
    title: "Aaru Skins - E-commerce",
    description:
      "E-commerce platform with dynamic filtering and cart management. Built with React and Tailwind CSS with local storage persistence.",
    image: "/portfolio/aaru-mart.webp",
    tags: ["React.js", "Tailwind CSS", "Redux"],
    github: "https://github.com/opdsbanasya/Aaru-skins-ecom.git",
    demo: "https://aaruskins.vercel.app/",
    isdemo: true,
    category: "Personal",
    featured: false,
    bullets: [
      "Created dynamic product filtering with Redux state management.",
      "Implemented shopping cart with persistent storage and checkout flow.",
      "Optimized performance with lazy loading and code splitting.",
    ],
  },
  {
    title: "Obys Agency Landing Page",
    description:
      "High-performance agency portfolio with complex animations. Showcasing GSAP scroll and cursor interaction effects.",
    image: "/portfolio/obys-agency.webp",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/opdsbanasya/obys-agency.git",
    demo: "https://opdsbanasya.github.io/obys-agency/",
    isdemo: false,
    category: "Personal",
    featured: false,
    bullets: [
      "Implemented complex GSAP animations for scroll triggers and hover effects.",
      "Designed minimalist agency layout with smooth transitions.",
      "Optimized for 60fps performance on all devices.",
    ],
  },
  {
    title: "Simon Says Game",
    description:
      "Interactive memory game with vanilla JavaScript. Features progressive difficulty and sound feedback.",
    image: "/portfolio/simon-says-game.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/opdsbanasya/simon-game.git",
    demo: "https://opdsbanasya.github.io/simon-game/",
    isdemo: false,
    category: "Personal",
    featured: false,
    bullets: [
      "Built game logic with vanilla JavaScript and state tracking.",
      "Added audio feedback and visual animations for user interactions.",
      "Implemented progressive difficulty levels with score tracking.",
    ],
  },
]
