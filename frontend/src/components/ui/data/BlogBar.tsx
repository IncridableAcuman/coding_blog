import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Home, List, MessageCircle, PlusSquareIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
const BlogBar = () => {
    const [isMobile,setIsMobile]=useState<boolean>(false);
    const location=useLocation();

    useEffect(()=>{
        const handleResize=()=>{
            setIsMobile(window.innerWidth<768);
        }
        handleResize();
        window.addEventListener("resize",handleResize);

        return ()=>window.removeEventListener("resize",handleResize);
    },[])
    const menuItem=[
        {icon:<Home/>,label:"Dashboard",path:"/dashboard"},
        {icon:<PlusSquareIcon/>,label:"Add blogs",path:"/dashboard/add"},
        {icon:<List/>,label:"Blog lists",path:"/dashboard/list"},
        {icon:<MessageCircle/>,label:"Comments",path:"/dashboard/comment"},
    ]
  return (
    <>
    <Sidebar 
    backgroundColor='white'
    className='border-r shadow'
    collapsed={isMobile}
    >
        <Menu className='pt-24'>
            {
                    menuItem.map((item,index)=>{
                    const isActive=location.pathname===item.path
                    return (
                        <MenuItem 
                        key={index}
                        icon={item.icon}
                        className={`${isActive ? "bg-gray-100 border-r-2 border-r-blue-500":""}`}
                        component={<Link to={item.path} />}
                        >{item.label}</MenuItem>
                    );
            })
            }
        </Menu>
    </Sidebar>
    </>
  )
}

export default BlogBar