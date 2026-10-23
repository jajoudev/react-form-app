import { useState } from "react"
import axios from "axios"

export function Formulaire({ onPostCreated }) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        const headers = {
            "Authorization": "Bearer da8ba36b3a67c74d4d298115d6ee824565183d97577011e933621bd60c077edb",
            "Accept": "application/json"
        }

        axios.post("https://gorest.co.in/public/v2/posts", {
            title: title,
            body: body,
            user_id: 8680373
        }, { headers })
            .then((response) => {
                console.log(response.data)

                if (onPostCreated) {
                    onPostCreated(response.data)
                }

                setTitle("")
                setBody("")
            })
    }

    return (
        <div className="mb-6 flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
                <div>
                    <input
                        type="text"
                        value={title}
                        placeholder="Titre"
                        onChange={(event) => setTitle(event.target.value)}
                        className="w-full p-2 border border-white rounded bg-transparent text-white placeholder-gray-400"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={body}
                        placeholder="Body"
                        onChange={(event) => setBody(event.target.value)}
                        className="w-full p-2 border border-white rounded bg-transparent text-white placeholder-gray-400"
                    />
                </div>
                <button type="submit" className="border border-white p-2 rounded hover:bg-white hover:text-black transition">
                    Créer
                </button>
            </form>
        </div>
    )
}