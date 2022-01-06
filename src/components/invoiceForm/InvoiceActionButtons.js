import React from "react";
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

const handleDiscardClick = (e) => {
  e.preventDefault();
};

export default function InvoiceActionButtons() {
  return (
    <StyledInvoiceActionButtons>
      <Button onClick={handleDiscardClick} type="discard" text="Discard" />

      <div className="discard-send-container">
        <Button type="draft" text="Save as Draft" />
        <Button type="primary" text="Save &amp; Send" />
      </div>
    </StyledInvoiceActionButtons>
  );
}
