export const inputHandler = (e, stateFunction) => {
  const { name, value } = e.target;
  stateFunction((prev) => ({ ...prev, [name]: value }));
};

export default inputHandler;
