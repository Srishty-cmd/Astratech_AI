import { NavItem } from "@/types/common";

export const navigation: NavItem[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "COURSES",
    href: "/courses",
  },
  {
    label: "PROJECTS",
    href: "/projects",
  },
  {
    label: "DEVELOPERS",
    href: "/developers",
  },
  {
    label: "MEDIA",
    href: "/#media",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export const footerSections: { title: string; links: NavItem[] } = {
  title: "[SECTIONS_INDEX]",
  links: [
    { label: "// ABOUT", href: "/about" },
    { label: "// COURSES", href: "/courses" },
    { label: "// DEVELOPERS", href: "/developers" },
    { label: "// PROJECTS", href: "/projects" },
    { label: "// EVENTS", href: "/#events" },
    { label: "// MEDIA", href: "/#media" },
    { label: "// CONTACT", href: "/contact" },
  ],
};

export const footerRegulatory: { title: string; links: NavItem[] } = {
  title: "[REGULATORY]",
  links: [
    { label: "// PRIVACY_POLICY", href: "#" },
    { label: "// TERMS_OF_SERVICE", href: "#" },
    { label: "// REFUND_POLICY", href: "#" },
  ],
};
