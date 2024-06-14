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
        return <Options options={field.options!} id={field.id} />;

      case FieldTypes.NestedFields:
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {field.fields?.map((f, i) => (
              <Field key={i} {...f} />
            ))}
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div>
      {!id.includes(".") /* true */ && <h2> Вопрос {id}</h2>}

      {field.title ? (
        <p style={{ fontWeight: 600, margin: 0 }}>{field.title}</p>
      ) : null}
      <div>{renderField()}</div>
    </div>
  );
};
