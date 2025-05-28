import { commonApi } from "./commonApi";
import { baseUrl } from "./baseUrl";

//register user
export const registerUserApi = async (reqBody) => {
  return await commonApi("POST", `${baseUrl}/user/register`, reqBody, "");
};
//login
export const loginUserApi = async (reqBody) => {
  return await commonApi("POST", `${baseUrl}/user/login`, reqBody, "");
};
//get restaurent
export const getRestaurentApi = async () => {
  return await commonApi("GET", `${baseUrl}/user/getrestaurent`, "", "");
};
//get about restaurent
export const getAboutRestaurentApi = async (id) => {
  return await commonApi("GET", `${baseUrl}/user/restaurent/${id}`, "", "");
};
//get food menu
export const getFoodMenuApi = async (id) => {
  return await commonApi("GET", `${baseUrl}/user/getfoodmenu/${id}`, "", "");
};
//add to cart
export const addToCartApi = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${baseUrl}/user/cart/add`,reqBody,reqHeader);
};
//get cart
export const getCartApi = async (reqHeader)=>{
    return await commonApi("GET",`${baseUrl}/user/cart/get`,"",reqHeader)
}
//proceed to pay
export const proceedToPayApi = async (reqBody,reqHeader)=>{
  return await commonApi("PUT",`${baseUrl}/user/cart/edit`,reqBody,reqHeader)
}

export const getUserDetailsApi = async (reqHeader)=>{
  return await commonApi('GET',`${baseUrl}/user/address/get`,"",reqHeader)
}

export const setOrderApi = async (reqBody,reqHeader)=>{
  return await commonApi('POST',`${baseUrl}/user/order/confirm`,reqBody,reqHeader)
}

export const getUserOrderDetailsApi = async (reqHeader)=>{
  return await commonApi('GET',`${baseUrl}/user/order/get`,"",reqHeader)
}

//admin apis
//add restaurent
export const addRestaurentApi = async (reqBody) => {
  return await commonApi("POST", `${baseUrl}/admin/addrestaurent`, reqBody, "");
};
//get customer details
export const getCustomerDetailsApi = async () => {
  return await commonApi("GET", `${baseUrl}/admin/getCustomer`, "", "");
};
//add new staff
export const addNewStaffApi = async (reqBody) => {
  return await commonApi("POST", `${baseUrl}/admin/addstaff`, reqBody, "");
};
//get staff details
export const getStaffDetailsApi = async () => {
  return await commonApi("GET", `${baseUrl}/admin/getstaff`, "", "");
};

//restaurent api
//add food item
export const addFoodItemApi = async (reqBody, reqHeader) => {
  return await commonApi(
    "POST",
    `${baseUrl}/restaurent/additem`,
    reqBody,
    reqHeader
  );
};
