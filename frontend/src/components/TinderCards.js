import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'


function TinderCards(props) {


    return (
        <div>
            <div className='tinderCards__cardContainer' >

                {props.people.map((person) => (
                    <TinderCard
                        className="swipe"
                        /*key={person.name}*/
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3 className={person.typeUser=="Pro" ? "pro" : "talent" }>{person.typeUser}</h3>
                                <p>{person.username}</p>
                                <p>{person.age}</p>
                            <div className="card-content">

                            
                           </div> 

                            <div className="btnn">
                            <button > 
                            View Profile
                            </button>
                            </div>

                        </div>
                        
                    </TinderCard>
                ))}
            </div>
        </div>


    )
}

export default TinderCards
