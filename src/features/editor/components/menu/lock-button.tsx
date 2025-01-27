import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/features/editor/store/menuStore";

export const LockButton = () => {
  const { isLocked, setIsLocked } = useMenuStore();

  const handleClick = () => {
    setIsLocked();
  };

  return (
    <button
      className={cn(
        "p-2 rounded-md transition-colors  border shadow-lg",
        isLocked && "bg-blue-100 text-blue-600",
        !isLocked && "bg-white hover:bg-gray-100",
      )}
      onClick={handleClick}
    >
      <Icon icon={isLocked ? "lock" : "unlock"} className="w-5 h-5" />
    </button>
  );
};
