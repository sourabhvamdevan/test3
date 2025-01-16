// React Integration
const rootElement = document.getElementById('root');

// React Component with Dynamic Counter and Theme Toggle
function App() {
    const [count, setCount] = React.useState(0);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const appStyle = {
        textAlign: 'center',
        marginTop: '20px',
        padding: '20px',
        backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
        color: isDarkMode ? '#fff' : '#000',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: isDarkMode ? '#007BFF' : '#ff0000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px',
    };

    return (
        <div style={appStyle}>
            <h3>Welcome to My React Integration!</h3>
            <p>You clicked the button {count} times.</p>
            <button onClick={incrementCount} style={buttonStyle}>
                Click Me!
            </button>
            <button onClick={toggleTheme} style={buttonStyle}>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
}

// Render the React component
ReactDOM.render(<App />, rootElement);
