import React from 'react'
import {makeStyles} from '@material-ui/styles'

export function QuotePost ({ post }) {
  const classes = makeStyles({
    quote: {
      fontSize: '1.2em',
      marginTop: '1em',
      marginBottom: '1em',
      padding: '0 0.5em'
    }
  })()

  return (
    <div>
      <div
        className={classes.quote}
        dangerouslySetInnerHTML={{
          __html: post.text
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: post.source
        }}
      />
    </div>
  )
}
