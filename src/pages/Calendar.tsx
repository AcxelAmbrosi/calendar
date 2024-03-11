import { CalendarHeader } from "../components/CalendarHeader";
import { CalendarDays } from "../components/CalendarDays";
import { useCalendar } from "../hooks/useCalendar";
import { Reminders } from "../components/Reminders";
import { FaBell } from "react-icons/fa";
import { Modal } from "../components/Modal";
import { useModal } from "../hooks/useModal";
import { CalendarForm } from "../components/CalendarForm";

export const Calendar = () => {
  const { currentDate, goToNextMonth, goToPrevMonth, daysInMonth, daysOfWeek } =
    useCalendar();

  const { modal, modalHandler } = useModal();
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <Reminders />
      <div className="flex flex-col">
        <div className=" shadow-lg rounded-lg p-3 items-center justify-center">
          <CalendarHeader
            currentDate={currentDate}
            onNextMonthClick={goToNextMonth}
            onPrevMonthClick={goToPrevMonth}
          />
          <CalendarDays daysInMonth={daysInMonth} daysOfWeek={daysOfWeek} />
        </div>
        <button
          className="bg-blue-700 text-white px-4 py-2 mt-4 rounded-lg flex items-center justify-center"
          onClick={modalHandler}
        >
          Add Reminder
          <FaBell className="mx-3 " />
        </button>
      </div>
      <Modal
        header={
          <h2 className="flex text-2xl font-semibold mb-4 items-center">
            NEW REMINDER <FaBell className="mx-3 text-yellow-500" />
          </h2>
        }
        modal={modal}
        modalHandler={modalHandler}
      >
        <CalendarForm modalHandler={modalHandler} />
      </Modal>
    </div>
  );
};
