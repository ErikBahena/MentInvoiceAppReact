import React from "react";

import noInvoicesImage from "../../assets/illustration-empty.svg";
import styled from "styled-components";

const StyledNoInvoices = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: min-content;
  margin-bottom: 8rem;

  .no-invoices-text-container {
    text-align: center;
    margin-top: 2.5rem;
    height: 4.813rem;
  }
  .there-is-nothing-here-text {
    margin-bottom: 1.5rem;
  }
  .create-an-invoice-text {
    color: var(--clr-text-faded);
  }
`;

export default function NoInvoices() {
  return (
    <StyledNoInvoices>
      <div className="empty-illustration-image-container">
        <img
          src={noInvoicesImage}
          alt="empty folder cartoon"
          className="empty-illustration-svg"
        />
      </div>
      <div className="no-invoices-text-container">
        <h2 className="there-is-nothing-here-text no-marg-padd">
          There is nothing here
        </h2>
        <div className="create-an-invoice-text body-1">
          Create an invoice by clicking the <br />
          <b>New</b> button and get started
        </div>
      </div>
    </StyledNoInvoices>
  );
}
