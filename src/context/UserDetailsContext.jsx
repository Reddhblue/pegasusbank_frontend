import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { BASE_URL } from "../constants";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);

  const getUser = async () => {
    try {
      const { data } = await axios(`${BASE_URL}/user`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(data);
      if (data.success)
        setUser({
          ...data.user,
          profile_img: `data:image/png;base64,${data.user.profile_img}`,
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [refreshCount]);

  const forceRefresh = () => setRefreshCount((x) => x + 1);

  return (
    <UserContext.Provider value={{ user, forceRefresh }}>
      {children}
    </UserContext.Provider>
  );
};
