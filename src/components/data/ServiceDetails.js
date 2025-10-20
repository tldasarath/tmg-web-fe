import { Lightbulb, FileText, Plus, Rocket } from "lucide-react";
  
  export const services = [
    {
      icon: "/assets/images/icons/icons8-business1.png",
      title: "Mainland\nBusiness Setup",
      description:
        "Register with Dubai's Department of Economic Development (DED) and access the entire UAE market.",
    },
    {
      icon: "/assets/images/icons/icons8-business2.png",
      title: "Freezone\nBusiness Setup",
      description:
        "100% foreign ownership, tax exemptions, and simplified import/export processes.",
    },
    {
      icon: "/assets/images/icons/icons8-business3.png",
      title: "Offshore\nBusiness Setup",
      description: "Ideal for asset protection, privacy, and global trade.",
    },
    {
      icon: "/assets/images/icons/icons8-business4.png",
      title: "Trade\nLicense Processing",
      description:
        "Fast approval for commercial, industrial, or professional activities.",
    },
    {
      icon: "/assets/images/icons/icons8-business5.png",
      title: "PRO & Visa\nServices",
      description: "Hassle-free investor and employee visa arrangements.",
    },
  ];

  export const processSteps = [
    { icon: Lightbulb, label: "Idea" },
    { icon: FileText, label: "Planning" },
    { icon: Plus, label: "License" },
    { icon: Rocket, label: "Launch" },
  ];

export const ServiceDetails = [
  {
    id: 1,
    title: "BUSINESS SETUP IN DUBAI",
    description1: `Starting a business in Dubai is one of the smartest investments you can make — but understanding 
    the process requires local expertise. At TMG Global, we simplify your business setup journey from start to finish, 
    offering a one-stop solution that saves you time, effort, and unnecessary costs.`,

    description2: `Dubai’s thriving economy, world-class infrastructure, and investor-friendly environment make it a 
    global hub for entrepreneurs and businesses seeking long-term growth. With options like Mainland, Freezone, 
    and Offshore setups, the UAE provides flexibility for every type of venture.`,

    description3: `At TMG Global, we handle all documentation, approvals, and licensing — ensuring your business launches 
    smoothly and in full compliance with UAE regulations. Our goal is to turn your vision into a successful and sustainable enterprise.`,

    sections: [
      {
        id: "section1",
        title: "Your Gateway to the UAE Market",
        headline: "Why Set Up Your Business in the UAE?",
        content: `The UAE is more than a destination — it’s a global business hub connecting the East and West. With 100% foreign ownership in many sectors, 
        tax-free income, and easy access to international markets, the UAE provides the perfect environment for entrepreneurs, investors, 
        and corporations to grow. Whether you’re launching a new brand or expanding globally, Dubai’s ecosystem offers endless opportunities for success.`,
      },
      {
        id: "section2",
        title: "Our Comprehensive Business Setup Services",
        headline: "From Concept to Launch — We Handle Everything",
        content: `TMG Global provides complete business setup solutions, guiding you through each step with clarity and precision. 
        Our experts manage all requirements, helping you choose the best structure and jurisdiction for your goals.`,
        services: [
          {
            id: 1,
            icon: "/assets/icons/mainland-icon.png",
            name: "Mainland Business Setup",
            description:
              "Register with Dubai’s Department of Economic Development (DED) and access the entire UAE market.",
          },
          {
            id: 2,
            icon: "/assets/icons/mainland-icon.png",
            name: "Freezone Business Setup",
            description:
              "100% foreign ownership, tax exemptions, and simplified import/export processes.",
          },
          {
            id: 3,
            icon: "/assets/icons/mainland-icon.png",
            name: "Offshore Business Setup",
            description:
              "Ideal for asset protection, privacy, and global trade.",
          },
          {
            id: 4,
            icon: "/assets/icons/mainland-icon.png",
            name: "Trade License Processing",
            description:
              "Fast approval for commercial, industrial, or professional activities.",
          },
          {
            id: 5,
            icon: "/assets/icons/mainland-icon.png",
            name: "PRO & Visa Services",
            description: "Hassle-free investor and employee visa arrangements.",
          },
        ],
      },
      {
        id: "section3",
        title: "Why Choose TMG Global for Your Business Setup?",
        headline: "The TMG Global Advantage",
        content: ` TMG Global stands out through transparency, expertise, and commitment. Our team understands the UAE’s business landscape 
        inside out, ensuring fast and compliant results for every client. We offer`,
        features: [
          {
            id: 1,
            content: `Dedicated business consultants for every setup.`,
          },
          {
            id: 2,
            content: `100% clarity on timelines, costs, and documentation.`,
          },
          {
            id: 3,
            content: `Strong partnerships with UAE government authorities.`,
          },
          {
            id: 4,
            content: `Personalized business solutions designed for long-term success.`,
          },
        ],
      },
      {
        id: "section4",
        title: "Frequently Asked Questions (FAQ)",
        headline: "Frequently Asked Questions",
        faqs: [
          {
            question: `What is the difference between Mainland and Freezone business setup?`,
            answer: `Mainland companies can trade within the UAE and internationally, while Freezone 
        companies offer 100% ownership, no customs duty, and are ideal for import/export and global operations.`,
          },
          {
            question: `How long does the setup process take?`,
            answer: `Typically, a business setup in Dubai takes between 5 to 15 working days, depending on the jurisdiction and activity type.`,
          },
        ],
      },
    ],
  },
];
