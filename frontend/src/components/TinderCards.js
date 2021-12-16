import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import Profile from './profile';
import { Link } from 'react-router-dom';


function TinderCards(props) {

    function getProfileImg(person) {
        let url = "http://localhost:5000/img/" + person.path;
        return url
    }
console.log(props.people)
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
                                <h3 className={person.typeUser == "Pro" ? "pro" : "talent"}>{person.firstname} {person.lastname}</h3>
                            </div>
                            <div className="card-img">
                                <img src={getProfileImg(person)} />
                            </div>

                            <div className="card-info">
                            
                            <Link 
                            to={"/User/" + person._id}
                            className="nav-link-card active"> 
                            <button className='btn-profile'>
                            Go To Profile
                            </button>
                            </Link>
                                <p>{person.username}</p>
                                <p>{person.age}</p>
                            </div>

                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>


    )
}

export default TinderCards
