import React from "react";
import type { ComponentCategory } from "./menubar";

interface SidebarProps {
  category: ComponentCategory | null;
  onClose: () => void;
  onDragStart: (type: string, data: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  category,
  onClose,
  onDragStart,
}) => {
  if (!category) return null;

  return (
    <div className="absolute right-0 top-0 h-full w-64 bg-white border-l shadow-lg z-40 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{category.label} Components</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ×
        </button>
      </div>

      <div className="space-y-2">
        {category.variants.map((variant) => (
          <div
            key={variant.id}
            draggable
            onDragStart={(e) => {
              onDragStart(variant.id, {
                label: variant.label,
                type: category.id,
                variant: variant.id,
              });
            }}
            className="p-3 border rounded-md hover:bg-gray-50 cursor-move"
          >
            <div className="font-medium">{variant.label}</div>
            {variant.description && (
              <div className="text-sm text-gray-500">{variant.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
