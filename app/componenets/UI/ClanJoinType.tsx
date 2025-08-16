import UserGroupIcon from "~/icons/user-group.svg?react";
import { getClanTypeStyles } from "~/utils/helperFunctions/generalFunctions";

function ClanJoinType({ content }: { content: string }) {
  const { colorFrom, colorTo, icon: ClanIcon } = getClanTypeStyles(content);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
      }}
      className="w-[fit-content] flex gap-[5px] items-center py-[4px] px-[8px] text-center content-center absolute top-[10px] left-[10px] rounded-[100px] text-white"
    >
      <ClanIcon className="size-5 text-white" />
      {content}
    </div>
  );
}

export default ClanJoinType;
