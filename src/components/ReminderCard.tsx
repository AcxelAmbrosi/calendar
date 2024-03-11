import { FaBell } from "react-icons/fa";
import { Reminder } from "../types/ReminderTypes";
import { Modal } from "./Modal";
import { CalendarForm } from "./CalendarForm";
import { useModal } from "../hooks/useModal";
import { format } from "date-fns";
import { FORMAT_DATE_FULL } from "../config/config";

export const ReminderCard: React.FC<Reminder> = (props) => {
  const { modal, modalHandler } = useModal();

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mb-4 w-[320px] h-[145px] m-3 ">
      <div className="px-6 py-4 ">
        <div className="flex items-center mb-3">
          <span className="bg-green-500 rounded-full w-4 h-4 mr-2"></span>
          <div className="font-bold text-xl">{props.title}</div>
        </div>
        <p className="text-gray-700 text-base">{props.note}</p>
        <p className="text-gray-600 text-sm mt-2">City: {props.city}</p>
        <p className="text-gray-600 text-sm">
          Hour: {format(props.time, FORMAT_DATE_FULL).toString()}
        </p>
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
        <CalendarForm modalHandler={modalHandler} reminder={props} />
      </Modal>
    </div>
  );
};
