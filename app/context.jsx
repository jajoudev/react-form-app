import { create } from "domain";
import { createContext } from "react-router";

const defaultUser = {
    id: 1,
    name: "Eden",
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwRvNzGgrEQ387k6tR0Un2G_fhx7CpkH4Rw5MxA3yVQ&s"
}

export const userContext = createContext(defaultUser)