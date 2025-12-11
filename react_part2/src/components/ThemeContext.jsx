import {useState, createContext} from 'react';

export const ThemeContext = createContext();


function ThemeProvider ({children}) {
//created a useState to hold the theme value 
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
    setTheme(
        (prev)=>(prev ==="light"?"dark":"light")
    );
}

return(
    <>
        <ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>
        {/* children component will go here */}
        {children}
        </ThemeContext.Provider>
    </>
);

}
export default ThemeProvider;