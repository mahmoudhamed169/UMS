import { jwtDecode } from "jwt-decode";
import { PropsWithChildren, createContext, useState } from "react";

export let AuthContext = createContext(null);

export default function AuthContextProdivder(props: PropsWithChildren) {
  let [userData, setUserData] = useState(null);
  let [userToUpdate, setUsertoUpdate] = useState(null);
  let saveDate = async () => {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
    console.log(userData);
  };

  return (
    <AuthContext.Provider
      value={{ saveDate, userData, userToUpdate, setUsertoUpdate }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
