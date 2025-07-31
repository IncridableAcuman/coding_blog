import { IAuth } from "@/interfaces/auth.interface";
import { createContext } from "react";

const AuthContext=createContext<IAuth | null>(null);

export const AuthProvider=