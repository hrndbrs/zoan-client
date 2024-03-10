export const companyProfile = {
  phoneNumber: "+62 817 8888 22",
  address: "Wisma 77, Tower 1 - 15th floor, Jl Letjen S Parman Kav 77",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
};

export const categories = [
  {
    name: "Internet Of Things",
    icon: "/icons/categories/01-iot.svg",
    slug: "internet-of-things",
    imageUrl: "/images/categories/01-iot.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Desktop & Workstation",
    icon: "/icons/categories/02-workstation.svg",
    slug: "desktop-and-workstation",
    imageUrl: "/images/categories/02-desktop&workstation.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Server",
    icon: "/icons/categories/03-server.svg",
    slug: "server",
    imageUrl: "/images/categories/03-server.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "All-In-One PC",
    icon: "/icons/categories/04-desktop-pc.svg",
    slug: "all-in-one-pc",
    imageUrl: "/images/categories/04-all-in-one-pc.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Medium length section goes here",
    slug: "some-other-section",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Notebook",
    icon: "/icons/categories/06-notebook.svg",
    slug: "notebook",
    imageUrl: "/images/categories/06-notebook.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const detailedCategories = [
  {
    name: "Server",
    icon: "/icons/categories/03-server.svg",
    slug: "server",
    imageUrl: "/images/categories/03-server.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    products: [
      {
        name: "Zoan ST160-Z2-PI5",
        type: "Tower",
        thumbnail: "/images/products/DSC00963 1.png",
        slug: "Zoan-ST160-Z2-PI5",
      },
      {
        name: "Zoan ST560-Z2-PS4",
        type: "Tower",
        thumbnail: "/images/products/DSC01112 3.png",
        slug: "Zoan-ST560-Z2-PS4",
      },
      {
        name: "ST160-R502-Z2-RS4",
        type: "Rackmount 1U",
        thumbnail: "/images/products/DSC00944 1.png",
        slug: "ST160-R502-Z2-RS4",
      },
      {
        name: "ST160-R522-Z2-RS12",
        type: "Rackmount 2U",
        thumbnail: "/images/products/DSC00888 1.png",
        slug: "ST160-R522-Z2-RS12",
      },
    ],
  },
  {
    name: "Internet Of Things",
    icon: "/icons/categories/01-iot.svg",
    slug: "internet-of-things",
    imageUrl: "/images/categories/01-iot.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    products: [],
  },
  {
    name: "Notebook",
    icon: "/icons/categories/06-notebook.svg",
    slug: "notebook",
    imageUrl: "/images/categories/06-notebook.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    products: [],
  },
  {
    name: "All In One PC",
    icon: "/icons/categories/04-desktop-pc.svg",
    slug: "all-in-one-pc",
    imageUrl: "/images/categories/04-all-in-one-pc.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    products: [
      {
        name: "Zoan AIO PC EMERALD P200X",
        type: "All in one PC",
        thumbnail: "/images/products/DSC01001 1.png",
        slug: "Zoan-AIO-PC-EMERALD-P200X",
      },
    ],
  },
  {
    name: "Desktop Monitor",
    icon: "/icons/categories/02-workstation.svg",
    slug: "desktop-and-workstation",
    imageUrl: "/images/categories/02-desktop&workstation.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    products: [
      {
        name: "Zoan Workstation PC",
        type: "Workstation",
        thumbnail: "/images/products/WKST002 1.png",
        slug: "Zoan-Workstation-PC",
      },
      {
        name: "Zoan Monitor (19.5”, 21.5”,23.8”)",
        type: "Monitor",
        thumbnail: "/images/products/MNTR001 1.png",
        slug: "Zoan-Monitor-(19.5”,21.5”,23.8”)",
      },
    ],
  },
];

export type CategoryType = (typeof categories)[number];
