import Image from 'next/image';
import React from 'react';
import { Iimg } from './types';

const Img: Iimg = ({ src, alt }) => {
  return (
    <div>
      <Image src={src} alt={alt} width={1000} height={1000} />
    </div>
  );
};

export default Img;
