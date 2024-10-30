import PaymentPage from "@/components/PaymentPage"
import { fetchCurrUser } from "@/actions/serveractions"

import { notFound } from "next/navigation"

const Username = async ({params}) => {

  const checkUser= async()=>{
    let user= await fetchCurrUser(params.username);
    
    if(!user){
      return notFound()
    }
  }
  await checkUser()
  
  return (
    <PaymentPage username={params.username} />
  )
}

export default Username

export async function generateMetadata({params}){
  return{
    title:`Support ${params.username} - Maheshwari King`
  }
}