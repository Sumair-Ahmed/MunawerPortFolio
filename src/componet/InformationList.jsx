import React from 'react'

function InformationList(props) {
    const { Information } = props;
    return (
        Information.map((item) => (
            <div className='info-item padd-15' key={item.name}>
                <p>{item.name}<span>{item.value}</span></p>
            </div>
        ))
    )
}

export default InformationList