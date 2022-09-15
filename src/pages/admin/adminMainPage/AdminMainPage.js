import React from 'react';
import style from './AdminMainPage.module.css';
import AdminMainContent from "../../../components/adminMainContent/AdminMainContent";
import SideHeader from "../../../components/sideHeader/SideHeader";

const AdminMainPage = () => {
    return (
        <div className={style.container}>
            <SideHeader/>
            <AdminMainContent/>
        </div>
    );
};

export default AdminMainPage;