import React from 'react';
import { useForm } from 'react-hook-form';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';
import './date-picker-field.scss';

interface DatePickerFieldProps {
  control?: Control;
  className?: string;
  defaultValue?: string | string[];
  helperText?: string;
  label?: string;
  name: string;
  onChange?: (payload: any) => void;
  placeholder?: string;
  required?: boolean;
  size?: 'small' | 'medium';
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  control,
  className,
  defaultValue,
  helperText = 'Required',
  label,
  name,
  onChange,
  placeholder,
  required,
  size = 'small',
}: DatePickerFieldProps) => {
  const { control: parentControl } = useForm();
  const onChangeData =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (field: ControllerRenderProps<FieldValues, string>) => (val: any) => {
      field.onChange(val);
      !!onChange &&
        onChange({
          [field.name]: val,
        });
    };

  return (
    <Controller
      control={control ? control : parentControl}
      name={name}
      rules={{ required: required }}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={label}
              inputRef={field.ref}
              value={field.value ?? ''}
              onChange={onChangeData(field)}
              renderInput={(params: any) => {
                return (
                  <TextField
                    {...params}
                    className={className}
                    placeholder={
                      placeholder
                        ? placeholder
                        : params.inputProps && params.inputProps.placeholder
                    }
                    error={!!error}
                    helperText={error ? helperText : null}
                    size={size}
                  />
                );
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};