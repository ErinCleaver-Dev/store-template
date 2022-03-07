import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth';
import {app, auth} from './firebase'

//create a value to auth

// A function Used to create an new account in Firebase using the users email and password
export const emailCreateAccount = async(email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
}


//Function used to log in the user with their username and password
export const emailLogin = async(email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

// A function for resetting the users password.
export const emailPasswordReset = async(email, password) => {
    return await sendPasswordResetEmail(auth, email);
}