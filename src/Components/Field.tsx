import { FieldTypes, Field as IField } from "../data";
import { Condition } from "./Condition";
import { Options } from "./Options";

export const Field = (field: IField) => {
  const { id } = field;
  console.log(field);

  const renderField = () => {
    switch (field.type) {
      case FieldTypes.Condition:
        return <Condition conditions={field.conditions!} />;

      case FieldTypes.Options:
        return <Options options={field.options!} />;

      case FieldTypes.NestedFields:
        return field.fields?.map((f, i) => <Field key={i} {...f} />);

      default:
        break;
    }
  };

  return (
    <div>
      {!id.includes(".") && <h2> Вопрос {id}</h2>}

      {field.title ? <p style={{ fontWeight: 600 }}>{field.title}</p> : null}
      <div>{renderField()}</div>
    </div>
  );
};
