import { useEffect } from "react";
import { useState } from "react";





const TestApi = () => {
    const [posts, setPosts] = useState([])


useEffect(() => {
    fetch('https://order-foods.herokuapp.com/api/v1/foods/list')
    .then(res => res.json())
    .then(posts => {
        setPosts(posts.Pageable.content);
    })

},[])

    return(
        <>
       aaaaaaaaaaaaaaa
       <ul>
        {posts.map(post => (
            <li key={post.id}> 
            {post.name}
            {post.price}
            {post.status}
            </li>
        ))}
       </ul>
        </>
    )
}
export default TestApi;