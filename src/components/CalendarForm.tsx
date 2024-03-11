import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { calendarSchema } from "../schema/calendarSchema";
import { format, setHours, setMinutes } from "date-fns";
import { useReminderStore } from "../store/reminderStore";
import { Reminder } from "../types/ReminderTypes";

type Inputs = {
  city: string;
  title: string;
  note: string;
  hours: string;
  minutes: string;
};

interface CalendarFormProps {
  modalHandler: () => void;
  reminder?: Reminder;
}

export const CalendarForm: React.FC<CalendarFormProps> = ({
  modalHandler,
  reminder,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(calendarSchema),
  });

  const { addReminder, selectedDate } = useReminderStore();

  const onSubmit = (data: Inputs) => {
    const hours = parseInt(data.hours, 10);
    const minutes = parseInt(data.minutes, 10);
    const newTime = setMinutes(setHours(selectedDate, hours), minutes);

    const newReminder: Reminder = {
      title: data.title,
      city: data.city,
      note: data.note,
      time: newTime,
    };
    addReminder(newReminder);
    modalHandler();
  };

  return (
    <form className="flex flex-col w-[450px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          defaultValue={reminder?.title || ""}
          {...register("title")}
        />
        {errors.title && (
          <span className="text-red-400 text-sm">{errors.title.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="notes"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Note:
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          defaultValue={reminder?.note || ""}
          {...register("note")}
        />
        {errors.note && (
          <span className="text-red-400 text-sm">{errors.note.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          City:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          defaultValue={reminder?.city || ""}
          {...register("city")}
        />
        {errors.city && (
          <span className="text-red-400 text-sm">{errors.city.message}</span>
        )}
      </div>
      <div className="flex">
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Time:
          </label>
          <input
            type="text"
            {...register("hours")}
            defaultValue={format(new Date(), "HH")}
            placeholder="HH"
            className={`w-16 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.hours ? "border-red-500" : ""
            }`}
          />
          <span className="mx-3">:</span>
          <input
            type="text"
            {...register("minutes")}
            defaultValue={format(new Date(), "mm")}
            placeholder="HH"
            className={`w-16 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
              errors.minutes ? "border-red-500" : ""
            }`}
          />
        </div>
      </div>
      <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
        >
          Accept
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={modalHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
