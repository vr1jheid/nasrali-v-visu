import { Option, OptionTypes } from "../data";

interface Props {
  options: Option[];
  id: string;
}

export const Options = ({ options, id }: Props) => {
  /*   const renderInput = (type: OptionTypes) => {
    switch (type) {
      case OptionTypes.RadioWithInput:

        break;

      default:
        break;
    }
  }; */
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {options.map(({ label, type }, i) => {
        return (
          <label key={i}>
            {label}{" "}
            <input name={id} type={type.includes("input") ? "text" : type} />
          </label>
        );
      })}
    </div>
  );
};
