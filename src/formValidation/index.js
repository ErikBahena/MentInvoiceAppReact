import * as yup from "yup";

export const formValueSchema = yup.object().shape({
  street: yup.string().required("*"),
  city: yup.string().required("*"),
  postCode: yup.string().required("*"),
  country: yup.string().required("*"),
  clientName: yup.string().required("*"),
  clientEmail: yup.string().email("^").required("*"),
  paymentDue: yup.date("*"),
  paymentTerms: yup.string().required("*"),
  description: yup.string().required("*"),
});

export const formSchema = yup.object().shape({
  paymentDue: yup.string().required(),
  description: yup.string().required(),
  paymentTerms: yup.string().required(),
  clientName: yup.string().required(),
  clientEmail: yup.string().email().required(),

  senderAddress: yup.object({
    street: yup.string().required("*"),
    city: yup.string().required("*"),
    postCode: yup.string().required("*"),
    country: yup.string().required("*"),
  }),

  clientAddress: yup.object({
    street: yup.string().required("*"),
    city: yup.string().required("*"),
    postCode: yup.string().required("*"),
    country: yup.string().required("*"),
  }),

  items: yup.array().of(
    yup.object({
      name: yup.string().required("*"),
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
