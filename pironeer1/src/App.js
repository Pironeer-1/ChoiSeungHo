// function MyButton() {
//   return (
//       <button>
//         I'm a button
//       </button>
//   );
// }
//
// export default function MyApp() {
//   return (
//       <div>
//         <h1>Welcome to my app</h1>
//         <MyButton />
//       </div>
//   );
// }


// export default function Square() {
//     return (
//         <>
//             <div className="board-row">
//                 <button className="square">1</button>
//                 <button className="square">2</button>
//                 <button className="square">3</button>
//             </div>
//             <div className="board-row">
//                 <button className="square">4</button>
//                 <button className="square">5</button>
//                 <button className="square">6</button>
//             </div>
//             <div className="board-row">
//                 <button className="square">7</button>
//                 <button className="square">8</button>
//                 <button className="square">9</button>
//             </div>
//         </>
//     );
// }


// function Square() {
//     return <button className="square">1</button>;
// }
//
// export default function Board() {
//     return (
//         <>
//             <div className="board-row">
//                 <Square />
//                 <Square />
//                 <Square />
//             </div>
//             <div className="board-row">
//                 <Square />
//                 <Square />
//                 <Square />
//             </div>
//             <div className="board-row">
//                 <Square />
//                 <Square />
//                 <Square />
//             </div>
//         </>
//     );
// }

// function Square({value}) {
//     function handleClick() {
//         console.log('clicked!');
//     }
//
//     return <button className="square" onClick={handleClick}>{value}</button>;
// }
//
//
// export default function Board() {
//     return (
//         <>
//             <div className="board-row">
//                 <Square value="1"/>
//                 <Square value="2"/>
//                 <Square value="3"/>
//             </div>
//             <div className="board-row">
//                 <Square value="4"/>
//                 <Square value="5"/>
//                 <Square value="6"/>
//             </div>
//             <div className="board-row">
//                 <Square value="7"/>
//                 <Square value="8"/>
//                 <Square value="9"/>
//             </div>
//         </>
//     );
// }
import {useState} from 'react';

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}


export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}
