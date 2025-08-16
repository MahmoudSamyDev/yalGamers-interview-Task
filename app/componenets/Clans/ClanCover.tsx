function ClanCover({ cover, name }: { cover: string; name: string }) {
  return (
    <img
      src={cover}
      alt={`${name} cover`}
      className="w-full h-[100px] object-cover"
    />
  );
}

export default ClanCover;
