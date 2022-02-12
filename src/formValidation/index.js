import * as yup from "yup";

export const formValueSchema = yup.object().shape({
  street: yup.string().required("*"),
  city: yup.string().required("*"),
  postCode: yup.string().required("*"),
  country: yup.string().required("*"),
  clientName: yup.string().required("*"),
  clientEmail: yup.string().email("^").required("*"),
  paymentDue: yup.string().required("*"),
  paymentTerms: yup.string().required("*"),
  description: yup.string().required("*"),
});

export const formSchema = yup.object().shape({
  senderAddress: yup.object({
    street: yup
      .string()
      .required({ type: "senderAddress", name: "street", message: "*" }),
    city: yup
      .string()
      .required({ type: "senderAddress", name: "city", message: "*" }),
    postCode: yup
      .string()
      .required({ type: "senderAddress", name: "postCode", message: "*" }),
    country: yup
      .string()
      .required({ type: "senderAddress", name: "country", message: "*" }),
  }),

  paymentDue: yup.string().required({ ref: "paymentDue", message: "*" }),
  description: yup.string().required({ ref: "description", message: "*" }),
  paymentTerms: yup.string().required({ ref: "paymentTerms", message: "*" }),
  clientName: yup.string().required({ ref: "clientName", message: "*" }),

  clientEmail: yup
    .string()
    .email({ ref: "clientEmail", message: "^" })
    .required({ ref: "clientEmail", message: "*" }),

  clientAddress: yup.object({
    street: yup
      .string()
      .required({ type: "clientAddress", name: "street", message: "*" }),
    city: yup
      .string()
      .required({ type: "clientAddress", name: "city", message: "*" }),
    postCode: yup
      .string()
      .required({ type: "clientAddress", name: "postCode", message: "*" }),
    country: yup
      .string()
      .required({ type: "clientAddress", name: "country", message: "*" }),
  }),

  items: yup.array().of(
    yup.object({
      name: yup.string().required(),
      price: yup.number().min(0),
      quantity: yup.number().min(0),
    })
  ),
});

export const validate = (name, value, setFormErrors, formErrors, type) => {
  yup
    .reach(formValueSchema, name)
    .validate(value)
    .then(() => {
      if (!type)
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      else
        setFormErrors({
          ...formErrors,
          [type]: { ...formErrors[type], [name]: "" },
        });
    })
    .catch((err) => {
      if (!type)
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      else
        setFormErrors({
          ...formErrors,
          [type]: { ...formErrors[type], [name]: err.errors[0] },
        });
    });
};
