import React from "react";
import { connect } from "react-redux";
import { formSchema, validate } from "../../formValidation";

import styled from "styled-components";
import Button from "../InvoiceDetails/Button";
import createFormErrors from "../../formValidation/createFormErrors";

const StyledInvoiceActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;

  .discard-send-container {
    display: flex;
    gap: 2vw;
    white-space: nowrap;
  }

  button:disabled,
  button[disabled] {
    cursor: not-allowed;
    background-color: #cccccc;
  }

  @media (max-width: 768px) {
    div {
      flex-wrap: wrap;
    }

    box-shadow: rgba(0, 0, 0, 0.56) 0px 0px 100px 1px;
    flex-wrap: wrap;
    position: fixed;
    background-color: white;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 1em;
  }
`;

function InvoiceActionButtons({
  handleFormOpen,
  initialFormValues,
  setFormValues,
  formErrors,
  setFormErrors,
  formValues,
  type,
  isFormValid,
}) {
  const handleDiscardClick = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
    handleFormOpen();
  };

  const handleCancelClick = (e) => {
    // e.preventDefault();
    // setFormValues(initialFormValues);
    // handleFormOpen();
  };

  const handleSaveAsDraft = () => {
    formSchema
      .validate(formValues, { abortEarly: false })
      .then((formValues) => console.log("valid", formValues))
      .catch((result) => setFormErrors(createFormErrors(result, formErrors)));
  };

  const handleSaveAndSend = () => {
    const invoice = { ...formValues };
    invoice.status = "pending";

    console.log(invoice);
  };

  return (
    <StyledInvoiceActionButtons>
      {type === "New Invoice" ? (
        <Button onClick={handleDiscardClick} type="discard" text="Discard" />
      ) : (
        <Button onClick={handleCancelClick} type="discard" text="Cancel" />
      )}

      <div className="discard-send-container">
        <Button
          onClick={handleSaveAsDraft}
          type="draft"
          text="Save as Draft"
          responsiveText="Draft"
        />
        <Button
          onClick={handleSaveAndSend}
          type="primary"
          text="Save & Send"
          responsiveText="Send"
          disabled={!isFormValid}
        />
      </div>
    </StyledInvoiceActionButtons>
  );
}
export default connect()(InvoiceActionButtons);
