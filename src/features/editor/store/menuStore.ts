import { create } from "zustand";
import { ComponentCategoryId } from "@/features/editor/lib/design-menu";

type SelectedComponent = {
  id: ComponentCategoryId;
  variant?: string;
};

interface MenuStore {
  isLocked: boolean;
  selectedComponent: SelectedComponent | null;
  openedCategory: ComponentCategoryId | null;
  setIsLocked: () => void;
  setSelectedComponent: (value: SelectedComponent | null) => void;
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
