import React from "react";

import styled from "styled-components";

const StyledFilterByComponent = styled.div`
  background-color: var(--clr-general-white);
  border-radius: 0.5rem;
  flex-direction: column;

  padding: 1.5rem 1.5rem 1.5rem 0.8em;

  -moz-box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);

  #filter-draft,
  #filter-pending,
  #filter-paid {
    margin: 0;
    padding: 0;
    height: 20px;
    margin-right: 13px;
  }

  .filter-draft-container,
  .filter-pending-container,
  .filter-paid-container {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  .checkmark {
    position: absolute;
    top: auto;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: var(--clr-input-border);
    border-radius: 2px;
  }

  .filter-draft-container:hover input ~ .checkmark,
  .filter-pending-container:hover input ~ .checkmark,
  .filter-paid-container:hover input ~ .checkmark {
    background-color: var(--clr-input-border);
    outline: auto var(--clr-primary-purple);
  }

  .filter-draft-container input:active ~ .checkmark,
  .filter-pending-container input:active ~ .checkmark,
  .filter-paid-container input:active ~ .checkmark {
    background-color: red;
  }

  .filter-draft-container input.checked ~ .checkmark,
  .filter-pending-container input.checked ~ .checkmark,
  .filter-paid-container input.checked ~ .checkmark {
    background-color: var(--clr-primary-purple);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .filter-draft-container input.checked ~ .checkmark:after,
  .filter-pending-container input.checked ~ .checkmark:after,
  .filter-paid-container input.checked ~ .checkmark:after {
    display: block;
  }

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

  .filter-by-status {
    padding: 0.6rem;
  }

  &.open {
    display: flex;

    position: absolute;

    z-index: 3;

    top: 100%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    @media (max-width: 315px) {
      left: 100%;
    }
  }

  &.closed {
    display: none !important;
  }
`;

export default function FilterBy({ open }) {
  const handleFilterChange = (e) => {
    const checkbox = e.target
      .closest(".checkbox-container")
      .querySelector("input");

    let newValue = checkbox.value;
    if (checkbox.classList.contains("checked")) newValue = null;

    const allCheckboxes = checkbox.closest(".open").querySelectorAll("input");

    allCheckboxes.forEach((box) => {
      if (box !== checkbox) box.classList.remove("checked");
      else checkbox.classList.toggle("checked");
    });
  };

  return (
    <StyledFilterByComponent className={`${open ? "open" : "closed"}`}>
      <div
        className="filter-draft-container checkbox-container"
        onClick={handleFilterChange}
      >
        <input
          type="checkbox"
          id="filter-draft"
          name="filter as draft"
          readOnly
          defaultValue="draft"
        />
        <span className="checkmark" />
        <h4 className="filter-by-draft-text no-marg-padd">Draft</h4>
      </div>

      <div
        className="filter-pending-container checkbox-container"
        onClick={handleFilterChange}
      >
        <input
          type="checkbox"
          id="filter-pending"
          name="filter-as-pending"
          readOnly
          defaultValue="pending"
        />
        <span className="checkmark" />
        <h4 className="filter-by-pending-text no-marg-padd">Pending</h4>
      </div>

      <div
        className="filter-paid-container checkbox-container"
        onClick={handleFilterChange}
      >
        <input
          type="checkbox"
          id="filter-paid"
          name="filter-as-paid"
          readOnly
          defaultValue="paid"
        />
        <h4 className="filter-by-paid-text no-marg-padd">Paid</h4>
        <span className="checkmark" />
      </div>
    </StyledFilterByComponent>
  );
}
