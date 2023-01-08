import React from 'react';
import './experience.css';
import ExperienceDetail from './ExperienceDetail';

import { BsPatchCheckFill } from 'react-icons/bs';

const informationSkills = [
  { Experience: 'Technical Troubleshooting', Detail: 'Expert'},
  { Experience: 'Desktop Support', Detail: 'Intermediate'},
  { Experience: 'Networking', Detail: 'Intermediate'},
  { Experience: 'Project Management', Detail: 'Intermediate'},
];

const developmentSkills = [
  { Experience: 'HTML', Detail: 'Expert'},
  { Experience: 'CSS', Detail: 'Intermediate'},
  { Experience: 'JavaScript', Detail: 'Intermediate'},
  { Experience: 'React', Detail: 'Intermediate'},
  { Experience: 'SQL', Detail: 'Intermediate'},
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>

      <div className='experience__information'>
          <h3>Information Technology</h3>
          <div className='experience__content'>
            {informationSkills.map(informationSkill => (
              <ExperienceDetail
              icon={<BsPatchCheckFill className='experience__details-icon'/>}
              experience={informationSkill.Experience}
              detail={informationSkill.Detail}
              />
            ))}
          </div>
        </div>

        <div className='experience__development'>
          <h3>Development</h3>
          <div className='experience__content'>
            {developmentSkills.map(developmentSkill => (
              <ExperienceDetail
              icon={<BsPatchCheckFill className='experience__details-icon'/>}
              experience={developmentSkill.Experience}
              detail={developmentSkill.Detail}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience;