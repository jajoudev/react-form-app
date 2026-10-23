import { useState } from "react"
import axios from "axios"
import { userContext } from "../../context"

export function Formulaire() {
    const user = context.get(userContext) 

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
            .then((response) => console.log(response.data))

        setTitle("")
        setBody("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                </div>
                <button type="submit">Créer</button>
            </form>
        </div>
    )
}