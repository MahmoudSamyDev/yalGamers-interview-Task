class Clan {
  id: string;
  joinType: string;
  cover: string;
  avatar: string;
  name: string;
  description: string;
  level: number;
  members: number;

  constructor(
    id: string,
    joinType: string,
    cover: string,
    avatar: string,
    name: string,
    description: string,
    level: number,
    members: number
  ) {
    this.id = id;
    this.joinType = joinType;
    this.cover = cover;
    this.avatar = avatar;
    this.name = name;
    this.description = description;
    this.level = level;
    this.members = members;
  }
}

export default Clan;
