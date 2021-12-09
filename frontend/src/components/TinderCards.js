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
                            <div className="card-title">
                                <h3>{person.firstname} {person.lastname}</h3>
                            </div>
                            <div className="card-img">
                            <img src={getProfileImg(person)} />
                            </div>
                            
                            <div className="card-info">
                            <p>{person.username}</p>
                                <p>{person.age}</p>
                            </div>

                        </div>
                        )
                    </TinderCard>
                ))}
            </div>
        </div>


    )
}

export default TinderCards
