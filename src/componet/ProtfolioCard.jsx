import React from 'react'

function ProtfolioCard(props) {
    const {list , setisVisible , setselectedItem} = props;
  return (
    list.map((item) => (
        <div className='portfolio-item padd-15' key={item.id} onClick={() => {setisVisible(true); setselectedItem(item)}}>
            <div className='portfolio-item-inner shadow-dark'>
                <div className='portfolio-img'>
                    <img src={item.img} />
                </div>
                <div >
                    <h3 className='title'>{item.title}</h3>
                </div>
            </div>
        </div>
    ))
  )
}

export default ProtfolioCard