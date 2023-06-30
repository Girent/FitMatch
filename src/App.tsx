import React from 'react'
import { Header } from './components/header/Header'

function App() {
  return (
    <>
      <div className="w-full h-screen font-roboto bg-[#030241]">
        <Header />
        <div className="grid grid-cols-4 grid-rows-3 grid-flow-col gap-4">
          <div className="col-span-2 2xl:text-9xl text-8xl 2xl:ml-28 ml-16">
            <p className="text-[#ffffff] font-medium 2xl:mt-28 mt-20">
              Your Tinder
            </p>
            <p className="text-[#6D40FF] font-medium">for gym</p>
          </div>

          <p className="text-[#ffffff] 2xl:w-[29rem] w-[22rem] 2xl:mt-14 mt-10 font-medium 2xl:text-5xl text-4xl col-span-2 2xl:ml-28 ml-16">
            Dating and friendly challenges at the gym
          </p>

          <div className="col-span-2">
            <button className="bg-[#5E4FFF] text-[#FFFFFF] 2xl:ml-28 ml-16 transform 2xl:translate-y-[-11rem] translate-y-[-9rem] 2xl:w-[22.688rem] w-[17.5rem] 2xl:h-[6rem] h-[4.5rem] 2xl:text-[2.5rem] text-[1.9rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              Add to wait list
            </button>
            <p className="text-[#FFFFFF] 2xl:ml-28 ml-16 2xl:text-[1.5rem] text-[1rem] 2xl:w-[22.688rem] w-[17.5rem] text-center transform 2xl:translate-y-[-10rem] translate-y-[-8.5rem]">
              or via
            </p>
            <div className="2xl:w-[22.688rem] w-[17.5rem] 2xl:ml-24 ml-14 flex justify-center transform 2xl:translate-y-[-9.5rem] translate-y-[-8rem]">
              <img
                src="google.png"
                alt="google"
                className="2xl:w-[81px] 2xl:h-[81px] w-[50px] h-[50px] 2xl:ml-6 ml-3"
              ></img>
              <img
                src="facebook.png"
                alt="facebook"
                className="2xl:w-[81px] 2xl:h-[81px] w-[50px] h-[50px] 2xl:ml-6 ml-3"
              ></img>
            </div>
            <p className="text-[#FFF] 2xl:ml-20 ml-12 2xl:text-[1.5rem] text-[1rem] font-bold transform 2xl:translate-y-[-7rem] translate-y-[-6.2rem]">
              ✅ Free, no credit card info or mail spam
            </p>
          </div>

          <div className="col-span-2 flex justify-center items-center ml-28">
            <img
              src="/1.png"
              alt="img"
              className="rounded-full  mr-2 h-[100%] w-[100%] max-h-[17vh] max-w-[17vh] object-contain"
            />
            <div className="bg-[#4E2BC0] w-[45vh] h-[23vh] rotate-[9deg] 2xl:mt-[120px] mt-20 2xl:rounded-[33px] rounded-[20px]">
              <div className="bg-[#d9d9d9a7] h-[14vh] 2xl:rounded-tl-[33px] 2xl:rounded-tr-[33px] rounded-tl-[20px] rounded-tr-[20px] grid grid-cols-11 gap-1">
                <text className="2xl:text-7xl h-full text-5xl col-span-3 flex justify-center items-center">
                  💪
                </text>
                <text className="w-[95%] 2xl:text-[2.5rem] text-[1.8rem] text-[#ffffff] 2lx:font-bold font-medium flex justify-center items-center h-full col-span-8">
                  Mark threw you a challenge!
                </text>
              </div>
              <text className="text-[#ffffff] 2xl:text-3xl mt-[5%] text-xl font-bold flex justify-center items-center">
                100 pushups, can do that?
              </text>
            </div>
          </div>

          <div className="col-span-2 flex justify-center items-center transform translate-x-[-42vh] translate-y-[-5vh]">
            <img
              src="/2.png"
              alt="img"
              className="rounded-full  mr-2 h-[100%] w-[100%] max-h-[17vh] max-w-[17vh] mt-5 object-contain"
            />
            <div className="bg-[#4E2BC0] w-[45vh] h-[23vh] rotate-[-9.13deg] mb-20  2xl:rounded-[33px] rounded-[20px]">
              <div className="bg-[#d9d9d9a7] h-[14vh] 2xl:rounded-tl-[33px] 2xl:rounded-tr-[33px] rounded-tl-[20px] rounded-tr-[20px] grid grid-cols-11 gap-1">
                <text className="2xl:text-7xl h-full text-5xl col-span-3 flex justify-center items-center">
                  🤩
                </text>
                <text className="w-[95%] 2xl:text-[2.5rem] text-[1.8rem] text-[#ffffff] 2lx:font-bold font-medium flex justify-center items-center h-full col-span-8">
                  Jina want to train with you!
                </text>
              </div>
              <text className="text-[#ffffff] 2xl:text-3xl ml-6 mt-[2%] text-xl font-bold flex justify-center items-center">
                We’re both going to “GymLife”! Lets train together?
              </text>
            </div>
          </div>

          <div className="col-span-2 flex justify-center items-center transform translate-y-[-31vh] ml-80">
            <div className="bg-[#D9D9D980] w-[39vh] h-[23vh] rotate-[12deg] 2xl:mt-[120px] mr-14 2xl:rounded-[33px] rounded-[20px] grid grid-cols-11 gap-1">
              <text className="2xl:text-7xl 2xl:h-[90%] h-[80%] text-5xl col-span-3 flex justify-center items-center">
                👋🏼
              </text>
              <text className="w-[95%] 2xl:h-[90%] h-[80%] py-11 2xl:text-[2.5rem] text-[1.8rem] text-[#ffffff] font-medium flex justify-center items-center col-span-8">
                Join Tom for your training at 2 PM
              </text>
              <div className="bg-[#4E2BC0] 2xl:w-40 w-28 2xl:h-16 h-11 2xl:ml-5 ml-3 text-[#FFF] font-bold 2xl:text-4xl text-2xl flex rounded-[33px] justify-center items-center transform 2xl:translate-y-[-5vh] translate-y-[-9vh]">
                😍1,5k
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-[#030241]">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="w-full h-screen bg-[#030241]">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="w-full h-screen bg-[#030241]">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="w-full h-screen bg-[#030241]">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  )
}

export default App
