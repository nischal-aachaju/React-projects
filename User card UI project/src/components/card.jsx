import { Images, Plus, UserRound } from 'lucide-react'

const Card = (props,users) => {
    return (
        <>
        <div className='card'>
            <div className="top">
                <img src={props.img} alt="" />
            </div>
            <div className="center">
                <h1>{props.name} <img src={props.verified} alt="" /></h1>
                <p>{props.bio}</p>
            </div>
            <div className="bottom">
                <div className="followers">
                    <UserRound size={14} color='#6d6d6d'/>
                    <h4>{props.followers}</h4>
                </div>
                <div className="collection">
                    <Images size={13} color='#6d6d6d' />
                    <h4>{props.collections}</h4>
                </div>
                <button>Follow<Plus size={16} fontWeight={800} /></button>
            </div>
        </div>

    </>
        
    )
}
export default Card
