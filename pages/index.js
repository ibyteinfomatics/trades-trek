import React, { useEffect } from 'react';
import Login from '../components/Login/Login';
import Footer from '../components/Footer/Footer';

export default function LoginForm() {
  useEffect(() => {
    document.body.classList.remove('signUp--page');
    document.body.classList.remove('otp--page');
  }, []);

  return (
    <>
      <Login />
      <Footer />
    </>
  );
}
