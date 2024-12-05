
export default function DataDisplay({data}){
    return (
        <>
            <h1>data: </h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </>
    );
};