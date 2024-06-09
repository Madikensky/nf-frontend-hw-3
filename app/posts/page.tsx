'use client';

import Header from '../components/Header';
import PostWrapper from '../components/PostsWrapper';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Posts() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    axios
      .get('https://dummyjson.com/auth/me', { headers })
      .then((e) => console.log(e.data))
      .catch((e) => {
        router.push('/login');
      });
  }, [router]);
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <PostWrapper />
      <Footer />
    </div>
  );
}

export default Posts;
