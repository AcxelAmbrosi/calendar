import { format } from "date-fns";
import { CalendarNavButton } from "../assets/ui/CalendarNavButton";
import { CALENDAR_NAV, FORMAT_DATE } from "../config/config";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonthClick: () => void;
  onNextMonthClick: () => void;
}
export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onNextMonthClick,
  onPrevMonthClick,
}) => {
  return (
    <div className="flex justify-between items-center w-[500px]">
      <CalendarNavButton
        onEventClick={onPrevMonthClick}
        event={CALENDAR_NAV.PREV}
      />
      <span className="text-2xl font-bold text-blue-700">
        {format(currentDate, FORMAT_DATE).toUpperCase()}
      </span>
      <CalendarNavButton
        onEventClick={onNextMonthClick}
        event={CALENDAR_NAV.NEXT}
      />
    </div>
  );
};
