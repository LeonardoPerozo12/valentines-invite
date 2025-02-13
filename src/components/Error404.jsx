import '../styles/App.css'

export function Error404 () {
    return (
        <div className="two-col-container">
            <div className="col">
                <img src="assets/sadness-inside-out.jpg" alt="Error 404" />
            </div>
            <div className="col">
                <h1 style={{ color: '#37a9e7' }}>Page not Found!</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <p>:(</p>
            </div>
        </div>
    )
}