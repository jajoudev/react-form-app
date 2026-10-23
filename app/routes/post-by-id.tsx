import { useParams } from "react-router";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import axios from "axios";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function PostById() {
    const params = useParams()
    const id = params.id

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const headers = {
            "Authorization": "Bearer da8ba36b3a67c74d4d298115d6ee824565183d97577011e933621bd60c077edb",
            "Accept": "application/json"
        }

        axios.get(`https://gorest.co.in/public/v2/posts/${id}`, { headers })
            .then((res) => {
                setPost(res.data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }
    if (!post) {
        return <p>Post introuvable</p>
    }

    return (
        <div className="p-6">
            <h1>Post by {id}</h1>
            <h2 className="text-xl font-bold mt-4">{post.title}</h2>
            <p className="mt-2">{post.body}</p>
        </div>
    );
}