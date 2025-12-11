import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
function Mycard (){
    const {theme,toggleTheme} = useContext(ThemeContext);
    return(
        <div className="card"
        style={{
            width: "200px",
            border: "1px solid black",
            backgroundColor: theme === "light" ? "pink" : "green",
        }}
        >
            <h2> My Card </h2>
            <p> This is a card component that adapts to the current theme. </p>
        </div>
    );
}
export default Mycard;