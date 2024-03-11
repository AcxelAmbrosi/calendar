export interface Reminder {
  title: string;
  note: string;
  city: string;
  time: Date;
}

export interface ReminderStore {
  reminders: Reminder[];
  addReminder: (newReminder: Reminder) => void;
  setSelectedDate: (newDate: Date) => void;
  selectedDate: Date;
}
