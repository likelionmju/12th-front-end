import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgb(230, 200, 230);
    gap: 10px;
`

const List = styled.div`
    list-style: none;
`

const Cats = () => {
    return (
        <Box>
            <Outlet />
            <ul>
            <List>
                <Link to="/cats/1">마요</Link>
            </List>
            <List>
                <Link to="/cats/2">치치</Link>
            </List>
            </ul>
        </Box>
    )
}

export default Cats