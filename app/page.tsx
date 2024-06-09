'use client';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="font-semibold p-5 text-5xl mt-20 text-center">
        Welcome to the Medium.
      </div>
      <div className="font-semibold p-5 text-5xl mt-20 text-center flex-grow">
        <Link href="/posts">See all posts -&gt;</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
