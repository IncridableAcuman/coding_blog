import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import ForgotPassword from "@/components/ui/data/ForgotPassword"
import { UseAuth } from "@/contexts/AuthContext"
import { toast } from "sonner"
import axiosInstance from "@/hooks/axiosInstance"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const [isLogin,setIsLogin]=useState<boolean>(true);
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {login}=UseAuth();
  const navigate=useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(isLogin){
       try {
         const {data}=await axiosInstance.post("/auth/login",{email,password});
         login(data.userDTO,data.accessToken);
          toast.success("Login successful!");
          navigate("/");
       } catch (error) {
         toast.error("An error occurred during login. Please try again.");
         console.error("Login error:", error);
    }

    } else{
      try {
        const {data}=await axiosInstance.post("/auth/register",{username,email,password});
        login(data.user,data.accessToken);
        toast.success("Registration successful!");
        navigate("/");
      } catch (error) {
        toast.error("An error occurred during registration. Please try again.");
        console.error("Signup error:", error);
      }
    }
   
  }

  return (
    <>
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{isLogin ? "Login to your account" : "Create an account"}</CardTitle>
        <CardDescription>
          {isLogin
            ? "Enter your credentials to access your account."
            : "Fill in the details below to create a new account."}
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            {!isLogin && (
                <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="your_username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
              />
            </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <ForgotPassword/>
              </div>
              <Input id="password"
               type="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)} 
               required />
            </div>
            <div className="grid gap-2">
              <Button type="submit" className="w-full">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        
        <Button variant="outline" className="w-full">
          {isLogin ? "Login with Google" : "Sign Up with Google"}
        </Button>
      </CardFooter>
    </Card>
    </div>
    </>
  )
}

export default Login