import OverView from "./OverView";
import ClanMembers from "./ClanMembers";

function ClanOverviewSection() {
  return (
    <div className="relative flex flex-col md:flex-row justify-between gap-[40px]">
      <OverView />
      <ClanMembers />
    </div>
  );
}

export default ClanOverviewSection;
