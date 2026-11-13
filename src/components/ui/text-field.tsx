"use client";

import {
  FieldError,
  Input,
  Label,
  Text,
  TextArea,
  TextField as AriaTextField,
  composeRenderProps,
  type TextFieldProps as AriaTextFieldProps,
  type ValidationResult,
} from "react-aria-components";
import { focusRing, tv } from "@/lib/ui";

const field = tv({ base: "flex flex-col gap-1.5" });

const input = tv({
  extend: focusRing,
  base: "rounded-2xl bg-muted px-4 text-base text-foreground caret-primary placeholder:text-muted-foreground transition-shadow focus:ring-2 focus:ring-primary disabled:opacity-50",
  variants: {
    isInvalid: { true: "ring-2 ring-danger focus:ring-danger" },
    multiline: { false: "h-12", true: "min-h-32 resize-y py-3" },
  },
  defaultVariants: { multiline: false },
});

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  placeholder?: string;
  multiline?: boolean;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export const TextField = ({
  label,
  description,
  placeholder,
  multiline,
  errorMessage,
  className,
  ...props
}: TextFieldProps) => <AriaTextField
      {...props}
      className={composeRenderProps(className, (className) =>
        field({ className }),
      )}
    >
      {({ isInvalid }) => (
        <>
          {label && (
            <Label className="text-sm font-medium">
              {label}
              {props.isRequired && (
                <span aria-hidden className="ml-0.5 text-primary">
                  *
                </span>
              )}
            </Label>
          )}
          {multiline ? (
            <TextArea
              placeholder={placeholder}
              className={({ isFocusVisible }) =>
                input({ isFocusVisible, isInvalid, multiline })
              }
            />
          ) : (
            <Input
              placeholder={placeholder}
              className={({ isFocusVisible }) =>
                input({ isFocusVisible, isInvalid })
              }
            />
          )}
          {description && (
            <Text slot="description" className="text-sm text-muted-foreground">
              {description}
            </Text>
          )}
          <FieldError className="text-sm text-danger">
            {errorMessage}
          </FieldError>
        </>
      )}
    </AriaTextField>;
