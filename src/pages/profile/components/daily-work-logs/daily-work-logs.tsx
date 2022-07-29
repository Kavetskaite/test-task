import { FC } from "react";
import { Control, FieldValues } from "react-hook-form";
import './daily-work-logs.css';

interface DailyWorkLogsProps {
  control: Control<FieldValues, any>;
  title: string;
}

const daysArray: Array<string> = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thersday",
  "Friday",
];

export const DailyWorkLogs: FC<DailyWorkLogsProps> = ({ control, title }) => {
  return (
    <div className="daily-block">
      <>
        <h2 className="day-title">{title}</h2>
        {daysArray.forEach((day: string, index) => {
          return <DailyWorkLogs control={control} title={day} key={index} />;
        })}
      </>
    </div>
  );
};
