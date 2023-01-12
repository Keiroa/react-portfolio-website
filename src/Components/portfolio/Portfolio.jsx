import React from 'react';
import './portfolio.css';

import IMG1 from '../../Assets/portfolio1.jpg';

const trialData = [
  {
    id: 1,
    Title: 'About Me React Web App',
    Description: 'Random Description Text',
    Image: IMG1,
    CodeLink: 'https://github.com/Keiroa/react-portfolio-website',
    LiveLink: '#',
    AltText: 'Resume React.js Web Application',
  }
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {trialData.map(data => (
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={data.Image} alt={data.AltText} />
          </div>
          <h3>{data.Title}</h3>
          <div className='portfolio__item-cta'>
            <a href={data.CodeLink} className='btn' target='_blank'>Github</a>
            <a href={data.LiveLink} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;