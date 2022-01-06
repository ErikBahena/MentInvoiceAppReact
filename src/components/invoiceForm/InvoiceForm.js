import React, { useState } from "react";
import styled from "styled-components";
import InvoiceActionButtons from "./InvoiceActionButtons";
import ItemList from "./ItemList";

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

  form {
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

  .city-postal-country-container div,
  .bill-from-city-postal-country-container div,
  .bill-to-city-postal-country-container div {
    width: min-content;
  }

  .city-postal-country-container,
  .bill-from-city-postal-country-container,
  .bill-to-city-postal-country-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    margin: 1.5em 0;
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

const initialFormValues = {
  paymentDue: "",
  description: "",
  paymentTerms: "",

  clientName: "",
  clientEmail: "",
  status: "draft",

  senderAddress: {
    city: "",
    country: "",
    postCode: "",
    street: "",
  },

  clientAddress: {
    city: "",
    country: "",
    postCode: "",
    street: "",
  },

  items: [
    {
      name: "",
      price: 0,
      quantity: 0,
      total: 0,
    },
  ],

  total: 0,
};

export default function InvoiceForm({ handleFormOpen, formOpen }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleFormChange = (e, type) => {
    const name = e.target.name;
    const value = e.target.value;

    if (type === "senderAddress")
      setFormValues({
        ...formValues,
        senderAddress: {
          ...formValues.senderAddress,
          [name]: value,
        },
      });
    else if (type === "clientAddress")
      setFormValues({
        ...formValues,
        clientAddress: {
          ...formValues.clientAddress,
          [name]: value,
        },
      });
    else if (type === "general") {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  return (
    <StyledInvoiceForm>
      {formOpen && (
        <>
          <div
            className="new-invoice-container-background"
            onClick={handleFormOpen}
          />

          <div className="new-invoice-form-container">
            <h1 className="new-invoice-text no-marg-padd">New Invoice</h1>

            <form>
              <h4 className="bill-from-text no-marg-padd">Bill From</h4>

              <div className="bill-from-street-address-container">
                <label
                  htmlFor="bill-from-street-address"
                  className="bill-from-street-address-label body-1"
                >
                  Street Address
                </label>
                <input
                  onChange={(e) => handleFormChange(e, "senderAddress")}
                  value={formValues.senderAddress.street}
                  type="text"
                  className="long-input-length"
                  name="street"
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
                    onChange={(e) => handleFormChange(e, "senderAddress")}
                    value={formValues.senderAddress.city}
                    type="text"
                    className="small-input-length"
                    name="city"
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
                    onChange={(e) => handleFormChange(e, "senderAddress")}
                    value={formValues.senderAddress.postCode}
                    type="text"
                    className="small-input-length"
                    name="postCode"
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
                    onChange={(e) => handleFormChange(e, "senderAddress")}
                    value={formValues.senderAddress.country}
                    type="text"
                    className="small-input-length"
                    name="country"
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
                  onChange={(e) => handleFormChange(e, "general")}
                  value={formValues.clientName}
                  type="text"
                  className="long-input-length"
                  name="clientName"
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
                  onChange={(e) => handleFormChange(e, "general")}
                  value={formValues.clientEmail}
                  type="text"
                  className="long-input-length"
                  name="clientEmail"
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
                  onChange={(e) => handleFormChange(e, "clientAddress")}
                  value={formValues.clientAddress.street}
                  type="text"
                  className="long-input-length"
                  name="street"
                  id="bill-to-clients-street-address"
                />
              </div>

              <div className="bill-to-city-postal-country-container">
                <div className="bill-to-city-container">
                  <label
                    htmlFor="bill-to-city"
                    className="bill-to-city-text body-1"
                  >
                    City
                  </label>
                  <input
                    onChange={(e) => handleFormChange(e, "clientAddress")}
                    value={formValues.clientAddress.city}
                    type="text"
                    className="small-input-length"
                    name="city"
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
                    onChange={(e) => handleFormChange(e, "clientAddress")}
                    value={formValues.clientAddress.postCode}
                    type="text"
                    className="small-input-length"
                    name="postCode"
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
                    onChange={(e) => handleFormChange(e, "clientAddress")}
                    value={formValues.clientAddress.country}
                    type="text"
                    className="small-input-length"
                    name="country"
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
                    onChange={(e) => handleFormChange(e, "general")}
                    value={formValues.paymentDue}
                    type="date"
                    className="custom-length-small-input"
                    name="paymentDue"
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
                    onChange={(e) => handleFormChange(e, "general")}
                    value={formValues.paymentTerms}
                    type="text"
                    id="payment-terms"
                    className="custom-length-small-input"
                    placeholder="Due on Receipt"
                    name="paymentTerms"
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
                  onChange={(e) => handleFormChange(e, "general")}
                  value={formValues.description}
                  type="text"
                  className="long-input-length"
                  name="description"
                  id="project-description"
                />
              </div>

              <ItemList formValues={formValues} setFormValues={setFormValues} />

              {/* <div className="body-1 all-fields-text">
                - All fields must be added
              </div> */}

              <InvoiceActionButtons />
            </form>

            <div className="mobile-scrolling-cover" />
          </div>
        </>
      )}
    </StyledInvoiceForm>
  );
}
