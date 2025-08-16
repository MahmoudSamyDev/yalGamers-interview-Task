import ClanMember from "../models/clanMember";
import MemeberAvatar from "/assets/members/memberAvatar.webp";

const clanMembers: ClanMember[] = [
  new ClanMember("1", MemeberAvatar, "Mousa al Khourey", "mousa583", "Leader"),
  new ClanMember("2", MemeberAvatar, "Sara Al Farsi", "sara_f"),
  new ClanMember("3", MemeberAvatar, "Ahmed Al Nasser", "ahmedn"),
  new ClanMember("4", MemeberAvatar, "Layla Al Rashid", "layla_r"),
  new ClanMember("5", MemeberAvatar, "Omar Al Jaber", "omarj"),
];

export default clanMembers;
