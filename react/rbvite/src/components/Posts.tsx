import { useActionState } from "react"

type Post = {id: number, title: string};
const searchPost = async(userId: string) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}
`).then(res => res.json());

export default function Posts() {
    const inpRef
    const [posts, search, isPending] = useActionState<Post[], FormData>async(preState, formData)
        => {

        };

    return <>
        <h3>Post List</h3>
        <form action = {search}>
            <input type='text' name="searchStr" placeholder="userId..." />

            <button>search</button>
            <searching />
            <ul>
                {<li></li>}
            </ul>
        </form>
    </>
}

function searching() {
    
}