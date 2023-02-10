const initialState = {productDetails: []};

export const productDetailsReducer = (state = initialState, action) => {
  const {type, payload} = action;
  console.log(payload)
  switch (type) {
    case 'PRODUCT_DETAILS':
      return {...state, ...payload};
    default:
      return {...state};
  }
};
