import { Button } from 'flowbite-react';
import portfolio from '../assets/1.jpg';


export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-red-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    <div className='flex-1 justify-center flex flex-col sm:items-center sm:text-center'>
        <h2 className='text-2xl text-black'>Rabin Kumar Baniya</h2>
        <p className='text-gray-500 my-2'> 
            Enthusiastic Designing and Developing Web Application
        </p>
        <Button className='bg-red-500 text-white rounded-tl-xl rounded-bl-none '>
            <a href="http://www.rabinkumarbaniya.com.np/" target='_blank' rel='noopener noreferrer'>Check out Portfolio</a>
        </Button>
    </div>
    <div className='p-1 flex-1 flex justify-end'>
        <img src={portfolio} className="w-64 h-64" />
    </div>
</div>
  )
}
