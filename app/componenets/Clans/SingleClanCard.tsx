import type { Clan_TP } from "../../utils/Types";
import ClanAvatar from "./ClanAvatar";
import ClanCover from "./ClanCover";
import ClanContent from "./ClanContent";
import ClanJoinType from "../UI/ClanJoinType";

function SingleClanCard({ clanData }: { clanData: Clan_TP }) {
  const { joinType, cover, avatar, name, description, level, members } =
    clanData;
  return (
    <div className="relative flex-1 h-[314px] rounded-[12px] overflow-hidden flex justify-end items-center">
      <div className="absolute inset-0 bg-[#271D27]/40 backdrop-blur-[20px]" />
      <div
        className="pointer-events-none absolute inset-0 rounded-[12px] p-px
              [background:linear-gradient(90deg,rgba(238,176,254,0.4),rgba(142,105,152,0))]
              [mask:linear-gradient(#000,#000) content-box,linear-gradient(#000,#000)]
              [mask-composite:exclude]"
      />
      <div className="relative w-[calc(100%_-_1px)] h-[calc(100%_-_1px)] bg-[#271D27] rounded-[12px] overflow-hidden flex flex-col justify-between">
        <ClanJoinType content={joinType} />
        <ClanAvatar avatar={avatar} name={name} />
        <ClanCover cover={cover} name={name} />
        <ClanContent
          name={name}
          description={description}
          level={level}
          members={members}
        />
      </div>
    </div>
  );
}

export default SingleClanCard;
