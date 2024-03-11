import { format } from "date-fns";
import { useState } from "react";
import { useReminderStore } from "../store/reminderStore";
import { FORMAT_DATE_FULL } from "../config/config";
interface CalendarDaysProps {
  daysOfWeek: Date[];
  daysInMonth: Date[];
}
export const CalendarDays: React.FC<CalendarDaysProps> = ({
  daysOfWeek,
  daysInMonth,
}) => {
  const [selectedDay, setSelectedDay] = useState<Date | null>();
  const { selectedDate, setSelectedDate } = useReminderStore();
  const handleDateChange = (day: Date) => {
    setSelectedDay(day);
    setSelectedDate(day);
  };

  return (
    <div className="w-[500px] h-[350px] ">
      <div className="flex font-bold mb-2 mt-3 text-green-400 items-center justify-center">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center flex-grow-0 p-3 basis-[14%]">
            {format(day, "EE").toUpperCase()}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap overflow-x-hidden mt-3 items-center justify-center ">
        {daysInMonth.map((day, index) => (
          <div
            className={`${
              format(selectedDate, FORMAT_DATE_FULL) ===
                format(day, FORMAT_DATE_FULL) && selectedDay !== null
                ? "bg-green-400 hover:bg-green-600 text-white rounded-full p-3 basis-[14%] flex  items-center justify-center"
                : "hover:bg-slate-100 p-3 rounded-full basis-[14%] flex-grow-0 flex items-center justify-center"
            }`}
            key={index}
            onClick={() => handleDateChange(day)}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};
