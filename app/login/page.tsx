'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  const submittedData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      username: login,
      password: password,
      expiresInMins: 1,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post('https://dummyjson.com/auth/login', JSON.stringify(body), {
        headers,
      })
      .then((response) => {
        if (response) {
          localStorage.setItem('token', response.data.token);
          router.push('/posts');
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="w-1/3 border-4 h-1/2 rounded-lg flex flex-col gap-20 items-center justify-center border-black"
        onSubmit={submittedData}
      >
        <input
          type="text"
          className="border-2 p-2 rounded-lg outline-none border-black"
          placeholder="Enter your login"
          value={login}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLogin(e.target.value)
          }
        />
        <input
          type="password"
          className="border-2 p-2 rounded-lg outline-none border-black"
          placeholder="Enter your password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button
          type="submit"
          className="p-2 rounded-lg bg-green-600 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
