import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../InvoiceDetails/Button";

const StyledInvoiceActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;

  .discard-send-container {
    display: flex;
    gap: 16px;
  }
`;

function InvoiceActionButtons({
  handleFormOpen,
  initialFormValues,
  setFormValues,
  formValues,
  type,
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
    const invoice = { ...formValues };
    console.log(invoice);
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
        <Button onClick={handleSaveAsDraft} type="draft" text="Save as Draft" />
        <Button
          onClick={handleSaveAndSend}
          type="primary"
          text="Save &amp; Send"
        />
      </div>
    </StyledInvoiceActionButtons>
  );
}
export default connect()(InvoiceActionButtons);
