import Image from 'next/image';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { LuPlane } from "react-icons/lu";
import { MdHomeWork } from "react-icons/md";
import { FaKaaba } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const MainPage = () => {
  const data = [
    {
      icon: IoHomeOutline,
      label: "Asosiy"
    },
    {
      icon: MdHomeWork,
      label: "Kompaniya Haqida"
    },
    {
      icon: LuPlane,
      label: "Sayohat"
    },
    {
      icon: FaKaaba,
      label: "Umra safar"
    },
    {
      icon: MdMarkEmailUnread,
      label: "Boglanish"
    },

  ]

  //https://mandarin-tour.uz/wp-content/uploads/2022/01/slider-man.webp
  return (
    <div>
      <main className='main'>
        <header className='bg-[rgba(0,0,0,0.6)] text-white backdrop-blur-sm'>
          <div className='border-b-2 border-white'>
            <div className='max-w-[1200px] mx-auto flex py-2 justify-between items-center'>
              <div className='flex items-center gap-2'>
                <FaPhoneAlt />
                <p>+998 88 550 44 44</p>
                <MdOutlineEmail className='ml-5' />
                <p>abdullohkurbonov2008@gmail.com</p>
              </div>
              <p>Uzbekcha</p>
            </div>
          </div>
          <nav className='flex justify-between items-center max-w-[1200px] mx-auto pt-3'>
            <Image src={"/logo.png"} alt={"Web Site Logo"} width={200} height={200} />
            <ul className='flex items-center space-x-5'>
              {data.map((item, idx) => (
                <li key={idx} className='flex items-center space-x-1'>
                  <p className='uppercase text-md cursor-pointer font-semibold'>{item.label}</p>
                  <item.icon />
                </li>
              ))}
            </ul>
            <button className='bg-orange-700 py-3 px-5 rounded-full uppercase'>Murojat qoldirish</button>
          </nav>
        </header>
        <div className='max-w-[1200px] mx-auto flex items-center justify-between text-white'>
          <div className='flex flex-col items-start space-y-5 w-2/3'>
            <h1 className='text-5xl font-bold '>Dunyodagi 1-raqamli sayohat joyiga xush kelibsiz
            </h1>
            <p className='text-xl font-bold'>Biz sizga unutilmas sayohatni tashkul qilamiz</p>
            <button className='border rounded-full px-10 py-2'>Batafsil</button>
          </div>
          <Image src={'https://mandarin-tour.uz/wp-content/uploads/2022/01/slider-man.webp'} alt={"man image"} width={300} height={200} />
        </div>
      </main>
      <div></div>
      <div>

      </div>
    </div >
  )
}

export default MainPage