import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/Productconstants"

const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { laoding: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { laoding: false, error: action.payload };
        default:
            return state;
    }
};
export default productListReducer;