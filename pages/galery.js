import React from 'react';
import Image from 'next/image';
import img1 from '../public/assets/img1.jpg';
import img2 from '../public/assets/img2.jpg';
import img3 from '../public/assets/img3.jpg';

function galery(props) {
    return (
        <div>
            <Image 
            layout='responsive'
            placeholder='blur'
            src={img1}
            width="16"
            height="9" 
            />

            <Image 
            layout='responsive'
            src={img2}
            width="3346"
            height="4736"
            />

            <Image
            layout='responsive' 
            src={img3}
            width="2671"
            height="4000"
            />
            {/* <img src="/assets/img1.jpg" alt="" />
            <img src="/assets/img2.jpg" alt="" />
            <img src="/assets/img3.jpg" alt="" /> */}
        </div>
    );
}

export default galery;