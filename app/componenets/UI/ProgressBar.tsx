function ProgressBar({
  percentage,
  colorFrom,
  colorTo,
}: {
  percentage: number;
  colorFrom: string;
  colorTo: string;
}) {
  return (
    <div className="w-full h-[4px] rounded-[100px] overflow-hidden bg-[#FFFFFF1A]">
      <span
        style={{
          width: `${percentage}%`,
          backgroundImage: `linear-gradient(to left, ${colorFrom}, ${colorTo})`,
        }}
        className={`block h-full rounded-[100px] overflow-hidden`}
      ></span>
    </div>
  );
}

export default ProgressBar;
