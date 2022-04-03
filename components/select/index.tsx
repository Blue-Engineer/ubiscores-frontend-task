import Select from "react-select";
import {
  Div,
  ErrorP,
  InputFieldWrapperDiv,
  Label,
} from "components/input/input.style";
import { ISelectInput } from "./i-select";
import { SelectInputComponentStyle } from "./select-input.styles";

const SelectInput = ({
  label,
  error,
  tag,
  required,
  ...rest
}: ISelectInput) => {
  return (
    <Div>
      <InputFieldWrapperDiv>
        {label && <Label>{`${label}${required ? "*" : ""}`}</Label>}
        <SelectInputComponentStyle error={!!error} className="other-selct">
          <Select
            {...rest}
            styles={{
              menuPortal: (base: any) => ({ ...base, zIndex: 100 }),
              control: (base: any) => ({
                ...base,
                border: 0,
                boxShadow: "none",
              }),
            }}
            classNamePrefix="react-select"
            className="red"
            menuPortalTarget={
              typeof window !== "undefined" ? window.document.body : null
            }
            components={{ IndicatorSeparator: () => null }}
          />
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
            >
              {error}
            </ErrorP>
          )}
        </SelectInputComponentStyle>
      </InputFieldWrapperDiv>
    </Div>
  );
};

SelectInput.defaultProps = {
  label: "",
};

export default SelectInput;
