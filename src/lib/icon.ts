import {
  Lock,
  Unlock,
  ChevronUp,
  type Icon as LucideIconType,
} from "lucide-react";

const icons = {
  lock: Lock,
  unlock: Unlock,
  chevronUp: ChevronUp,
};
export type IconType = typeof LucideIconType;
export default icons;
