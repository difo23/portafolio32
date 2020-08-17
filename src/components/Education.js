import React from "react"
import Title from "./Title"
import education from "../constants/education"
const Education = () => {
    return <section className='section bg-grey' >
        <Title title='Education' />
        <div className="section-center services-center">
            {education.map(edu => {
                const { id, icon, title, text } = edu;
                return (
                    <article className="service" key={id} >
                        {icon}
                        <h4>
                            {title}
                        </h4>
                        <div className='underline' />
                        <p>{text}</p>
                    </article>
                );

            })}
        </div>
    </section>
}




export default Education
