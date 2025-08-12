import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger,DialogHeader } from "@/components/ui/dialog"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "@radix-ui/react-label"
import React, { useState } from "react"
import { toast } from "react-toastify"
import axiosInstance from "@/hooks/axiosInstance"

const ForgotPassword = () => {
  const [email,setEmail]=useState("");

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();
    try {
     const {data} = await axiosInstance.post("/auth/forgot-password",{email});
      toast.success(data.message);
    } catch (error) {
      toast.error("An error occurred during registration. Please try again.");
      console.log("Forgot password error:",error);
    }
  }
  
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <button 
        className="ml-auto inline-block text-sm underline-offset-4 hover:underline hover:text-blue-600 cursor-pointer"
        >Forgot your password?</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>Reset Password</DialogTitle>
          <DialogDescription>
             Enter your email address and we’ll send you a link to reset your password.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Label htmlFor="reset-email">Email</Label>
          <Input 
          id="reset-email"
           type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
             required />
          <Button type="submit" className="mt-2" onClick={handleSubmit}>Send Reset Link</Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default ForgotPassword