import React, { useState } from "react";
import { FaGooglePay, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import "./Payment.css";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("Debit Card");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Payment Options
        </h1>

        {/* Payment Method Selection */}
        <div className="payment-methods mb-6 grid grid-cols-2 gap-4">
          <button
            onClick={() => setSelectedOption("Debit Card")}
            className={`payment-option ${
              selectedOption === "Debit Card" ? "active" : ""
            }`}
          >
            <FaCcVisa className="inline-block text-blue-600 mr-2" /> Debit Card
          </button>
          <button
            onClick={() => setSelectedOption("Credit Card")}
            className={`payment-option ${
              selectedOption === "Credit Card" ? "active" : ""
            }`}
          >
            <FaCcMastercard className="inline-block text-red-600 mr-2" /> Credit
            Card
          </button>
          <button
            onClick={() => setSelectedOption("NetBanking")}
            className={`payment-option ${
              selectedOption === "NetBanking" ? "active" : ""
            }`}
          >
            NetBanking
          </button>
          <button
            onClick={() => setSelectedOption("Google Pay")}
            className={`payment-option ${
              selectedOption === "Google Pay" ? "active" : ""
            }`}
          >
            <FaGooglePay className="inline-block text-black mr-2" /> Google Pay
          </button>
          <button
            onClick={() => setSelectedOption("PhonePe")}
            className={`payment-option ${
              selectedOption === "PhonePe" ? "active" : ""
            }`}
          >
            <SiPhonepe className="inline-block text-purple-600 mr-2" /> PhonePe
          </button>
        </div>

        {selectedOption === "Debit Card" || selectedOption === "Credit Card" ? (
          <form className="space-y-4">
            {/* Cardholder's Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Cardholder's Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="John Doe"
              />
            </div>

            {/* Card Number */}
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="XXXX XXXX XXXX XXXX"
                maxLength="19"
              />
            </div>

            {/* Expiration Date and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>

              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="123"
                  maxLength="3"
                />
              </div>
            </div>
          </form>
        ) : selectedOption === "NetBanking" ? (
          <form className="space-y-4">
            {/* Bank Selection */}
            <div>
              <label
                htmlFor="bank"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Bank
              </label>
              <select
                id="bank"
                name="bank"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis Bank</option>
              </select>
            </div>
          </form>
        ) : selectedOption === "Google Pay" || selectedOption === "PhonePe" ? (
          <form className="space-y-4">
            {/* UPI ID */}
            <div>
              <label
                htmlFor="upi"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                UPI ID
              </label>
              <input
                type="text"
                id="upi"
                name="upi"
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="example@upi"
              />
            </div>
          </form>
        ) : null}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition mt-4"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;
