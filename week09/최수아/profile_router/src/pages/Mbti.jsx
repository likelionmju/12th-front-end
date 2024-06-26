import styled from "styled-components"

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgb(230, 200, 230);
    gap: 10px;
`

const Gap = styled.div`
    display: flex;
    gap: 20px;
`

const Mbti = () => {
    return (
        <Box>
            <h2>ESTP 특징</h2>
            <Gap>
                <p> 스릴을 좋아한다. <br />
                본인의 경험을 바탕으로 따져보았을 때 이해가 되어야만 수긍한다. <br />
                무대의 중심에 서는 것과 관심을 즐긴다. <br />
                개방적이고 자유를 추구하며, 억압당하는 것을 견디지 못한다. <br />
                T유형 중에서 유일하게 내향적인 성향이 거의 없다. <br />
                관찰력이 뛰어나다. 다른 유형들은 미처 알아차리지 못하고 넘어갈 법한 타인의 행동 변화나 옷차림의 변화, 미세한 표정 변화 등을 곧 잘 포착한다. <br />
                사전의 이론 공부보다는 상황에 직접 뛰어들어 체험을 통해 경험하는 것을 더 선호하는 활동적인 성격이다.
                </p>
            </Gap>
        </Box>
    )
}

export default Mbti