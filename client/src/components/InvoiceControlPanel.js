import React from "react";
import styled from "styled-components";

import arrowDown from "../assets/icon-arrow-down.svg";
import plusIcon from "../assets/icon-plus.svg";

import FilterBy from "./FilterBy";

const StyledInvoiceControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 87.5%;
  height: 2.75rem;
  margin: auto auto 6.375rem auto;
  position: relative;
  padding-top: 9rem;

  .amount-of-invoices {
    color: var(--clr-text-faded);
    margin-top: 0.25rem;
  }

  .filter-and-new-invoice-btn-container,
  .filter-text-and-filter-btn-container,
  .new-invoice-btn-container-bg {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: inherit;
  }

  .filter-and-new-invoice-btn-container {
    position: absolute;
    right: 0;
  }

  .filter-text-and-filter-btn-container {
    margin-right: 1.125rem;
    flex-wrap: wrap;
    justify-content: center;
    /* toggle with js */
  }

  .filter-text {
    margin-right: 0.75rem;
  }

  .new-invoice-btn-container-bg {
    background-color: var(--clr-primary-purple);
    width: 9.375rem;
    border-radius: 1.5rem;
  }

  .new-invoice-cirle {
    background-color: var(--clr-general-white);
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.375rem 0.5rem 0.375rem 0.375rem;
  }

  .new-text {
    color: var(--clr-general-white);
    white-space: nowrap;
  }

  @media (min-width: 1440px) {
    padding-top: 4.5rem;
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
            Filter
            <res-ignore>by status</res-ignore>
          </h4>
          <img
            src={arrowDown}
            alt="filter invoices button"
            className="filter-by-status filter-by-status-btn"
          />

          <FilterBy />
        </div>

        <div className="new-invoice-btn-container-bg">
          <div className="new-invoice-cirle">
            <img src={plusIcon} alt className="plus-icon" />
          </div>
          <h4 className="new-text">
            New
            <res-ignore>Invoice</res-ignore>
          </h4>
        </div>
      </div>
    </StyledInvoiceControlPanel>
  );
}
