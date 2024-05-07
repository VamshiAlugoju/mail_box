import axios from "axios";
import { baseUrl, unexpectedError } from "../utils/constants";
import { toast } from "react-toastify";
const token = localStorage.getItem("token");

type sendMailParams = {
  email: string;
  mailData: string;
};

type sendMailResp = {
  data: string;
};
export async function sendMail(
  payoad: sendMailParams
): Promise<sendMailResp | string> {
  const url = baseUrl + "/mail/";
  try {
    const { data, status } = await axios.post<sendMailResp>(url, payoad, {
      headers: { Authorization: token },
    });

    console.log("data ", data);
    console.log("status", status);
    toast("mail sent");
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
