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

  const turs = [
    {
      img: "https://mandarin-tour.uz/wp-content/uploads/2022/01/8.webp",
      label: ""
    },
    {
      img: "https://mandarin-tour.uz/wp-content/uploads/2022/01/9.webp",
      label: ""
    },
    {
      img: "https://mandarin-tour.uz/wp-content/uploads/2022/01/4.webp",
      label: ""
    },
    {
      img: "https://mandarin-tour.uz/wp-content/uploads/2022/01/6.webp",
      label: ""
    },
    {
      img: "https://mandarin-tour.uz/wp-content/uploads/2022/01/5.webp",
      label: ""
    },
    {
      img: "https://mandarin-tour.uz/wp-content/uploads/2022/01/3.webp",
      label: ""
    },
    {
      img: "https://mandarin-tour.uz/wp-content/uploads/2022/01/7.webp",
      label: ""
    },
    {
      img: "https://mandarin-tour.uz/wp-content/uploads/2022/01/1.webp",
      label: ""
    }
  ]

  const countryes = [
    "Evropa",
    "Amerika",
    "Shri Lanka",
    "Antaliya",
    "Sharm Esh Sheyh",
    "Egipet",
    "Tailand",
    "Turkiya",
    "Dubay",
    "Maldiva"
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

      <div className='bg-slate-200 relative h-[340px]'>
        <div className="w-[1200px] asolute-country-data left-[50%] translate-x-[-50%] top-[-20%] z-50 bg-white shadow-lg flex space-x-10 rounded-2xl p-8">
          <div className="w-1/2 grid grid-cols-2 gap-5">
            {countryes.map((item, idx) => (
              <div key={idx} className="border-b-[1px] border-gray-300 pb-2">
                <p className="text-gray-700 text-center hover:text-red-500 cursor-pointer transition-all font-bold">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold">Европа</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Европа — одна из самых маленьких частей света в Северном полушарии Земли,
              омываемая Атлантическим океаном на западе, Северным Ледовитым океаном на
              севере и имеющая площадь около 10 млн км².
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 mt-5  font-semibold shadow-md transition duration-200">
              Смотреть видео
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto text-center mt-32'>
        <h2 className='font-semibold text-5xl mb-3'>Turlar</h2>
        <p className='mb-8'>Kuningiz yaxshi utsin</p>
        <div className='grid grid-cols-3 gap-10'>
          {turs.map((item, idx) => (
            <div key={idx} style={{
              backgroundImage: `url(${item.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }} className='h-64 object-cover hover:scale-110 transition-all cursor-pointer'>

            </div>
          ))}
        </div>
      </div>

      <div className='bg-slate-200 py-32 mt-24'>
        <div className='max-w-[1200px] mx-auto flex flex-col space-y-10'>
          <h2 className='text-center text-4xl font-bold'>Kompaniya haqida</h2>
          <div className='flex'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus enim soluta consectetur impedit illum et pariatur fugiat, odit quis iste vitae dolorum illo neque aut tenetur eum totam doloremque tempore voluptatum temporibus eveniet vero similique aliquam. A alias ea corporis ratione, animi architecto dolor eaque sint magni repellendus doloribus laboriosam ducimus asperiores esse accusamus nostrum modi omnis nihil quam ad cum veritatis doloremque assumenda. Maiores sapiente ut laboriosam laudantium magni, maxime voluptates ex quaerat tempora necessitatibus doloribus ea fugiat nobis inventore rerum? Veritatis blanditiis iusto cumque, sapiente similique maxime corrupti mollitia quia error expedita! Porro numquam vel quia dolor!</p>
            <Image src={'https://mandarin-tour.uz/wp-content/uploads/2022/01/about.webp'} alt={"About company"} width={600} height={400} />
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto text-center mt-24'>
        <h2 className='font-semibold text-5xl mb-3'>Mashhur Joylar</h2>
        <p className='mb-8'>Biz sizga faqat eng yaxshisini tavsiya beramiz</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 bg-white p-4 place-items-center">
          {turs.map((tour, index) => (
            <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img src={tour.img} alt={`Tour Image ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg text-gray-700">{tour.label}</p>
              </div>
            </div>
          ))}
        </div>




      </div>
      <div className='h-[1000px]'></div>

      <div>
      </div>
    </div >
  )
}

export default MainPage