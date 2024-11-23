import React from 'react'

function TestimonialCard(props) {
    const {list} = props;
  return (
    list.map((item) => (
        <div className="testimonial-item dark-shadow padd-15" key={item.id}>
            <div className={"testimonial-info-item"}>
                <div className="row">
                    <div className='image padd-15'>
                        <img src={item.img} /> 
                    </div>
                    <div>
                        <h3 className='name '>{item.name}</h3>
                        <p className='title '>{item.subname}</p>
                    </div>
                </div>
                <div className='row'>
                    <p className='Discription padd-15'>
                    {item.Discription}
                    </p>
                    <span className='Date padd-15'>{item.Date}</span>
                </div>
            </div>

        </div>
    ))
  )
}

export default TestimonialCard