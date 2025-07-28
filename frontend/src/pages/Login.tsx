import { useState } from "react"
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
const Login = () => {
    const [isLogin,setIsLogin]=useState<boolean>(true);
  return (
    <>
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{!isLogin ? "Login to your account" : "Create an account"}</CardTitle>
        <CardDescription>
          {!isLogin
            ? "Enter your credentials to access your account."
            : "Fill in the details below to create a new account."}
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
            {!isLogin ? "Sign Up" : "Login"}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            {isLogin && (
                <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="your_username"
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
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <ForgotPassword/>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          {!isLogin ? "Login" : "Sign Up"}
        </Button>
        <Button variant="outline" className="w-full">
          {!isLogin ? "Login with Google" : "Sign Up with Google"}
        </Button>
      </CardFooter>
    </Card>
    </div>
    </>
  )
}

export default Login