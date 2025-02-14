'use client'

import Image from 'next/image';
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LuPlane } from "react-icons/lu";
import { MdEmail, MdHomeWork } from "react-icons/md";
import { FaKaaba } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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

  return (
    <div>
      <main className='main bg-gray-900'>
        <header className='bg-[rgba(0,0,0,0.6)] text-white backdrop-blur-sm'>
          <nav className='flex justify-between items-center max-w-[1500px] mx-auto pt-3'>
            <Image src={"/logo.png"} alt={"Web Site Logo"} width={200} height={200} />
            <ul className='hidden md:flex items-center space-x-5'>
              {data.map((item, idx) => (
                <li key={idx} className='flex items-center space-x-1'>
                  <p className='uppercase text-md cursor-pointer font-semibold'>{item.label}</p>
                  <item.icon />
                </li>
              ))}
            </ul>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-80 z-50`}>
              <div className="flex justify-end p-5">
                <button onClick={toggleMenu} className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col items-center space-y-6 mt-20">
                {data.map((item, idx) => (
                  <li key={idx} className='flex items-center space-x-1'>
                    <p className='uppercase text-md cursor-pointer font-semibold'>{item.label}</p>
                    <item.icon />
                  </li>
                ))}
              </ul>
            </div>

            <button className='bg-[#fca311] py-3 px-5 rounded-full uppercase hidden md:block'>Murojat qoldirish</button>
          </nav>
        </header>
        <div className='max-w-[1500px] mx-auto flex items-center justify-between text-white'>
          <div className='flex flex-col items-start justify-center h-full space-y-5 w-full md:w-2/3 mt-24 md:mt-0'>
            <h1 className='text-3xl md:text-5xl font-bold'>Dunyodagi 1-raqamli sayohat joyiga xush kelibsiz</h1>
            <p className='text-lg md:text-xl font-bold'>Biz sizga unutilmas sayohatni tashkul qilamiz</p>
            <button className='border rounded-full px-10 py-2'>Batafsil</button>
          </div>
          <Image src={'https://mandarin-tour.uz/wp-content/uploads/2022/01/slider-man.webp'} alt={"man image"} width={300} height={200} className='hidden md:block' />
        </div>
      </main>

      <div className='bg-gray-800 relative h-[340px]'>
        <div className="w-full md:w-[1200px] absolute left-[50%] translate-x-[-50%] top-[-20%] z-50 bg-gray-900 shadow-lg flex flex-col md:flex-row space-x-10 rounded-2xl p-8">
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {countryes.map((item, idx) => (
              <div key={idx} className="border-b-[1px] border-gray-300 pb-2">
                <p className="text-gray-200 text-center hover:text-[#fca311] cursor-pointer transition-all font-bold">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold text-white">Европа</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Европа — одна из самых маленьких частей света в Северном полушарии Земли,
              омываемая Атлантическим океаном на западе, Северным Ледовитым океаном на
              севере и имеющая площадь около 10 млн км².
            </p>
            <button className="bg-[#fca311] hover:bg-[#f7ae39] text-white px-6 py-3 mt-5 font-semibold shadow-md transition duration-200">
              Смотреть видео
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-[1500px] mx-auto text-center mt-32 text-white'>
        <h2 className='font-semibold text-3xl md:text-5xl  mt-[500px] md:mt-0 mb-3'>Turlar</h2>
        <p className='mb-8'>Kuningiz yaxshi utsin</p>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10'>
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

      <div className='bg-gray-800 py-32 mt-24'>
        <div className='max-w-[1500px] mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 text-white'>
          <div className='flex-1'>
            <h2 className='text-center text-4xl font-bold mb-6 md:text-left'>Kompaniya haqida</h2>
            <p className='text-lg'>
              So&apos;nggi paytlarda O&apos;zbekiston aholisi orasida sifatli tashkil etilgan dam olishga bo&apos;lgan talab sezilarli darajada oshdi. Shu munosabat bilan turli turistik takliflar soni ortdi. Turli xil turlarda adashib qolmaslik uchun turli mamlakatlarda dam olishni tashkil qilish xususiyatlari haqida dolzarb ma&apos;lumotlarga ega bo&apos;lish kerak. Individual va guruhli dam olish uchun sayyohlik agentligimiz har qanday murakkablik darajasidagi sayohatlarni tashkil etishda tajribali mutaxassislarni ish bilan ta&apos;minlaydi. Biz qulay shartlarda taqdim etiladigan yuqori sifatli sayohat xizmatlarining to&apos;liq to&apos;plamini taklif etamiz. Biz sizga nafaqat sayohatingizning muvaffaqiyatli tashkil etilishiga ishonch, balki unutilmas va maroqli dam olishni ham beramiz. Bizga to&apos;liq ishonishingiz mumkin!
            </p>
          </div>
          <div className='flex-1'>
            <Image src={'https://mandarin-tour.uz/wp-content/uploads/2022/01/about.webp'} alt={"About company"} width={600} height={400} className='max-w-[200px] sm:max-w-[500px] mx-auto md:mx-0' />
          </div>
        </div>
      </div>


      <div className='max-w-[1500px] mx-auto text-center mt-24 text-white'>
        <h2 className='font-semibold text-3xl md:text-5xl mb-3'>Mashhur Joylar</h2>
        <p className='mb-8'>Biz sizga faqat eng yaxshisini tavsiya beramiz</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 place-items-center">
          {turs.map((tour, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image src={tour.img} alt={`Tour Image ${index + 1}`} width={400} height={500} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg text-white">{tour.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-gray-800 py-16 mt-24 text-white'>
        <div className='max-w-[1500px] mx-auto text-center'>
          <h2 className='font-semibold text-3xl md:text-5xl mb-3'>Sharhlar</h2>
          <p className='mb-8 text-white'>Bizning mijoslarimizni</p>
          <div className='flex flex-col items-center md:flex-row md:space-x-10 space-y-8 md:space-y-0'>
            <div className="flex flex-col w-full md:w-1/2 items-start text-start bg-gray-700 h-52 rounded-xl py-12 px-10 space-y-6 justify-between cursor-pointer">
              <p className="tracking-wider text-white">
                Biz kichkina o&apos;g&apos;limiz (11 oylik) bilan dam olgandik, juda katta rahmat menejer Yuliyaga ajoyib turni tanlagani uchun. Yana bir katta rahmat sabr-toqatini ko&apos;rsatgani uchun...
              </p>
              <p className="text-white">Mubina</p>
            </div>

            <div className="flex flex-col w-full md:w-1/2 items-start text-start bg-gray-700 h-52 rounded-xl py-12 px-10 space-y-6">
              <p className="tracking-wider text-white">
                O&apos;tgan yilda o&apos;g&apos;limiz bilan dam olishga borish niyatida bo&apos;lib, kompaniyangiz orqali yo&apos;l oldik...
              </p>
              <p className="text-white">Shohjahon Holmuhamedov</p>
            </div>
          </div>
          <section className='flex mt-16 flex-col w-full items-start text-start h-52 bg-gray-700 rounded-xl py-12 px-10 space-y-6'>
            <h2 className='text-xl font-bold'>Ish vaqti</h2>
            <p className='text-lg'>Dushanbadan Shanbagacha</p>
            <p className='text-lg'>10:00 dan 22:00 gacha</p>
          </section>
        </div>
      </div>



      <footer className='max-w-[1500px] mx-auto py-16 text-white flex flex-col md:flex-row justify-between '>
        <div className='w-full md:w-1/3'>
          <p className='text-2xl font-bold mt-8 md:mt-0 mb-3 md:mb-8'>Kontakt malumotlar</p>
          <div className='flex flex-col space-y-6'>
            <div className='flex items-center space-x-2'>
              <FaLocationDot size={20} />
              <p>Hamid Sulaymon MFY, Shota Rustaveli ko&apos;chasi, 23 uy, 18 xonadon</p>
            </div>
            <div className='flex items-center space-x-2 '>
              <FaPhoneAlt size={20} />
              <p>+998 88 198 00 09</p>
            </div>
            <div className='flex items-center space-x-2 '>
              <MdEmail size={20} />
              <p>abdullaev-22@mail.ru</p>
            </div>
            <div className='flex items-center space-x-2 '>
              <FaUser size={20} />
              <p>Шокиров Мухаммад</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/3'>
          <p className='text-2xl font-bold mt-8 md:mt-0 mb-3 md:mb-8'>Foydali havolalar</p>
          <ul className='space-y-3'>
            {data.map((item, idx) => (
              <li key={idx} className='flex items-center space-x-2'>
                <p>{item.label}</p>
                <item.icon />
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <p className='text-2xl font-bold mt-8 md:mt-0 mb-3 md:mb-8'>Bizning Manzil</p>
          <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </footer>
    </div>
  )
}

export default MainPage;
