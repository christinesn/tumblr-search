import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Grid} from '@material-ui/core'

export function NoResults ({ results }) {
  const classes = makeStyles({
    noresults: {
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '2em',
      paddingTop: '1rem',
      fontWeight: 'bold',
      paddingBottom: '5em'
    }
  })()

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} className={classes.noresults}>
        {results.length === 0 && 'No results.'}
        {results.length > 0 && 'There are no more posts for this search, sorry.'}
      </Grid>
    </Grid>
  )
}