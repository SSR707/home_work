export const getLocalStorgeData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    return undefined;
  }
};

export const setData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
