import { Option, OptionTypes } from "../data";

interface Props {
  options: Option[];
}

export const Options = ({ options }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {options.map(({ label, type }, i) => {
        return (
          <label key={i}>
            {label} <input type={type.includes("input") ? "text" : type} />
          </label>
        );
      })}
    </div>
  );
};
