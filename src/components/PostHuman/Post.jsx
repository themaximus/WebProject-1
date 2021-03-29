import './Post.css';
import PostFunction from './PostFunction';







const Post = (props) => {

    

    return (
        <div className='Item'>
            <img src="https://i.ibb.co/0KdCgV2/145.png"/>
            { props.message }
            { props.likesCount }
            < PostFunction />
        </div>
    )
}

export default Post;