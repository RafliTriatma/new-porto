export type Project = {
  slug: string;
  title: string;
  role: string;
  period?: string;
  tags: string[];
  summary: string;
  cover: string;
  images?: string[];
  designProcess?: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
    {
    slug: "klikmart",
    title: "KlikMart E-Commerce",
    role: "UI/UX Designer, Front End Developer",
    period: "2025",
    tags: ["E-commerce", "Website"],
    summary:
      "A website that serves to present the company to clients and users, offering insights into the organization as well as available career opportunities.",
    cover: "/bannerklikmart.png",
    links: [{ label: "Go to Website", href: "https://group-project-fe.vercel.app/" }],
  },
  {
    slug: "bej-dashboard",
    title: "BEJ Dashboard",
    role: "UI/UX Designer",
    period: "2024",
    tags: ["Dashboard", "Analytics"],
    summary:
      "A website that serves to present the company to clients and users, offering insights into the organization as well as available career opportunities.",
    cover: "/BEJ.png",
    links: [{ label: "Case Study", href: "/projects/bej-dashboard" }],
    designProcess: [
        "As a UI/UX Designer, my role in this Dashboard Website project was to design the application mockup based on the direction provided by the Supervisor at PT. Pinjaman Kemakmuran Rakyat",
        "I conducted design research on several comparable service-based applications to gain inspiration and insights for the design I was about to develop",
        "Based on the insights gathered, my team and I organized the information using the card sorting technique in FigJam, allowing us to easily determine which features needed to be designed",
        "After gathering all the necessary information, I created a mockup for the client",
      ]
  },
  {
    slug: "klikumkm-app",
    title: "KlikUMKM Mobile App",
    role: "UI/UX Designer",
    period: "2024",
    tags: ["Mobile App", "Fintech", "Design System"],
    summary:
      "An application designed to provide loans for starting a business, as well as to allow users to become investors in other businesses.",
    cover: "/bannerklikapp.png",
    links: [{ label: "Case Study", href: "/projects/klikumkm-app" }],
    designProcess: [
        "As a UI/UX Designer, my role in this Mobile App project was to design the application mockup based on the direction provided by the Supervisor at PT. Pinjaman Kemakmuran Rakyat",
        "I conducted design research on several comparable service-based applications to gain inspiration and insights for the design I was about to develop",
        "Based on the insights gathered, my team and I organized the information using the card sorting technique in FigJam, allowing us to easily determine which features needed to be designed",
        "After gathering all the necessary information, I created a mockup for the client",
      ]
  },
  {
    slug: "klikumkm-dashboard",
    title: "KlikUMKM Dashboard",
    role: "UI/UX Designer",
    period: "2024",
    tags: ["Dashboard", "Fintech", "Analytics"],
    summary:
      "Website dashboard for reporting and loan data management.",
    cover: "/bannerklikdash.png",
    links: [{ label: "Case Study", href: "/projects/klikumkm-dashboard" }],
    designProcess: [
        "As a UI/UX Designer, my role in this Dashboard Website project was to design the application mockup based on the direction provided by the Supervisor at PT. Pinjaman Kemakmuran Rakyat",
        "I conducted design research on several comparable service-based applications to gain inspiration and insights for the design I was about to develop",
        "Based on the insights gathered, my team and I organized the information using the card sorting technique in FigJam, allowing us to easily determine which features needed to be designed",
        "After gathering all the necessary information, I created a mockup for the client",
      ]
  },
  {
    slug: "klikumkm-website",
    title: "KlikUMKM Company Website",
    role: "UI/UX Designer",
    period: "2024",
    tags: ["Website", "Company Profile", "Fintech"],
    summary:
      "A website designed to introduce the company to clients and users, allowing them to access information about the company.",
    cover: "/bannerwebklik.png",
    links: [{ label: "Case Study", href: "/projects/klikumkm-website" }],
    designProcess: [
        "As a UI/UX Designer, my role in this Website project was to design the website mockup based on the guidance provided by the Supervisor at PT. Pinjaman Kemakmuran Rakyat",
        "I conducted design research on several similar service provider websites to gather ideas for the design I was going to create. I also explored various template references on platforms like Pinterest and Dribbble to gain inspiration and insights for the design",
        "From the insights gathered, I compiled all the necessary documents and identified the required features, which allowed me to easily determine which features needed to be designed",
        "After gathering all the necessary information, I created a mockup for the client",
      ]
  },
  {
    slug: "iat-website",
    title: "IAT Company Website",
    role: "UI/UX Designer",
    period: "2024",
    tags: ["Website", "Company Profile", "Corporate"],
    summary:
      "A website that serves to present the company to clients and users, offering insights into the organization as well as available career opportunities.",
    cover: "/banneriat.png",
    links: [{ label: "Case Study", href: "/projects/iat-website" }],
    designProcess: [
        "As a UI/UX Designer, my role in this Website project was to design the website mockup based on the guidance provided by the Supervisor and the Project Manager Officer",
        "I conducted design research on several websites in the same line of business and explored various template references on platforms like Pinterest and Dribbble to gather inspiration and insights for the design I was about to develop",
        "From the insights gathered, I compiled all the necessary documents and identified the required features, which allowed me to easily determine which features needed to be designed",
        "After gathering all the necessary information, I created a mockup for the client",
      ]
  },
  {
    slug: "bagxeci-dashboard",
    title: "BAGxECI Dashboard",
    role: "UI/UX Designer",
    period: "2023",
    tags: ["Dashboard", "B2B", "Analytics"],
    summary:
      "Data-heavy dashboard for distribution management (DMS): clearer IA, modular widgets, and improved decision speed.",
    cover: "/bagxeci.png",
    links: [{ label: "Case Study", href: "/projects/bagxeci-dashboard" }],
    designProcess: [
        "As a UI/UX Designer, my role in this Dashboard Website project was to design the website mockup based on the guidance provided by the Supervisor and the Project Manager Officer",
        "I conducted design research on several websites in the same line of business and explored various template references on platforms like Pinterest and Dribbble to gather inspiration and insights for the design I was about to develop",
        "From the insights gathered, I compiled all the necessary documents and identified the required features, which allowed me to easily determine which features needed to be designed",
        "After gathering all the necessary information, I created a mockup for the client",
      ]
  }, 
  {
    slug: "yuan-garden-hotel",
    title: "Yuan Garden Hotel Mobile",
    role: "UI/UX Designer",
    period: "2022",
    tags: ["Mobile App", "Hospitality", "Booking"],
    summary:
      "An application intended for prospective users who want to become a part of Yuan Garden Hotel and receive the benefits it offers.",
    cover: "/banneryuan.png",
    links: [{ label: "Case Study", href: "/projects/yuan-garden-hotel" }],
    designProcess: [
        "As a UI/UX Designer, my role in the Yuan Garden project was to design the application mockup based on the guidance provided by the Product Owner and Project Manager at Yuan Garden. The brief was usually delivered through Google Meet and Zoom meetings",
        "There were several methods I used to gain insights. One of them was by collaborating with the business analyst team to gather business-related insights, and conducting comparative analysis to identify which features needed to be designed and which ones could be excluded",
        "Based on the insights gathered, my team and I organized the information using the card sorting technique in FigJam, which helped us easily determine which features needed to be designed",
        "From the insights gathered, my team and I organized the information using the card sorting technique in FigJam, which allowed us to easily identify which features needed to be designed",
      ]
  }
];
