import React from 'react';
import './services.css';

import { BiCheck } from 'react-icons/bi';


const serviceListIt = [
  { Service: 'Random item text to be filled, template 1'},
  { Service: 'Random item text to be filled, template 2'},
  { Service: 'Random item text to be filled, template 3'},
];
const serviceListWeb = [
  { Service: 'Random item text to be filled, template 1'},
  { Service: 'Random item text to be filled, template 2'},
  { Service: 'Random item text to be filled, template 3'},
];
const serviceListNetwork = [
  { Service: 'Random item text to be filled, template 1'},
  { Service: 'Random item text to be filled, template 2'},
  { Service: 'Random item text to be filled, template 3'},
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
            <div className='service__head'>
                <h3>Technical Support</h3>
            </div>
            <ul className='service__list'>
              {serviceListIt.map(service =>(
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>{service.Service}</p>
                </li>
              ))}
            </ul>
        </article>
        <article className='service'>
            <div className='service__head'>
                <h3>Backend Support</h3>
            </div>
            <ul className='service__list'>
              {serviceListWeb.map(service =>(
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>{service.Service}</p>
                </li>
              ))}
            </ul>
        </article>

        <article className='service'>
            <div className='service__head'>
                <h3>Networking Troubleshooting</h3>
            </div>
            <ul className='service__list'>
              {serviceListNetwork.map(service =>(
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>{service.Service}</p>
                </li>
              ))}
            </ul>
        </article>

      </div>

    </section>
  )
}

export default Services;