// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

function Navbar(){
    return(
        <nav>
            <h1>Weistkfly</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}


ReactDOM.render(
    <div>
        <Navbar />
    </div>,
document.getElementById("root")
)

