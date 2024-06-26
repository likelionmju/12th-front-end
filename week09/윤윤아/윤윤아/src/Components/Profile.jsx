import React from 'react'
import styled from 'styled-components'

const ContentH2 = styled.h2`
  color: seagreen;
`

const ContentButton = styled.button`
    color: seagreen;
    border: 2px solid rgb(255, 238, 0);
    font-size: 40px;
`

const Profile = () => {
    return(
        <div class="a">
            <div class="b">
                <ContentH2>이름: 윤윤아</ContentH2>
                <p>💻 데테 3학년</p>
                <p>🎂 생년월일 : 2003.02.28</p>
            </div>
            <div>
                <p>❤️ 좋아! : 먹기, 자기, 눕기, 놀기 </p>
                <p>💔 싫어¡ : 공부, 운동 ... ~</p>
            </div>
            <ContentButton type="button">깃허브</ContentButton>
        </div>
    )
}

export default Profile