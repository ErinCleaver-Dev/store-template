import {app, auth} from './firebase'
import {signOut} from "firebase/auth";


export const SignOut = async() => {
    return await signOut(auth).then(() => {
        localStorage.removeItem('LoggedIn')
        localStorage.removeItem('role')
        localStorage.removeItem('userSecert')
        console.log("Signed out Successfully")
    }).catch((error) => {
        console.log(error)
    });
}