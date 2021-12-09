import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'


function TinderCards(props) {

    function getProfileImg(person) {
        let url = "http://localhost:5000/img/" + person.path;
        return url
    }

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

                            <h3>{person.firstname} {person.lastname}</h3>
                            <img src={getProfileImg(person)} /
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
