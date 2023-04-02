const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const priceList = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRICE_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_PRICE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_PRICE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };

    default:
      return state;
  }
};

export default priceList;
