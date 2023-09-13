//contact page
import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import logo from "../images/logo.png"
export default function Contact() {
    const {
        register,
        trigger,
        formState:{errors}
    }=useForm()
    const handleSubmit=async (e)=>{
      const isValid=await trigger()
      if(!isValid){
        e.preventDefault();

      }

    }  
    return (
      <div>
        <div className='h-1 w-full bg-gray-900'></div>
        <section id="contact" className="contact py-48">
          {/* HEADINGS */}
          <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }}
  className="flex justify-center w-full" >
  <div>
    <p className=" mb-9 font-playfair font-semibold text-4xl border-b text-center"> {/* Add text-center to center the text */}
      <span className="text-black ">CONTACT ME</span> TO GET STARTED
    </p>
  </div>
</motion.div>

    
          {/* FORM & IMAGE */}
          <div className="md:flex md:justify-between gap-16 mt-5 ">
           
       
    
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="basis-1/2 mt-10 md:mt-0"
            >
              <form
                target="_blank"
                handleSubmit={handleSubmit}
                action="https://formsubmit.co/53b5bb8c50b12671cbc6837a041e4a4b"
                method="POST"
              >
                <input
                  className="w-full bg-black text-white font-semibold placeholder-white p-3"
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-red mt-1">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                  </p>
                )}
    
                <input
                  className="w-full bg-white font-semibold placeholder-black p-3 mt-5"
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red mt-1">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}
    
                <textarea
                  className="w-full bg-black font-semibold placeholder-white p-3 mt-5"
                  name="message"
                  placeholder="MESSAGE"
                  rows="4"
                  cols="50"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="text-red mt-1">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
    
                <button
                  className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
                  type="submit"
                >
                  SEND ME A MESSAGE
                </button>
              </form>
            </motion.div>
          </div>
        </section>
        </div>
      );
    };
