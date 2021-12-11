import React from "react";

import styled from "styled-components";

const StyledFilterByComponent = styled.div`
  flex: 0 0 100%;
  background-color: var(--clr-general-white);
  border-radius: 0.5rem;
  width: 13.33333%;
  max-width: 192px;
  min-height: 128px;
  justify-content: space-between;
  flex-direction: column;
  display: none;
  z-index: 3;
  padding: 1.5rem;

  -moz-box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);

  #filter-draft,
  #filter-pending,
  #filter-paid {
    margin: 0;
    padding: 0;
    height: 20px;
    margin-right: 13px;
    color: red;
  }

  #filter-draft:checked {
    background-color: var(--clr-primary-purple);
  }

  .filter-draft-container,
  .filter-pending-container,
  .filter-paid-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  /* filter by example */

  /* Hide the default checkbox */
  input[type="checkbox"] {
    visibility: hidden;
  }

  /* Creating a custom checkbox
  based on demand */
  .checkmark {
    position: absolute;
    top: auto;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: var(--clr-input-border);
    border-radius: 2px;
  }

  /* Specify the background color to be
  shown when hovering over checkbox */

  .filter-draft-container:hover input ~ .checkmark,
  .filter-pending-container:hover input ~ .checkmark,
  .filter-paid-container:hover input ~ .checkmark {
    background-color: var(--clr-input-border);
    outline: auto var(--clr-primary-purple);
  }

  /* Specify the background color to be
  shown when checkbox is active */
  .filter-draft-container input:active ~ .checkmark,
  .filter-pending-container input:active ~ .checkmark,
  .filter-paid-container input:active ~ .checkmark {
    background-color: red;
  }

  /* Specify the background color to be
  shown when checkbox is checked */

  .filter-draft-container input:checked ~ .checkmark,
  .filter-pending-container input:checked ~ .checkmark,
  .filter-paid-container input:checked ~ .checkmark {
    background-color: var(--clr-primary-purple);
  }

  /* Checkmark to be shown in checkbox */
  /* It is not be shown when not checked */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Display checkmark when checked */
  .filter-draft-container input:checked ~ .checkmark:after,
  .filter-pending-container input:checked ~ .checkmark:after,
  .filter-paid-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Styling the checkmark using webkit */
  /* Rotated the rectangle by 45 degree and 
  showing only two border to make it look
  like a tickmark */
  .filter-draft-container .checkmark:after,
  .filter-pending-container .checkmark:after,
  .filter-paid-container .checkmark:after {
    left: 5px;
    bottom: 3px;
    width: 6px;
    height: 11px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* adding padding to the arrow for filtering */
  .filter-by-status {
    padding: 0.6rem;
  }
`;

export default function FilterBy() {
  return (
    <StyledFilterByComponent>
      <div className="filter-draft-container checkbox-container">
        <input
          type="checkbox"
          id="filter-draft"
          name="filter as draft"
          defaultValue="draft"
        />
        <span className="checkmark" />
        <h4 className="filter-by-draft-text no-marg-padd">Draft</h4>
      </div>
      <div className="filter-pending-container checkbox-container">
        <input
          type="checkbox"
          id="filter-pending"
          name="filter-as-pending"
          defaultValue="pending"
        />
        <span className="checkmark" />
        <h4 className="filter-by-pending-text no-marg-padd">Pending</h4>
      </div>
      <div className="filter-paid-container checkbox-container">
        <input
          type="checkbox"
          id="filter-paid"
          name="filter-as-paid"
          defaultValue="paid"
        />
        <h4 className="filter-by-paid-text no-marg-padd">Paid</h4>
        <span className="checkmark" />
      </div>
    </StyledFilterByComponent>
  );
}
