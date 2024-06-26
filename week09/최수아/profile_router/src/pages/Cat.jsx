import { useParams } from "react-router-dom";
import styled from "styled-components"
import cat1 from "./마요.jpg"
import cat2 from "./치치.jpg"


const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgb(230, 200, 230);
    gap: 10px;
`

const Img = styled.img`
    height: 200px;
`

const getCat = (id) => {
    switch(id) {
        case '1':
            return cat1
        case '2':
            return cat2
        default:
            return null
    }
}

const Cat = () => {
    const { id } = useParams();
    const catImage = getCat(id);

    return (
        <Box>
            <h1>고양이 {id}</h1>
            <Img src={catImage} alt={`cat${id}`} />
        </Box>
    )
}

export default Cat