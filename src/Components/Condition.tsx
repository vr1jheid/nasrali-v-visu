import { useState } from "react";
import { Condition as ICondition } from "../data";
import { Field } from "./Field";

interface Props {
  conditions: ICondition[];
}

export const Condition = ({ conditions }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  console.log(conditions);

  return (
    <>
      <div style={{ display: "flex", gap: 200 }}>
        {conditions.map(({ conditionLabel }, i) => (
          <label key={i}>
            {conditionLabel}
            <input
              onClick={() => {
                setSelectedIndex(i);
              }}
              name="conditions"
              type="radio"
            />{" "}
          </label>
        ))}
      </div>
      <div>
        {selectedIndex !== null &&
          conditions[selectedIndex].fields.map((field, i) => (
            <Field key={i} {...field} />
          ))}
      </div>
    </>
  );
};
