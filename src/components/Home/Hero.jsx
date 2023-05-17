import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';

const HeroEl = styled.article``;
const Title = styled.h1``;
const Heading = styled.span``;
const Sub = styled.span``;
const Slider = styled.div``;
const ImgContainer = styled.div``;
const InfoContainer = styled.div``;
const MiddleSection = styled.div``;
const Date = styled.span``;
const STitle = styled.h2``;
const Author = styled.span``;
const Arrow = styled.span``;
const Lines = styled.span``;
const Line = styled.span``;
const Img = styled.div``;
const ImageItme = ({ src, active }) => {
  const [Loaded, setLoaded] = useState(false);
  return (
    <Img loaded={Loaded}>
      <Image
        width='1440'
        height='810'
        layout='responsive'
        src={src}></Image>
    </Img>
  );
};

const Items = [
  {
    Id: 1,
    Badge: 'Upcoming',
    Date: 'Mon May 15',
    Title: 'Good Day',
    Author: 'Soo',
    Image: '',
    ImageSrc: '/image/sample.png',
  },
  {
    Id: 2,
    Badge: 'Live Now',
    Date: 'Mon May 15',
    Title: 'Good Day',
    Author: 'Soo',
    Image: '',
    ImageSrc: '/image/sample2.png',
  },
  {
    Id: 2,
    Badge: 'Sold Out',
    Date: 'Mon May 15',
    Title: 'Good Day',
    Author: 'Soo',
    Image: '',
    ImageSrc: '/image/sample.png',
  },
];


export default function Hero() {
  return <HeroEl></HeroEl>;
}
