import React from 'react'

function ServiceCard(props) {
    const { list } = props;
    return (
        list.map((item) => (
            <div className='service-item padd-15'>
                <div className='service-item-inner'>
                    <div className='icon'>
                        <i className={item.icon}></i>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.Discription}</p>
                </div>
            </div>
        ))
    )
}

export default ServiceCard