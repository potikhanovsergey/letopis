export interface ProfileTabsProps {
  tabs: ProfileTab[];
  profileId: string;
  isCurrentUser: boolean;
}

export interface ProfileTab {
  label: string;
  href: string;
}
