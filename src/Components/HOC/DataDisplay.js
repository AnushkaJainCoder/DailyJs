
export default function DataDisplay({data}){
    return (
        <>
            <h1>data: </h1>
            <div>{JSON.stringify(data,null,2)}</div>
        </>
    );
};