import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Grid} from '@material-ui/core'

export function SearchSuggestion ({ setQuery, setInputValue }) {
  const classes = makeStyles({
    suggestion: {
      fontSize: '2em',
      color: 'rgba(255, 255, 255, 0.7)',
      textAlign: 'center',
      fontWeight: 'bold',
      paddingTop: '1rem'
    }
  })()

  function randomSuggestion () {
    const searchSuggestions = [
      'cats',
      'gifs'
    ]

    const randomIndex = Math.floor(Math.random() * searchSuggestions.length)
    return searchSuggestions[randomIndex]
  }

  const suggestion = randomSuggestion()

  function handleClick () {
    setQuery(suggestion)
    setInputValue(suggestion)
  }

  return (
    <Grid container justify="center">
      <Grid item sm={10} xs={12} className={classes.suggestion}>
        Why not search for{' '}
        <button onClick={handleClick}>
          {suggestion}
        </button>
        {' '}?
      </Grid>      
    </Grid>
  )
}