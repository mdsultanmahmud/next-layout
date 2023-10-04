import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Head from "next/head";

const Dashboard = () => {
    return (
        <div>
            <Head>
                <title>Next Dashboard</title>
            </Head>
            <h1>Dashboard Home Page</h1>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page){
    return(
        <DashboardLayout>{page}</DashboardLayout>
    )
}