"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectInputPropType } from "@/lib/types/select-option.type";

export default function ComboBox({
  className,
  options,
  placeholder,
  onValueChange,
  value,
}: SelectInputPropType) {
  const [open, setOpen] = useState(false);

  function handleOptionSelect(value: string) {
    onValueChange(value);
    setOpen(false);
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            className={cn("justify-between", className)}
            aria-expanded={open}
            variant="outline"
            role="combobox"
          >
            {value
              ? options.find((option) => {
                  return option.value === value;
                })?.label
              : placeholder}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>NO OPTION AVAILABLE</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  value={option.value.toString()}
                  key={option.value}
                  onSelect={handleOptionSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      option.value === value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
