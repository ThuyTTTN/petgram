// testing 2nd Auth version

import { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

//auth context - stores data about the user's authentication; will determine whether or not the user has access to certain pages
const AuthContext = createContext(null);

//create hook so we can use the context inside the react components
export const useAuth = () => useContext(AuthContext);

//create authentication provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

//if user is not authenticated and wants to access a protected route, he will be redirected to the unauthorized page
export const RequireAuth = () => {
    const {user} = useAuth();
    const location = useLocation();

    if (!user) {
        return (
            <Navigate to={{pathname:"/unauthorized", state: { from: location }}} replace />
        )
    }

    return <Outlet />
}