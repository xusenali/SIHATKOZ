'use client'
import Image from "next/image";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight, FaChevronDown, FaChevronRight, FaEye, FaFacebook, FaInstagram, FaMailBulk, FaMapPin, FaPhone, FaPhoneAlt, FaQuoteLeft, FaSearch, FaTwitter } from "react-icons/fa";
import { MdArrowRight, MdArrowRightAlt, MdCancel, MdEmail, MdMenu } from "react-icons/md";
import Head from "next/head";

const Home = () => {

  const [modal, setModal] = useState(false)

  return (
    <div className="w-full relative overflow-hidden min-h-[100vh]">
      <header className="w-full">
        {/* Yuqori qator */}
        <div className="hidden md:block bg-[#353E8B] text-white text-sm">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-2 px-4">
            {/* Chap tomondagi aloqa ma’lumotlari */}
            <address className="not-italic flex flex-wrap items-center gap-10">
              <span className="flex gap-1 items-center"> <IoLocationSharp size={15} />
                г. Ташкент, Юнус Абад кв-4, ул. А. Доннья №4</span>
              <div className="flex gap-1 items-center"> <FaPhoneAlt size={15} /> +998 (71) 224-13-13</div>
              <div className="flex gap-1 items-center"><MdEmail size={15} /> info@sihatkoz.uz</div>
            </address>

            {/* O'ng tomonda konsultatsiya tugmasi */}
            <button className="bg-white text-[#1d3f8b] font-semibold px-4 py-1 rounded-md hover:bg-gray-100 transition">
              КОНСУЛЬТАЦИЯ
            </button>
          </div>
        </div>

        {/* Pastki navigatsiya */}
        <nav className=" border-[#1d3f8b]">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-3 px-4">
            {/* Logo qismi */}
            <Image
              src="/logo.svg" // logo rasmi public papkada bo‘lsin
              alt="Sihatkoz logo"
              width={120}
              height={50}
            />

            {modal && (
              <ul className="flex flex-col top-0 z-40 bg-white border min-h-max  min-w-full absolute right-0 p-2">
                <li className="flex h-15 justify-between items-center">
                  <Image
                    src="/logo.svg" // logo rasmi public papkada bo‘lsin
                    alt="Sihatkoz logo"
                    width={120}
                    height={60}
                  />
                  <span onClick={() => setModal(false)} className="block md:hidden  bg-blue-800 p-2 rounded">
                    <MdCancel size={20} color="white" />
                  </span>
                </li>
                <li className="flex h-15 justify-between items-center text-md">
                  <p>Услуги</p>
                  <span className="p-1 border rounded-sm border-blue-800"> <FaChevronDown size={10} /> </span>
                </li>
                <li className="flex h-15 justify-between items-center text-md">
                  <p>Состояния глаз</p>
                  <span className="p-1 border rounded-sm border-blue-800"> <FaChevronDown size={10} /> </span>
                </li>
                <li className="flex h-15 justify-between items-center text-md">
                  <p>Врачи</p>
                  <span className="p-1 border rounded-sm border-blue-800"> <FaChevronDown size={10} /> </span>
                </li>
                <li className="flex h-15 justify-between items-center text-md">
                  <p>Цены и Условия оплаты</p>
                  <span className="p-1 border rounded-sm border-blue-800"> <FaChevronDown size={10} /> </span>
                </li>
                <li className="flex h-15 justify-between items-center text-md">
                  <p>Отзывы</p>
                  <span className="p-1 border rounded-sm border-blue-800"> <FaChevronDown size={10} /> </span>
                </li>
                <li className="flex h-15 justify-between items-center text-md">
                  <p>Контакты</p>
                  <span className="p-1 border rounded-sm border-blue-800"> <FaChevronDown size={10} /> </span>
                </li>
                <select className="cursor-pointer outline-none py-2 ">
                  <option>RU</option>
                  <option>UZ</option>
                </select>
              </ul>
            )}


            {/* Menyu qismlari */}
            <ul className="hidden md:flex flex-wrap items-center gap-5 text-[13px] font-medium">
              <li className="cursor-pointer ">УСЛУГИ ▾</li>
              <li className="cursor-pointer ">СОСТОЯНИЯ ГЛАЗ ▾</li>
              <li className="cursor-pointer ">ВРАЧИ ▾</li>
              <li className="cursor-pointer ">О НАС ▾</li>
              <li className="cursor-pointer ">
                ЦЕНЫ И УСЛОВИЯ ОПЛАТЫ ▾
              </li>
              <li className="cursor-pointer ">ОТЗЫВЫ</li>
              <li className="cursor-pointer ">FAQ</li>
              <li className="cursor-pointer ">КОНТАКТЫ</li>
              <select className="cursor-pointer ">
                <option>RU</option>
                <option>UZ</option>
              </select>
            </ul>

            <FaSearch className="hidden md:block text-blue-900" />

            <span onClick={() => setModal(true)} className="block md:hidden bg-blue-800 p-1 rounded">
              <MdMenu size={20} className="  text-white " />
            </span>
          </div>
        </nav>
      </header>

      <main className="relative w-full h-auto">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage:
              "url('/image.png')",
          }}
        >
          <div className="bg-black/50 w-full h-full">
            <div className="container mx-auto px-6 py-32 md:py-44 text-start">
              <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                Офтальмологическая <br />
                клиника SIHAT KO'Z
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
                Мы предлагаем полный спектр офтальмологических услуг, направленных
                на улучшение, сохранение и восстановление зрения.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full inline-flex items-center transition">
                Связаться <span className="ml-5 p-2 bg-white text-black rounded-full text-xl"> <FaArrowRight size={10} /> </span>
              </button>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="relative -mt- md:-mt-20 z-10 px-4">
          <div className="max-w-7xl mx-auto bg-blue-900 text-white rounded-xl shadow-xl p-5 md:p-10">
            <ul className="flex flex-col md:flex-row justify-between items-center">
              <li>
                <h3 className="text-blue-300 text-lg mb-2">— Преимущества</h3>
                <h2 className="text-xl md:text-3xl font-semibold mb-6">
                  Преимущества при уходе за глазами
                </h2>
              </li>
              <li className="text-md max-w-2xl">
                Мы предлагаем полный спектр услуг по диагностике и лечению глазных <br />
                заболеваний, как для взрослых, так и для детей.
              </li>

            </ul>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {/* Item 1 */}
              <div className="flex items-center gap-2">
                <img src="/user.png" className="text-3xl mr-3 w-15 h-15" />
                <div className="flex  flex-col ">
                  <p className="font-bold text-lg">Лицензированные врачи</p>
                  <p className="text-sm text-gray-300">
                    У нас работают высококлассные врачи-офтальмологи, опыт которых
                    насчитывает десятилетия.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2">
                <img src="/kuz.png" className="text-3xl mr-3 w-15 h-15" />
                <div className="flex flex-col ">
                  <p className="font-bold text-lg">Качественное обслуживание</p>
                  <p className=" text-sm text-gray-300">
                    Мы обеспечиваем пациентов комфортом и гарантируем им неизменно
                    высокое качество услуг.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-2">
                <img src="/teles.png" className="text-3xl mr-3 w-15 h-15" />
                <div className="flex flex-col">
                  <h4 className="font-bold text-lg">Современные технологии</h4>
                  <p className="text-gray-300 text-sm">
                    Наша клиника оснащена медицинским оборудованием, изготовленным в
                    США, Японии и Германии.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Chap tomondagi rasmlar */}
          <div className="relative w-full lg:w-1/2">
            {/* Asosiy rasm */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/achki.png" // <-- asosiy rasm nomi (public papkada bo‘lishi kerak)
                alt="Ophthalmology Clinic"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Kichik rasm (pastki burchakda joylashgan) */}
            <div className="absolute -bottom-8 -right-5 md:-right-10  w-48 md:w-60 rounded-xl overflow-hidden ">
              <Image
                src="/oila.png" // <-- kichik rasm nomi
                alt="Doctor with child"
                width={300}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* O‘ng tomondagi matn */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-blue-800 font-medium mb-2 flex items-center lg:justify-start">
              <span className="w-8 h-[2px] bg-blue-800 mr-2"></span> О нас
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
              Мы — ведущая офтальмологическая <br /> клиника
            </h2>
            <p className="text-gray-700 mb-6">
              Мы применяем современное диагностическое оборудование, уникальные
              микрохирургические системы, лазерные установки, передовые методики и
              технологии для решения самых разных проблем со зрением не только в
              стандартных, но и в сложных случаях.
            </p>

            {/* Ro‘yxat (2 ustunli) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-8 text-gray-700 text-sm md:text-base">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✔</span> улучшение зрения
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✔</span> сохранение зрения
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✔</span> восстановление зрения
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✔</span> рутинные осмотры
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✔</span> лазерная коррекция
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✔</span> хирургические вмешательства
                </li>
              </ul>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">
              Читать далее
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20  w-full   bg-white">
        <div className=" mx-auto flex flex-col lg:flex-row">
          {/* Chap tomonda matn */}
          <div className="bg-blue-900 text-white h-150 md:h-180 rounded-tr-[3rem] p-5 md:p-14 lg:w-1/2 w-full shadow-lg">
            <p className="text-blue-300 mb-2">— Почему выбирают нас?</p>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-snug mb-6">
              Мы — ведущая офтальмологическая <br /> клиника
            </h2>
            <p className="text-gray-200 mb-8">
              Офтальмологическая клиника SIHAT KO’Z работает с 2009 года.
              За это время наши врачи провели более <b>35 000</b> высокотехнологичных
              операций и более <b>50 000</b> лазерных вмешательств при различных заболеваниях глаза.
            </p>

            {/* Progress bars */}
            <div className="space-y-5">
              <div>
                <p className="font-semibold mb-1 text-gray-100">
                  Удовлетворенность клиентов
                </p>
                <div className="w-full bg-blue-800 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full w-[90%] relative">
                    <span className="absolute -top-6 right-0 bg-white text-blue-800 text-sm font-semibold px-2 py-[1px] rounded">
                      90%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-1 text-gray-100">
                  Успех хирургии
                </p>
                <div className="w-full bg-blue-800 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full w-[95%] relative">
                    <span className="absolute -top-6 right-0 bg-white text-blue-800 text-sm font-semibold px-2 py-[1px] rounded">
                      95%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-1 text-gray-100">
                  Рейтинг врачей
                </p>
                <div className="w-full bg-blue-800 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full w-[85%] relative">
                    <span className="absolute -top-6 right-0 bg-white text-blue-800 text-sm font-semibold px-2 py-[1px] rounded">
                      85%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* O‘ng tomonda rasm */}
          <div className="relative h-max w-full flex-1/2 ">
            <Image
              src="/qiz.png" // <-- public papkada joylashgan rasm nomi
              alt="Ophthalmology patient"
              width={600}
              height={400}
              className="rounded-bl-[3rem] object-cover w-full h-auto shadow-lg"
            />

            {/* Play tugmasi (video uchun) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-md transition">
                ▶
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50" aria-labelledby="departments-heading">
        <Head>
          {/* SEO Metataglar */}
          <title>Bo'limlar - Eng Yaxshi Xizmatlar</title>
          <meta name="description" content="Klinikamizdagi barcha zamonaviy bo'limlar: Refraksion lazer xirurgiya, Vitreoretinal xirurgiya va Intraokulyar lazer xirurgiya. Faqat eng yaxshi mutaxassislar." />
          <meta name="keywords" content="ko'z, xirurgiya, lazer, bo'limlar, klinika, reyting" />
        </Head>

        <div className="container mx-auto px-4 max-w-7xl">

          {/* 1. Sarlavha va kirish qismi */}
          <header className="flex flex-col  justify-between items-start mb-12">
            <h1 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              — Отделения
            </h1>
            <div className='w-full flex flex-col md:flex-row gap-5 items-start md:items-center justify-between'>
              {/* SEO: Asosiy sarlavha */}
              <h2 id="departments-heading" className="text-2xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                У нас для вас всё
                <br className="hidden sm:inline" /> самое лучшее
              </h2>
              <p className="mt-4 text-md text-gray-600 max-w-xl">
                В отделениях внедрены все самые современные методики  <br /> лечения
                для наших любимых пациентов
              </p>
              <a
                href="#"
                className=" h-10 px-3 bg-indigo-800 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-800 transition duration-300 flex items-center whitespace-nowrap"
              >
                Все отделения
                <MdArrowRightAlt className="w-5 h-5 ml-2" />
              </a>
            </div>

          </header>

          {/* 2. Xizmatlar kartochkalari (Responsive Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Karta 1: Refraksion lazer xirurgiya */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full">
              <div className=" rounded-full w-fit mb-4">
                <img src="/kuzo.png" className="w-15 h-15" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Рефракционная лазерная
                хирургия</h3>
              <p className="text-gray-600 flex-grow text-sm">
                Отделение рефракционной хирургии в клинике
                «SIHAT KO’Z» занимается всеми
                хирургическими и консервативными способами
                коррекции аномалий рефракции…
              </p>
              <a href="#" className="mt-4 flex items-center text-indigo-800 font-semibold hover:text-indigo-800 transition duration-150 group">
                Читать далее
                <MdArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Karta 2: Vitreoretinal xirurgiya */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full">
              <div className=" rounded-full w-fit mb-4">
                <img src="/kuzq.png" className="w-15 h-15" /> {/* Rasmdagi kabi ikonka */}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Витреоретинальная
                хирургия</h3>
              <p className="text-gray-600 flex-grow text-sm">
                Витреоретинальное отделение SIHAT KO’Z
                специализируется на разработке и внедрении
                современных хирургических технологий при
                различных патологиях переднего и…
              </p>
              <a href="#" className="mt-4 flex items-center text-indigo-800 font-semibold hover:text-indigo-800 transition duration-150 group">
                Читать далее
                <MdArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Karta 3: Intraokulyar lazer xirurgiya */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full">
              <div className=" rounded-full w-fit mb-4">
                <img src="/kuzl.png" className="w-15 h-15 " /> {/* Rasmdagi kabi ikonka */}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Интраокулярная лазерная
                хирургия</h3>
              <p className="text-gray-600 flex-grow text-sm">
                В отделении освоены методики диагностики
                флюоресцентной ангиографии глазного дна и
                оптической когерентной томографии сетчатки
                и зрительного нерва…
              </p>
              <a href="#" className="mt-4 flex items-center text-indigo-800 font-semibold hover:text-indigo-800 transition duration-150 group">
                Читать далее
                <MdArrowRightAlt className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* 3. Statistika qismi (Responsive Bar) */}
          <div className="text-black rounded-xl shadow-2xl overflow-hidden grid grid-cols-2  lg:grid-cols-4 gap-4">

            {/* Reyting qismi */}
            <div className="flex text-white items-center gap-2 bg-gradient-to-b from-blue-300 to-blue-900 p-6">
              <div className="text-2xl md:text-6xl font-extrabold">4.7</div>
              <p className="mt-2 text-sm opacity-90">из 5</p>
              <div className="flex items-center mt-1 text-sm md:text-md text-gray-400 leading-none">
                {/* Yulduzlar */}
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>

            {/* Statistik raqamlar qismi */}
            {/* Stat 1 */}
            <div className="flex flex-col justify-center items-center p-5">
              <p className="text-2xl sm:text-5xl font-extrabold text-blue-900">20+</p>
              <p className="mt-1 text-base opacity-90">видов анализов</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-center items-center p-5">
              <p className="text-2xl sm:text-5xl font-extrabold text-blue-900">100+</p>
              <p className="mt-1 text-base opacity-90">Предоставляемых услуг</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col justify-center items-center p-3">
              <p className="text-2xl sm:text-5xl font-extrabold text-blue-900">12</p>
              <p className="mt-1  text-base opacity-90">Количество врачей</p>
            </div>

          </div>


        </div>
      </section>

      <section className="py-12 md:py-24 bg-white overflow-hidden" aria-labelledby="testimonial-heading">
        <Head>
          {/* SEO Metataglar */}
          <title>Mijozlar Fikrlari - Klinika Haqida</title>
          <meta name="description" content="Mijozlarimiz SIHAT KO'Z klinikasidagi xizmatlar va operatsiyalar haqida nima deydilar. Lazer korreksiyasi bo'yicha eng yaxshi fikrlar." />
          <meta name="keywords" content="mijozlar fikri, otziv, klinika, oftalmologiya, lazer korreksiya" />
        </Head>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12">

          {/* 1. Chap tomon - Rasmlar Kollaji */}
          <div className="relative w-full lg:w-1/2 max-w-lg lg:max-w-none min-h-[400px] lg:min-h-[600px] flex-shrink-0">

            {/* Asosiy rasm (Orqa fonda) */}
            {/* Eslatma: 'Image' komponenti to'g'ri ishlashi uchun rasmlar 'public' papkasida bo'lishi kerak. */}
            <div className=" ml-20 relative w-[75%] md:w-full h-100 md:h-full pb-[66.6%] lg:pb-0 lg:h-[450px]">
              <Image
                src="/una.png" // Rasm yo'li
                alt="Doctor checking patient's eyes"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl shadow-xl"
              />
            </div>

            {/* Ikkinchi rasm (Ustida) */}
            <div className="absolute w-[70%] md:w-[55%] h-[55%] bottom-0 left-0  md:-left-30 overflow-hidden ">
              <Image
                src="/xola.png" // Rasm yo'li
                alt="Eye chart test"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </div>

          {/* 2. O'ng tomon - Mijoz fikri (Testimonial Card) */}
          <div className="w-full lg:w-1/2 p-4 lg:p-0 mt-5 md:mt-20 lg:mt-0">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              — Отзывы
            </p>
            {/* SEO: Asosiy sarlavha */}
            <h2 id="testimonial-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              Что говорят о нашей клинике
            </h2>

            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 lg:ml-10">
              {/* Asosiy iqtibos matni */}
              <p className="text-lg text-gray-700 leading-relaxed italic mb-8">
                Дорогой профессор, врачи и весь мед персонал клиники Сихат Куз! Выражаю искреннюю благодарность за операцию – Лазерная коррекция глаз. Это для меня огромное счастье, неописуемая радость. Благодарим, благодарим от всей души! Низкий вам поклон Всем!!!
              </p>

              {/* Muallif profili */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src="/qizbola.png" // Rasm yo'li
                      alt="Холлиева Нафосат avatar"
                      width={48}
                      height={48}
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Холлиева Нафосат</p>
                  </div>
                </div>

                {/* Katta iqtibos ikonka (dizaynga yaqinlashtirish uchun) */}
                <FaQuoteLeft className="w-12 h-12 text-gray-100 transform rotate-180 -scale-y-100" />
              </div>

              {/* Dizayndagi katta iqtibos belgisi (Absolute positioning) */}
              <div className="absolute right-0 bottom-0 p-8 hidden sm:block">
                <FaQuoteLeft className="w-16 h-16 text-indigo-50/50" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-white" aria-labelledby="main-content-heading">
        <Head>
          {/* SEO Metataglar */}
          <title>Yangiliklar, Hamkorlar va Aloqa</title>
          <meta name="description" content="Klinikamizning so'nggi yangiliklari va bloglari. Bizning hamkorlarimiz: ZEISS, REICHERT. Kontakt ma'lumotlari." />
          <meta name="keywords" content="blog, yangiliklar, hamkorlar, ZEISS, Reichert, footer, aloqa, oftalmologiya" />
        </Head>

        {/* ========================================================== */}
        {/* 1. YANGILIKLAR BO'LIMI (BLOG) */}
        {/* ========================================================== */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              — Блог и новости
            </p>
            <h2 id="blog-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Последние новости
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Открывая мир четкого зрения: инновации, точность, забота. Наша клиника воплощает будущее офтальмологии с передовыми технологиями и индивидуальным подходом к каждому пациенту.
            </p>
          </div>

          {/* Yangiliklar kartochkalari (Responsive Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Karta 1: Наши результаты */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <Image src="/Link.png" alt="Our results" width={500} height={300} layout="responsive" objectFit="cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Наши результаты</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                  В СИХАТ КО’З клинике внедрены инновационные методы лечения зрения. Специалисты используют инновационное оборудование для диагностики и...
                </p>
                <a href="#" className="flex items-start w-max text-white p-4 bg-blue-900 rounded font-semibold text-md hover:text-indigo-800 transition duration-150">
                  Читать далее
                </a>
              </div>
            </div>

            {/* Karta 2: Наши технологии */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <Image src="/doctor.png" alt="Our technology" width={500} height={300} layout="responsive" objectFit="cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Наши технологии</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                  В СИХАТ КО’З клинике внедрены инновационные методы лечения зрения. Специалисты используют инновационное оборудование для диагностики и...
                </p>
                <a href="#" className="flex items-start w-max text-white p-4 bg-blue-900 rounded font-semibold text-md hover:text-indigo-800 transition duration-150">
                  Читать далее
                </a>
              </div>
            </div>

            {/* Karta 3: Чего ожидать */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <Image src="/duble.png" alt="What to expect" width={500} height={300} layout="responsive" objectFit="cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Чего ожидать</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                  В СИХАТ КО’З клинике внедрены инновационные методы лечения зрения. Специалисты используют инновационное оборудование для диагностики и...
                </p>
                <a href="#" className="flex items-start w-max text-white p-4 bg-blue-900 rounded font-semibold text-md hover:text-indigo-800 transition duration-150">
                  Читать далее
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* 2. HAMKORLAR BO'LIMI (PARTNERS) */}
        {/* ========================================================== */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            — Наши партнёры
          </p>
          <h2 id="partners-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
            Партнёры нашей клиники
          </h2>

          {/* Hamkorlar logotiplari (Responsive) */}
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            {/* Reichert */}
            <div className="w-24 md:w-40 opacity-70 hover:opacity-100 transition duration-300">
              <Image src="/company.png" alt="Reichert Partner" width={160} height={50} layout="responsive" />
            </div>
            {/* ZEISS */}
            <div className="w-24 md:w-40 opacity-70 hover:opacity-100 transition duration-300">
              <Image src="/compny2.png" alt="ZEISS Partner" width={160} height={50} layout="responsive" />
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* 3. FOOTER (Pastki qism) */}
        {/* ========================================================== */}
        <footer className="bg-blue-900 text-white pt-12 md:pt-16 pb-6 md:pb-8" aria-labelledby="footer-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 gap-x-6 border-b border-blue-700 pb-10 mb-8">

              {/* 1. Logo va qisqa matn */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <Image src="/logo2.png" alt="SIHAT KOZ Logo" width={150} height={50} className="mr-3" />
                </div>
                <p className="text-md text-blue-300 mt-2 max-w-xs">
                  Мы объединяем медицину, науку и технологии для повышения качества лечения.
                </p>
                {/* Ijtimoiy tarmoqlar */}
                <div className="flex space-x-4 mt-4">
                  <a href="#" aria-label="Facebook" className="text-blue-300 hover:text-white transition"><FaFacebook className="w-5 h-5" /></a>
                  <a href="#" aria-label="Instagram" className="text-blue-300 hover:text-white transition"><FaInstagram className="w-5 h-5" /></a>
                  <a href="#" aria-label="Twitter" className="text-blue-300 hover:text-white transition"><FaTwitter className="w-5 h-5" /></a>
                </div>
              </div>

              {/* 2. O nas (Kompaniya haqida) */}
              <div>
                <h4 className="text-lg font-semibold mb-4">О нас</h4>
                <ul className="space-y-2 text-blue-300 text-sm">
                  <li><a href="#" className="hover:text-white transition">Отделения</a></li>
                  <li><a href="#" className="hover:text-white transition">Наши врачи</a></li>
                  <li><a href="#" className="hover:text-white transition">Фотогалерея</a></li>
                  <li><a href="#" className="hover:text-white transition">Наши технологии</a></li>
                </ul>
              </div>

              {/* 3. Klientam (Mijozlarga) */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Клиентам</h4>
                <ul className="space-y-2 text-blue-300 text-sm">
                  <li><a href="#" className="hover:text-white transition">Блог</a></li>
                  <li><a href="#" className="hover:text-white transition">Сотрудничество</a></li>
                  <li><a href="#" className="hover:text-white transition">Политика конфиденциальности</a></li>
                  <li><a href="#" className="hover:text-white transition">Условия использования</a></li>
                </ul>
              </div>

              {/* 4. Kontakti (Aloqa) */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                <ul className="space-y-3 text-blue-300 text-sm">
                  <li className="flex items-start">
                    <FaPhone className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <a href="tel:+998712241313" className="hover:text-white transition">+998 (71) 224-13-13</a>
                      <br />
                      <a href="tel:+998712248500" className="hover:text-white transition">+998 (71) 224-85-00</a>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaMailBulk className="w-4 h-4 mr-2 flex-shrink-0" />
                    <a href="mailto:info@sihatkoz.uz" className="hover:text-white transition">info@sihatkoz.uz</a>
                  </li>
                  <li className="flex items-start">
                    <FaMapPin className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Узбекистан, г. Ташкент, Юнус Абад кв-л <br /> 4, ул. Х. Алимова, 4.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer pastki qismi (Copyright) */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-400">
              <p>© 2009-2024 СП ООО SIHAT KO'Z</p>
              <p className="mt-2 md:mt-0 text-right">
                {/* Dizayndagi kabi pastki qismdagi yozuv */}
              </p>
            </div>
          </div>
        </footer>

      </section>
    </div>
  );
};

export default Home;