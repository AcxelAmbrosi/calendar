import { GrNext, GrPrevious } from "react-icons/gr";
import { CALENDAR_NAV } from "../../config/config";

interface CalendarNavButtonProps {
  onEventClick: () => void;
  event: string;
}
export const CalendarNavButton: React.FC<CalendarNavButtonProps> = ({
  onEventClick,
  event,
}) => {
  return (
    <button
      className="text-blue-500 hover:text-blue-700 shadow-lg rounded-lg p-3"
      onClick={onEventClick}
    >
      {event === CALENDAR_NAV.PREV ? <GrPrevious /> : <GrNext />}
    </button>
  );
};
