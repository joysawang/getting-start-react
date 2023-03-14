import actions from "../actions";

const initialState = {
  data: [],
};

const cartReducer = (state: any = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ACTION_CART_ADD:
      return {
        ...state,
        data: state.data.concat(payload.value),
      };
    default:
      return state;
  }
};

export default cartReducer;
