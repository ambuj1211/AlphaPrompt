// src/services/authService.js

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "../config/firebase";

const authService = {
  /**
   * Login with Email & Password
   */
  async login(email, password) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;
  },

  /**
   * Register New User
   */
  async register(name, email, password) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update display name
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    return userCredential.user;
  },

  /**
   * Login with Google
   */
  async loginWithGoogle() {
    const userCredential = await signInWithPopup(auth, googleProvider);

    return userCredential.user;
  },

  /**
   * Send Password Reset Email
   */
  async forgotPassword(email) {
    return sendPasswordResetEmail(auth, email);
  },

  /**
   * Logout Current User
   */
  async logout() {
    return signOut(auth);
  },
};

export default authService;