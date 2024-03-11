import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfISOWeek,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useState } from "react";
import { useReminderStore } from "../store/reminderStore";

export const useCalendar = () => {
  const { selectedDate } = useReminderStore();
  const [currentDate, setCurrentDate] = useState(selectedDate);

  const startOfWeekISO = startOfISOWeek(currentDate);

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const goToPrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfWeekISO, i)
  );

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate)),
    end: endOfWeek(endOfMonth(currentDate)),
  });

  return {
    goToNextMonth,
    goToPrevMonth,
    currentDate,
    daysOfWeek,
    daysInMonth,
  };
};
