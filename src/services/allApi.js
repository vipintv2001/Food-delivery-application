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

//delete cart items
export const deleteCartItemApi = async (id,reqHeader)=>{
  return await commonApi("DELETE",`${baseUrl}/user/cart/item/delete/${id}`,{},reqHeader)
}

//delete entire cart
export const deleteCartApi = async (reqHeader)=>{
  return await commonApi("DELETE",`${baseUrl}/user/cart/delete`,{},reqHeader)
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
//cancel order
export const cancelOrderApi = async (id,reqBody,reqHeader)=>{
  return await commonApi('PUT',`${baseUrl}/user/order/cancel/${id}`,reqBody,reqHeader)
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
//delete restaurent
export const deleteRestaurentApi = async (id,reqHeader)=>{
  return await commonApi("DELETE",`${baseUrl}/admin/restaurent/delete/${id}`,{},reqHeader)
}
//get all orders
export const getAllOrderApi = async (reqHeader)=>{
  return await commonApi("GET",`${baseUrl}/admin/order/get`,"",reqHeader)
}

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
//delete Food Items
export const deleteFoodItemApi = async (id,reqHeader) =>{
  return await commonApi("DELETE",`${baseUrl}/restaurent/delete/${id}`,{},reqHeader)
}
//edit food items
export const editFoodItemsApi = async (id,reqBody,reqHeader)=>{
  return await commonApi("PUT",`${baseUrl}/restaurent/edit/${id}`,reqBody,reqHeader)
}
//get restaurent order details
export const getRestaurentOrderDetailsApi = async (reqHeader) => {
  return await commonApi("GET", `${baseUrl}/restaurent/order/get`, "", reqHeader);
};


//staff Api
//set work status
export const setWorkStatusApi = async (reqBody,reqHeader)=>{
  return await commonApi("PUT",`${baseUrl}/staff/work/edit`,reqBody,reqHeader)
}
//claim order
export const claimOrderApi = async (id,reqHeader)=>{
  return await commonApi("PUT",`${baseUrl}/staff/order/claim/${id}`,{},reqHeader)
}
//get my order
export const getMyOrderApi = async (reqHeader)=>{
  return await commonApi("GET",`${baseUrl}/staff/myorder/get`,"",reqHeader)
}
//update delivery Status
export const updateDeliveryStatusApi = async (id,reqBody,reqHeader)=>{
  return await commonApi("PUT", `${baseUrl}/staff/myorder/edit/deliverystatus/${id}`,reqBody,reqHeader);
}
//update pament status
export const updatePaymentStatusApi = async (id,reqBody,reqHeader) =>{
  return await commonApi(
    "PUT",
    `${baseUrl}/staff/myorder/edit/paymentstatus/${id}`,reqBody,reqHeader
  );
}