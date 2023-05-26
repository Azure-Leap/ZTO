import React, { useContext } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Input,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import axios from "axios";
import { CartContext } from "@/context/CartContext";
import { AuthContext } from "@/context/UserContext";
import { BASE_API_URL } from "@/utils/variables";

const StepTwo = () => {
  const { user }: any = useContext(AuthContext);
  const { cartItem, orders, setOrderId }: any = useContext(CartContext);
  console.log("py", orders)

  const [cardNumber, setCardNumber] = useState("2417 3125 3544 3546");
  const [cvvNumber, setCvvNumber] = useState("327");
  const [expiryMonth, setExpiryMonth] = useState("09");
  const [expiryYear, setExpiryYear] = useState("22");
  const [mobileNumber, setMobileNumber] = useState("adjsbj");
  const [cardName, setCardName] = useState("Jonathan Micheal");
  const [isFlip, setIsFlip] = useState(false);

  const handleCardNumberChange = (event: any) => {
    setCardNumber(event.target.value);
  };
  const formatCardNumber = (cardNumber: string) => {
    const digitsOnly = cardNumber.replace(/\D/g, "");
    const groups = digitsOnly.match(/.{1,4}/g);
    return groups ? groups.join(" ") : "";
  };

  const onCvvFocus = () => {
    setIsFlip(!isFlip);
  };

  // const updateOrder = async (id: any) => {
  //   console.log("hh", id);
  //   if (user._id === orders?.user_id?._id) {
  //     try {
  //       const res = await axios.put(`${BASE_API_URL}/orders/payment/${id}`, {
  //         payment: {
  //           cardNumber,
  //           cvvNumber,
  //           expiryMonth,
  //           expiryYear,
  //           cardName,
  //           mobileNumber,
  //           amount: orders.totalAmount,
  //           status: "SUCCESS",
  //         },
  //       });
  //       console.log(",,;", res);
  //     } catch (err) {
  //       console.log("ERR", err);
  //     }
  //   }
  // };


  // const vatPrice = Math.floor(cartItem?.totalPrice * 0.1);

  return (
    <Box
      sx={{
        margin: "auto",
        width: "100%",
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        padding: "300px",
        maxHeight: "40vh",
        minHeight: "38vh",
        borderRadius: "15px",
      }}
    >
      <Box>
        <Box
          sx={{ backgroundColor: "white", padding: "20px" }}
          className="p-5 bod-3"
        >
          <IconButton href="/website-templates/cart">
            <ArrowCircleLeftOutlinedIcon />
          </IconButton>
          <Box className="row">
            <Box className="col-lg-8 col-md-12">
              <form>
                <Box className="header flex-between flex-vertical-center">
                  <Box className="flex-vertical-center">
                    <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
                    <span className="title">
                      <strong>ZTO</strong>
                      <span>Pay</span>
                    </span>
                  </Box>
                </Box>
                <Box className="card-data flex-fill flex-vertical">
                  <Box className="flex-between flex-vertical-center">
                    <Box className="card-property-title">
                      <strong>Card Number</strong>
                      <span>Enter 16-digit card number on the card</span>
                    </Box>
                  </Box>
                  <Box className="flex-between">
                    <Box className="card-number flex-vertical-center flex-fill">
                      <Box className="card-number-field flex-vertical-center flex-fill">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="24px"
                          height="24px"
                        >
                          <path
                            fill="#ff9800"
                            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                          />
                          <path
                            fill="#d50000"
                            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                          />
                          <path
                            fill="#ff3d00"
                            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                          />
                        </svg>
                        <input
                          type="text"
                          value={formatCardNumber(cardNumber)}
                          maxLength={19}
                          onChange={handleCardNumberChange}
                          placeholder="Card Number"
                          className="form-control"
                          id="cardNumber"
                          name="cardNumber"
                          data-bound="carddigits_mock"
                          data-def="0000 0000 0000 0000"
                          required
                        />
                      </Box>
                      <i className="ai-circle-check-fill size-lg f-main-color"></i>
                    </Box>
                  </Box>
                  <Box className="flex-between">
                    <Box className="card-property-title">
                      <strong>Expiry Date</strong>
                      <span>Enter the expiration date of the card</span>
                    </Box>
                    <Box className="card-property-value flex-vertical-center">
                      <Box className="input-container half-width">
                        <input
                          value={expiryMonth}
                          onChange={(e) => setExpiryMonth(e.target.value)}
                          // onChange={handleExpiryMonthChange}
                          maxLength={2}
                          className="numbers month-own"
                          data-def="00"
                          type="text"
                          data-bound="mm_mock"
                          placeholder="MM"
                        />
                      </Box>
                      <span className="m-md">/</span>
                      <Box className="input-container half-width">
                        <input
                          value={expiryYear}
                          onChange={(e) => setExpiryYear(e.target.value)}
                          // onChange={handleExpiryYearChange}
                          maxLength={2}
                          className="numbers year-own"
                          data-def="01"
                          type="text"
                          data-bound="yy_mock"
                          placeholder="YYYY"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex-between">
                    <Box className="card-property-title">
                      <strong>CVC Number</strong>
                      <span>
                        Enter card verification code from the back of the card
                      </span>
                    </Box>
                    <Box className="card-property-value">
                      <Box className="input-container">
                        <input
                          maxLength={3}
                          value={cvvNumber}
                          onChange={(e) => setCvvNumber(e.target.value)}
                          // onChange={handleCvvNumberChange}
                          onFocus={onCvvFocus}
                          onBlur={onCvvFocus}
                          id="cvc"
                          placeholder="Card CVV"
                          type="password"
                        />
                        <i
                          id="cvc_toggler"
                          data-target="cvc"
                          className="ai-eye-open pointer"
                        ></i>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex-between">
                    <Box className="card-property-title">
                      <strong>Cardholder Name</strong>
                      <span>Enter cardholder's name</span>
                    </Box>
                    <Box className="card-property-value">
                      <Box className="input-container">
                        <input
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          // onChange={handleFullNameChange}
                          maxLength={25}
                          id="name"
                          data-bound="name_mock"
                          data-def="Mr. Cardholder"
                          type="text"
                          className="uppercase"
                          placeholder="CARDHOLDER NAME"
                        />
                        <i className="ai-person"></i>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex-between">
                    <Box className="card-property-title">
                      <strong>Mobile No.</strong>
                      <span>Enter Mobile No.</span>
                    </Box>
                    <Box className="card-property-value">
                      <Box className="input-container">
                        <input
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          // onChange={handlePasswordChange}
                          maxLength={8}
                          id="phone"
                          type="text"
                          placeholder="Your Mobile No."
                        />
                        <i className="ai-phone"></i>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ width: "500px" }} className="action flex-center">
                  <button
                    type="submit"
                    className="b-main-color pointer"
                    onClick={() => {
                      // updateOrder(orders._id);
                      setOrderId("");
                    }}
                  >
                    Pay Now
                  </button>
                </Box>
              </form>
            </Box>
            <Box
              sx={{ width: "50%", height: "400px" }}
              className="col-lg-4 col-md-12"
            >
              <Box className="purchase-section flex-fill flex-vertical">
                <Box>
                  {isFlip ? (
                    <Box sx={{ width: "450px", height: "250px" }}>
                      <Box
                        sx={{ height: "210px" }}
                        className="card-mockup flex-vertical"
                      >
                        <Box
                          sx={{
                            width: "100%",
                            position: "absolute",
                            height: "50px",
                            backgroundColor: "black",
                            top: "20px",
                            right: "0px",
                          }}
                        ></Box>
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "250px",
                              height: "50px",
                              backgroundColor: "white",
                              marginTop: "80px",
                            }}
                          ></Box>
                          <Box
                            sx={{
                              background: "white",
                              height: "50px",
                              color: "black",
                              textAlign: "center",
                              marginTop: "80px",
                            }}
                          >
                            {cvvNumber}
                          </Box>
                        </Box>
                        <Box></Box>
                      </Box>
                    </Box>
                  ) : (
                    <Box sx={{ width: "450px", height: "250px" }}>
                      <Box className="card-mockup flex-vertical">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="40px"
                          height="40px"
                        >
                          <path
                            fill="#ff9800"
                            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                          />
                          <path
                            fill="#d50000"
                            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                          />
                          <path
                            fill="#ff3d00"
                            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                          />
                        </svg>
                        <Box>
                          <strong>
                            <Box
                              id="name_mock"
                              className="size-md pb-sm uppercase ellipsis"
                            >
                              <h3>{cardName}</h3>
                            </Box>
                          </strong>
                          <Box className="size-md pb-md">
                            <strong>
                              <Input
                                sx={{
                                  color: "white",
                                  outline: "none",
                                  border: "none",
                                }}
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="text-white text-base font-bold outline-none bg-transparent border-none"
                              />
                            </strong>
                          </Box>
                          <Box className="flex-between flex-vertical-center">
                            <strong className="size-md">
                              <span>Expiry Date : </span>
                              <span id="mm_mock">{expiryMonth}/</span> /{" "}
                              <span id="yy_mock">{expiryYear}</span>
                            </strong>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                              width="40px"
                              height="40px"
                            >
                              <path
                                fill="#1565C0"
                                d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                              />
                              <path
                                fill="black"
                                d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                              />
                              <path
                                fill="#FFC107"
                                d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                              />
                            </svg>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>

                <ul className="purchase-props">
                  <li className="flex-between">
                    <span>Company</span>
                    <strong>ZTO LLC</strong>
                  </li>
                  <li className="flex-between">
                    <span>Order number</span>
                    <strong>429252965</strong>
                  </li>
                    <li  className="flex-between">
                      <span>Product</span>
                      <strong>ZTO</strong>
                    </li>
               
                  <li className="flex-between">
                    <span>VAT (10%)</span>
                    <strong>20</strong>
                  </li>
                </ul>
              </Box>
              <Box className="separation-line"></Box>
              <Box className="total-section flex-between flex-vertical-center">
                <Box className="flex-fill flex-vertical">
                  <Box className="total-label f-secondary-color">
                    You have to Pay
                  </Box>
                  <Box>
                    <strong>
                      <span className="f-secondary-color">USD</span>
                    </strong>
                    <small>.99 <span className="f-secondary-color">USD</span></small>
                  </Box>
                </Box>
                <i className="ai-coin size-lg"></i>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default StepTwo;
