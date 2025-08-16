import type { ClanMember_TP } from "~/utils/Types";
import MemberRole from "../../pages/Home/Sections/OverviewSection/ClanMembers/MemberRole";

function SingleMemberCard({ member }: { member: ClanMember_TP }) {
  const { name, username, avatar, role } = member;
  return (
    <div className="relative w-full rounded-[6px] h-[61px] p-[10px] flex justify-between items-center bg-[#FFFFFF0A]">
      <div className="memberDetails flex gap-[12px]">
        <div className="avatar w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={avatar}
            alt={`${name} cover`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="memberName">
          <h3 className="text-base text-white">{name}</h3>
          <p className="text-[#FFFFFF66] text-sm">{username}</p>
        </div>
      </div>
      {role && <MemberRole role={role} />}
    </div>
  );
}

export default SingleMemberCard;
