import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import quiz from "../images/quiz.png"
import tic from "../images/tic.png"
import netflix from "../images/net.png"
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

 
const Projects = () => {
  
  return (
    
    <section id="projects" className="pt-48 pb-48">
      
      {/* HEADINGS */}
      <motion.div
        className=" md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        < div className="mb-15">
          <p className="font-playfair font-semibold text-4xl -mt-20">
            <span className="text-black">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        These projects in my portfolio demonstrate my skills and experience.
        </p>
      </motion.div>

         {/* PROJECTS */}
         <div className="flex justify-center">
        <div className="flex flex-col items-center p-10 max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold">
          <img src="images/" alt="" />
         
       
        </div>
        <div className="flex flex-col items-center p-10 max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold">
          <img src={tic} alt="" />
          {/* Buttons */}
          <div className="mt-3 space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <a href="https://kaliamdie.github.io/TIC-TAC-TOE-GAME/"> Live Demo</a> 
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded">
            <a href="https://github.com/kaliamdie/TIC-TAC-TOE-GAME">Git Hub</a>
            </button>
          </div>
        
        </div>
        <div className="flex flex-col items-center p-10 max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold">
          <img src={quiz} alt="" />
          {/* Buttons */}
          <div className="mt-3 space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
             <a href="https://quizapp-mod-2.netlify.app/">Live Demo</a> 
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded">
             <a href="https://github.com/kaliamdie/kaliamdie.github.io">Git Hub</a> 
            </button>
          </div>
       
        </div>
        <div className="flex flex-col items-center p-10 max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold">
          <img src={netflix} alt="" />
          {/* Buttons */}
          <div className="mt-3 space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
             <a href="https://netflix-project.onrender.com/"> Live Demo</a>
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded">
             <a href="https://github.com/kaliamdie/Netflix-CloneProject"> Git Hub</a>
            </button>
          </div>
          </div>
        </div>
    </section>
  
  );
};

export default Projects;