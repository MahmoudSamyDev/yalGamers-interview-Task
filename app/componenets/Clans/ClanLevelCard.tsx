import ProgressBar from "../UI/ProgressBar";

function ClanLevelCard({ level, points }: { level: number; points?: number }) {
  return (
    <div
      className={`${points ? "p-[12px]" : "p-[6px]"} flex flex-col gap-[4px] bg-[#FFFFFF0D] rounded-[8px] w-full`}
    >
      <span className="block text-[12px] text-[#FFFFFF99]">Clan Level</span>
      <div className="flex items-center justify-between">
        <span className="block text-[14px] text-white ">{level}</span>
        {points && (
          <span className="block text-[14px] text-white ">{points}/380</span>
        )}
      </div>
      <ProgressBar percentage={80} colorFrom="#549BFF" colorTo="#1E60BB" />
    </div>
  );
}

export default ClanLevelCard;
