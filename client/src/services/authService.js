// src/services/authService.js

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  sendEmailVerification,
  reload,
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

    const user = userCredential.user;

    // Refresh user to get latest verification status
    await reload(user);

    if (!user.emailVerified) {
      await signOut(auth);

      throw new Error(
        "Please verify your email before signing in. A verification email has already been sent."
      );
    }

    return user;
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

    const user = userCredential.user;

    // Save display name
    await updateProfile(user, {
      displayName: name,
    });

    // Send verification email
    await sendEmailVerification(user);

    return user;
  },

  /**
   * Login with Google
   */
  async loginWithGoogle() {
    const userCredential = await signInWithPopup(
      auth,
      googleProvider
    );

    return userCredential.user;
  },

  /**
   * Resend Verification Email
   */
  async resendVerificationEmail() {
    if (!auth.currentUser) {
      throw new Error("No authenticated user found.");
    }

    await sendEmailVerification(auth.currentUser);
  },

  /**
 * Check Email Verification Status
 */
  async checkEmailVerification() {
    if (!auth.currentUser) {
      return false;
    }

    await reload(auth.currentUser);

    return auth.currentUser.emailVerified;
  },
  /**
   * Forgot Password
   */
  async forgotPassword(email) {
    await sendPasswordResetEmail(auth, email);
  },

  /**
   * Logout
   */
  async logout() {
    await signOut(auth);
  },
};

export default authService;