export enum FieldTypes {
  Text = "text",
  Date = "date",
  Phone = "phone",
  Options = "options",
  Condition = "condition",
  NestedFields = "fields",
}

export enum OptionTypes {
  Checkbox = "checkbox",
  CheckboxWithInput = "checkbox_with_input",
  Radio = "radio",
  RadioWithInput = "checkbox_with_input",
}

export interface Condition {
  conditionLabel: string;
  fields: Field[];
}

export interface Option {
  type: OptionTypes;
  label: string;
}

export interface Field {
  id: string;
  title?: string;
  type: FieldTypes;
  conditions?: Condition[];
  options?: Option[];
  fields?: Field[];
}

export interface Step {
  id: string;
  fields: Field[];
}

export interface Response {
  data: Step[];
}

export const response: Response = {
  data: [
    {
      id: "step_11",
      fields: [
        {
          id: "32",
          title: "Расходы заявителя на проезд и проживание оплачивает:",
          type: FieldTypes.Condition,
          conditions: [
            {
              conditionLabel: "сам заявитель",
              fields: [
                {
                  id: "32.1",
                  title: "Средства:",
                  type: FieldTypes.Options,
                  options: [
                    {
                      label: "наличные деньги",
                      type: OptionTypes.Checkbox,
                    },
                    {
                      label: "наличные деньги",
                      type: OptionTypes.Checkbox,
                    },
                    {
                      label: "наличные деньги",
                      type: OptionTypes.Checkbox,
                    },
                    {
                      label: "дорожные чеки",
                      type: OptionTypes.Checkbox,
                    },
                    {
                      label: "кредитная карта",
                      type: OptionTypes.Checkbox,
                    },
                    {
                      label: "место проживания предоплачено",
                      type: OptionTypes.Checkbox,
                    },
                    {
                      label: "транспорт предоплачен",
                      type: OptionTypes.Checkbox,
                    },
                    {
                      label: "иные (указать)",
                      type: OptionTypes.CheckboxWithInput,
                    },
                  ],
                },
              ],
            },
            {
              conditionLabel:
                "спонсор (приглашающее лицо, компания, организация), указать:",
              fields: [
                {
                  id: "32.2",
                  type: FieldTypes.NestedFields,
                  fields: [
                    {
                      id: "32.2.1",
                      type: FieldTypes.Options,
                      options: [
                        {
                          label: "упомянутые в п.30 или 31",
                          type: OptionTypes.Radio,
                        },
                        {
                          label: "иные (указать)",
                          type: OptionTypes.RadioWithInput,
                        },
                      ],
                    },
                    {
                      id: "32.2.2",
                      title: "Средства:",
                      type: FieldTypes.Options,
                      options: [
                        {
                          label: "наличные деньги",
                          type: OptionTypes.Checkbox,
                        },
                        {
                          label: "обеспечивается место проживания",
                          type: OptionTypes.Checkbox,
                        },
                        {
                          label: "оплачиваются все расходы во время пребывания",
                          type: OptionTypes.Checkbox,
                        },
                        {
                          label: "транспорт предоплачен",
                          type: OptionTypes.Checkbox,
                        },
                        {
                          label: "иные (указать):",
                          type: OptionTypes.CheckboxWithInput,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
