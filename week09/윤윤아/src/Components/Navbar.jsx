import React from 'react'
import styled from 'styled-components'

const ContentNav = styled.nav`
    background-color: lightskyblue;
`

const ContentUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentA = styled.a`
    text-decoration-line: none;
    padding: 30px;
`

const Navbar = () => {
    return(
        <ContentNav class="container">
            <ContentUl>
                <li><ContentA href="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMTZfODgg%2FMDAxNzA1Mzc4NDIwODIz.hZDc23hMo1U5O3n6yy5LDkhdxaDLOdd2gizUPNfENI4g.gpxS6qpVmj35LxntFYhaCAHnlO2mLmO8gIM_vqY8Slsg.JPEG.smdfurwk77%2F%25B0%25ED%25BE%25E7%25C0%25CC_%25BB%25EE%25C0%25BA_%25B0%25A8%25C0%25DA_%25C6%25A2%25B1%25E8%25C0%25BA_%25B8%25D4%25BE%25EE%25B5%25B5_%25B5%25C7%25B4%25C2_%25B0%25C9%25B1%25EE_%25287%2529.jpg&type=sc960_832">~술안주 추천~</ContentA></li>
                <li><ContentA href="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjdfMTkz%2FMDAxNjAxMTgxMjgzNTMy.NccYeJ11BSmpW1hfy_wvqM25mz-_j_nPXpK2Rk1RDowg.voD_tScNb5LTks-WUgFn55sKItulLTRY2OeeYdAlJjEg.JPEG.pjrrang13%2FIMG_0782.jpg&type=sc960_832">~영화 추천~</ContentA></li>
                <li><ContentA href="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDVfNyAg%2FMDAxNjYyMzc5MTM3Mzcz.vS06xIDDg25xWZJUKOS-fy4wsq_6ZbqWI3Q6ys9d6yMg.rFicAvC8yPXkjLH_91_gzFYJsupz673cc8HN4zriQswg.PNG.dhdhrrud12%2F%25C0%25DB%25C0%25BA_%25BE%25C6%25BE%25BE%25B5%25E9_%25C8%25B8%25C2%25F7%25C1%25A4%25BA%25B8.png&type=sc960_832">~드라마 추천~</ContentA></li>
                <li><ContentA href="https://img2.sbs.co.kr/img/sbs_cms/WE/2021/07/12/zeg1626049443713.png">~예능 추천~</ContentA></li>
                <li><ContentA href="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjhfMTM1%2FMDAxNjYxNjkyMzE1MTIx._Rai7gYmGKdmnhcnSUKKrq_tV_p8D_Vz0Mu1KFMIpJ0g.MyBLwAGchUtY1xviS_OgWgkYwzHkizTl_GH1aQHYYh0g.JPEG.yanink%2F1661692313853.jpg&type=sc960_832">~책 추천~</ContentA></li>
                <li><ContentA href="https://www.youtube.com/watch?v=rrqWbMhtzEM">~노래 추천~</ContentA></li>
                <li><ContentA href="https://www.youtube.com/@HAEJOOOOO">~유튜버 추천~</ContentA></li>
            </ContentUl>
        </ContentNav>
    )
}

export default Navbar