import React from 'react';
import styled from 'styled-components';

const ChatPage = () => {
    // 데이터
    const chats = [
        {name: '(나) 최승호', message: '사진을 보냈습니다.', time: '오후 2:55', unread: 0, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMDZfMjcx%2FMDAxNTc1NTYzNzEyNTM3.NE23qFHhyfZKWAPRmuhHEXeEDpQZskuR5zAgn3qtgmYg.fQRlKq0M3EzwhE3WidRMeVocn7EDjXEDFPcCfZCH4tYg.JPEG.sunjung4575%2FIMG_2341.JPG&type=sc960_832'},
        {name: '여친❤️', message: '찜닭 먹으러 갈 거다', time: '오후 3:08', unread: 4, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDNfMjk3%2FMDAxNjc3ODQ5NzcwNzcz.4zZlxycbdzEHBDIUNk-93Z69K8yPzf2K5wLNwMULFrYg.IPuEEwq2dGaEGewSchfcpPNo4_DGt0P50LSTB65Ne4og.JPEG.jieon2992%2FIMG_7929.JPG&type=a340'},
        {name: '이건희', message: '민슈', time: '오후 2:51', unread: 0, avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MzFfNTUg%2FMDAxNzIyMzU4MjQ0MzMw.PJlBy3IpFdZUApOizbxhTIGP5P2h_Mc5x8vb3uK3UyUg.bzOpTc1oxZbau6znjRHRFWerF3WtdgDd0Z3W1hx6EAMg.JPEG%2FIMG_3686.jpg&type=a340"},
        {name: '피로 00', message: '예약', time: '오후 3:26', unread: 0, avatar: 'https://via.placeholder.com/56'},
        {name: '피로22이지현', message: '깃허브 ㄱ', time: '오후 3:17', unread: 0, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjhfMTA4%2FMDAxNjgwMDAyNTc0MjUz.0xCsmv17XQB15qmTrEIsYNddkfETbnesM8OVTwlFY6cg.8fcaYp-HP7EeI7rbt5g8xCL8wv4WjOw0nDMOKhu8sekg.PNG.npay1%2F20230326%25A3%25DF202548%25A3%25DF390.png&type=a340'},
        {name: '박경환', message: 'ㅋㅋㅋㅋㅋㅋ', time: '오후 3:16', unread: 6, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMjcw%2FMDAxNjkyMzk0MjM0MTc5.W4CyJg5XnH7Oo0xtGFAc-LkzWwa75m-PyG2x8lbpssgg.aAZdBp2nYD5JyeUNvm0jiPhWVLPh7FrKYfIATos8dEwg.PNG.jjungaang%2Fpfp%25A3%25DFlvory%25A3%25DFuzubaong.png&type=a340'},
        {name: '손흥민', message: '축구 어케하나요', time: '오후 2:08', unread: 0, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F413%2F2024%2F05%2F20%2F0000177149_001_20240520135901373.jpg&type=a340'},
        {name: '피로22손관우', message: 'ㅇㅎㅎㅎ', time: '오후 2:00', unread: 7, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjlfODMg%2FMDAxNjAxMzgzMDc3NDc2.TsSYhqyjc6VYqaJ5uCnrgODCvtF9YeD_odI2NZ0wzSEg.XmBCMcl2-kSMLpojVhPShbq952F4dkGwNNRLHXo2vv8g.JPEG.pompurin12%2FIMG_3444.JPG&type=sc960_832'},
        {name: '이송민', message: '아니.', time: '오후 4:00', unread: 1, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDVfMTIy%2FMDAxNjIwMTQ0MjQ1ODcw.AKNZKn1trhLocK2YFhLPi7A1O5J9sEQnBb0DmydaS1Mg.9EUe2zGM1W5gk4qjJ8W0WZ0mhfnCBnpYQQKK70hk9ncg.JPEG.06heyjin06%2F20210219_220700.jpg&type=a340'},
        {name: '김성학', message: '술 ㄲ', time: '오후 4:00', unread: 2, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MjRfMjMy%2FMDAxNjkwMTY3Njc2NTky.upNRQFs6pbqF1o7ng2RLF0TLmQ9YN9V31WLb3q39tFcg.fXDeDjgOgDNzCMTvwq9CQ-817Fc-EEzGHOYxmdG4x6kg.JPEG.jobobo12%2FIMG_0838.JPG&type=a340'},
        {name: '김정연', message: '엌ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', time: '오후 4:00', unread: 3, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjJfMjU0%2FMDAxNTk4MDcxNzg1Mjky.51j1x9kPNWo1OXIiPbnrphpOEffEVDbgsNOB0Th-YNkg.lcuZmfQGgNwu2y0WE3a1VryBOnbm5f_l2vrna1K2EtEg.JPEG.subindal%2FIMG_3663.JPG&type=a340'},
        {name: '피로22김민수', message: '나는 민수', time: '오후 4:00', unread: 3, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTFfNTUg%2FMDAxNjk0NDM1NTAyNjMy.S0QIqq6oaTRLCte3hwbHK-Y3NQMH7cbYe979gz4RMz8g.Em-Qi7h_Mp-AdWScwYhhVexEeu-tjeZXmg7I1vEGMvgg.JPEG.alstj971020%2FIMG_0412.JPG&type=a340'},
        {name: '이승찬', message: '보증금줄게', time: '오후 4:00', unread: 3, avatar: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTVfMTg4%2FMDAxNjgxNTQ2NjQzNDI5.srfdh735dkpjmNeAYgtq5oZVzLTJTmJhrq2-pKn27Eog.W_F6K2zZYgox4zDS6yua7VqVvelid-1LAPVNE22KRDkg.JPEG.0426777%2FIMG_1914.JPG&type=a340'},
    ];

    return (
        <ChatList>
            {chats.map((chat, index) => (
                <ChatItem key={index}>
                    <Avatar src={chat.avatar} alt={`${chat.name}의 아바타`} />
                    <ChatInfo>
                        <ChatName>{chat.name}</ChatName>
                        <ChatMessage>{chat.message}</ChatMessage>
                    </ChatInfo>
                    <ChatDetails>
                        <Time>{chat.time}</Time>
                        {chat.unread > 0 && <UnreadBadge>{chat.unread}</UnreadBadge>}
                    </ChatDetails>
                </ChatItem>
            ))}
        </ChatList>
    );
};

export default ChatPage;

// 스타일
const ChatList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    overflow-y: auto;
    max-height: calc(100vh - 120px);

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f0f0f0;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c0c0c0;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #a0a0a0;
    }
`;

const ChatItem = styled.li`
    display: flex;
    align-items: center;
    padding: 20px 16px;
    border-bottom: 1px solid #ddd;
`;

const Avatar = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #ddd;
    margin-right: 16px;
`;

const ChatInfo = styled.div`
    flex-grow: 1;
`;

const ChatName = styled.div`
    font-weight: bold;
    font-size: 18px;
`;

const ChatMessage = styled.div`
    font-size: 16px;
    color: #888;
`;

const ChatDetails = styled.div`
    text-align: right;
`;

const Time = styled.div`
    font-size: 14px;
    color: #888;
`;

const UnreadBadge = styled.div`
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-left: 40px;
`;
