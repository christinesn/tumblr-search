import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Grid} from '@material-ui/core'

export function Error ({ error }) {
  const classes = makeStyles({
    error: {
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
      <Grid item xs={12} sm={10} className={classes.error}>
        Error:{' '}{error.status}{' '}{error.msg}
      </Grid>
    </Grid>
  )
}