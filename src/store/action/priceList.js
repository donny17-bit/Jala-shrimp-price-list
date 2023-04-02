import axios from "../../utils/axios";

export const getPriceList = (size, page) => {
  return {
    type: "GET_PRICE",
    payload: axios.get(
      `?not_null=size_${size}&with=country%2Cregion%2Ccurrency&appends=slug%2Cshrimp_price_per_week_region_id&page=${page}`
    ),
  };
};
