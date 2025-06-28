import { supabase } from "@/lib/supabase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setAuth = (authUser) => {
    setUser(authUser);
  };

  const setUserData = (userData) => {
    setUser({ ...userData });
  };

  //start of chat gpt suggestion - SUCCESS - loads user into context for global use

  useEffect(() => {
    // Get the current user on app load
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };

    loadUser();

    // Listen for auth changes (sign in/out)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  //end of gpt suggestion

  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
