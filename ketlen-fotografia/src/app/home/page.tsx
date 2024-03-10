'use client';

import SwiperHome from '../utils/Swiper';
import About from './components/about';
import Header from './components/header';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <SwiperHome />
      <About />
    </main>
  );
}
