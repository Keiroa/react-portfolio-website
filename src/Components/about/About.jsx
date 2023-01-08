import React from 'react';
import './about.css';

import AboutCard from './AboutCard';
import Profile from '../../Assets/profile-about.jpg';

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Profile} alt="" />
          </div>
        </div>

        <div className='about__content'>
            <div className='about__cards'>
                <AboutCard
                icon={<FaAward/>}
                head={'Experience'}
                desc= {'2 Years Working'}/>

                <AboutCard
                icon={<FiUsers/>}
                head={'Clients'}
                desc= {'50+ IT Clients Satisfaction'}/>

                <AboutCard
                icon={<VscFolderLibrary/>}
                head={'Projects'}
                desc= {'3 Completed'}/>
                
            </div>
            <p>
              Lorem Ipsum dolor sit amet consectectur random text. Eaque eos veluptatem.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;