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



const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function TodoList() {
    return (
        <h1>To Do List for {formatDate(today)}</h1>
    );
}

