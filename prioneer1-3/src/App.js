// function Profile() {
//     return (
//         <img
//             src="https://i.imgur.com/MK3eW3As.jpg"
//             alt="Katherine Johnson"
//         />
//     );
// }
//
// export default function Gallery() {
//     return (
//         <section>
//             <h1>Amazing scientists</h1>
//             <Profile />
//             <Profile />
//             <Profile />
//         </section>
//     );
// }

// export default function Bio() {
//     return (
//         <div class="intro">
//             <h1>Welcome to my website!</h1>
//         </div>
//     <p class="summary">
//         You can find my thoughts here.
//         <br><br>
//             <b>And <i>pictures</b></i> of scientists!
//     </p>
// );
// }

// export default function Avatar() {
//     const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const description = 'Gregorio Y. Zara';
//     return (
//         <img
//             className="avatar"
//             src={avatar}
//             alt={description}
//         />
//     );
// }



// const today = new Date();
//
// function formatDate(date) {
//     return new Intl.DateTimeFormat(
//         'en-US',
//         { weekday: 'long' }
//     ).format(date);
// }
//
// export default function TodoList() {
//     return (
//         <h1>To Do List for {formatDate(today)}</h1>
//     );
// }

// export default function TodoList() {
//     return (
//         <ul style={{
//             backgroundColor: 'black',
//             color: 'pink'
//         }}>
//             <li>Improve the videophone</li>
//             <li>Prepare aeronautics lectures</li>
//             <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//     );
// }


// function Avatar({ person, size })  {
//     return (
//         <img
//             className="avatar"
//             src="https://i.imgur.com/1bX5QH6.jpg"
//             alt="Lin Lanying"
//             width={100}
//             height={100}
//         />
//     );
// }
//
// export default function Profile({ person, size, isSepia, thickBorder }) {
//     return (
//         <div className="card">
//             <Avatar
//                 person={person}
//                 size={size}
//                 isSepia={isSepia}
//                 thickBorder={thickBorder}
//             />
//         </div>
//     );
// }




// export default function Profile() {
//     return (
//         <Avatar
//             person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
//             size={100}
//         />
//     );
// }


// function Item({ name, isPacked }) {
//     if (isPacked) {
//         return <li className="item">{name} ✔</li>;
//     }
//     return <li className="item">{name}</li>;
// }
//
// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

// function Item({ name, isPacked }) {
//     if (isPacked) {
//         return null;
//     }
//     return <li className="item">{name}</li>;
// }
//
// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }


// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {isPacked ? (
//                 <del>
//                     {name + ' ✔'}
//                 </del>
//             ) : (
//                 name
//             )}
//         </li>
//     );
// }
//
// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }

function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✔"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}
