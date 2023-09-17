import React from 'react'

const menuCard = ({MenuData}) => {
    // console.log(menuData);
  return (
    <>
  <section className='main-card--cointainer'>
   {MenuData.map((currElem)=>{
    return(
        <>
        <div>
        <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number'>{currElem.id}</span>
                <span className='card-author subtle'>{currElem.category}</span>

                <h2 className='card-title'>{currElem.name}</h2>
                <span className='card-discription subtle'>
                   {currElem.desc}
                </span>

                <div className='card-read'>Read</div>
            </div>
            <img src={currElem.image} alt="images" className='card-media' />
            <span className='card-tag subtle'>Order Now</span>
            </div>
              </div>
    
    </div>
    
    </>
    )



   })}
   </section>
    </>
  )
}

export default menuCard
