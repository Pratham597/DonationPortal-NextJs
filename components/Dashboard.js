"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchCurrUser } from "@/actions/serveractions";
import { updateProfile } from "@/actions/serveractions";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      setUserDetails(session.user.name);
    }
  }, [router, session]);

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    profilePic: "",
    coverPic: "",
    razorpayid: "",
    razorpaysct: "",
  });

  //Function for handling the inputs.
  const handleChange = (e) => {
    if (e.target.name === "username" || e.target.name === "email") {
      e.preventDefault();
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const setUserDetails = async (username) => {
    let user = await fetchCurrUser(username);
    setForm(user);
  };
  const handleSubmit = async (e) => {
    await updateProfile(e);
    toast('Profile Updated!', {
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
      <div className="container mx-auto my-4 text-white px-6">
        <h1 className="md:text-2xl text-xl text-center font-bold underline">
          Welcome to Dashboard
        </h1>
        <form action={handleSubmit} className="max-w-2xl mx-auto">
          <div className="my-8">
            <label htmlFor="name" className="block my-2 font-medium">
              Name
            </label>
            <input
              id="name"
              placeholder="Enter Name"
              onChange={handleChange}
              value={form.name}
              type="text"
              name="name"
              className="w-full py-2 px-4 rounded-lg bg-slate-600 "
            />

            <label htmlFor="username" className="block my-2 font-medium">
              Username
            </label>
            <input
              id="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              type="text"
              name="username"
              className="w-full py-2 px-4 rounded-lg bg-slate-600 "
            />

            <label htmlFor="email" className="block my-2 font-medium">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              type="email"
              name="email"
              className="w-full py-2 px-4 rounded-lg bg-slate-600 "
            />

            <label htmlFor="profile" className="block my-2 font-medium">
              Profile
            </label>
            <input
              id="profilePic"
              placeholder="Enter Profile"
              onChange={handleChange}
              value={form.profilePic}
              type="text"
              name="profilePic"
              className="w-full py-2 px-4 rounded-lg bg-slate-600 "
            />

            <label htmlFor="cover" className="block my-2 font-medium">
              Cover
            </label>
            <input
              id="coverPic"
              placeholder="Enter Cover"
              onChange={handleChange}
              value={form.coverPic}
              type="text"
              name="coverPic"
              className="w-full py-2 px-4 rounded-lg bg-slate-600 "
            />

            <label htmlFor="razorpayid" className="block my-2 font-medium">
              Razorpay Id
            </label>
            <input
              id="razorpayid"
              placeholder="Enter Id"
              onChange={handleChange}
              value={form.razorpayid}
              type="text"
              name="razorpayid"
              className="w-full py-2 px-4 rounded-lg bg-slate-600 "
            />

            <label htmlFor="razorpaysct" className="block my-2 font-medium">
              Razorpay Secret
            </label>
            <input
              id="razorpaysct"
              placeholder="Enter Secret "
              onChange={handleChange}
              value={form.razorpaysct}
              type="text"
              name="razorpaysct"
              className="w-full py-2 px-4 rounded-lg bg-slate-600 "
            />

            <div className="my-6 text-center">
              <input
                type="submit"
                value="Save"
                className="cursor-pointer text-white font-medium bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-6 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
