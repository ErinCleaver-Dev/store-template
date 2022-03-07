import {app, auth} from './firebase'
import {GoogleAuthProvider, signInWithPopup, linkWithPopup} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();

// creates the option to login with google
export const googleLogin = async() => {
    return await signInWithPopup(auth, googleProvider);
}

// allows a user to link account with their google profile
export const linkAccountWithGoogle = async() => {
    return await linkWithPopup(auth.currentUser, provider);
}