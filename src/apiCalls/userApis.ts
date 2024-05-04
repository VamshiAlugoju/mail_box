import axios from "axios";
import { baseUrl, unexpectedError } from "../utils/constants";
import { toast } from "react-toastify";

type userSignUpParams = {
  name: string;
  email: string;
  password: string;
};

type signUpresponse = {
  data: string;
};
export async function userSignUp(
  payoad: userSignUpParams
): Promise<signUpresponse | string> {
  const url = baseUrl + "/user/signup";
  try {
    const { data, status } = await axios.post<signUpresponse>(url, payoad);

    console.log("data ", data);
    console.log("status", status);
    toast("signed up successfully");
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.response?.data.error);
      toast(error.response?.data.error);
      return Promise.reject(error.response?.data.error);
    } else {
      return Promise.reject(unexpectedError);
    }
  }
}

type userLoginPayload = {
  email: string;
  password: string;
};

type loginResponse = {
  data: {
    email: string;
    token: string;
  };
};

export async function userLogin(
  payoad: userLoginPayload
): Promise<loginResponse> {
  const url = baseUrl + "/user/login";
  try {
    const { data, status } = await axios.post<loginResponse>(url, payoad);

    console.log("data ", data.data);
    console.log("status", status);
    toast("logged in successfully");
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.response?.data.error);
      toast(error.response?.data.error);
      return Promise.reject(error.response?.data.error);
    } else {
      return Promise.reject(unexpectedError);
    }
  }
}
