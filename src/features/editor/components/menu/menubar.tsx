import { COMPONENT_CATEGORIES } from "@/features/editor/lib/design-menu";
import { MenuComponent } from "./menu-item";

export const MenuBar = () => {
  return (
    <div className="border bg-white rounded-md shadow-lg p-1">
      <div className="flex gap-1">
        {COMPONENT_CATEGORIES.map((category) => (
          <MenuComponent key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
