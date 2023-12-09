import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
//import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { socialLinks } from "../constants";
const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Dipanshu</span>
        👋
        <br />
        Computer Science Student 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with some Start <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className='mx-5 h-25 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-1 pb-4 px-8'>
      <p className='font-medium sm:text-xl text-center'>
         <br /> Visit My Competative Coding Platforms
      </p>
    
      <div className='mt-2 flex flex-wrap gap-12'>

      {socialLinks.map((social) => (
  <div className='block-container w-20 h-20 bg-slate-300 rounded-xl' key={social.name}>
    <div className='btn-back rounded-xl' />
    <Link to={social.link} className='btn-front rounded-xl flex justify-center items-center'>
      <img
        src={social.iconUrl}
        alt={social.name}
        className='w-1/2 h-1/2 object-contain'
      />
    </Link>
  </div>
))}
</div>
    
      
    </div>
    );
  }

  return null;
};

export default HomeInfo;
