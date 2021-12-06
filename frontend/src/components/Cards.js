import React from 'react'
import './Cards.css'
 
function Cards(title, imageUrl, body) {
    return (
        <div className="card-container" >
            <div className="image-container" >
            <img src ={imageUrl} alt='' />
            </div>

            register<div className="card-content" >
                 <div className="card-title" >
                     {title}
                 </div>
                 <div  className="card-body" >
                     <p>{body}</p>
                 </div>
            </div>
            
            <div className="btn">
                <button>
                    <a>
                        Vier More
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Cards
