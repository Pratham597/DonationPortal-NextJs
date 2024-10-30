import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
//Models 
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connect";


const handler=NextAuth({
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret:process.env.SECRET,

    callbacks:{
        async signIn({user,account,profile}){
            if(account.provider== 'github'|| account.provider=='google'){
                await connectDB()
                const curruser= await User.findOne({email:user.email})
                
                if(!curruser){
                    const newUser=new  User({
                        email:user.email,
                        username:user.email.split('@')[0]
                    })
                    await newUser.save()
                    user.name=newUser.username;
                }
                else user.name=curruser.username
            }  
            return true;
        },
    }
})
export {handler as GET, handler as POST};
    