export type SelectOption = {
  value: number | string;
  label: string;
};

export type SelectInputPropType = {
  options: SelectOption[];
  placeholder: string;
  onValueChange(value: string): void;
  value: string;
  className?: string;
};
