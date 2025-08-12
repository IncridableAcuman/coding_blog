import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axiosInstance from "@/hooks/axiosInstance"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

const ResetPassword = () => {
    const navigate=useNavigate();
    const {token}=useParams();
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            toast.info("Password must be equal");
        }
        try {
            await axiosInstance.put("/auth/reset-password",{token,password});
            setTimeout(()=>navigate("/login"),2000);
        } catch (error) {
            toast.error("An error occurred during registration. Please try again.");
            console.log("Update password error:",error);
        }
    }
   
      useEffect(()=>{
        if(localStorage.getItem("accessToken")){
          navigate("/");
        }
      },[navigate]);
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
                <p className="text-sm text-gray-500">Enter your email to reset your password</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="password" className="text-left">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password" className="text-left">Confirm Password</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button>Update Password</Button>
                        <div className=""></div>
                    </div>
                </form>
            </CardHeader>
        </Card>
    </div>
    </>
  )
}

export default ResetPassword