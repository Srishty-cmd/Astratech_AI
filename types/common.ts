export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  systemTag: string;
  labLocation: string;
  coordinates: string;
  status: string;
  clock: string;
  defenseAuth: string;
  address: string;
  email: string;
  directorEmail: string;
  phone: string;
  socialLinks: SocialLink[];
}

export interface MetricItem {
  value: string;
  label: string;
  highlight?: string;
}

export interface PipelineStage {
  id: string;
  step: string;
  title: string;
  description: string;
}
