'use client'

import Image from "next/image";
import Reveal from "./reveal";
import send from "@/img/send_2.svg"

export default function MobileContact() {
  async function handleSubmit(event: any) {
    event.preventDefault();

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
      console.log("Message sent successfully")
    }
    if (!response.ok) {
      console.log("Error sending message")
    }
  }

  return (
    <section
    id="contactSection" 
    className="flex flex-col items-center xsm:my-6 xsm:space-y-8">
      <Reveal>
        <h2 className="xsm:text-4xl text-fuchsia-400 font-medium">CONTACT</h2>
      </Reveal>
      <Reveal>
        <div className="xsm:w-[18rem] xsm:h-[24rem] roundlevel border border-gray-600/40 dark:border-indigo-400/80 bg-white/20 dark:bg-slate-500/10">
        <form 
        className="flex flex-col items-center xsm:w-full xsm:h-full justify-center xsm:space-y-2"
        method="post"
        onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
            className="rounded-full bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 text-center placeholder:text-center inputsize xsm:text-xs xsm:w-[16rem] xsm:h-[2rem]"
            type="text" name="name" id="name" placeholder="Your Name" required/>
          </label>
          <label htmlFor="email">
            <input
            className="rounded-full bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 text-center placeholder:text-center inputsize xsm:text-xs xsm:w-[16rem] xsm:h-[2rem]" 
            type="email" name="email" id="email" placeholder="someone@example.com" required/>
          </label>
          <label htmlFor="message">           
            <textarea
            className="roundedlevel resize-none bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 text-center placeholder:text-center inputsize xsm:text-xs xsm:w-[16rem] xsm:h-[8rem]"
            rows={8} cols={80} 
            id="message" 
            name="message" 
            placeholder="Type Message Here" 
            required></textarea>
          </label>
          <button type="submit" className="flex items-center 2xl:rounded-full 2xl:border 2xl:border-gray-600/40 2xl:dark:border-indigo-400/80 2xl:dark:bg-black/10 2xl:px-6 2xl:tracking-widest">
            <h2 className="xsm:hidden 2xl:inline font-semibold text-xl">
            SEND
            </h2>
            <Image
              src={send}
              alt="Send"
              width={40}
              height={40}
            />
          </button>
        </form>
        </div>
      </Reveal>
    </section>
  )
}