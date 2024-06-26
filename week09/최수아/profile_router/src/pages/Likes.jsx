import { useParams } from "react-router-dom"
import styled from "styled-components"

const Box = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgb(230, 200, 230);
    gap: 10px;
`

const data = {
    sunshine: {
        name: '오산천',
        description : '벚꽃, 튤립 명소',
    },
    hotplace: {
        name: '썸띵크',
        description: '크리미 블랙티, 애플소다',
    },
    movie: {
        name: '리틀포레스트',
        description: '힐링, 귀농',
    },
}

const Likes = () => {
    const params = useParams();
    const likes = data[params.dataname];

    return (
        <Box>
            <h2>좋아하는 것</h2>
            { likes ? (
                <div> 
                    <h2>{likes.name}</h2>
                    <p>{likes.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 정보입니다.</p>
            )}
        </Box>
    )
}

export default Likes