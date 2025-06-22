import React from 'react'


const Signup = ({ handleSubscribe }) => {


  return (
    <div className="bg-orange-100 w-[350px] h-[400px] rounded-r-md flex-wrap font-Poppins  absolute left-85 top-30  ">
      <div className="container absolute right-9">
        <h1 className="text-orange-500 text-[20px] absolute top-10 pl-35 text-center font-bold">Login Account</h1>
        <p className="text-[7px] w-[350px] h-10 absolute top-25 pl-23 leading-relaxed tracking-wide">"Welcome back! We’re glad to see you again. Log in to access your account and pick up where you left off. Let’s get you back to exploring, creating, and achieving your goals. We’re here to make your experience seamless!"</p>
        <div className="text-[20px] w-[450px] h-60 absolute top-40 pl-20 ">
          <div className="flex-col"><input placeholder=" Email ID" required className="placeholder:p-3 outline-none m-2 border-l-5 border-l-orange-500 bg-gray-100 shadow-2xl w-[260px]  placeholder:font-Poppins font-sans text-gray-600 font-normal rounded-bl-3xl"></input>
            <input placeholder=" Password" required className="placeholder:p-3 outline-none pr-4 m-2 border-l-5 border-l-orange-500 bg-gray-100  shadow-2xs w-[260px] placeholder:font-Poppins font-sans text-gray-600 font-normal rounded-bl-3xl"></input></div>
          <div className="flex w-[350px] text-[10px] pl-2"><input type="checkbox" className="" id="keep-signed-in" /><label for="keep-signed-in" class="text-gray-700 pr-2 mt-3 m-1">
            Keep me signed in
          </label><h3 className="p-3 text-orange-800 cursor-pointer ml-10" onClick={handleSubscribe}>Already a member?</h3></div>
          <div className="text-center w-[275px] p-2">
            <button onClick={handleSubscribe} className="rounded-full border-1 w-[250px] p-2 border-orange-500 bg-orange-500 text-amber-50 font-stretch-50% text-[16px] cursor-pointer ">LOGIN</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Signup