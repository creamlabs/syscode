import React from "react";
import {
  COMPONENT_CATEGORIES,
  type ComponentCategory,
} from "@/features/editor/lib/design-menu";
import { MenuComponent } from "./menu-item";

interface MenuBarProps {
  onSelectCategory: (category: ComponentCategory) => void;
  selectedCategory: ComponentCategory | null;
}

//export const MenuBar: React.FC<MenuBarProps> = ({
//  onSelectCategory,
//  selectedCategory,
//}) => {
export const MenuBar = () => {
  return (
    <div className="border bg-white rounded-md shadow-lg p-1">
      <div className="flex gap-1">
        {COMPONENT_CATEGORIES.map((category) => (
          <MenuComponent category={category} />
        ))}
      </div>
    </div>
  );
};
