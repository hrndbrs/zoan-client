export const companyProfile = {
  phoneNumber: "+62 817 8888 22",
  address: "Wisma 77, Tower 1 - 15th floor, Jl Letjen S Parman Kav 77",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  // aboutUs:
  //   "<b>Zoan Computing</b> is the most up to date technology with Integrated Solution through research & development from the experts team to produce Infrastructure Technology in servers, storage, workstations, Internet of Things and also Client Computing.\r\n\r\nBased on the needs of the user, Zoan computing is very flexible in terms of customization. The needs of customers with the latest technology at very affordable prices, make Zoan Computing one of the preferable choices in computing for the future.\r\n\r\nThe combination of solutions with software solutions such as Hyper Converged Technology, Artificial Intelligence Technology, Software Define Storage and even building applications to provide solutions that cannot be done by humans will make the Internet of Things an alternative choice for solving problems in various fields of life. State-of-the-Art technology, Zoan Computing is here to provide comprehensive solutions, making our lives better in the present and the future.",
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

export type CategoryType = (typeof categories)[number];
