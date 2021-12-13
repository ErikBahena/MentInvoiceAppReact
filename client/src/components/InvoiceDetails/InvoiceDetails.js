import React from "react";
import { getMockData } from "../../services";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";
import InvoiceStatus from "../InvoicesPanel/InvoiceStatus";

import backArrow from "../../assets/icon-arrow-left.svg";
import Button from "./Button";

const StyledInvoiceDetails = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 89.5833333vw;
  margin: 0 auto;
  padding-top: 4rem;
  border: 1px solid red;

  .go-back-container,
  .controls-container,
  .controls-container div:nth-of-type(1),
  .control-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .control-buttons {
    gap: 1em;
    background-color: var(--clr-general-white);
    width: 100vw;
  }

  .go-back-container {
    margin-top: 48px;

    img {
      margin-right: 0.5em;
    }
  }

  .controls-container {
    background-color: var(--clr-general-white);
    width: inherit;
    height: 5.5rem;
    border-radius: 0.5rem;
    margin-top: 3%;
    padding: 0 2em 0 2em;

    justify-content: space-between;

    & > div:nth-child(1) > div.body-1 {
      color: var(--clr-terciary-purple);
    }
  }

  div.controls-container > div:nth-child(1) > div:nth-child(2) {
    width: max-content;
    padding: 0 2.5em 0 2.5em;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 1em;
  }

  @media (max-width: 635px) {
    .control-buttons {
      position: fixed;
      border: 1px solid red;
      bottom: 0;
      left: 0;
    }

    div.controls-container > div:nth-child(1) {
      justify-content: space-between;
    }
  }
`;

export default function InvoiceDetails(params) {
  const { id } = useParams();
  const navigate = useNavigate();
  const invoice = getMockData().find((invoice) => invoice.id === id);

  return (
    <StyledInvoiceDetails className="view-invoice-container">
      <div
        className="go-back-container"
        onClick={() => {
          navigate("/invoices");
        }}
      >
        <img src={backArrow} alt="go back button" />
        <h4 className=" no-marg-padd">Go Back</h4>
      </div>

      <div className="controls-container">
        <div>
          <div className="body-1">Status</div>
          <InvoiceStatus invoiceStatus={invoice.status} />
        </div>

        <div className="control-buttons">
          {invoice.status !== "paid" && (
            <>
              <Button type="edit" text="Edit" />
              <Button type="delete" text="Delete" />
              <Button type="mark-paid" text="Mark as Paid" />
            </>
          )}

          {invoice.status === "paid" && <Button type="delete" />}
        </div>
      </div>

      <div className="invoice-description-container"></div>
    </StyledInvoiceDetails>
  );
}
