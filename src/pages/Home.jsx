import React from 'react'
import logo from '../assets/logo.png'
import imgprofilo from '../assets/IMG_camper.jpg'
import homeislanda from '../assets/homeislanda.jpg'

function Home() {
  return (
    <div className="home min-h-screen">
      <div 
        className="font-cormorant-sc min-h-screen flex flex-col items-center justify-center pt-16 relative"
        style={{
          backgroundImage: `url(${homeislanda})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl font-bold text-gray-800 p-4 text-center">Hey, I'm</h2>
          <div className="mb-6 flex justify-center">
            <img
              src={imgprofilo}
              alt="profile"
              className="rounded-full w-40 h-40 object-cover shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105"
            />
          </div>

          <div className="typewriter-container text-center">
            <h1 className="md:text-4xl lg:text-4xl sm:text-2xl font-bold text-gray-800">
              Francesca Montini
            </h1>
          </div>

          <p className="text-lg text-gray-600 mt-4 hover:scale-110 text-center">
            Web Developer & Digital Nomad
          </p>
          <div className="mb-6 flex justify-center">
            <img src={logo} alt="logo" className="w-50 h-40 m-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 