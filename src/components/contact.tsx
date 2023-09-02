'use client'

import Image from "next/image";
import Reveal from "./reveal";
import send from "@/img/send_2.svg"

export default function Contact() {
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
    className="flex flex-col items-center max-w-4xl w-fit h-fit space-y-10 py-44">
      <Reveal>
        <h2 className="text-6xl">CONTACT</h2>
      </Reveal>
      <Reveal>
      <div className="size border border-gray-600/40 dark:border-indigo-400/80 roundlevel bg-white/20 dark:bg-black/30">
        <form 
        className="flex flex-col items-center space-y-4 px-24 py-14"
        method="post"
        onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
            className="rounded-full bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 placeholder:text-center inputsize"
            type="text" name="name" id="name" placeholder="Your Name" required/>
          </label>
          <label htmlFor="email">
            <input
            className="rounded-full bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 placeholder:text-center inputsize" 
            type="email" name="email" id="email" placeholder="someone@example.com" required/>
          </label>
          <label htmlFor="message">           
            <textarea
            className="roundedlevel resize-none bg-transparent border border-gray-600/40 dark:border-indigo-400/80 py-2 px-6 dark:bg-black/10 placeholder:text-center inputsize"
            rows={8} cols={80} 
            id="message" 
            name="message" 
            placeholder="Type Message Here" 
            required></textarea>
          </label>
          <button type="submit" className="flex items-center rounded-full border border-gray-600/40 dark:border-indigo-400/80 dark:bg-black/10 px-6 py tracking-widest">
            <h2 className="font-semibold text-xl">
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