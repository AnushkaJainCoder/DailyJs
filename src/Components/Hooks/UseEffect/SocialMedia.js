import { useEffect, useState } from "react"

export default function SocialMedia(){
        const [text, setText] = useState('');
        const [items, setItems] = useState([]);

    useEffect(()=>{
        console.log('text change'); 
        // try {
            
            fetch(`https://jsonplaceholder.typicode.com/${text}`)
         .then(response => response.json())
         .then(json => setItems(json))
        // } catch (error) {
        //     console.log(error);
            
        // }
        
    },[])
    return (
        <>
            <div>
                <button onClick={() => setText('posts')}>Posts</button>
                <button onClick={() => setText('comments')}>Comment</button>
                <button onClick={() => setText('users')}>Users</button>
            </div>
            <p>{text}</p>
            {items.map(i => {
                return <p>{JSON.stringify(i)}</p>
            })}
            
        </>
    )
}