import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useEffect } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userloggeduid, setUserLoggedUid] = useState(null);

  const userloggeduidHandle = (userid) => {
    setUserLoggedUid(userid);
    AsyncStorage.setItem('userloggeduid',userid);

};

    const checkIsLogged = async () => {
      try {
        const value = await AsyncStorage.getItem('userloggeduid');
        if (value !== null) {
          setUserLoggedUid(value);
          console.log("Retrieved UID from storage:", value);
        } else {
          console.log("UID not found in AsyncStorage");
        }
      } catch (error) {
        console.log("Error reading from AsyncStorage:", error);
      }
    };



  console.log("fromContext (uid)", userloggeduid);

  const data1 = 'Context Data';

  return (
    <AuthContext.Provider value={{ data1, userloggeduid, userloggeduidHandle,checkIsLogged}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext};
