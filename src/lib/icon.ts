import {
  Lock,
  Unlock,
  ChevronUp,
  MonitorSmartphone,
  Server,
  Database,
  Network,
  Cloud,
  Globe,
  Cpu,
  Fingerprint,
} from "lucide-react";

const icons = {
  lock: Lock,
  unlock: Unlock,
  chevronUp: ChevronUp,
  client: MonitorSmartphone,
  server: Server,
  database: Database,
  network: Network,
  cloud: Cloud,
  globe: Globe,
  cpu: Cpu,
  auth: Fingerprint,
};
export type IconType = keyof typeof icons;
export default icons;
