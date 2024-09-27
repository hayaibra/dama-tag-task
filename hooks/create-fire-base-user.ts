/* eslint-disable @typescript-eslint/no-explicit-any */
import { Auth } from "firebase/auth";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

export const useCreateFireBaseUser = (
  auth: Auth,
  Options: { onSuccess?: () => void; onError?: (error: any) => void }
) => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
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

  return { loading, createUserWithEmailAndPassword, error };
};
