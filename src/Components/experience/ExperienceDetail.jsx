import React from 'react';

const ExperienceContent = ({icon, experience, detail}) => {
  return (
    <article className='experience__details'>
        {icon}
        <div>
          <h4>{experience}</h4>
          <small className='text-light'>{detail}</small>
        </div>
    </article>
  )
}

export default ExperienceContent;