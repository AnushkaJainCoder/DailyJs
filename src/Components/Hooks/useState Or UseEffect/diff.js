import { useRef, useState } from "react"

export default function Diff(){

    // const [count, setCount] = useState(0)
    const countRef = useRef(0);

    const handleClick = () => {
        // setCount(count + 1);

        // countRef not rerender so the value of counterref will not change
        //  to change the value of counterRef we need to rerender but counterref not re- render the component
        countRef.current = countRef.current + 1;
        alert(`you clicked  ${countRef.current}`)
    };

    return (
        <>
            <button onClick={handleClick}>You click {countRef.current}</button>
        </>
    )
}