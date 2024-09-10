import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ChatPage from './pages/ChatPage';
import styled from 'styled-components';
import {FaUserFriends, FaComments, FaSearch, FaMusic, FaCommentDots, FaShoppingCart, FaEllipsisH} from 'react-icons/fa';

const App = () => {
    return (
        <Router>
            <Container>
                {/* 헤더 */}
                <Header>
                    <FaSearch size={20} style={iconStyle}/>
                    <FaUserFriends size={20} style={iconStyle}/>
                    <FaMusic size={20} style={iconStyle}/>
                </Header>

                {/* 페이지 내용 */}
                <Routes>
                    <Route path="/friends" element={<FriendsPage/>}/>
                    <Route path="/chat" element={<ChatPage/>}/>
                    <Route path="/openchat" element={<ChatPage/>}/>
                    <Route path="/shopping" element={<ChatPage/>}/>
                    <Route path="/more" element={<ChatPage/>}/>
                </Routes>

                {/* 푸터 */}
                <Footer/>
            </Container>
        </Router>
    );
};

// Footer 컴포넌트 정의
const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <FooterContainer>
            <FooterLink to="/friends" isActive={currentPath === '/friends'}>
                <FaUserFriends size={24}/>
                친구
            </FooterLink>
            <FooterLink to="/chat" isActive={currentPath === '/chat'}>
                <FaComments size={24}/>
                채팅
            </FooterLink>
            <FooterLink to="/openchat" isActive={currentPath === '/openchat'}>
                <FaCommentDots size={24}/>
                오픈채팅
            </FooterLink>
            <FooterLink to="/shopping" isActive={currentPath === '/shopping'}>
                <FaShoppingCart size={24}/>
                쇼핑
            </FooterLink>
            <FooterLink to="/more" isActive={currentPath === '/more'}>
                <FaEllipsisH size={24}/>
                더보기
            </FooterLink>
        </FooterContainer>
    );
};

// 스타일 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 480px;
    height: 100vh;
    border: solid black;
    overflow: hidden;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    width: 100%;
`;
const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ddd;
    width: 100%;
    background-color: #fff;
`;

const FooterLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${({isActive}) => (isActive ? 'black' : '#888')};
    font-size: 12px;

    svg {
        margin-bottom: 4px;
        color: ${({isActive}) => (isActive ? 'black' : '#888')};
    }
`;

const IconWrapper = styled.div`
    cursor: pointer;
`;

const iconStyle = {
    cursor: 'pointer'
};

export default App;
