export type Clan_TP = {
  id: string;
  joinType: string;
  cover: string;
  avatar: string;
  name: string;
  description: string;
  level: number;
  members: number;
};
export type ClanMember_TP = {
  id: string;
  avatar: string;
  name: string;
  username: string;
  role?: string;
};
