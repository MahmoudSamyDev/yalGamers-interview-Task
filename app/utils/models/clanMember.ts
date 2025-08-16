class ClanMember {
  id: string;
  avatar: string;
  name: string;
  username: string;
  role?: string;

  constructor(
    id: string,
    avatar: string,
    name: string,
    username: string,
    role?: string
  ) {
    this.id = id;
    this.avatar = avatar;
    this.name = name;
    this.username = username;
    this.role = role;
  }
}

export default ClanMember;
