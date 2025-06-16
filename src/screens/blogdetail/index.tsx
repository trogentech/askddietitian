import AuthorCard from '@/components/blogs/authorcard'
import BlogDetail from '@/components/blogs/blogdetails'
import NewsletterSection from '@/components/blogs/subscription'
import React from 'react'

const BlogDetailcreen = () => {
  return (
    <div  className='px-6 md:px-12'>
      <BlogDetail/>
      <AuthorCard/>
      <NewsletterSection/>
    </div>
  )
}

export default BlogDetailcreen
