import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {
    const navigate=useNavigate();

    
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
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="password" className="text-left">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="password"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password" className="text-left">Confirm Password</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                placeholder="Confirm Password"
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