'use client';

import React from 'react';
import Header from './components/Header';
import PostWrapper from './components/PostsWrapper';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Header />
      <div className="font-semibold p-5 text-5xl mt-20 text-center">
        Welcome to the Medium.
      </div>
      <PostWrapper />
      <Footer />
    </>
  );
}

export default Home;
