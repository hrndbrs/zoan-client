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
  },
  {
    name: "Internet Of Things",
    icon: "/icons/categories/01-iot.svg",
    slug: "internet-of-things",
    imageUrl: "/images/categories/01-iot.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Notebook",
    icon: "/icons/categories/06-notebook.svg",
    slug: "notebook",
    imageUrl: "/images/categories/06-notebook.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "All In One PC",
    icon: "/icons/categories/04-desktop-pc.svg",
    slug: "all-in-one-pc",
    imageUrl: "/images/categories/04-all-in-one-pc.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Desktop Monitor",
    icon: "/icons/categories/02-workstation.svg",
    slug: "desktop-and-workstation",
    imageUrl: "/images/categories/02-desktop&workstation.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export type CategoryType = (typeof categories)[number];
