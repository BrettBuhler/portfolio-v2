const BottomBar = () => {
    const style = {
        'background': 'black',
        'color': 'white',
        'textAlign': 'center',
        'height': '50px',
        'marginTop': '0',
        'borderTop': '2px solid white',
    }
    return (
        <div className="bottom-bar" style={style}>
            <p className="bottom-p">© Brett Buhler 2023. All rights reserved.</p>
        </div>
    )
}

export default BottomBar