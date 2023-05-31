import '../styles/Error.css'

const Error = ({message, setMessage, error, setError}) => {

    const close = () => {
        setMessage([])
        setError(false)
    }

    return (
        <>
        {error && (
            <div className="error-popup-background">
                <div className="error-popup">
                    <h4>Error:</h4>
                    {message.map(x=><p key={`error:${x}`}>{x}</p>)}
                    <button onClick={close} className="form-button">OK</button>
                </div>
            </div>
        )}
        </>
    )
}

export default Error