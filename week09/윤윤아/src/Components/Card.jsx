import pm from '../assets/퍁맽.jpg'
import ko from '../assets/코알라.jpg'
import noon from '../assets/눈보리.png'

const Card = () => {
    return(
        <div class="image">
            <img src={pm} />
            <img src={ko} />
            <img src={noon} />
        </div>
    )
}

export default Card