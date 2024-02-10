import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>About Rabba's Blog</h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>Welcome to Rabba's Blog, a platform where I share my insights, experiences, and thoughts on various web development topics. As an avid web developer, I am passionate about exploring the ever-evolving landscape of the internet and creating meaningful digital experiences.</p>
            <p>But this blog is not just about design and development of an Application. It's also a platform for me to share my personal thoughts, reflections, and experiences as a web developer. I believe that the human element is just as important as the technical aspect in the world of programming, and I strive to bring a personal touch to everything I write.</p>
            <p>Happy coding!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
