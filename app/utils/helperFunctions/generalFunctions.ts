import UserGroupIcon from "~/icons/user-group.svg?react";
import AddUserIcon from "~/icons/add-team.svg?react";

import type { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";

type ClanType = string;

interface ClanTypeStyles {
  icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
  colorFrom: string;
  colorTo: string;
}

export function getClanTypeStyles(type: ClanType): ClanTypeStyles {
  let styles: ClanTypeStyles = {
    icon: UserGroupIcon,
    colorFrom: "",
    colorTo: "",
  };

  if (type === "Public") {
    styles.icon = UserGroupIcon;
    styles.colorFrom = "#1CA92A";
    styles.colorTo = "#0B4311";
  } else if (type === "Invite Only") {
    styles.icon = AddUserIcon;
    styles.colorFrom = "#D72121";
    styles.colorTo = "#771515";
  }

  return styles;
}
