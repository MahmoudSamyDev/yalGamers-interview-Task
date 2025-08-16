import UserGroupIcon from "/assets/icons/user-group.svg";

function MembersDialogButton() {
  return (
    <button className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[8px] bg-[#271D27]">
      <img src={UserGroupIcon} alt="User group" className="w-6 h-6" />
    </button>
  );
}

export default MembersDialogButton;
