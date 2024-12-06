import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


import Product from "./Product";


const productData = [
  { id: 1, name: 'Product 1', title: 'Product 1', price: 10.99, image: 'https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7ROX5ASxjvsp-nl3WotmP0XISy33BePsVpkAoenIljaJUSH8PQPeYmQXqe7DB8bFnGyoEtJWGbRdSeRsKJ3gaIXN92sse16vUEdW9a~KL-KRy4XfW4aqG4RnIOpYYOVy1frLHsO8Xv~Q8eZuGT7cxTpclvYz3DEKg1K3a7EfSQaIAEKJSiXV-qiwJRSzEys4CH3A7XtLFuCDIFVlCfrpO4aTdU~HbTN5zNqqIlP5WSz8fh0MppPPmxPRt1C3ZSGnyJwkdbPGq9cCo0a6x-i373DLggmVFznGeUJtj9AMOj-tGvwoyO453o01e4lfkKZOx~U~3qQhCGcZ~UQ2ifyyg__' },
  { id: 2, name: 'Product 1', price: 10.99, image: 'https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fo8JM2CnQlYreGTQspTd10~l9x1006ym278y8VnmyD9rKJGxtkuRzBhnVI9kVVhQj9MYDf86GICNXABvqkJbl-KrE3xm0r6kePx1dbfSPvQtg9~aDNiQUftK05wH4-Z7Ksuo7Zr-lyDo-CRQs5larFyB2K2O3msqBHU635o8zoL1DHPvYB-QbrHmxjxIdXe6j31m4WdIAtTdYWt7xAF02whbBZuOCao64QqksNMd5nLyukMFW4V9j5Y5UsjtKvdU02SpLpVwHXqsWxbDodhHwAbios2Pa~sURCLDH69G8xhpFDbltPohVqEbn0EGjKZPBbmIvJUmSHhbu9hz16ejSA__' },
  { id: 3, name: 'Product 1', price: 10.99, image: 'https://s3-alpha-sig.figma.com/img/744c/96db/a60207fabc5a7d29f8801ecf6b4e2aed?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EAhXjpneFoyM4PKojQa~biF~MGWoQ3txLMYFI2lrCjHCMVbLCeZurDy4gFqwuOpXbVDhuc7Tj54Ii2HhDLeTS~tSS73dGzenND2rwNL9W2w-R60OJPHZNirmYlDqLWm7DJcFLHvRpnzsp43GtHqJskr0vx~zHbMFU69bfmuh4DGcp3yx8y7L81uKY0BWsq0Pek6HS22iPFUbQRVoxjdKWatfAAV7~z7PNeKrhr8pJmaynOBXCHHDDK6DJ1-qg8vjTy9W51OPjvahCB0wb3igJhZosC9WFs37OO16dmkdvjwbYqUiyO-Y2Zo7MGo-SmXoH94tZ6Wpd0V9lSEM9XIcfg__' },
  { id: 4, name: 'Product 1', price: 10.99, image: 'https://s3-alpha-sig.figma.com/img/9957/e153/a59c050946e77e8fc7e11525e87c4678?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ctxuz-x451aEJEYWmkQ0Ywqs9R4jvuwJDA1KlT21nTuHzdiDCHw7kNRV1qGCR1zTUbDpjLPeNui69x6SVNHZHpkYJLYeqaMN~Sl-zqVozWxQOLCyN34~nD3hr4Zo~EHXqpHm8VHOQTQZ-kHdWPn0oQHZm-D~DGsjzvBhY1X2T-QSLSNxOrQaD~otdnOwSjTgZhH7~c1hT65oWTxt7O1K0KVxDywMkEIPRSS8zPY3iUlwXhfBf29Nx7Z1BF1JMfcciO2hyP8aSvwUXetA6UH4PXjyczpwIGeS5TT-TYw4DcsB8o0P2SvoNMWMX2loXdnzUu9ePqvlRImKs0zkl3NXdg__' },
  { id: 1, name: 'Product 1', title: 'Product 1', price: 10.99, image: 'https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7ROX5ASxjvsp-nl3WotmP0XISy33BePsVpkAoenIljaJUSH8PQPeYmQXqe7DB8bFnGyoEtJWGbRdSeRsKJ3gaIXN92sse16vUEdW9a~KL-KRy4XfW4aqG4RnIOpYYOVy1frLHsO8Xv~Q8eZuGT7cxTpclvYz3DEKg1K3a7EfSQaIAEKJSiXV-qiwJRSzEys4CH3A7XtLFuCDIFVlCfrpO4aTdU~HbTN5zNqqIlP5WSz8fh0MppPPmxPRt1C3ZSGnyJwkdbPGq9cCo0a6x-i373DLggmVFznGeUJtj9AMOj-tGvwoyO453o01e4lfkKZOx~U~3qQhCGcZ~UQ2ifyyg__' },
  { id: 2, name: 'Product 1', price: 10.99, image: 'https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fo8JM2CnQlYreGTQspTd10~l9x1006ym278y8VnmyD9rKJGxtkuRzBhnVI9kVVhQj9MYDf86GICNXABvqkJbl-KrE3xm0r6kePx1dbfSPvQtg9~aDNiQUftK05wH4-Z7Ksuo7Zr-lyDo-CRQs5larFyB2K2O3msqBHU635o8zoL1DHPvYB-QbrHmxjxIdXe6j31m4WdIAtTdYWt7xAF02whbBZuOCao64QqksNMd5nLyukMFW4V9j5Y5UsjtKvdU02SpLpVwHXqsWxbDodhHwAbios2Pa~sURCLDH69G8xhpFDbltPohVqEbn0EGjKZPBbmIvJUmSHhbu9hz16ejSA__' },
  { id: 3, name: 'Product 1', price: 10.99, image: 'https://s3-alpha-sig.figma.com/img/744c/96db/a60207fabc5a7d29f8801ecf6b4e2aed?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EAhXjpneFoyM4PKojQa~biF~MGWoQ3txLMYFI2lrCjHCMVbLCeZurDy4gFqwuOpXbVDhuc7Tj54Ii2HhDLeTS~tSS73dGzenND2rwNL9W2w-R60OJPHZNirmYlDqLWm7DJcFLHvRpnzsp43GtHqJskr0vx~zHbMFU69bfmuh4DGcp3yx8y7L81uKY0BWsq0Pek6HS22iPFUbQRVoxjdKWatfAAV7~z7PNeKrhr8pJmaynOBXCHHDDK6DJ1-qg8vjTy9W51OPjvahCB0wb3igJhZosC9WFs37OO16dmkdvjwbYqUiyO-Y2Zo7MGo-SmXoH94tZ6Wpd0V9lSEM9XIcfg__' },
  { id: 4, name: 'Product 1', price: 10.99, image: 'https://s3-alpha-sig.figma.com/img/9957/e153/a59c050946e77e8fc7e11525e87c4678?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ctxuz-x451aEJEYWmkQ0Ywqs9R4jvuwJDA1KlT21nTuHzdiDCHw7kNRV1qGCR1zTUbDpjLPeNui69x6SVNHZHpkYJLYeqaMN~Sl-zqVozWxQOLCyN34~nD3hr4Zo~EHXqpHm8VHOQTQZ-kHdWPn0oQHZm-D~DGsjzvBhY1X2T-QSLSNxOrQaD~otdnOwSjTgZhH7~c1hT65oWTxt7O1K0KVxDywMkEIPRSS8zPY3iUlwXhfBf29Nx7Z1BF1JMfcciO2hyP8aSvwUXetA6UH4PXjyczpwIGeS5TT-TYw4DcsB8o0P2SvoNMWMX2loXdnzUu9ePqvlRImKs0zkl3NXdg__' },
];

const ProductCarousel = () => {
  return (
    <Swiper
      modules={[ Pagination , Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {productData.map((product) => (
        <SwiperSlide key={product.id}>
          <Product
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarousel;
