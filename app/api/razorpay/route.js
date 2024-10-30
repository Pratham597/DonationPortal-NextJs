import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connect";
import User from "@/models/User";

export const POST = async (req) => {
  await connectDB();
  let body = await req.formData();
  body = Object.fromEntries(body);
  //Checking in the server
  let entry = await Payment.findOne({ oid: body.razorpay_order_id });
  if (!entry) {
    return NextResponse.json({success:false,message:"Order Id not found"})
  }
  
  let user=await User.findOne({username:entry.to_user})
  //Verify the payment
  let xx = validatePaymentVerification(
    {
      "order_id": body.razorpay_order_id,
      "payment_id": body.razorpay_payment_id
    },
    body.razorpay_signature,
    user.razorpaysct
  );
  if(xx){
    const newUser=await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:true},{new:true});  
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${newUser.to_user}?paymentdone=true`)
  }
  else{
    return NextResponse.json({success:false,message:"Payment verification failed"})
  }
};
