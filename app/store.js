import { create } from 'zustand'

export const useStore = create((set) => ({
    basemap: '',
    setBasemap: (basemap) => set({ basemap }),
  }))