"use client";
import React from "react";
import Script from "next/script";
import Razorpay from "razorpay";
import { useState, useEffect } from "react";
import { initate, fetchUser, fetchCurrUser } from "@/actions/serveractions";
import { useSearchParams } from "next/navigation";
import { Bounce,ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter ,notFound} from "next/navigation";

const PaymentPage = ({ username }) => { 
  const [form, setForm] = useState({ name: "", amount: 0, message: "" });
  const [userList, setUserList] = useState([]);
  const [currUser, setCurrUser] = useState({});
  const router=useRouter()
  const searchParams = useSearchParams();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const getData = async () => {
    //Fetching the userlist who have given payments.
    let u = await fetchUser(username);
    setUserList(u);

    //Fetching the current user.
    let curruser = await fetchCurrUser(username);
    setCurrUser(curruser);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast("Payment Sucessfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition:Bounce
      });
      router.push(`/${username}`)
    }
  },[]);

  const pay = async (amount) => {
    let a = await initate(amount * 100, username, form);
    let orderId = a.id;
    const options = {
      key: currUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: `${currUser.name}`, //your business name
      description: "Test Transaction",
      image: "./avatar.gif",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: form.name, //your customer's name
        email: `${currUser.email}`,
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {  
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    let rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="cover w-full bg-slate-50 relative">
        <img src={currUser.coverPic} alt="Cover" className="w-full h-[60] md:h-[350px]" />
        <div
          className="absolute  text-white lg:right-[46%] md:right-[44%] sm:right-[42%] right-[37%] -bottom-12 overflow-hidden sm:size-28 size-24 rounded-full border-white
        border-2"
        >
          <img
            src={currUser.profilePic}
            alt="Profile"
            className="rounded-full object-cover sm:size-28 size-24 text-center"
          />
        </div>
      </div>

      <div className="info flex flex-col justify-center items-center my-16 text-white gap-2">
        <div>@{username}</div>
        <div className="text-slate-400">Let's help {currUser.name} get a chai</div>
        <div className="text-slate-400">
          {userList.length} Payments. Raised ₹{userList.reduce((prevTotal,currValue)=>prevTotal+currValue.amount,0)} yet.
        </div>

        <div className="payments flex md:flex-row flex-col gap-4 w-[90%] mt-11">
          <div className="supporters  rounded-lg md:w-1/2 w-full bg-slate-900 text-white md:p-10 sm:p-5 p-2">
            <h2 className="font-bold text-xl my-5 underline">Top Supporters</h2>
            <ul className=" text-md mx-4">
              {userList.map((item) => {
                return (
                  <li key={item._id} className="my-2 flex gap-2 items-center" >
                    <img
                      src="./avatar.gif"
                      alt="avatar"
                      className="bg-white rounded-full border border-black p-1"
                      width={33}
                    />
                    <span>
                      {item.name} donated{" "}
                      <span className="font-bold">₹{item.amount} </span>
                      with a message "{item.message}"
                    </span>
                  </li>
                );
              })}
              {userList.length == 0 && <div> No payments yet. </div>}
            </ul>
          </div>
          <div className="makePayment  rounded-xl md:w-1/2 w-full bg-slate-900 text-white md:p-10 sm:p-5 p-2">
            <h2 className="font-bold text-lg my-5">Make a Payment</h2>
            <div className="flex flex-col gap-2">
              <input
                onChange={handleChange}
                type="text"
                className="rounded-lg bg-slate-800 p-3"
                placeholder="Enter Name"
                name="name"
                value={form.name}
              />
              <input
                onChange={handleChange}
                type="text"
                className="rounded-lg bg-slate-800 p-3"
                placeholder="Enter Message"
                name="message"
                value={form.message}
              />
              <input
                onChange={handleChange}
                type="number"
                className="p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
                name="amount"
                value={form.amount}
              />
              <button
                onClick={() => {
                  pay(form.amount);
                }}
                className="sm:w-1/5  w-full py-3  flex justify-center items-center text-md text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg  
                  dark:bg-blue-600 dark:hover:bg-blue-700 disabled:bg-slate-600 disabled:hover:bg-slate-600  "
                disabled={
                  form.name.length < 3 ||
                  form.message.length < 3 ||
                  isNaN(form.amount) ||
                  form.amount <= 0
                }
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => {
                  setForm({ ...form, amount: 10 });
                }}
                className="bg-slate-700 hover:bg-slate-800 py-1 px-2 rounded-lg"
              >
                Pay ₹10
              </button>
              <button
                onClick={() => {
                  setForm({ ...form, amount: 20 });
                }}
                className="bg-slate-700 hover:bg-slate-800 py-1 px-2 rounded-lg"
              >
                Pay ₹20
              </button>
              <button
                onClick={() => {
                  setForm({ ...form, amount: 30 });
                }}
                className="bg-slate-700 hover:bg-slate-800 py-1 px-2 rounded-lg"
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
