import Image from 'next/image';
import React from 'react';

const AlbumPage = () => {
    return (
        <div>
            <h1>This image is using img tag</h1>
            <img src='https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs' alt='image of the next.js' width={"100%"}/>
            
            <h1>This image is using img components</h1>
            <Image src='https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs' alt='image of the next.js' width={500} height={500} layout='responsive'/>
            
        </div>
    );
};

export default AlbumPage;