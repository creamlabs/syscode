import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { type ComponentCategory } from "@/features/editor/lib/design-menu";

export const MenuComponent: React.FC<{ category: ComponentCategory }> = ({
  category,
}) => {
  return (
    <div className="relative">
      <button
        key={category.id}
        //onClick={() => onSelectCategory(category)}
        className={cn(
          `p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-0.5`,
          category.variants && "pr-1.5",
        )}
        title={category.label}
      >
        <Icon icon={category.icon} className="w-5 h-5 transition-transform" />
        {category.variants && (
          <Icon icon="chevronUp" className="w-3 h-3 transition-transform" />
        )}
      </button>
    </div>
  );
};

const MenuPopover = () => {
  return <div>MenuPopover</div>;
};
