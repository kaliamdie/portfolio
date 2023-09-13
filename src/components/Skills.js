import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import icon from "../images/favicon.ico";

const MySkills = () => {
  const isAbove = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:flex-col md:items-center md:justify-center md:gap-16 mt-12">
        <motion.div
          className="md:w-1/3 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-black">SKILLS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
          <p className="mt-4 mb-7">
            I have experience building web applications. Below is a quick overview of my technical skill sets and tools I use.
          </p>
        </motion.div>

        {/* Container for "Front-End" and "Back-End" */}
        <div className="md:w-1/3 mt-5 flex justify-evenly items-center">
          <div className="bg-white text-black w-36 h-52 p-4 flex flex-col justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>{" "}
            <div className="text-2xl font-semibold mb-5">Front-End</div>
            <div className="mt-2">
              <span className="text-green-500">&#10003;</span> HTML/CSS
            </div>
            <div>
              <span className="text-green-500">&#10003;</span> JavaScript
            </div>
            <div>
              <span className="text-green-500">&#10003;</span> React
            </div>
          </div>
          <div className="bg-white text-black w-36 h-52 p-4 flex flex-col justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>{" "}
            <div className="text-2xl font-semibold mb-5">Back-End</div>
            <div className="mt-2">
              <span className="text-green-500">&#10003;</span> Node.js
            </div>
            <div>
              <span className="text-green-500">&#10003;</span> Express.js
            </div>
            <div>
              <span className="text-green-500">&#10003;</span> MongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;