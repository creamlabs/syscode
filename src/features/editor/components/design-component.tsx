import { useState } from "react";
import { ComponentCategory, MenuBar } from "./menu/menubar";
import { Sidebar } from "./menu/sidebar";

export const DesignComponent = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ComponentCategory | null>(null);

  const handleDragStart = (type: string, data: any) => {
    // TODO: Implement drag and drop functionality
    console.log("Dragging component:", type, data);
  };
  return (
    <>
      <MenuBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Sidebar
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onDragStart={handleDragStart}
      />
    </>
  );
};
