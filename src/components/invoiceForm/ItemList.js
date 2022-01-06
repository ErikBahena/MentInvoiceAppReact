import React from "react";
import styled from "styled-components";
import deleteBtnImg from "../../assets/icon-delete.svg";

const StyledItemComponent = styled.div`
  .item-list-text {
    margin: 24px 0 16px 0;
    color: var(--clr-item-list-text);
  }

  .item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  #item-name,
  #item-quantity,
  #item-price {
    width: 100%;
    padding-left: 12px !important;
    padding-right: none !important;
  }

  .item-name-container {
    width: 42.4603175%;

    input {
      min-width: 13.375rem;
    }
  }

  .item-quantity-container {
    width: 9.1269841%;

    input {
      min-width: 3.3rem;
    }
  }

  .item-price-container {
    width: 19.8412698%;

    input {
      min-width: 6.25rem;
    }
  }

  .total-text-total-price-container {
    height: 4.563rem;
    width: max-content;
  }
  .total-text-form {
    text-align: center;
    margin-bottom: 0 !important;
    padding-bottom: 1.6em !important;

    color: var(--clr-terciary-purple);
  }

  .delete-btn-img {
    padding-top: 0.6em;

    &:hover {
      cursor: pointer;
    }
  }

  .add-new-item-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 3rem;
    width: 100%;

    background-color: var(--clr-item-totals-background);
    color: var(--clr-terciary-purple);
    border-radius: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default function ItemList() {
  return (
    <StyledItemComponent>
      <h1 className="item-list-text no-marg-padd">Item List</h1>

      <div className="item-list-container-populate column">
        <div className="item-container">
          <div className="item-name-container">
            <label htmlFor="item-name" className="item-name-text body-1">
              Item Name
            </label>
            <input type="text" name="item-name" id="item-name" />
          </div>
          <div className="item-quantity-container">
            <label
              htmlFor="item-quantity"
              className="item-quantity-text body-1"
            >
              QTY.
            </label>
            <input type="text" name="item-quantity" id="item-quantity" />
          </div>

          <div className="item-price-container">
            <label htmlFor="item-price" className="item-price-text body-1">
              Price
            </label>
            <input type="text" name="item-price" id="item-price" />
          </div>

          <div className="total-text-total-price-container">
            <div className="total-text-form body-1">Total</div>
            <h4 className="total-price no-marg-padd">$ 0.00</h4>
          </div>

          <div className="delete-btn-container">
            <img
              src={deleteBtnImg}
              alt="delete item button"
              className="delete-btn-img"
            />
          </div>
        </div>
      </div>

      <div className="add-new-item-btn-container">
        <h4 className="add-new-item-text">+ Add New Item</h4>
      </div>
    </StyledItemComponent>
  );
}
