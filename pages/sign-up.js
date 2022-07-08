import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Signup from '../components/Signup/Signup';

export default function LoginForm() {
  useEffect(() => {
    document.body.classList.add('signUp--page');
    document.body.classList.remove('otp--page');
  }, []);
  return (
    <>
      <Signup />
      <Footer />
    </>
  );
}
