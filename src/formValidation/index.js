import * as yup from "yup";

export const formSchema = yup.object().shape({
  street: yup.string().required("required"),
  city: yup.string().required("required"),
  postCode: yup.string().required("required"),
  country: yup.string().required("required"),
  clientName: yup.string().required("required"),
  clientEmail: yup.string().email("must be a valid email").required("required"),
});

export const validate = (name, value, setFormErrors, formErrors, type) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      if (type !== "senderAddress" && type !== "clientAddress")
        setFormErrors({
          ...formErrors,
          [name]: value,
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
