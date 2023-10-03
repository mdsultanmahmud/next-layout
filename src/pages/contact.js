import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h1>This is our contact page</h1>
            <h1>This is our contact page</h1>
            <h1>This is our contact page</h1>
            <h1>This is our contact page</h1>
            <h1>This is our contact page</h1>
            <h1>This is our contact page</h1>
            <h1>This is our contact page</h1>
            <h1>This is our contact page</h1>
            <h1>This is our contact page</h1>
        </div>
    );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page){
    return(
        <RootLayout>{page}</RootLayout>
    )
}