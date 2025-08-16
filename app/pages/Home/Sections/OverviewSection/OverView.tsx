import ClanLevelCard from "~/componenets/Clans/ClanLevelCard";

function OverView() {
  return (
    <div className="clanOverView flex flex-col flex-1 gap-[20px]">
      <div className="flex flex-col gap-[6px]">
        <h2 className="text-xl text-[#FFFFFF]">Overview</h2>
        <p className="text-sm text-[#FFFFFF99]">
          Welcome to the heart-pounding spectacle that is The Red Village
          Survival Championship – an eagerly anticipated annual event that
          unites adventurers and thrill-seekers from diverse backgrounds.
          Nestled in the breathtaking landscapes of the Red Village, this{" "}
          <span className="text-[yellow] cursor-pointer">See More...</span>
        </p>
      </div>

      <ClanLevelCard level={12} points={1200} />
    </div>
  );
}

export default OverView;
