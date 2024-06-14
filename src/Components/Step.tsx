import { Step as IStep } from "../data";
import { Field } from "./Field";

export const Step = ({ fields, id }: IStep) => {
  console.log(fields);

  return (
    <div>
      <h1>{id}</h1>
      <div>
        {fields.map((field) => (
          <Field key={field.id} {...field} />
        ))}
      </div>
    </div>
  );
};
