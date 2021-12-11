import React, { useState } from "react";
import styled from "styled-components";

import { getMockData } from "../../services";

import invoiceDetailBtnImg from "../../assets/icon-arrow-right.svg";

import NoInvoices from "./NoInvoices";
import InvoiceStatus from "./InvoiceStatus";

const StyledInvoicePanel = styled.div`
  width: 87.5%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .invoice {
    background-color: var(--clr-general-white);
    width: 100%;
    height: 4.5rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.5rem;
  }

  .invoice-status-visual-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0.375rem;
  }

  .invoice-status-circle {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    margin: auto 0.5rem auto 1.125rem;
  }

  .invoice-state-text {
    margin-right: 1rem;
  }

  .invoice-id span {
    color: var(--clr-terciary-purple);
  }

  .invoice-due-date,
  .invoice-recipient {
    color: var(--clr-text-faded);
  }

  .invoice-due-date,
  .invoice-recipient,
  .amount-of-invoices {
    margin-bottom: 0 !important;
  }

  .invoice-total,
  .invoice-id {
    color: var(--font-clr-h4);
  }
`;

export default function InvoicesPanel() {
  const [invoices, setInvoices] = useState(getMockData);

  return (
    <StyledInvoicePanel>
      {invoices.length === 0 ? (
        <NoInvoices />
      ) : (
        invoices.map((invoice) => {
          return (
            <div key={invoice.id} className="invoice" data-id={invoice.id}>
              <h4 className="invoice-id no-marg-padd">
                <span>#</span>
                {invoice.id}
              </h4>
              <div className="invoice-due-date body-1">
                Due <date>{invoice.paymentDue}</date>
              </div>
              <div className="invoice-recipient body-1">
                {invoice.clientName}
              </div>
              <h3 className="invoice-total no-marg-padd">
                {invoice.total.toFixed(2)}
              </h3>

              <InvoiceStatus invoiceStatus={invoice.status} />

              <div className="view-invoice-btn">
                <img
                  src={invoiceDetailBtnImg}
                  alt="view invoice details button"
                  className="arrow-right"
                />
              </div>
            </div>
          );
        })
      )}
    </StyledInvoicePanel>
  );
}
