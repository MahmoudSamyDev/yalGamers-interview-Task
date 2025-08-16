function ClanAvatar({ avatar, name }: { avatar: string; name: string }) {
  return (
    <div className="avatar-container absolute top-[60px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full overflow-hidden border border-[4px] border-[#1E141F]">
      <img
        src={avatar}
        alt={`${name} avatar`}
        className="w-full h-full rounded-full"
      />
    </div>
  );
}

export default ClanAvatar;
