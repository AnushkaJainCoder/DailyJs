export default function InputA({text, handleTextChange}){

    const handleChange = (e) => {
        handleTextChange(e.target.value);
    }
    return(
        <>
            <input type="text" value={text} onChange={handleChange} />
        </>
    )
}