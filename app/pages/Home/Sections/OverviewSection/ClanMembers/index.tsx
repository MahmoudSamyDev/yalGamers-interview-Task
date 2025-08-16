import SingleMemberCard from "../../../../../componenets/Members/SingleMemberCard";
import clanMembers from "~/utils/data/clanMembers";
import MembersDialog from "./MembersDialog";

function ClanMembers() {
  return (
    <div className="relative flex flex-col gap-[10px] flex-1">
      <div className="flex justify-end">
        <MembersDialog />
      </div>
      <div className="relative min-h-[400px] rounded-[8px] overflow-hidden p-[16px]">
        <div className="absolute inset-0 rounded-[8px] bg-gradient-to-r from-white/6 to-white/0 backdrop-blur-[30px]" />
        <div className="pointer-events-none absolute inset-0 rounded-[8px] ring-1 ring-white/5" />
        <div className="relative h-full flex flex-col gap-[12px]">
          <header className="flex justify-between">
            <span className="text-base text-white/90">Clan Members</span>
            <span className="text-sm text-white/60">12</span>
          </header>

          <div className="clanMembers flex flex-col gap-[10px]">
            {clanMembers.map((member) => (
              <SingleMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClanMembers;
