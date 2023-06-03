import React, { useState } from 'react'
import '../Stylesheets/TinderCards.css'
import TinderCard from 'react-tinder-card';
import promise from '../Assets/Images/promise.jpeg';

const TinderCards = () => {
  const [people, setpeople] = useState([
    {
      name: "Elon musk",
      age: 50,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/399px-Elon_Musk_Royal_Society.jpg?20220526165343',
      location: 'California',
      distance: 100
    },
    {
      name: "Jeff Bezos",
      age: 46,
      url: 'https://wallpapercave.com/wp/wp4025589.jpg',
      location: 'New York',
      distance: 120
    },
    {
      name: "Promise",
      age: 26,
      url: promise,
      location: 'Lagos',
      distance: 20
    }
  ]);

  const swiped = (dir, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  }

  return (
    <div className='tinder-cards'>
      <div className='card-container'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
              <div className='person-details'>
                <h1 className='tinder-name'>{person.name} <span>{person.age}</span></h1>
                <p>Lives in {person.location}</p>
                <p>{person.distance} kilometres away</p>
              </div>
            </div>
          </TinderCard>
        ))}

      </div>
    </div>
  )
}

export default TinderCards