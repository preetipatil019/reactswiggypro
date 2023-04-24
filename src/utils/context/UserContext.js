import { createContext } from "react";

const UserContext = createContext({
    user:
    {
        name: "preeti",
        email: "preetipatil019@gmail.com"
    }
})

UserContext.displayName ="UserContext"
export default UserContext;