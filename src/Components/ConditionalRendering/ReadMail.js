
export default function ReadMails(props){

    return (
        <>  
            <h1>hello</h1>
            {props.mail.length > 0 && (
           <>
            <p>You have {props.mail.length} unread mails </p>
                {props.mail.map((m,index) => (
                    <p key={index}>  {m} </p>
                ))}
            
           </>
            
            )}   
        </>
    )
}