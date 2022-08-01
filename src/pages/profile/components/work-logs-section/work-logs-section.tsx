import { FC } from "react";
import { Control, FieldValues } from "react-hook-form";
import { useSelector } from "react-redux";
import { getLabelTitle } from "../../../../helpers";
import { selectLabels } from "../../../../store/selectors";
import { DailyWorkLogs } from "../daily-work-logs/daily-work-logs";
import "./work-logs-section.scss";

interface WorkLogsSectionProps {
  control: Control<FieldValues, any>;
}

export const WorkLogsSection: FC<WorkLogsSectionProps> = ({ control }) => {
  const labels = useSelector(selectLabels);

  const daysArray: Array<string> = [
    getLabelTitle(labels, "sunday"),
    getLabelTitle(labels, "monday"),
    getLabelTitle(labels, "tuesday"),
    getLabelTitle(labels, "wednesday"),
    getLabelTitle(labels, "thursday"),
    getLabelTitle(labels, "friday"),
  ];
  
  return (
    <div className="work-logs-section">
      <h2 className="work-logs-title">{getLabelTitle(labels, "worklogs")}</h2>
      <div className="days-logs">
        {daysArray.map((day: string, index) => {
          console.log(day);
          return <DailyWorkLogs control={control} title={day} key={index} />;
        })}
      </div>
    </div>
  );
};
