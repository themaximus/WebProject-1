import './Post.css';
import PostFunction from './PostFunction';







const Post = (props) => {

    

    return (
        <div className='Item'>
            <img src="https://i.ibb.co/wy52WFv/yanick.png"/>
            { props.message }
            { props.likesCount }
            < PostFunction />
        </div>
    )
}

export default Post;