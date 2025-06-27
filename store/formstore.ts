import { create } from "zustand";

interface FormData {
  name: string;
  email: string;
  goal: string;
  preferences: {
    darkMode: boolean;
    updates: boolean;
    notes: string;
  };
}

interface FormState {
  data: FormData;
  currentStep: number;
  setStep: (step: number) => void;
  updateData: (data: Partial<FormData>) => void;
  updatePreferences: (prefs: Partial<FormData["preferences"]>) => void;
}

export const useFormStore = create<FormState>((set) => ({
  currentStep: 1,
  data: {
    name: "",
    email: "",
    goal: "",
    preferences: {
      darkMode: false,
      updates: false,
      notes: "",
    },
  },

  setStep: (step) => set({ currentStep: step }),

  updateData: (data) =>
    set((state) => ({
      data: {
        ...state.data,
        ...data,
      },
    })),

  updatePreferences: (prefs) =>
    set((state) => ({
      data: {
        ...state.data,
        preferences: {
          ...state.data.preferences,
          ...prefs,
        },
      },
    })),
}));
