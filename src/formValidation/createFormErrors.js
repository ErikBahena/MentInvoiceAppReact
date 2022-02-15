export default (result, formErrors) => {
  let newFormErrors = { ...formErrors };
  newFormErrors.suggestions = `* please fill out all required fields`;

  result.errors.forEach((err) => {
    if (typeof err === "string") {
      const itemErrArr = err.split(".");
      const itemNumber =
        +itemErrArr[0].substring(
          itemErrArr[0].indexOf("[") + 1,
          itemErrArr[0].lastIndexOf("]")
        ) + 1;

      const itemErrMsg = itemErrArr[1];

      if (itemErrMsg.includes("number")) {
        const itemFieldType = itemErrMsg.slice(0, itemErrMsg.indexOf(" "));

        itemErrMsg = `${itemFieldType} must be a number`;
      }

      newFormErrors.suggestions += `<br/> * Item ${itemNumber}: ${itemErrMsg}`;
    }

    if (err.type)
      newFormErrors[err.type] = {
        ...newFormErrors[err.type],
        [err.name]: err.message,
      };
    else {
      newFormErrors[err.ref] = err.message;
    }
  });

  return newFormErrors;
};
