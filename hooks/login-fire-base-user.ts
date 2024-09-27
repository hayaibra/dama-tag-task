/* eslint-disable @typescript-eslint/no-explicit-any */
import { Auth } from "firebase/auth";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export const useLoginFireBaseUser = (
  auth: Auth,
  Options: { onSuccess?: () => void; onError?: (error: any) => void }
) => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const { onSuccess = () => {}, onError = () => {} } = Options;
  useEffect(() => {
    if (user) {
      onSuccess();
    }
  }, [user]);
  useEffect(() => {
    if (error) {
      onError(error);
    }
  }, [error]);

  return { loading, signInWithEmailAndPassword, error };
};
