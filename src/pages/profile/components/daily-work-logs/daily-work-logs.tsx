import { Divider } from "@mui/material";
import { FC, useState } from "react";
import { Control, FieldValues } from "react-hook-form";
import "./daily-work-logs.scss";

interface DailyWorkLogsProps {
  control: Control<FieldValues, any>;
  title: string;
}

export const DailyWorkLogs: FC<DailyWorkLogsProps> = ({ control, title }) => {

  return (
    <div className="daily-block">
      <h2 className="day-title">{title}</h2>
      <Divider className="logs-divider" />
    </div>
  );
};
