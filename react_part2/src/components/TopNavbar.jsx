import {ThemeContext} from "./ThemeContext";
import {useContext} from "react";
function TopNavbar() {

    const {theme,toggleTheme} = useContext(ThemeContext);
    return (
    <nav
    style={{
        padding:"10px",
        backgroundColor: theme === "light" ? "lightblue" : "blue",
    }}
    >
        <p> Current Theme : {theme} </p>
      <button onClick={toggleTheme}>
        Toggle
      </button>
    </nav>
  );
}
export default TopNavbar;