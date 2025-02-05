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
      <main className='main bg-gray-900'>
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
            <h1 className='text-5xl font-bold'>Dunyodagi 1-raqamli sayohat joyiga xush kelibsiz</h1>
            <p className='text-xl font-bold'>Biz sizga unutilmas sayohatni tashkul qilamiz</p>
            <button className='border rounded-full px-10 py-2'>Batafsil</button>
          </div>
          <Image src={'https://mandarin-tour.uz/wp-content/uploads/2022/01/slider-man.webp'} alt={"man image"} width={300} height={200} />
        </div>
      </main>

      <div className='bg-gray-800 relative h-[340px]'>
        <div className="w-[1200px] absolute left-[50%] translate-x-[-50%] top-[-20%] z-50 bg-gray-900 shadow-lg flex space-x-10 rounded-2xl p-8">
          <div className="w-1/2 grid grid-cols-2 gap-5">
            {countryes.map((item, idx) => (
              <div key={idx} className="border-b-[1px] border-gray-300 pb-2">
                <p className="text-gray-200 text-center hover:text-red-500 cursor-pointer transition-all font-bold">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold text-white">Европа</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Европа — одна из самых маленьких частей света в Северном полушарии Земли,
              омываемая Атлантическим океаном на западе, Северным Ледовитым океаном на
              севере и имеющая площадь около 10 млн км².
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 mt-5 font-semibold shadow-md transition duration-200">
              Смотреть видео
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto text-center mt-32 text-white'>
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

      <div className='bg-gray-800 py-32 mt-24'>
        <div className='max-w-[1200px] mx-auto flex flex-col space-y-10 text-white'>
          <h2 className='text-center text-4xl font-bold'>Kompaniya haqida</h2>
          <div className='flex'>
            <p>So'nggi paytlarda O'zbekiston aholisi orasida sifatli tashkil etilgan dam olishga bo'lgan talab sezilarli darajada oshdi. Shu munosabat bilan turli turistik takliflar soni ortdi. Turli xil turlarda adashib qolmaslik uchun turli mamlakatlarda dam olishni tashkil qilish xususiyatlari haqida dolzarb ma'lumotlarga ega bo'lish kerak. Individual va guruhli dam olish uchun sayyohlik agentligimiz har qanday murakkablik darajasidagi sayohatlarni tashkil etishda tajribali mutaxassislarni ish bilan ta'minlaydi. Biz qulay shartlarda taqdim etiladigan yuqori sifatli sayohat xizmatlarining to'liq to'plamini taklif etamiz. Biz sizga nafaqat sayohatingizning muvaffaqiyatli tashkil etilishiga ishonch, balki unutilmas va maroqli dam olishni ham beramiz. Bizga to'liq ishonishingiz mumkin!</p>
            <Image src={'https://mandarin-tour.uz/wp-content/uploads/2022/01/about.webp'} alt={"About company"} width={600} height={400} />
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto text-center mt-24 text-white'>
        <h2 className='font-semibold text-5xl mb-3'>Mashhur Joylar</h2>
        <p className='mb-8'>Biz sizga faqat eng yaxshisini tavsiya beramiz</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-900 p-4 place-items-center">
          {turs.map((tour, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <img src={tour.img} alt={`Tour Image ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg text-white">{tour.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-gray-800 py-16 mt-24 text-white'>
        <div className='max-w-[1200px] mx-auto text-center'>
          <h2 className='font-semibold text-5xl mb-3'>Sharhlar</h2>
          <p className='mb-8 text-white'>Bizning mijoslarimizni</p>
          <div className='flex space-x-10'>
            <div className='flex flex-col w-1/2 items-start text-start bg-gray-700 rounded-xl py-12 px-10 space-y-6 justify-between cursor-pointer'>
              <p className='tracking-wider text-white'>Biz kichkina o'g'limiz (11 oylik) bilan dam olgandik, juda katta rahmat menejer Yuliyaga ajoyib turni tanlagani uchun. Yana bir katta rahmat sabr-toqatini ko'rsatgani uchun. E'tibor bering, men juda asabiy mijozman, xavotirchi, dastlab vizalar haqida juda ko'p tashvishlandim va har soatda telefon qilib, so'rab turardim, so'ngra aeroportda samolyotga chiqishni kutayotganda, qaysi samolyotda uchayotganimizni, Airbus yoki Boeing ekanligini bilishim kerak edi, agar Airbus bo'lsa, qaysi biri?) (yana bir soat kutishni xohlamadim, shuning uchun tezda aniqlashim kerak edi). Yuliya hech qachon e'tiborsiz qoldirmadi, bunday oddiy so'rovlarni tezda hal qildi va meni tinchlantirdi. Dam olish juda muvaffaqiyatli bo'ldi. Kelgusi yilni aynan shu joyga borishni xohlaymiz. Va albatta, faqat sizlar orqali) Men, aslida, hali ham uni qiynayapman, agar qiziqarli biror narsa bo'lsa. Ko'pincha juda ajoyib takliflar bor. Sizning kompaniyangizga va bunday bilimdon va mehribon menejerya uchraganim uchun juda xursandman.</p>
              <p className='text-white'>Mubina</p>
            </div>
            <div className='flex flex-col items-start w-1/2 text-start bg-gray-700 rounded-xl py-12 px-10 space-y-6 justify-between cursor-pointer'>
              <p className='tracking-wider text-white'>O'tgan yilda o'g'limiz bilan dam olishga borish niyatida bo'lib, kompaniyangiz orqali yo'l oldik. Menejer Yuliyaning yordami haqiqatan ham ajoyib edi! Har bir detalga e'tibor berib, to'g'ri tanlov qilishda yordam berdi. Dastlab vizalar bilan bog'liq savollarimni ko'plab marta berdim, keyin esa aeroportda samolyotimizni aniqlash uchun tinchlik topolmadim, lekin Yuliyaning sabri va yordami hech qachon kamaymadi. U har doim qo'llab-quvvatladi va har bir so'rovimga tezda javob berdi. Dam olish juda maroqli bo'ldi, kelgusi yilni yana shu joyda o'tkazishni rejalashtirganmiz. Yuliyaga va kompaniyangizga katta rahmat! Bunday ajoyib xizmat ko'rsatganingiz uchun minnatdorman, albatta, kelajakda ham faqat sizlar orqali sayohat qilishni istayman.</p>
              <p className='text-white'>Shohjahon Holmuhamedov</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto text-center my-32'>
        <h2 className='font-semibold text-5xl mb-3 text-white'>Biz bilan boglanish</h2>
        <p className='mb-8 text-white'>Biga malumotlaringizni qoldiring</p>
        <form className='flex flex-col items-center space-y-5'>
          <input type="text" placeholder='Sizning toliq ismingiz' className='w-full py-2 px-3 border border-gray-600 outline-none hover:border-orange-500 transition-all text-white bg-gray-800' />
          <div className='flex space-x-10 w-full'>
            <input type="text" placeholder='Telefon raqamingz' className='py-2 px-3 border border-gray-600 outline-none hover:border-orange-500 transition-all w-1/2 text-white bg-gray-800' />
            <input type="text" placeholder='Email manzilingiz' className=' py-2 px-3 border border-gray-600 outline-none hover:border-orange-500 transition-all w-1/2 text-white bg-gray-800' />
          </div>
          <input type="text" placeholder='Mavzu' className='w-full py-2 px-3 border border-gray-600 outline-none hover:border-orange-500 transition-all text-white bg-gray-800' />
          <textarea placeholder='Sizning Xabaringiz' className='w-full py-2 px-3 border border-gray-600 outline-none hover:border-orange-500 transition-all text-white bg-gray-800'></textarea>
          <button className='py-3 px-5 border border-orange-600 inline text-white bg-gray-700'>Jonatish</button>
        </form>
      </div>

      <div className='bg-gray-800 py-16'>
        <div className='max-w-[1200px] mx-auto text-center mt-24'>
          <h2 className='font-semibold text-5xl mb-3 mb-16 text-white'>Yangiliklar</h2>
          <div>
            <div className='flex space-x-10'>
              <div className='flex flex-col w-1/2 items-start text-start bg-gray-700 rounded-xl py-12 px-10 space-y-6 justify-between cursor-pointer'>
                <Image src={'https://mandarin-tour.uz/wp-content/uploads/2022/04/photo_2022-04-01_15-22-55.webp'} alt={"News Image"} width={500} height={500} />
                <p className='text-3xl font-bold text-white'>Oylaviy dam olishga nima yetsin</p>
                <p className='text-white'>Ohirgi payt oylangiz bilan qancha vaht otqizganingizni hech oylab kordingizmi...</p>
              </div>
              <div className='flex flex-col items-start w-1/2 text-start bg-gray-700 rounded-xl py-12 px-10 space-y-6 justify-between cursor-pointer'>
                <Image src={'https://mandarin-tour.uz/wp-content/uploads/2022/04/photo_2022-04-06_18-11-30.webp'} alt={"News Image"} width={500} height={500} />
                <p className='text-3xl font-bold text-white'>Mandarin tourdan Ramazon aksiyalari</p>
                <p className='text-white'>Sayohat uchun yigib qoygan pularingizni ishlatish vohti keldi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className='max-w-[1200px] mx-auto bg-gray-900'>
        <table></table>
      </footer>
      <div className='h-[1000px]'></div>
    </div>

  )
}

export default MainPage