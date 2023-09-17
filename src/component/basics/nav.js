import React from 'react'

const nav = ({filterItem, navData}) => {
  return (
    <>
<nav className='navbar'>
<div className="btn-group">
        {navData.map((currElem) => {
        return (
      
      

<button className='btn-group__item' onClick={()=>filterItem(currElem)}>{currElem}</button>
    

    
        )
        })
    }
      </div>
      </nav>  
    </>
  )
}

export default nav
