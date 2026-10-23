import { Formulaire } from "../form/Formulaire";
import { PostsLists } from "../PostsList";
import {CustomLayout} from "../../Components/CustomLayout/CustomLayout"

export function Posts() {
    return (
        <CustomLayout>
            <Formulaire />
            <PostsLists />
        </CustomLayout>
    )
}