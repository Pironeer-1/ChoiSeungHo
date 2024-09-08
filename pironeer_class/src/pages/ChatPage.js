import React from 'react';
import styled from 'styled-components';

const ChatPage = () => {
    // 데이터
    const chats = [
        { name: '최승호', message: '사진을 보냈습니다.', time: '오후 2:55', unread: 0 },
        { name: '암흑디그다❤️', message: '찜닭 먹으러 갈 거다', time: '오후 3:08', unread: 4 },
        { name: '[피로니어 3기] 24', message: 'https://github.com/Pironeer-1/practice1', time: '오후 2:51', unread: 0 },
        { name: '피로 00', message: '예약', time: '오후 3:26', unread: 0 },
        { name: '이지현', message: 'index.js', time: '오후 3:17', unread: 0 },
        { name: '카카오톡', message: '[기기 로그인 알림]', time: '오후 3:16', unread: 6 },
        { name: '이건희', message: '10,000원을 받았어요...', time: '오후 2:08', unread: 0 },
        { name: '🩸일요일 서울역 스터디🩸', message: '감사당ㅋㅋ!', time: '오후 2:00', unread: 7 },
        { name: '추가된 채팅1', message: '안녕하세요!', time: '오후 4:00', unread: 1 },
        { name: '추가된 채팅2', message: '안녕하세요!', time: '오후 4:00', unread: 2 },
        { name: '추가된 채팅3', message: '안녕하세요!', time: '오후 4:00', unread: 3 },

    ];

    return (
        <ChatList>
            {chats.map((chat, index) => (
                <ChatItem key={index}>
                    <Avatar />
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
`;

const ChatItem = styled.li`
    display: flex;
    align-items: center;
    padding: 20px 16px;
    border-bottom: 1px solid #ddd;
`;

const Avatar = styled.div`
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
    margin-top: 4px;
`;
