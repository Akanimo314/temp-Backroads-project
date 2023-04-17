import React from 'react'
import Title from './Title'
import { tourLink } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='Feature' subtitle='Tours'/>
      <div className="section-center featured-center">
        {tourLink.map((link) => {
            const {id, img, date, title, info, location, duration, cost} = link
            return(
        <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>
            )
        })}
      </div>
    </section>
  )
}

export default Tours