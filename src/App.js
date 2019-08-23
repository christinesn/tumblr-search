import React from 'react';
import {Search} from './Search'
import {makeStyles} from '@material-ui/styles'

function App() {
  makeStyles({
    '@global': {
      html: {
        fontSize: 14
      },
      body: {
        margin: 0,
        background: '#001935',
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(",")
      },
      a: {
        color: 'rgba(0, 0, 0, 0.8)',
        textDecoration: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
        '&:hover': {
          color: 'rgba(0, 0, 0, 0.95)',
          background: 'rgba(0, 0, 0, 0.05)'
        }
      },
      img: {
        maxWidth: 300,
        width: 'auto',
        height: 'auto'
      }
    }
  })()

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
