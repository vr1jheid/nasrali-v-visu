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
              name="conditions "
              type="radio"
            />
          </label>
        ))}
      </div>
      {selectedIndex !== null && (
        <div
          style={{
            border: "1px solid black",
            marginTop: 20,
            borderRadius: 10,
            padding: "20px 40px",
          }}
        >
          {conditions[selectedIndex].fields.map((field, i) => (
            <Field key={i} {...field} />
          ))}
        </div>
      )}
    </>
  );
};
