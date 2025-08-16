import { Dialog } from "radix-ui";
import clanMembers from "~/utils/data/clanMembers";
import SingleMemberCard from "~/componenets/Members/SingleMemberCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import UserGroupIcon from "/assets/icons/user-group.svg";

function MembersDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[8px] bg-[#271D27]">
          <img src={UserGroupIcon} alt="User group" className="w-6 h-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="absolute inset-0 bg-[#100613]/60 backdrop-blur-sm data-[state=open]:animate-[overlayShow_150ms_cubic-bezier(0.16,1,0.3,1)_both]" />
        <Dialog.Content className="gradient-border fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[#1D161F] rounded-[12px] p-[20px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow flex flex-col gap-[14px]">
          <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12 text-white">
            Clan Members
          </Dialog.Title>

          <div className="clanMembers flex flex-col gap-[10px] max-h-[400px] overflow-y-auto scrollbar-clean">
            {clanMembers.map((member) => (
              <SingleMemberCard key={member.id} member={member} />
            ))}
            {clanMembers.map((member) => (
              <SingleMemberCard key={member.id} member={member} />
            ))}
            {clanMembers.map((member) => (
              <SingleMemberCard key={member.id} member={member} />
            ))}
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute -right-2 -top-2.5 inline-flex w-[24px] h-[24px] flex rounded-full text-white items-center justify-center bg-[#342D35]"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} size="sm" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MembersDialog;
