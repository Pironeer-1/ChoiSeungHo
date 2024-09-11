// import React from 'react'
// import styled from "styled-components";
//
// const Container=styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     max-width: 480px;
//     border: solid black;
//     height: 100%;
// `
//
// export default function (friend){
//     return(
//         <div>friend</div>
//     )
// }



import React from 'react';

const FriendsPage = () => {
    const friends = ['친구1', '친구2', '친구3']; // API에서 가져올 데이터 대체

    return (
        <div>
            <h1>친구 목록</h1>
            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>{friend}</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsPage;
