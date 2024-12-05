

export default function withLoading (WrappedComponent) {
    return ({isLoading, ...props}) => {
        if(isLoading){
            return <div>Loading...</div>
        }
    };
};