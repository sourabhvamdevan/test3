// React Integration
const rootElement = document.getElementById('root');

// React Component with Dynamic Greeting
function App() {
    const [greeting, setGreeting] = React.useState("Hello, Welcome to My React Integration!");

    const changeGreeting = () => {
        setGreeting("You clicked the button! Thanks for visiting!");
    };

    return (
        <div>
            <h3>{greeting}</h3>
            <button onClick={changeGreeting}>
                Click Me!
            </button>
        </div>
    );
}

// Render the React component
ReactDOM.render(<App />, rootElement);
