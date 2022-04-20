const initialState = {
  list: [],
};

const AddressReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_ADDRESSES':
    case 'ADD_ADDRESS':
    case 'EDIT_ADDRESS':
    case 'DELETE_ADDRESS':
      return {
        list: payload,
      };
    default:
      return state;
  }
};

export default AddressReducer;
