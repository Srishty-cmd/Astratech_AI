export interface DeveloperLink {
  label: string;
  url: string;
  primary: boolean;
}

export interface Developer {
  id: string;
  tag: string;
  code: string;
  name: string;
  role: string;
  reticleTop: string;
  reticleBottom: string;
  avatar: string;
  bio: string;
  focus: string;
  metaFocus: string;
  metaBuilding: string;
  metaBased: string;
  status?: string;
  experience: string;
  education: string;
  links: DeveloperLink[];
}

export interface DirectiveItem {
  num: string;
  title: string;
  desc: string;
  sub: string;
}

export interface CommunityActivityItem {
  actTag: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AllocatedSeatItem {
  seatId: string;
  code: string;
  title: string;
  status: string;
  description: string;
  requirement: string;
  queueStatus: string;
}
