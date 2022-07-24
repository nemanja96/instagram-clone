import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Link } from "react-router-dom";
import SidebarItem from './SidebarItem';
import sidebarPhoto1 from '../assets/sidebar/sidebarPhoto1.jpg';
import sidebarPhoto2 from '../assets/sidebar/sidebarPhoto2.jpg';
import sidebarPhoto3 from '../assets/sidebar/sidebarPhoto3.jpg';
import sidebarPhoto4 from '../assets/sidebar/sidebarPhoto4.jpg';
import sidebarPhoto5 from '../assets/sidebar/sidebarPhoto5.jpg';

const Sidebar = () => {

    const [user] = useAuthState(auth);

    const createUsername = () => {
        let emailAddress = user?.email;
        const accountUsername = emailAddress.split("@")[0];
        return accountUsername;
      }

  return (
    <div className='mt-6'>
        <div>
            <Link to="/profile">
                <div className='flex items-center gap-4 mb-4'>
                    <Avatar src={user?.photoURL} sx={{ width: 55, height: 55 }}>{user?.email[0].toUpperCase()}</Avatar>
                    <div>
                        <h3 className='text-[#262626] text-sm font-semibold'>{createUsername()}</h3>
                        <h4 className='text-gray-400 text-sm font-normal'>{user?.displayName || user?.email}</h4>
                    </div>
                </div>
            </Link>
            <div className='flex items-center justify-between mb-4 max-w-[320px]'>
                <h3 className='text-gray-400 font-medium text-sm'>Suggestions For You</h3>
                <span className='text-xs font-medium'>See All</span>
            </div>
            <div>
                <SidebarItem sidebarPhotoUrl={sidebarPhoto1} sidebarUsername="softwareitlead" />
                <SidebarItem sidebarPhotoUrl={sidebarPhoto2} sidebarUsername="agregati_dizel" />
                <SidebarItem sidebarPhotoUrl={sidebarPhoto3} sidebarUsername="namilkinacin" />
                <SidebarItem sidebarPhotoUrl={sidebarPhoto4} sidebarUsername="digitalni_studio_" />
                <SidebarItem sidebarPhotoUrl={sidebarPhoto5} sidebarUsername="madagaskar_decijisvet" />
            </div>
        </div>
    </div>
  )
}

export default Sidebar