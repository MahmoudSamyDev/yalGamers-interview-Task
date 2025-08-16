import ClanLevelCard from "./ClanLevelCard";
import ClanMemeberCard from "./ClanMemberCard";
import JoinClanButton from "../UI/JoinClanButton";
function ClanContent({
  name,
  description,
  level,
  members,
}: {
  name: string;
  description: string;
  level: number;
  members: number;
}) {
  return (
    <div className="content-container px-[10px] w-full px-[10px] pb-[10px] flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <h3 className="text-base font-semibold text-center text-white">
          {name}
        </h3>
        <p className="text-xs text-center text-[#8EC9ED]">{description}</p>
      </div>
      <div className="flex justify-between gap-[10px]">
        <ClanLevelCard level={level} />
        <ClanMemeberCard members={members} />
      </div>
      <JoinClanButton />
    </div>
  );
}

export default ClanContent;
