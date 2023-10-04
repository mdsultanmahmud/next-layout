import DashboardLayout from '@/components/Layouts/DashboardLayout';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const AdminPage = () => {
    return (
        <div>
            <Head>
                <title>Next Admin Page</title>
            </Head>
            <h1>This is our admin page</h1>
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page){
    return(
        <RootLayout><DashboardLayout>{page}</DashboardLayout></RootLayout>
    )
}