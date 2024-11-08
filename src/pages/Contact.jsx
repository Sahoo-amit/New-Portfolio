import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, useInView } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const ref = useRef();
  const formRef = useRef()
  const { darkMode } = useContext(ThemeContext);
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Email send successfully")
      formRef.current.reset();
    }
  };

  return (
    <div
      className={`px-3 md:px-6 ${darkMode ? "bg-black text-white" : ""} overflow-y-hidden`}
      ref={ref}
    >
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="flex justify-around items-center flex-col md:flex-row pt-[5rem] w-full h-screen"
      >
        <motion.div
          variants={childVariants}
          className="flex flex-col"
        >
          <motion.h1
            variants={childVariants}
            className="md:text-7xl text-4xl font-bold mb-4"
          >
            Let's Work <br /> Together
          </motion.h1>
          <motion.h2
            variants={childVariants}
            className="font-bold text-xl flex items-center space-x-4"
          >
            <CiMail />
            <a href="mailto:amitsahooamit123@gmail.com">amitsahooamit123@gmail.com</a>
          </motion.h2>
          <motion.h2
            variants={childVariants}
            className="font-bold text-xl flex items-center space-x-4"
          >
            <FiPhone />
            <a href="tel: 6371392025">6371392025</a>
          </motion.h2>
          <motion.h2
            variants={childVariants}
            className="font-bold text-xl flex items-center space-x-4"
          >
            <IoLocationOutline />
            <span>Cuttack, Odisha</span>
          </motion.h2>
        </motion.div>
        <div className="relative flex flex-col items-center justify-center">
          <motion.svg
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3 }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute m-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                stroke="#dc6938"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </motion.svg>
          <motion.form
          ref={formRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
            onSubmit={onSubmit}
            className="flex flex-col space-y-1 w-96 z-10"
          >
            <input type="text" name="user name" required placeholder="Your Name" className={`px-4 py-2 ${darkMode?"bg-white text-black border-none outline-none":"border-black border-2"} text-zinc-950 font-semibold w-full`}/>
            <input type="email" name="user email" required placeholder="Your Email" className={`px-4 py-2 ${darkMode?"bg-white text-black border-none outline-none":"border-black border-2"} text-zinc-950 font-semibold w-full`}/>
            <textarea rows="7" name="message" required placeholder="Your Message" className={`px-4 py-2 ${darkMode?"bg-white text-black border-none outline-none":"border-black border-2"} text-zinc-950 font-semibold w-full`}/>
            <button type="submit" className="bg-orange-500 py-2 px-5 text-lg font-semibold rounded-xl mx-auto inline-block">Submit</button>
          </motion.form>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
