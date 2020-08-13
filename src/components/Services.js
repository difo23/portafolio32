import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section className= 'section bg-grey' >
    <Title  title='services'/>
    <div className="section-center services-center">
      {services.map(service => {
        const {id, icon, title, text} = service;
        return (
          <article className="service" key={id} >
            {icon}
            <h4>
              {title}
            </h4>
              <div className='underline'/>
            <p>{text}</p>
          </article>
          );
      
      })}
    </div>
  </section>
}

export default Services
