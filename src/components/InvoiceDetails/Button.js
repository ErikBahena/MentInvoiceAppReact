import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.3em 0 1.3em;

  &.edit {
    background-color: var(--clr-background-light);
    color: var(--clr-terciary-purple);
  }

  &.delete {
    background-color: var(--clr-danger);
    color: var(--clr-general-white);
  }

  &.mark-paid,
  &.sign-up,
  &.primary {
    background-color: var(--clr-primary-purple);
    color: var(--clr-general-white);
  }

  &.discard {
    background-color: var(--clr-item-totals-background);
    color: var(--clr-terciary-purple);
  }

  &.draft {
    background-color: var(--clr-nav-purple-gray);
    color: var(--clr-text-faded);
  }
`;

export default function Button({ type, text }) {
  return (
    <StyledButton className={type}>
      <h4>{text}</h4>
    </StyledButton>
  );
}
