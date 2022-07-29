import { FC } from "react";
import { Control, FieldValues } from "react-hook-form";
import './work-logs-section';

interface WorkLogsSectionProps {
  control: Control<FieldValues, any>;
}

export const WorkLogsSection: FC<WorkLogsSectionProps> = ({ control }) => {
  return (
    <div className="work-logs-section">
      <h2 className="work-logs-title">Work Logs</h2>
      
    </div>
  );
};
