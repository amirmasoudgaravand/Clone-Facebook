import React from 'react'
import './sidebar.css';
import SidebarRow from './SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/People';
import PeopleIcon from '@material-ui/icons/Chat';
import ChatIcon from '@material-ui/icons/Storefront';
import StorefrontIcon from '@material-ui/icons/VideoLibrary';
import VideoLibraryIcon from '@material-ui/icons/LocalHospital';

function Sidebar({ photo, name }) {
    return (
        <div className="sidebar">

            <SidebarRow title={name}
                src={photo} />
            <SidebarRow title='COVID-19 Information center'
                Icon={LocalHospitalIcon} />

            <SidebarRow title='Peages'
                Icon={EmojiFlagsIcon} />

            <SidebarRow title='Friends'
                Icon={PeopleIcon} />

            <SidebarRow title='Messenger'
                Icon={ChatIcon} />

            <SidebarRow title='Marketplace'
                Icon={StorefrontIcon} />

            <SidebarRow title='Video'
                Icon={VideoLibraryIcon} />


        </div>
    )
}

export default Sidebar
