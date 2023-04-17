import React from 'react'
import Title from './Title'
import { serviceLink } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='Our' subtitle='Services'/>
      <div className="section-center services-center">
        {serviceLink.map((link) => {
            const {id, subtitle, icon, text} = link
            return(
        <article className="service" key={id}>
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{subtitle}</h4>
            <p className="service-text">
             {text}
            </p>
          </div>
        </article>
            )
        })}
      </div>
    </section>
  )
}

export default Services