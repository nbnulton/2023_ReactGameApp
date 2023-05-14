// import React from 'react'
// import React from 'react'
import Background from '../assets/images/gamesroom.jpg'
import signin_image from '../assets/images/signin.jpg'
import data_image from '../assets/images/data.jpg'
import list_image from '../assets/images/list.jpg'


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='p-52'>
          <h3 className='p-5 bg-white text-center bg-opacity-90 text-black rounded text-7xl'>Welcome to the Games List App</h3>
          <p className='p-5 bg-white text-center bg-opacity-90 text-black text-6xl'>Provided here are a list of free to play games</p>
        <div className='flex flex-row justify-center place-items-center h-screen'>
          <p className='p-5 pb-10 bg-white justify-center text-center bg-opacity-90 text-black rounded text-2xl'>Sign Up / Sign In<img className='pt-10' src={signin_image} width='400px' alt="sign in" /></p>
          <p className='p-5 pb-10 bg-white justify-center text-center bg-opacity-90 text-black rounded text-2xl'>Check Out The List<img className='pt-10' src={data_image} width='375px' alt="sign in" /></p>
          <p className='p-5 pb-10 bg-white justify-center text-center bg-opacity-90 text-black rounded text-2xl'>Create Your Own List<img className='pt-10' src={list_image} width='400px' alt="sign in" /></p>
        </div>
        </div>
    </div>
  )
}

export default Home