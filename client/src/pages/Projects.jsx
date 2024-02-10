import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>if you're curious to see more of my work and explore additional projects, I encourage you to visit my portfolio. </p>
      <CallToAction />
    </div>
  )
}
