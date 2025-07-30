import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Home, List, MessageCircle, PlusSquareIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const BlogBar = () => {
    const [isMobile,setIsMobile]=useState<boolean>(false);

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
                menuItem.map((item,index)=>(
                    <MenuItem 
                    key={index}
                     icon={item.icon}
                     component={<Link to={item.path} />}
                     >{item.label}</MenuItem>
                ))
            }
        </Menu>
    </Sidebar>
    </>
  )
}

export default BlogBar