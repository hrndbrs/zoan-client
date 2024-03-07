import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";

export type SelectOption = {
  value: number | string;
  label: string;
};

type SelectInputPropType = {
  options: SelectOption[];
  placeholder: string;
  onValueChange(value: string): void;
  value: string;
  className?: string;
};

export default function SelectInput({
  options,
  placeholder,
  onValueChange,
  value,
  className,
}: SelectInputPropType) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <FormControl>
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={String(option.value)}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
