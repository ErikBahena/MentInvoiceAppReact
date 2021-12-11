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

    &:hover {
      outline: 1px solid var(--clr-primary-purple);
      outline-style: auto;
    }
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

  @media (max-width: 600px) {
    res-ignore {
      display: none;
    }

    .invoice {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: max-content max-content 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "invoice-id . invoice-recipient"
        "invoice-due-date invoice-due-date ."
        "invoice-total invoice-total invoice-status-visual-container";
      height: max-content;
      margin-bottom: 1rem;
      padding: 1.5rem;
      position: relative;
    }
    .invoice-due-date {
      margin-bottom: 0.5rem !important;
    }

    .invoice-id {
      grid-area: invoice-id;
    }

    .invoice-recipient {
      grid-area: invoice-recipient;
      text-align: right;
      white-space: nowrap;
    }

    .invoice-total {
      grid-area: invoice-total;
      white-space: nowrap;
    }

    .invoice-due-date {
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      white-space: nowrap;
      grid-area: invoice-due-date;
    }

    .view-invoice-btn {
      display: none;
    }

    .amount-due-container {
      margin-bottom: 10rem;
    }

    .status-text-mobile {
      margin-bottom: unset !important;
    }
  }

  @media (max-width: 300px) {
    .invoice {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1em;
      grid-template-columns: unset;
      grid-template-rows: unset;
      grid-template-areas: unset;
      margin-bottom: 1rem;
      padding: 1.5em;
      position: unset;
    }

    .invoice-due-date {
      margin: 0;
      grid-area: unset;
    }
    h4.invoice-id {
      grid-area: unset;
    }
    .invoice-recipient {
      grid-area: unset;
      text-align: unset;
    }
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
