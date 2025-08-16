import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MemberRole({ role }: { role: string }) {
  return (
    <div className="memberLevel bg-[#1FD0311A] rounded-[100px] text-[#1FD031] text-xs py-[3px] px-[4px]">
      <div className="flex items-center gap-[4px]">
        <FontAwesomeIcon icon={faStar} />
        {role}
      </div>
    </div>
  );
}

export default MemberRole;
