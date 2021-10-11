import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
//import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Home from './pages/Home'

const themeLight = createTheme({
  palette: {
    background: {
      default: "#d7dbd6"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#22222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

function App() {
  const [light, setLight] = React.useState(true);
  return (
    <div>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline/>
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
