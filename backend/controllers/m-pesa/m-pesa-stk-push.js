import axios from "axios";
import { StatusCodes } from "http-status-codes";

const mpesaStkPush = async (req, res, next) => {
  try {
    const token = req.token;
    const { phone, amount, cart } = req.body;

    // Validate amount
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "Invalid amount",
      });
    }

    // Validate phone number
    if (!phone) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "Phone number is required",
      });
    }

    // Format phone number
    function formatNumberForMpesa(number) {
      const formattedNumber = number.replace(/\D/g, "");

      if (formattedNumber.startsWith("0")) {
        return "254" + formattedNumber.substring(1);
      }

      if (formattedNumber.startsWith("254")) {
        return formattedNumber;
      }

      return "254" + formattedNumber;
    }

    // Debugging logs
    console.log("Request body:", req.body);
    console.log("Formatted phone number:", formatNumberForMpesa(phone));
    console.log("Amount being sent:", amount.toFixed(0));

    // Send STK push request
    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: 174379,
        Password:
          "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",
        Timestamp: "20160216165627",
        TransactionType: "CustomerPayBillOnline",
        Amount: amount.toFixed(0),
        PartyA: formatNumberForMpesa(phone),
        PartyB: 174379,
        PhoneNumber: formatNumberForMpesa(phone),
        CallBackURL: "https://mydomain.com/pat",
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("M-Pesa Response:", response.data);

    res.status(StatusCodes.OK).json({
      msg: "Payment initiated, enter your m-pesa pin to complete transaction",
    });
  } catch (error) {
    console.error("Error during M-Pesa STK push:", error.response?.data || error);
    next(error);
  }
};

export default mpesaStkPush;
