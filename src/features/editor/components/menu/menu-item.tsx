import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import {
  ComponentCategoryId,
  type ComponentCategory,
} from "@/features/editor/lib/design-menu";
import { useMenuStore } from "@/features/editor/store/menuStore";

const hasVariants = (
  category: ComponentCategory,
): category is ComponentCategory & {
  variants: NonNullable<ComponentCategory["variants"]>;
} => !!category.variants;

export const MenuComponent: React.FC<{ category: ComponentCategory }> = ({
  category,
}) => {
  const { openedCategory, setOpenedCategory } = useMenuStore();

  const isOpen = openedCategory === category.id;
  const shouldShowPopover = isOpen && hasVariants(category);

  const handleClick = () => {
    setOpenedCategory(
      openedCategory === (category.id as ComponentCategoryId)
        ? null
        : (category.id as ComponentCategoryId),
    );
  };

  return (
    <div className="relative">
      <button
        key={category.id}
        onClick={handleClick}
        className={cn(
          `p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-0.5`,
          category.variants && "pr-1.5",
          openedCategory === category.id && "bg-gray-100",
        )}
        title={category.label}
      >
        <Icon icon={category.icon} className="w-5 h-5 transition-transform" />
        {category.variants && (
          <Icon
            icon="chevronUp"
            className={cn(
              `w-3 h-3 transition-transform`,
              isOpen && "rotate-180",
            )}
          />
        )}
      </button>
      {shouldShowPopover && <MenuPopover variants={category.variants} />}
    </div>
  );
};

interface MenuPopoverProps {
  variants: NonNullable<ComponentCategory["variants"]>;
}

const MenuPopover = ({ variants }: MenuPopoverProps) => {
    const { setSelectedComponent } = useMenuStore();

    const handlePopoverClick = () => {

    }

  return (
    <div className="grid absolute bottom-full mb-2 bg-white p-1 rounded-md shadow-lg w-max border">
      {variants.map((variant) => (
        <button
          key={variant.id}
          onClick={handlePopoverClick}
          className={cn(
            `p-2 rounded-md hover:bg-gray-100 text-left text-sm pr-16`,
            //selectedComponent?.variant === variant.id && "bg-blue-50 text-blue-600",
          )}
        >
          {variant.label}
        </button>
      ))}
    </div>
  );
};
