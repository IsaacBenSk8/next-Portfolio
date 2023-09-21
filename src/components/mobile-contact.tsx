'use client'

import { useState } from "react";
import Reveal from "./reveal";
import toast from "react-hot-toast";

export default function MobileContact() {

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch ("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })

    if (response.ok) {
      setLoading(false);
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
      toast.success("Message sent successfully")
    }
    if (!response.ok) {
      toast.error("Error sending message")
      setLoading(false);
    }
  }

  return (
    <section
    id="contactSection" 
    className="flex flex-col items-center xsm:my-6 xsm:space-y-8 2xl:w-[56rem] 2xl:py-[10rem]">
      <Reveal className="">
        <h2 className="xsm:text-4xl text-fuchsia-400 font-medium 2xl:text-6xl">CONTACT</h2>
      </Reveal>
      <Reveal className="">
        <div className="xsm:w-[18rem] xsm:h-[24rem] roundlevel border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10 2xl:w-[56rem] 2xl:h-[40rem]">
        <form 
        className="flex flex-col items-center xsm:w-full xsm:h-full justify-center xsm:space-y-2"
        method="post"
        onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
            className="rounded-full autocomplete bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 text-center placeholder:text-center placeholder:text-black/50 dark:placeholder:text-white/50 inputsize xsm:text-xs xsm:w-[16rem] xsm:h-[2rem] 2xl:w-[44rem] 2xl:h-[3rem] 2xl:text-xl"
            type="text" name="name" id="name" placeholder="Your Name" autoComplete="name" required />
          </label>
          <label htmlFor="email">
            <input
            className="rounded-full autocomplete bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 text-center placeholder:text-center placeholder:text-black/50 dark:placeholder:text-white/50 inputsize xsm:text-xs xsm:w-[16rem] xsm:h-[2rem] 2xl:w-[44rem] 2xl:h-[3rem] 2xl:text-xl" 
            type="email" name="email" id="email" placeholder="someone@example.com" autoComplete="email" required/>
          </label>
          <label htmlFor="message">           
            <textarea
            className="roundedlevel resize-none bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 text-center placeholder:text-center placeholder:text-black/50 dark:placeholder:text-white/50 inputsize xsm:text-xs xsm:w-[16rem] xsm:h-[8rem] 2xl:w-[44rem] 2xl:h-[16rem] 2xl:text-xl overflow-hidden"
            rows={8} cols={80} 
            id="message" 
            name="message" 
            placeholder="Type Message Here" 
            required></textarea>
          </label>
          <button type="submit" disabled={loading} className="flex items-center 2xl:rounded-full 2xl:border 2xl:border-gray-600/40 2xl:dark:border-indigo-400/80 2xl:dark:bg-black/10 2xl:px-6 2xl:tracking-widest disabled:opacity-20">
            <h2 className="xsm:hidden 2xl:inline font-semibold text-xl">
            SEND
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send xsm:h-[2rem] p-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
          </button>
        </form>
        </div>
      </Reveal>
    </section>
  )
}