// export default function Button() {
//     function handleClick() {
//         alert('You clicked me!');
//     }
//
//     return (
//         <button onClick={handleClick}>
//             Click me
//         </button>
//     );
// }

// function AlertButton({ message, children }) {
//     return (
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     );
// }
//
// export default function Toolbar() {
//     return (
//         <div>
//             <AlertButton message="Playing!">
//                 Play Movie
//             </AlertButton>
//             <AlertButton message="Uploading!">
//                 Upload Image
//             </AlertButton>
//         </div>
//     );
// }
//
// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }
//
// function PlayButton({ movieName }) {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}!`);
//     }
//
//     return (
//         <Button onClick={handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     );
// }
//
// function UploadButton() {
//     return (
//         <Button onClick={() => alert('Uploading!')}>
//             Upload Image
//         </Button>
//     );
// }
//
// export default function Toolbar() {
//     return (
//         <div>
//             <PlayButton movieName="Kiki's Delivery Service" />
//             <UploadButton />
//         </div>
//     );
// }


// function Button({ onSmash, children }) {
//     return (
//         <button onClick={onSmash}>
//             {children}
//         </button>
//     );
// }
// // children은 컴포넌트의 하위 요소들을 전달받는 역할!
// export default function App() {
//     return (
//         <div>
//             <Button onSmash={() => alert('Playing!')}>
//                 Play Movie
//             </Button>
//             <Button onSmash={() => alert('Uploading!')}>
//                 Upload Image
//             </Button>
//         </div>
//     );
// }


// export default function App() {
//     return (
//         <Toolbar
//             onPlayMovie={() => alert('Playing!')}
//             onUploadImage={() => alert('Uploading!')}
//         />
//     );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//         <div>
//             <Button onClick={onPlayMovie}>
//                 Play Movie
//             </Button>
//             <Button onClick={onUploadImage}>
//                 Upload Image
//             </Button>
//         </div>
//     );
// }
//
// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// export default function Toolbar() {
//     return (
//         <div className="Toolbar" onClick={() => {
//             alert('You clicked on the toolbar!');
//         }}>
//             <button onClick={() => alert('Playing!')}>
//                 Play Movie
//             </button>
//             <button onClick={() => alert('Uploading!')}>
//                 Upload Image
//             </button>
//         </div>
//     );
// }
// export default function Signup() {
//     return (
//         <form onSubmit={e => {
//             e.preventDefault();
//             alert('Submitting!');
//         }}>
//             <input />
//             <button>Send</button>
//         </form>
//     );
// }


//
// export default function Gallery() {
//     const [index, setIndex] = useState(0);
//
//     function handleClick() {
//         setIndex(index + 1);
//     }
//
//     let sculpture = sculptureList[index];
//     return (
//         <>
//             <button onClick={handleClick}>
//                 Next
//             </button>
//             <h2>
//                 <i>{sculpture.name} </i>
//                 by {sculpture.artist}
//             </h2>
//             <h3>
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <img
//                 src={sculpture.url}
//                 alt={sculpture.alt}
//             />
//             <p>
//                 {sculpture.description}
//             </p>
//         </>
//     );
// }

//
// import { useState } from 'react';
// import { sculptureList } from './data.js';
//
// export default function Gallery() {
//     const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);
//
//     function handleNextClick() {
//         setIndex(index + 1);
//     }
//
//     function handleMoreClick() {
//         setShowMore(!showMore);
//     }
//
//     let sculpture = sculptureList[index];
//     return (
//         <>
//             <button onClick={handleNextClick}>
//                 Next
//             </button>
//             <h2>
//                 <i>{sculpture.name} </i>
//                 by {sculpture.artist}
//             </h2>
//             <h3>
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <button onClick={handleMoreClick}>
//                 {showMore ? 'Hide' : 'Show'} details
//             </button>
//             {showMore && <p>{sculpture.description}</p>}
//             <img
//                 src={sculpture.url}
//                 alt={sculpture.alt}
//             />
//         </>
//     );
// }
// export default function App() {
//     return <h1>Hello World</h1>
// }
// import { useState, useEffect } from 'react';
// import Clock from './Clock.js';
//
// function useTime() {
//     const [time, setTime] = useState(() => new Date());
//     useEffect(() => {
//         const id = setInterval(() => {
//             setTime(new Date());
//         }, 1000);
//         return () => clearInterval(id);
//     }, []);
//     return time;
// }
//
// export default function App() {
//     const time = useTime();
//     return (
//         <Clock time={time.toLocaleTimeString()} />
//     );
// }
// import { useState } from 'react';
//
// export default function Form() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('Hi!');
//     if (isSent) {
//         return <h1>Your message is on its way!</h1>
//     }
//     return (
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             setIsSent(true);
//             sendMessage(message);
//         }}>
//       <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//       />
//             <button type="submit">Send</button>
//         </form>
//     );
// }
//
// function sendMessage(message) {
//     // ...
// }


// import { useState } from 'react';
//
// export default function Counter() {
//     const [number, setNumber] = useState(0);
//
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//             }}>+3</button>
//         </>
//     )
// }


// import { useState } from 'react';
//
// export default function Counter() {
//     const [number, setNumber] = useState(0);
//
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 5);
//                 alert(number);
//             }}>+5</button>
//         </>
//     )
// }
//
// import { useState } from 'react';
//
// export default function Counter() {
//     const [number, setNumber] = useState(0);
//
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 5);
//                 setTimeout(() => {
//                     alert(number);
//                 }, 3000);
//             }}>+5</button>
//         </>
//     )
// }

// import { useState } from 'react';
//
// export default function Form() {
//     const [to, setTo] = useState('Alice');
//     const [message, setMessage] = useState('Hello');
//
//     function handleSubmit(e) {
//         e.preventDefault();
//         setTimeout(() => {
//             alert(`You said ${message} to ${to}`);
//         }, 5000);
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 To:{' '}
//                 <select
//                     value={to}
//                     onChange={e => setTo(e.target.value)}>
//                     <option value="Alice">Alice</option>
//                     <option value="Bob">Bob</option>
//                 </select>
//             </label>
//             <textarea
//                 placeholder="Message"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//             />
//             <button type="submit">Send</button>
//         </form>
//     );
// }

// import { useState } from 'react';
//
// export default function Counter() {
//     const [number, setNumber] = useState(0);
//
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//             }}>+3</button>
//         </>
//     )
// }


// import { useState } from 'react';
//
// export default function Counter() {
//     const [number, setNumber] = useState(0);
//
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(n => n + 1);
//                 setNumber(n => n + 1);
//                 setNumber(n => n + 1);
//             }}>+3</button>
//         </>
//     )
// }


// import { useState } from 'react';
//
// export default function Counter() {
//     const [number, setNumber] = useState(0);
//
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 5);
//                 setNumber(n => n + 1);
//             }}>Increase the number</button>
//         </>
//     )
// }


// import { useState } from 'react';
//
// export default function Counter() {
//     const [number, setNumber] = useState(0);
//
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 5);
//                 setNumber(n => n + 1);
//                 setNumber(42);
//             }}>Increase the number</button>
//         </>
//     )
// }


// import { useState } from 'react';
// export default function MovingDot() {
//     const [position, setPosition] = useState({
//         x: 0,
//         y: 0
//     });
//     return (
//         <div
//             onPointerMove={e => {
//                 position.x = e.clientX;
//                 position.y = e.clientY;
//             }}
//             style={{
//                 position: 'relative',
//                 width: '100vw',
//                 height: '100vh',
//             }}>
//             <div style={{
//                 position: 'absolute',
//                 backgroundColor: 'red',
//                 borderRadius: '50%',
//                 transform: `translate(${position.x}px, ${position.y}px)`,
//                 left: -10,
//                 top: -10,
//                 width: 20,
//                 height: 20,
//             }} />
//         </div>
//     );
// }
// import { useState } from 'react';
// export default function MovingDot() {
//     const [position, setPosition] = useState({
//         x: 0,
//         y: 0
//     });
//     return (
//         <div
//             onPointerMove={e => {
//                 setPosition({
//                     x: e.clientX,
//                     y: e.clientY
//                 });
//             }}
//             style={{
//                 position: 'relative',
//                 width: '100vw',
//                 height: '100vh',
//             }}>
//             <div style={{
//                 position: 'absolute',
//                 backgroundColor: 'red',
//                 borderRadius: '50%',
//                 transform: `translate(${position.x}px, ${position.y}px)`,
//                 left: -10,
//                 top: -10,
//                 width: 20,
//                 height: 20,
//             }} />
//         </div>
//     );
// }


//
// import { useState } from 'react';
//
// export default function Form() {
//     const [person, setPerson] = useState({
//         firstName: 'Barbara',
//         lastName: 'Hepworth',
//         email: 'bhepworth@sculpture.com'
//     });
//
//     function handleFirstNameChange(e) {
//         person.firstName = e.target.value;
//     }
//
//     function handleLastNameChange(e) {
//         person.lastName = e.target.value;
//     }
//
//     function handleEmailChange(e) {
//         person.email = e.target.value;
//     }
//
//     return (
//         <>
//             <label>
//                 First name:
//                 <input
//                     value={person.firstName}
//                     onChange={handleFirstNameChange}
//                 />
//             </label>
//             <label>
//                 Last name:
//                 <input
//                     value={person.lastName}
//                     onChange={handleLastNameChange}
//                 />
//             </label>
//             <label>
//                 Email:
//                 <input
//                     value={person.email}
//                     onChange={handleEmailChange}
//                 />
//             </label>
//             <p>
//                 {person.firstName}{' '}
//                 {person.lastName}{' '}
//                 ({person.email})
//             </p>
//         </>
//     );
// }
// import { useState } from 'react';
//
// export default function Form() {
//     const [person, setPerson] = useState({
//         firstName: 'Barbara',
//         lastName: 'Hepworth',
//         email: 'bhepworth@sculpture.com'
//     });
//
//     function handleFirstNameChange(e) {
//         setPerson({
//             ...person,
//             firstName: e.target.value
//         });
//     }
//
//     function handleLastNameChange(e) {
//         setPerson({
//             ...person,
//             lastName: e.target.value
//         });
//     }
//
//     function handleEmailChange(e) {
//         setPerson({
//             ...person,
//             email: e.target.value
//         });
//     }
//
//     return (
//         <>
//             <label>
//                 First name:
//                 <input
//                     value={person.firstName}
//                     onChange={handleFirstNameChange}
//                 />
//             </label>
//             <label>
//                 Last name:
//                 <input
//                     value={person.lastName}
//                     onChange={handleLastNameChange}
//                 />
//             </label>
//             <label>
//                 Email:
//                 <input
//                     value={person.email}
//                     onChange={handleEmailChange}
//                 />
//             </label>
//             <p>
//                 {person.firstName}{' '}
//                 {person.lastName}{' '}
//                 ({person.email})
//             </p>
//         </>
//     );
// }

//
// import { useState } from 'react';
//
// export default function Form() {
//     const [person, setPerson] = useState({
//         name: 'Niki de Saint Phalle',
//         artwork: {
//             title: 'Blue Nana',
//             city: 'Hamburg',
//             image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//         }
//     });
//
//     function handleNameChange(e) {
//         setPerson({
//             ...person,
//             name: e.target.value
//         });
//     }
//
//     function handleTitleChange(e) {
//         setPerson({
//             ...person,
//             artwork: {
//                 ...person.artwork,
//                 title: e.target.value
//             }
//         });
//     }
//
//     function handleCityChange(e) {
//         setPerson({
//             ...person,
//             artwork: {
//                 ...person.artwork,
//                 city: e.target.value
//             }
//         });
//     }
//
//     function handleImageChange(e) {
//         setPerson({
//             ...person,
//             artwork: {
//                 ...person.artwork,
//                 image: e.target.value
//             }
//         });
//     }
//
//     return (
//         <>
//             <label>
//                 Name:
//                 <input
//                     value={person.name}
//                     onChange={handleNameChange}
//                 />
//             </label>
//             <label>
//                 Title:
//                 <input
//                     value={person.artwork.title}
//                     onChange={handleTitleChange}
//                 />
//             </label>
//             <label>
//                 City:
//                 <input
//                     value={person.artwork.city}
//                     onChange={handleCityChange}
//                 />
//             </label>
//             <label>
//                 Image:
//                 <input
//                     value={person.artwork.image}
//                     onChange={handleImageChange}
//                 />
//             </label>
//             <p>
//                 <i>{person.artwork.title}</i>
//                 {' by '}
//                 {person.name}
//                 <br />
//                 (located in {person.artwork.city})
//             </p>
//             <img
//                 src={person.artwork.image}
//                 alt={person.artwork.title}
//             />
//         </>
//     );
// }
//
//
// import { useImmer } from 'use-immer';
//
// export default function Form() {
//     const [person, updatePerson] = useImmer({
//         name: 'Niki de Saint Phalle',
//         artwork: {
//             title: 'Blue Nana',
//             city: 'Hamburg',
//             image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//         }
//     });
//
//     function handleNameChange(e) {
//         updatePerson(draft => {
//             draft.name = e.target.value;
//         });
//     }
//
//     function handleTitleChange(e) {
//         updatePerson(draft => {
//             draft.artwork.title = e.target.value;
//         });
//     }
//
//     function handleCityChange(e) {
//         updatePerson(draft => {
//             draft.artwork.city = e.target.value;
//         });
//     }
//
//     function handleImageChange(e) {
//         updatePerson(draft => {
//             draft.artwork.image = e.target.value;
//         });
//     }
//
//     return (
//         <>
//             <label>
//                 Name:
//                 <input
//                     value={person.name}
//                     onChange={handleNameChange}
//                 />
//             </label>
//             <label>
//                 Title:
//                 <input
//                     value={person.artwork.title}
//                     onChange={handleTitleChange}
//                 />
//             </label>
//             <label>
//                 City:
//                 <input
//                     value={person.artwork.city}
//                     onChange={handleCityChange}
//                 />
//             </label>
//             <label>
//                 Image:
//                 <input
//                     value={person.artwork.image}
//                     onChange={handleImageChange}
//                 />
//             </label>
//             <p>
//                 <i>{person.artwork.title}</i>
//                 {' by '}
//                 {person.name}
//                 <br />
//                 (located in {person.artwork.city})
//             </p>
//             <img
//                 src={person.artwork.image}
//                 alt={person.artwork.title}
//             />
//         </>
//     );
// }

// import { useState } from 'react';
//
// let nextId = 0;
//
// export default function List() {
//     const [name, setName] = useState('');
//     const [artists, setArtists] = useState([]);
//
//     return (
//         <>
//             <h1>Inspiring sculptors:</h1>
//             <input
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//             />
//             <button onClick={() => {
//                 artists.push({
//                     id: nextId++,
//                     name: name,
//                 });
//             }}>Add</button>
//             <ul>
//                 {artists.map(artist => (
//                     <li key={artist.id}>{artist.name}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }


// import { useState } from 'react';
//
// let initialArtists = [
//     { id: 0, name: 'Marta Colvin Andrade' },
//     { id: 1, name: 'Lamidi Olonade Fakeye'},
//     { id: 2, name: 'Louise Nevelson'},
// ];
//
// export default function List() {
//     const [artists, setArtists] = useState(
//         initialArtists
//     );
//
//     return (
//         <>
//             <h1>Inspiring sculptors:</h1>
//             <ul>
//                 {artists.map(artist => (
//                     <li key={artist.id}>
//                         {artist.name}{' '}
//                         <button onClick={() => {
//                             setArtists(
//                                 artists.filter(a =>
//                                     a.id !== artist.id
//                                 )
//                             );
//                         }}>
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }


// import { useState } from 'react';
//
// let nextId = 3;
// const initialList = [
//     { id: 0, title: 'Big Bellies', seen: false },
//     { id: 1, title: 'Lunar Landscape', seen: false },
//     { id: 2, title: 'Terracotta Army', seen: true },
// ];
//
// export default function BucketList() {
//     const [myList, setMyList] = useState(initialList);
//     const [yourList, setYourList] = useState(
//         initialList
//     );
//
//     function handleToggleMyList(artworkId, nextSeen) {
//         const myNextList = [...myList];
//         const artwork = myNextList.find(
//             a => a.id === artworkId
//         );
//         artwork.seen = nextSeen;
//         setMyList(myNextList);
//     }
//
//     function handleToggleYourList(artworkId, nextSeen) {
//         const yourNextList = [...yourList];
//         const artwork = yourNextList.find(
//             a => a.id === artworkId
//         );
//         artwork.seen = nextSeen;
//         setYourList(yourNextList);
//     }
//
//     return (
//         <>
//             <h1>Art Bucket List</h1>
//             <h2>My list of art to see:</h2>
//             <ItemList
//                 artworks={myList}
//                 onToggle={handleToggleMyList} />
//             <h2>Your list of art to see:</h2>
//             <ItemList
//                 artworks={yourList}
//                 onToggle={handleToggleYourList} />
//         </>
//     );
// }
//
// function ItemList({ artworks, onToggle }) {
//     return (
//         <ul>
//             {artworks.map(artwork => (
//                 <li key={artwork.id}>
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={artwork.seen}
//                             onChange={e => {
//                                 onToggle(
//                                     artwork.id,
//                                     e.target.checked
//                                 );
//                             }}
//                         />
//                         {artwork.title}
//                     </label>
//                 </li>
//             ))}
//         </ul>
//     );
// }


import { useState } from 'react';

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
];

export default function List() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <>
            <button onClick={handleClick}>
                Reverse
            </button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </>
    );
}
