import React from 'react';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';
import { Checkbox as CheckboxComponent, FormControlLabel, FormGroup } from '@mui/material';

type Props = {
  control: Control;
  name: string;
  required?: boolean;
  defaultValue: boolean;
  options?: string[];
  multiSelect?: boolean;
  onChange?: (value: boolean) => void;
};

export const Checkbox: React.FC<Props> = ({
  control,
  name,
  required,
  defaultValue,
  options,
  multiSelect,
  onChange,
}) => {
  const isChecked = (
    field: ControllerRenderProps<FieldValues, string>,
    value: string,
  ) => {
    const currentValue: string[] =
      field.value !== 'undefined' && field.value ? field.value : [];
    return !!currentValue.find((cv) => cv === value);
  };

  const setSelectionButtonGroupData = (
    field: ControllerRenderProps<FieldValues, string>,
    value: string,
    multiSelect = false,
  ) => {
    const currentValue: string[] = field?.value ?? [];
    const update = multiSelect
      ? currentValue.includes(value)
        ? currentValue.filter((v: string) => v !== value)
        : [...currentValue, value]
      : [value];

    field.onChange(update);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <FormGroup>
              {(options ?? []).map((option, index) => {
                return (
                  <FormControlLabel
                    inputRef={field.ref}
                    key={index}
                    label={option}
                    control={<CheckboxComponent />}
                    onChange={() => {
                      setSelectionButtonGroupData(field, option, multiSelect);
                    }}
                    checked={isChecked(field, option)}
                  />
                );
              })}
            </FormGroup>
          </>
        );
      }}
    />
  );
};
