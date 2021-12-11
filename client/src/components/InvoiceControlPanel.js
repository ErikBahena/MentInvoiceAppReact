import React from "react";
import styled from "styled-components";

import arrowDown from "../assets/icon-arrow-down.svg";
import plusIcon from "../assets/icon-plus.svg";

import FilterBy from "./FilterBy";

const StyledInvoiceControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 87.5%;
  margin: 0 auto;

  margin-bottom: 5em;
  padding-top: 9em;

  .amount-of-invoices {
    color: var(--clr-text-faded);
    margin-top: 0.25em;
  }

  .filter-and-new-invoice-btn-container,
  .filter-text-and-filter-btn-container,
  .new-invoice-btn-container-bg {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .filter-text-and-filter-btn-container {
    margin-right: 1.125rem;
    /* toggle with js */
  }

  .filter-text {
    margin-right: 0.75em;
  }

  .new-invoice-btn-container-bg {
    background-color: var(--clr-primary-purple);
    width: max-content;
    border-radius: 1.5em;

    padding-right: 1.5em;
    padding-left: 0.5em;

    &:hover {
      background-color: var(--clr-secondary-purple);
      transition: 0.4s ease-in-out;
    }
  }

  .new-invoice-circle {
    background-color: var(--clr-general-white);
    border-radius: 50%;
    height: 2em;
    width: 2em;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .new-text {
    color: var(--clr-general-white);
    white-space: nowrap;
    margin-left: 0.5em;
  }

  @media (min-width: 1440px) {
    padding-top: 4.5rem;
  }

  @media (max-width: 600px) {
    .new-text span,
    .filter-text span {
      display: none;
    }
  }
  @media (max-width: 315px) {
    flex-direction: column;
    gap: 1em;

    .invoice-text {
      align-self: flex-start;
    }

    .filter-and-new-invoice-btn-container {
      align-self: flex-end;
      justify-content: space-between;
      width: 100%;
      .filter-text {
        padding-left: 0.4em;
      }
    }
  }

  @media (max-width: 200px) {
    .filter-and-new-invoice-btn-container {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 120px) {
    .new-invoice-circle {
      display: none;
    }
  }
`;

export default function InvoiceControlPanel() {
  return (
    <StyledInvoiceControlPanel>
      <div className="invoice-text" id="media-fz-h3">
        <h2 className="no-marg-padd">Invoices</h2>
        <div className="amount-of-invoices body-1 no-marg-padd">
          No Invoices
        </div>
      </div>

      <div className="filter-and-new-invoice-btn-container">
        <div className="filter-text-and-filter-btn-container">
          <h4 className="filter-text">
            Filter<span> by status</span>
          </h4>
          <img
            src={arrowDown}
            alt="filter invoices button"
            className="filter-by-status filter-by-status-btn"
          />

          <FilterBy />
        </div>

        <div className="new-invoice-btn-container-bg">
          <div className="new-invoice-circle">
            <img src={plusIcon} alt className="plus-icon" />
          </div>
          <h4 className="new-text">
            New <span>Invoice</span>
          </h4>
        </div>
      </div>
    </StyledInvoiceControlPanel>
  );
}
