const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  const state = store.getState();

  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

  return result;
};

export default localStorageMiddleware;
