import { Menu, X } from 'lucide-react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [blogs, setBlogs]=useState([])
    const [open, setOpen] = useState(false)

    useEffect(()=>{
      fetch('public.json').then(res => res.json())
      .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div className='py-4 md:py-8 px-4 md:px-10 flex justify-between items-center'>
            <span className='flex gap-4' onClick={(()=>setOpen(!open))}>
                {open ? <X className='md:hidden' size={45} color='black'></X>: <Menu className='md:hidden'  size={45} color='black'></Menu>}
                <ul className={`md:hidden bg-amber-300 p-6 rounded-xl absolute  ${open ? 'top-16': '-top-60'} duration-700`}>
           {
                blogs.map(blog => <li className=' text-xl font-medium hover:bg-gray-400' key={blog.id}><a href={blog.path}>{blog.name}</a></li>)
            }
           </ul>
            
            </span>

            <h2 className='text-3xl font-medium'>NavBar</h2>
           <ul className='md:flex hidden'>
           {
                blogs.map(blog => <li className='mr-10 text-2xl font-medium' key={blog.id}><a href={blog.path}>{blog.name}</a></li>)
            }
           </ul>
           <button className='btn bg-amber-300 py-3 px-5 rounded-xl text-xl'>Sign In</button>
        </div>
    );
};

export default Navbar;