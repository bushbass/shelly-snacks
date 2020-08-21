export function convertCentsToDollars(price) {
  const amountInDollars = price / 100;

  return "$" + amountInDollars.toFixed(2);
}

export function combineCart(cart) {
  const combinedCart = {};
  cart.forEach(item => {
    !combinedCart[item.productName]
      ? (combinedCart[item.productName] = [1, item.price, item.idFromBackend])
      : combinedCart[item.productName][0]++;
  });
  return combinedCart;
}

export function calculateSubtotal(combinedCart) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (Object.keys(combinedCart).length === 0) return null;

  return Object.entries(combinedCart)
    .map(item => item[1][0] * item[1][1])
    .reduce(reducer);
}
