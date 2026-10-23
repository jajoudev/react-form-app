import { useNavigate } from "react-router"

export function Post({ id, user_id, title, body }) {
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-10 border border-white w-1/2 rounded-lg mr-auto ml-auto mb-8">
                <h3>{title}</h3>
                <p className="text-center">{body}</p>
                <button onClick={() => navigate(`/posts/${id}`)}>Voir</button>
            </div>
        </div>
    )
}