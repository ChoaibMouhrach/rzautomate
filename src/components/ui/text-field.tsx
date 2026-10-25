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
  base: "rounded-ui border border-border bg-background px-3 text-sm placeholder:text-muted-foreground disabled:opacity-50",
  variants: {
    isInvalid: { true: "border-danger" },
    multiline: { false: "h-10", true: "min-h-28 resize-y py-2" },
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

export function TextField({
  label,
  description,
  placeholder,
  multiline,
  errorMessage,
  className,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField
      {...props}
      className={composeRenderProps(className, (className) =>
        field({ className }),
      )}
    >
      {({ isInvalid }) => (
        <>
          {label && <Label className="text-sm font-medium">{label}</Label>}
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
          <FieldError className="text-sm text-danger">{errorMessage}</FieldError>
        </>
      )}
    </AriaTextField>
  );
}
