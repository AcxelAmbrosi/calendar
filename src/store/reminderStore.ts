import { create } from "zustand";
import { Reminder, ReminderStore } from "../types/ReminderTypes";
import { startOfToday } from "date-fns";

export const useReminderStore = create<ReminderStore>((set) => ({
  reminders: [],
  addReminder: (newReminder: Reminder) =>
    set((state) => ({
      reminders: [...state.reminders, newReminder],
    })),
  selectedDate: startOfToday(),
  setSelectedDate: (newDate: Date) =>
    set((state) => ({
      ...state,
      selectedDate: newDate,
    })),
}));
