import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
//import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { socialLinks } from "../constants";
const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
   <div>
  
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Dipanshu</span>
        👋
        <br />
        Web And App Developer 
       
      </h1>
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-1 px-4 text-white mx-5 my-5'>
        
        Drag pointer left to explore
      </h1>

      </div>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked as Intern  <br /> and picked up many skills along the way
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
          Build multiple projects over the years. <br /> Curious about the impact?
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
      <div className='mx-5 h-25 relative flex text-white flex-col gap-2 max-w-2xl neo-brutalism-blue pb-3 px-4'>
      <p className='font-medium sm:text-xl text-center'>
         <br /> Check me out  here
      </p>
    
      <div className='mt-2 flex flex-wrap gap-12'>
      {socialLinks.map((social) => (
  <div className='block-container w-12 h-12 bg-white rounded-xl' key={social.name}>
    <div className='btn-back rounded-xl' />
    <Link to={social.link} className='btn-front rounded-xl flex justify-center items-center'>
      <img
        src={social.iconUrl}
        alt={social.name}
        className='w-3/4 h-3/4 object-contain'
      />
    </Link>
  </div>
))}

</div>
    
      
    </div>
    );
  }
  if (currentStage === 6) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Embark on a journey through my professional story<br/>
        explore my resume!
        </p>

        <Link to='https://drive.google.com/drive/folders/1_owT8RbTIbTYELGxp38WRfMwBO75YP4j?usp=share_link' className='neo-brutalism-white neo-btn'>
        Visit my resume
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
