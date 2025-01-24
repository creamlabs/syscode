import { useState } from "react";
import { ComponentCategory, MenuBar } from "./menu/menubar";
import { LockButton } from "./menu/lock-button";

export const DesignComponent = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ComponentCategory | null>(null);

  const handleDragStart = (type: string, data: any) => {
    // TODO: Implement drag and drop functionality
    console.log("Dragging component:", type, data);
  };
  return (
    <div className="absolute bottom-8 z-50 left-1/2 -translate-x-1/2 flex gap-2 items-center">
      <LockButton />
      <MenuBar />
    </div>
  );
};
