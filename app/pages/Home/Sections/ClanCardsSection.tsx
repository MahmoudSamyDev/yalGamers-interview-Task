import SingleClanCard from "~/componenets/Clans/SingleClanCard";
import clans from "~/utils/data/clans";

function ClanCardsSection() {
  return (
    <div className="clans-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
      {clans.map((clan) => (
        <SingleClanCard key={clan.id} clanData={clan} />
      ))}
    </div>
  );
}

export default ClanCardsSection;
