import { format } from "date-fns";
import { useReminderStore } from "../store/reminderStore";
import { ReminderCard } from "./ReminderCard";
import { FORMAT_SIMPLE_DATE } from "../config/config";

export const Reminders = () => {
  const { reminders, selectedDate } = useReminderStore();

  return (
    <div className="w-1/2 mx-10 h-[800px] shadow-xl p-6 overflow-auto flex flex-col">
      <h1 className="text-2xl font-semibold mb-4">Reminders</h1>
      <div className="flex flex-wrap  ">
        {reminders.map(
          (data, index) =>
            format(data.time, FORMAT_SIMPLE_DATE) ===
              format(selectedDate, FORMAT_SIMPLE_DATE) && (
              <ReminderCard
                key={index}
                time={data.time}
                city={data.city}
                title={data.title}
                note={data.note}
              />
            )
        )}
      </div>
    </div>
  );
};
