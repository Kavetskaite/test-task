import { FC } from "react";
import { Control, FieldValues } from "react-hook-form";
import { DailyWorkLogs } from "../daily-work-logs/daily-work-logs";
import "./work-logs-section.scss";

interface WorkLogsSectionProps {
  control: Control<FieldValues, any>;
}

const daysArray: Array<string> = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thersday",
  "Friday",
];

export const WorkLogsSection: FC<WorkLogsSectionProps> = ({ control }) => {
  return (
    <div className="work-logs-section">
      <h2 className="work-logs-title">Work Logs</h2>
      <>
        {daysArray.forEach((day: string, index) => {
          console.log(day);
          return (<DailyWorkLogs control={control} title={day} key={index} />);
        })}
      </>
    </div>
  );
};
