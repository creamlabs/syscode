import { MenuBar } from "./menu/menubar";
import { LockButton } from "./menu/lock-button";

export const DesignComponent = () => {
  return (
    <div className="absolute bottom-8 z-50 left-1/2 -translate-x-1/2 flex gap-2 items-center">
      <LockButton />
      <MenuBar />
    </div>
  );
};
