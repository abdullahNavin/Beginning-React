import './post.css'
export default function Post({ post }) {
    const { title, id, userId, body } = post
    return (
        <div className='post'>
            <h2>Title :{title} </h2>
            <p>{body}</p>
            <p><small>userId:{userId}</small></p>
            <p><small>PostId:{id}</small></p>
        </div>
    )
}