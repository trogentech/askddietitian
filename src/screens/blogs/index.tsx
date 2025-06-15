
import Blogs from '@/components/blogs'
import BlogComponents from '@/components/blogs/blogs'
import React from 'react'

const BlogScreen = () => {
  return (
    <div className=''>
    <section className='md:px-12 px-6 pt-4 md:mb-20 md:h-[260px]'>
        <Blogs/>
    </section>
     <section className='md:px-12 px-6  '>
       <BlogComponents/>
    </section>
    </div>
  )
}

export default BlogScreen
