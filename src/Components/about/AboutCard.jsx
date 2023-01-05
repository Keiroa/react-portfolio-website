import React from 'react';

const AboutCard = ({icon, head, desc}) => {
  return (
    <article className='about__card'>
        {icon}
        <h5>{head}</h5>
        <small>{desc}</small>
    </article>
  )
}

export default AboutCard;