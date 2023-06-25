import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.init';
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userLogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        createUser,
        userLogin,
        userLogOut,
        updateUserProfile,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;