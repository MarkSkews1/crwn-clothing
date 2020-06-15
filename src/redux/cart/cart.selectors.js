import { reselect, createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (AccumulatedQuantity, cartItem) =>
        AccumulatedQuantity + cartItem.quantity,
      0
    )
);
