import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] mt-4 gap-4">
        <div className="md:text-4xl text-2xl font-bold flex justify-center items-center md:mx-0 mx-2">
          Buy Me a Chai
          <div>
            <img className="invert" src="/tea.gif" width={80} alt="" />
          </div>
        </div>
        <p className="text-center md:text-lg text-sm mx-2">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="text-center md:text-lg text-sm mx-4">
          A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
        </p>
        <div>
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none'
              font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Now
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none'
              font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1"></div>

      <div className="text-white container mx-auto sm:pb-28 pb-6 pt-14 ">
        <h1 className="text-2xl text-center mb-14 font-semibold md:mx-0 mx-2">
          Your Fans can buy you a Chai
        </h1>
        <div className="flex sm:flex-row flex-col gap-5 justify-around my-4 mx-2 md:mx-0">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              width={88}  
              src="./man.svg"
              alt=""
              className="bg-slate-400 rounded-full p-2"
            />
            <p className="font-medium text-lg text-center">Fans want to help</p>
            <p className="font-medium text-center">Your fans are available for you to help </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              width={88}
              src="./coin.gif"
              alt=""
              className="bg-slate-400 rounded-full p-2"
            />
            <p className="font-medium text-lg text-center">Fans want to help</p>
            <p className="font-medium text-center">Your fans ara available for you to help </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              width={88}
              src="./public.gif"
              alt=""
              className="bg-slate-400 rounded-full p-2"
            />
            <p className="font-medium text-lg text-center">Fans want to help</p>
            <p className="font-medium text-center">Your fans are available for you to help </p>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center w-full">
        <h1 className="text-2xl underline text-center md:mb-14 mb-4 font-bold">
          Learn more about us!
        </h1>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/QtaorVNAwbI?si=Hf_z_q0ayApKbans"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[80%]"
        ></iframe>
      </div>
    </>
  );
}
