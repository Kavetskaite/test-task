import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";

interface DatePickerFieldProps {
  control: Control;
  className?: string;
  defaultValue?: string | string[];
  helperText?: string;
  label?: string;
  name: string;
  onChange?: (payload: any) => void;
  required?: boolean;
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  control,
  className,
  defaultValue = "",
  helperText = "Required",
  label,
  name,
  onChange,
  required,
}: DatePickerFieldProps) => {
  const onChangeData =
    (field: ControllerRenderProps<FieldValues, string>) =>
    (val: null | Date) => {
      field.onChange(val ? (val as Date).toDateString() : null);

      !!onChange &&
        onChange({
          [field.name]: val ? (val as Date).toDateString() : null,
        });
    };

  return (
    <Controller
      control={control}
      shouldUnregister={true}
      name={name}
      rules={{ required: required }}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputRef={field.ref}
              value={field.value ?? defaultValue}
              onChange={onChangeData(field)}
              label={label}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  className={className}
                  error={!!error}
                  helperText={error ? helperText : null}
                  autoComplete="off"
                  variant="standard"
                />
              )}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};
