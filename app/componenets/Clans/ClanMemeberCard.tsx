import ProgressBar from "../UI/ProgressBar";

function ClanMemeberCard({ members }: { members: number }) {
  return (
    <div className="p-[6px] flex flex-col gap-[4px] bg-[#FFFFFF0D] rounded-[8px] w-full">
      <span className="block text-[12px] text-[#FFFFFF99]">Members</span>
      <span className="block text-[14px] text-white ">
        {members}
        <span className="text-[#FFFFFF99]">/50</span>
      </span>
      <ProgressBar percentage={60} colorFrom="#56FFF7" colorTo="#208E88" />
    </div>
  );
}

export default ClanMemeberCard;
