import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Home, List, MessageCircle, PlusSquareIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const BlogBar = () => {
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