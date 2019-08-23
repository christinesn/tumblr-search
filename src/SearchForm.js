import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Button, InputBase, Grid} from '@material-ui/core'

export function SearchForm ({ setQuery, inputValue, setInputValue }) {
  const classes = makeStyles({
    form: {
      width: '100%',
      margin: 'auto',
      paddingTop: '2em',
      paddingBottom: '2em',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      marginBottom: '2em'
    },
    input: {
      backgroundColor: 'white',
      fontSize: '1.5em',
      padding: '0.25em',
      paddingLeft: '0.75em',
      paddingRight: '0.75em',
      borderRadius: 5
    },
    button: {
      fontSize: '1.5em',
      textTransform: 'lowercase'
    }
  })()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setQuery(inputValue)
      }}
      className={classes.form}
    >
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6}>
          <InputBase
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className={classes.input}
            fullWidth
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}