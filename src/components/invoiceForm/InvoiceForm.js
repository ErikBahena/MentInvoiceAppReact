import React from "react";
import styled from "styled-components";

const StyledInvoiceForm = styled.div`
  .new-invoice-container-background {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: var(--clr-opacity-mask-black);
  }

  .new-invoice-form-container {
    z-index: 1;
    background-color: var(--clr-general-white);
    position: absolute;
    width: 80.2083333%;
    height: max-content;
    top: 4.5em;
    border-radius: 0 1.25em 1.25em 0;
    max-width: 38.438em;
    padding: 3.5em 3.5em 2em 3.5em;
  }

  .new-invoice-form {
    margin-top: 48px;
  }

  //  all common input styling

  input[class="long-input-length"],
  input[class="small-input-length"],
  input {
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid var(--clr-input-border);
  }

  input[class="long-input-length"] {
    width: 100%;
  }
  input[class="small-input-length"] {
    width: 9.5rem;
  }
  input:focus {
    outline: 1px solid var(--clr-primary-purple);
    outline-style: auto;
  }
  input {
    font-size: 0.75rem;
  }

  // input container styling

  .city-postal-country-container,
  .bill-from-city-postal-country-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1.5em;
  }

  label.body-1 {
    color: var(--clr-terciary-purple);
    margin-bottom: 0.625rem;
  }

  .bill-from-text,
  .bill-to-text {
    margin-bottom: 1.5rem;
    color: var(--clr-primary-purple);
  }

  .bill-to-text {
    margin-top: 3rem;
  }

  #invoice-date {
    background: var(--clr-general-white);
  }

  #bill-to-clients-name,
  #bill-to-clients-email {
    margin-bottom: 1.5rem;
  }

  .invoice-date-payment-terms-container-to-break {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
    justify-content: space-between;
  }

  .custom-length-small-input {
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid var(--clr-input-border);
  }

  .invoice-date-container,
  .payment-terms-container {
    width: 47.6190476%;
  }
`;

export default function InvoiceForm({ handleFormOpen, formOpen }) {
  return (
    <StyledInvoiceForm>
      {formOpen && (
        <div
          className="new-invoice-container-background"
          onClick={handleFormOpen}
        />
      )}
      {formOpen && (
        <div className="new-invoice-form-container">
          <h1 className="new-invoice-text no-marg-padd">New Invoice</h1>
          <form className="new-invoice-form">
            <h4 className="bill-from-text no-marg-padd">Bill From</h4>
            <div className="bill-from-street-address-container">
              <label
                htmlFor="bill-from-street-address"
                className="bill-from-street-address-label body-1"
              >
                Street Address
              </label>
              <input
                type="text"
                className="long-input-length"
                name="bill-from-street-address"
                id="bill-from-street-address"
              />
            </div>
            <div className="city-postal-country-container">
              <div className="bill-from-city-container">
                <label
                  htmlFor="bill-from-city"
                  className="bill-from-city-text body-1"
                >
                  City
                </label>
                <input
                  type="text"
                  className="small-input-length"
                  name="bill-from-city"
                  id="bill-from-city"
                />
              </div>

              <div className="bill-from-postal-code-container">
                <label
                  htmlFor="bill-from-postal-code"
                  className="bill-from-postal-code-text body-1"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  className="small-input-length"
                  name="bill-from-postal-code"
                  id="bill-from-postal-code"
                />
              </div>

              <div className="bill-from-country-container">
                <label
                  htmlFor="bill-from-country"
                  className="bill-from-country-text body-1"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="small-input-length"
                  name="bill-from-country"
                  id="bill-from-country"
                />
              </div>
            </div>

            <h4 className="bill-to-text Form no-marg-padd">Bill To</h4>
            <div className="bill-to-clients-name-container">
              <label
                htmlFor="bill-to-clients-name"
                className="bill-to-clients-name-text body-1"
              >
                Client's Name
              </label>
              <input
                type="text"
                className="long-input-length"
                name="bill-to-clients-name"
                id="bill-to-clients-name"
              />
            </div>
            <div className="bill-to-clients-email-container">
              <label
                htmlFor="bill-to-clients-email"
                className="bill-to-clients-email-text body-1"
              >
                Client's Email
              </label>
              <input
                type="text"
                className="long-input-length"
                name="bill-to-clients-email"
                id="bill-to-clients-email"
              />
            </div>
            <div className="bill-to-clients-street-address-container">
              <label
                htmlFor="bill-to-clients-street-address"
                className="bill-to-clients-street-address-text body-1"
              >
                Street Address
              </label>
              <input
                type="text"
                className="long-input-length"
                name="bill-to-clients-street-address"
                id="bill-to-clients-street-address"
              />
            </div>
            <div className="bill-from-city-postal-country-container">
              <div className="bill-to-city-container">
                <label
                  htmlFor="bill-to-city"
                  className="bill-to-city-text body-1"
                >
                  City
                </label>
                <input
                  type="text"
                  className="small-input-length"
                  name="bill-to-city"
                  id="bill-to-city"
                />
              </div>
              <div className="bill-to-postal-code-container">
                <label
                  htmlFor="bill-to-postal-code"
                  className="bill-to-postal-code-text body-1"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  className="small-input-length"
                  name="bill-to-postal-code"
                  id="bill-to-postal-code"
                />
              </div>
              <div className="bill-to-country-container">
                <label
                  htmlFor="bill-to-country"
                  className="bill-to-country-text body-1"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="small-input-length"
                  name="bill-to-country"
                  id="bill-to-country"
                />
              </div>
            </div>
            <div className="invoice-date-payment-terms-container-to-break">
              <div className="invoice-date-container">
                <label
                  htmlFor="invoice-date"
                  className="invoice-date-text body-1"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  className="custom-length-small-input"
                  name="invoice-date"
                  id="invoice-date"
                />
              </div>
              <div className="payment-terms-container">
                <label
                  htmlFor="payment-terms"
                  className="payment-terms-text body-1"
                >
                  Payment Terms
                </label>
                <input
                  type="text"
                  id="payment-terms"
                  className="custom-length-small-input"
                  placeholder="Net 30 Days"
                  name="payment-terms"
                />
              </div>
            </div>
            <div className="project-description-container">
              <label
                htmlFor="project-description"
                className="project-description-text body-1"
              >
                Project Description
              </label>
              <input
                type="text"
                className="long-input-length"
                name="project-description"
                id="project-description"
              />
            </div>

            <h1 className="item-list-text no-marg-padd">Item List</h1>
            <div className="item-list-container-populate column">
              <div className="item-container">
                <div className="item-name-container">
                  <div className="item-name-text body-1">Item Name</div>
                  <input type="text" name="item-name" id="item-name" />
                </div>
                <div className="item-quantity-container">
                  <div className="item-quantity-text body-1">QTY.</div>
                  <input type="text" name="item-quantity" id="item-quantity" />
                </div>
                <div className="item-price-container">
                  <div className="item-price-text body-1">Price</div>
                  <input type="text" name="item-price" id="item-price" />
                </div>
                <div className="total-text-total-price-container">
                  <div className="total-text-form body-1">Total</div>
                  <h4 className="total-price no-marg-padd">$ 0.00</h4>
                </div>
                <div className="delete-btn-container">
                  <img
                    src="./assets/icon-delete.svg"
                    alt="delete item button"
                    className="delete-btn-img"
                  />
                </div>
              </div>
            </div>
            <div className="add-new-item-btn-container">
              <h4 className="add-new-item-text">+ Add New Item</h4>
            </div>
            <div className="body-1 all-fields-text">
              - All fields must be added
            </div>
            <div className="discard-save-as-draft-save-and-send-container">
              <div className="discard-btn-container">
                <h4 className="discard-text no-marg-padd">Discard</h4>
              </div>
              <div className="discard-save-btns-container-to-right">
                <button
                  className="save-as-draft--btn-container"
                  id="submit"
                  type="submit"
                >
                  <h4 className="save-as-draft-text no-marg-padd">
                    Save as Draft
                  </h4>
                </button>
                <div className="save-and-send-btn-container">
                  <h4 className="save-and-send-text no-marg-padd">
                    Save &amp; Send
                  </h4>
                </div>
              </div>
            </div>
          </form>

          <div className="mobile-scrolling-cover" />
          <div className="footer-mobile-buttons-container-new-form">
            <div className="discard-save-as-draft-save-and-send-container-display-at-media-mobile">
              <div className="discard-btn-container-media-mobile">
                <h4 className="discard-text-media-mobile no-marg-padd">
                  Discard
                </h4>
              </div>
              <div className="discard-save-btns-container-to-right-media-mobile">
                <button
                  className="save-as-draft--btn-container-media-mobile"
                  id="submit"
                  type="submit"
                >
                  <h4 className="save-as-draft-text-media-mobile no-marg-padd">
                    Save as Draft
                  </h4>
                </button>
                <div className="save-and-send-btn-container-media-mobile">
                  <h4 className="save-and-send-text-media-mobile no-marg-padd">
                    Save &amp; Send
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledInvoiceForm>
  );
}
