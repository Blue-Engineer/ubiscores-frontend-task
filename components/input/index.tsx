import { ChangeEvent, forwardRef, useCallback, useState } from "react";
import { IInputProps } from "./i-input";
import {
  ErrorP,
  InputFieldWrapperDiv,
  Div,
  InputField,
  Label,
} from "./input.style";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      id,
      name,
      type = "text",
      label,
      required,
      value,
      error,
      fullWidth,
      className,
      onChange,
      defaultValue,
      ...remainingProps
    },
    ref
  ) => {
    const errorId = error ? `${id}-error-text` : undefined;

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
      },
      [onChange]
    );

    return (
      <Div fullWidth={fullWidth} className={className}>
        <InputFieldWrapperDiv error={error}>
          {label && <Label>{`${label}${required ? "*" : ""}`}</Label>}
          <InputField
            id={id}
            ref={ref}
            name={name}
            value={value}
            required={required}
            aria-invalid={!!error}
            defaultValue={defaultValue}
            aria-describedby={errorId}
            onChange={handleChange}
            error={error}
            {...remainingProps}
          />
        </InputFieldWrapperDiv>
        {error && (
          <ErrorP
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 1,
                x: 0,
                y: -5,
              },
              pageAnimate: {
                opacity: 1,
                x: 0,
                y: 0,
              },
              pageExit: {
                opacity: 0,
              },
            }}
            id={errorId}
          >
            {error}
          </ErrorP>
        )}
      </Div>
    );
  }
);

Input.displayName = "input";

export default Input;
