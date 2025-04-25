import { createContext } from "react";

const token = JSON.parse(localStorage.getItem("loggedIn"))
export const MyContext = createContext(token)

export const MyTheme = createContext("light")
