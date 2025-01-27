import { create } from "zustand";
import { ComponentCategoryId } from "@/features/editor/lib/design-menu";

interface MenuStore {
  isLocked: boolean;
  selectedComponent: ComponentCategoryId | null;
  openedCategory: ComponentCategoryId | null;
  setIsLocked: () => void;
  setSelectedComponent: (value: ComponentCategoryId | null) => void;
  setOpenedCategory: (value: ComponentCategoryId | null) => void;
}

export const useMenuStore = create<MenuStore>()((set) => ({
  isLocked: false,
  selectedComponent: null,
  openedCategory: null,
  setIsLocked: () => set((state) => ({ isLocked: !state.isLocked })),
  setSelectedComponent: (value) => set({ selectedComponent: value }),
  setOpenedCategory: (value) => set({ openedCategory: value }),
}));
