import React from 'react'
import {makeStyles} from '@material-ui/styles'

export function AudioPost ({ post }) {
  const classes = makeStyles({
    player: {
      maxWidth: '100% !important',
      '& iframe': {
        width: '300px !important',
        height: '380px !important',
        marginLeft: '-1.5rem'
      }
    }
  })()

  return (
    <div>
      <div
        className={classes.player}
        dangerouslySetInnerHTML={{
          __html: post.player
        }}
      />
    </div>
  )
}