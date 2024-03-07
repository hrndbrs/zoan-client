import { SelectSingleEventHandler } from "react-day-picker";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export default function DatePicker({
  value,
  onSelect,
  className,
}: {
  value: Date;
  onSelect: SelectSingleEventHandler;
  className?: string;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button className={className} variant="outline">
            {value ? format(value, "PPP") : <span>Pick a date</span>}
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={value}
          onSelect={onSelect}
          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
