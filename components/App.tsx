"use client"
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  maxWidth:'1200px',
  height: '450px',
  color: '#F5F5F5/50',
  lineHeight: '1px',
  textAlign: 'center',
};

const App: React.FC = () => (
  <Carousel className='container bg-[F5F5F5/50]' autoplay>
    <div>
      <h3 style={contentStyle}>
      <div className='planet mobile-planet flex items-center container'>
            <div className='planet-left'>
                <h1 className='h1 font-semibold w-[205px] h-[16px]'>Welcome to GreenShop</h1>
                <h2 className='h2'>LET’S MAKE A BETTER <span className='span'>PLANET</span></h2>
                <p className='p'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <button className='planet-btn'>SHOP NOW</button>
            </div>
            <div className='planet-right'>
              <Image style={{width:"1000px", height:"1000px"}} priority  src={'./Gul.svg'} alt='Gul' width={1000} height={1000}/>
              <Image className="planet-img" style={{width:"200px", height:"200px"}} priority  src={'./Gul.svg'} alt='Gul' width={200} height={200} />
            </div>
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <div className='planet mobile-planet flex items-center container'>
            <div className='planet-left'>
                <h1 className='h1 font-semibold w-[205px] h-[16px]'>Welcome to GreenShop</h1>
                <h2 className='h2'>LET’S MAKE A BETTER <span className='span'>PLANET</span></h2>
                <p className='p'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <button className='planet-btn'>SHOP NOW</button>
            </div>
            <div className='planet-right'>
              <Image style={{width:"1000px", height:"1000px"}} priority  src={'./Gul.svg'} alt='Site Logo' width={1000} height={1000}/>
              <Image className="planet-img" style={{width:"200px", height:"200px"}} priority  src={'./Gul.svg'} alt='Site Logo' width={200} height={200} />
            </div>
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <div className='planet mobile-planet flex items-center container'>
            <div className='planet-left'>
                <h1 className='h1 font-semibold w-[205px] h-[16px]'>Welcome to GreenShop</h1>
                <h2 className='h2'>LET’S MAKE A BETTER <span className='span'>PLANET</span></h2>
                <p className='p'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <button className='planet-btn'>SHOP NOW</button>
            </div>
            <div className='planet-right'>
              <Image style={{width:"1000px", height:"1000px"}} priority  src={'./Gul.svg'} alt='Site Logo' width={1000} height={1000}/>
              <Image className="planet-img" style={{width:"200px", height:"200px"}} priority  src={'./Gul.svg'} alt='Site Logo' width={200} height={200} />
            </div>
        </div>
      </h3>
    </div>
  </Carousel>
);

export default App;