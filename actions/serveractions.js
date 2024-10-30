"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import User from "@/models/User";
// For connecting the mongoDB using the mongooose.
import connectDB from "@/db/connect";

export const initate = async (amount, to_user, paymentform) => {
  await connectDB();
  let user=await User.findOne({username:to_user})
  
  var razorpay = new Razorpay({
    key_id: user.razorpayid,
    key_secret: user.razorpaysct,
  });

  //Payment
  let paymentData = {
    amount: amount,
    currency: "INR",
  };

  let res = await razorpay.orders.create(paymentData);
  let payment = new Payment({
    oid: res.id,
    amount: amount/100,
    to_user: to_user,
    name: paymentform.name,
    message: paymentform.message,
  });
  await payment.save();

  return res;
};

// For fetching the supporter list.
export const fetchUser = async (username) => {
  await connectDB();
  let p=await Payment.find({to_user:username,done:true}).sort({amount:-1}).limit(7).lean()
  return p;
};

// for fetching the details for current user.
export const fetchCurrUser = async (username) => {
  await connectDB();
  let user = await User.findOne(
    { username: username },
  );
  //Throwing null
  if(!user) return user;

  //Throwing the user to client side.
  user = user.toObject({ flattenObjectIds: true });
  return user;
};

export const updateProfile = async (form) => {
  await connectDB();
  const userForm=Object.fromEntries(form);
  let username=userForm.username;
  await User.findOneAndUpdate({username:username},userForm)
};
