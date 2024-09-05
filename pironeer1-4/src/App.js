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


import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
                setNumber(42);
            }}>Increase the number</button>
        </>
    )
}
