import { Link } from "react-router-dom"
import memoji from "./memoji.jpg"
import styled from "styled-components"

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgb(230, 200, 230);
    gap: 10px;
`

const MyName = styled.div`
    color: rgb(110, 0, 180);
    font-size: 30px;
    font-weight: 100px;
    margin-bottom: 20px
`

const StyledImage = styled.img`
    height: 250px
`

const List = styled.div`
    list-style: none;
`

const Likes = styled.div`
    text-decoration: none;
`


const Home = () => {
    return (
        <Box>
            <h1>새싹 프론트엔드 개발자</h1>
            <MyName>최수아</MyName>
            <StyledImage alt="me" src={memoji} />
            <p>2002.07.18</p>
            <p>경기도 오산</p>
            <p>국어국문학과 21학번 / 경영정보학과</p>
            
            <Link to='/mbti'>ESTP</Link>

            <p>좋아하는 것</p>
            <List>
                <Likes>
                    <Link to="/likes/sunshine">햇볕 좋은 날 걷기</Link>
                </Likes>
                <Likes>
                    <Link to="/likes/hotplace">분좋카, 맛집 발굴하기</Link>
                </Likes>
                <Likes>
                    <Link to="/likes/movie">영화보기</Link>
                </Likes>
            </List>

            <Link to="/cats">반려동물</Link>
        </Box>
    )
}

export default Home