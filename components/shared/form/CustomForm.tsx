import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SelectInput from "./SelectInput";
import DatePicker from "./DatePicker";
import { camelCaseToWords } from "@/lib/helpers";
import { SelectOption } from "@/lib/types/select-option.type";
import ComboBox from "./ComboBox";

interface InputFieldBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export type InputFieldProps = InputFieldBaseProps &
  (
    | {
        inputType?: "input" | "textarea" | "date";
      }
    | {
        inputType: "select";
        options: SelectOption[];
        placeholder: string;
      }
  );

export type CustomFormPropType = {
  inputFields: InputFieldProps[];
  schema: z.ZodObject<any>;
  onSubmit(values: { [k: string]: any }): void;
  defaultValues?: z.infer<z.ZodObject<any>>;
  buttonClassName?: string;
  children?: React.ReactNode;
};

export default function CustomForm({
  inputFields,
  schema,
  defaultValues,
  onSubmit,
  buttonClassName,
  children,
}: CustomFormPropType) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => {
          const { name, label, placeholder } = inputField;
          const inputlabel = label || camelCaseToWords(name);

          return (
            <FormField
              control={form.control}
              key={name}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{inputlabel}</FormLabel>
                    {inputField.inputType === "select" ? (
                      inputField.options.length <= 10 ? (
                        <SelectInput
                          className="w-full rounded-none border-natural-9"
                          onValueChange={field.onChange}
                          value={field.value}
                          options={inputField.options}
                          placeholder={placeholder!}
                        />
                      ) : (
                        <ComboBox
                          className="w-full rounded-none border-natural-9"
                          onValueChange={(value) => form.setValue(name, value)}
                          value={field.value}
                          options={inputField.options}
                          placeholder={placeholder!}
                        />
                      )
                    ) : inputField.inputType === "textarea" ? (
                      <FormControl>
                        <Textarea
                          className="rounded-none border-natural-9 min-h-44"
                          placeholder={placeholder}
                          {...field}
                        />
                      </FormControl>
                    ) : inputField.inputType === "date" ? (
                      <DatePicker
                        className="w-full border-natural-9 justify-start"
                        value={field.value}
                        onSelect={field.onChange}
                      />
                    ) : (
                      <FormControl>
                        <Input className="rounded-none border-natural-9" {...field} />
                      </FormControl>
                    )}
                  </FormItem>
                );
              }}
            />
          );
        })}
        <Button type="submit" className={buttonClassName}>
          {children || "Submit"}
        </Button>
      </form>
    </Form>
  );
}
