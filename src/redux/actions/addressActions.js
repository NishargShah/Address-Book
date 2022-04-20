const ITEM_NAME = process.env.REACT_APP_ITEM_NAME;

const getLocalStorageAddresses = () => {
  const stringifyAddresses = localStorage.getItem(ITEM_NAME);
  return JSON.parse(stringifyAddresses);
};

const setLocalStorageAddress = addresses => {
  localStorage.setItem(ITEM_NAME, JSON.stringify(addresses));
  return getLocalStorageAddresses();
};

export const getAddresses = () => async dispatch => {
  try {
    const address = getLocalStorageAddresses();
    const addresses = address ?? [];

    dispatch({
      type: 'GET_ADDRESSES',
      payload: addresses,
    });

    return addresses;
  } catch (err) {
    return [];
  }
};

export const getAddress = id => {
  const addresses = getLocalStorageAddresses();
  return addresses.find(cur => cur.id === +id);
};

export const addAddress = data => async (dispatch, getState) => {
  try {
    const newAddresses = [...getState().addresses.list, data];
    const addresses = setLocalStorageAddress(newAddresses);

    dispatch({
      type: 'ADD_ADDRESS',
      payload: addresses,
    });

    return addresses;
  } catch (err) {
    return [];
  }
};

export const editAddress = (id, data) => async (dispatch, getState) => {
  try {
    const newAddresses = getState().addresses.list.map(cur => {
      if (cur.id === id) return data;
      return cur;
    });
    const addresses = setLocalStorageAddress(newAddresses);

    dispatch({
      type: 'EDIT_ADDRESS',
      payload: addresses,
    });

    return addresses;
  } catch (err) {
    return [];
  }
};

export const deleteAddress = id => async (dispatch, getState) => {
  try {
    const newAddresses = getState().addresses.list.filter(cur => cur.id !== id);
    const addresses = setLocalStorageAddress(newAddresses);

    dispatch({
      type: 'DELETE_ADDRESS',
      payload: addresses,
    });

    return addresses;
  } catch (err) {
    return [];
  }
};
