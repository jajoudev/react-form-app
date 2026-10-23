import { Post } from "./Post/Post"
import { Formulaire } from "./form/Formulaire"
import axios from "axios"
import { useEffect, useState } from "react"

export function PostsList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const headers = {
            "Authorization": "Bearer da8ba36b3a67c74d4d298115d6ee824565183d97577011e933621bd60c077edb",
            "Accept": "application/json"
        }
        axios.get('https://gorest.co.in/public/v2/posts', { headers })
            .then((res) => {
                setPosts(res.data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    function handlePostCreated(newPost) {
        setPosts(prevPosts => [newPost, ...prevPosts])
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Formulaire onPostCreated={handlePostCreated} />
            <div>
                {posts.map(post => <Post key={post.id} {...post} />)}
            </div>
        </div>
    )
}