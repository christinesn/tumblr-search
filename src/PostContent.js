import React from 'react'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {PhotoPost} from './PhotoPost'
import {AskPost} from './AskPost'
import {LinkPost} from './LinkPost'
import {QuotePost} from './QuotePost'
import {AudioPost} from './AudioPost'
import {VideoPost} from './VideoPost'
import classnames from 'classnames'

export function PostContent ({ post }) {
  const classes = makeStyles({
    '@global': {
      '.instagram-media': {
        marginLeft: '-1.5em !important',
        minWidth: '300px !important'
      },
      'figure .instagram-media': {
        marginLeft: '0 !important'
      },
      'video': {
        maxWidth: 300
      }
    },
    expanded: {
      maxHeight: '1000000px !important'
    },
    post: {
      padding: '0 1.5rem 0 1.5em',
      wordBreak: 'break-word',
      maxWidth: '100%',
      maxHeight: 750,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      '& figure': {
        width: '300px',
        margin: 0,
        marginLeft: '-1.5rem'
      },
      '& img': {
        width: '100%'
      },
      '& p': {
        padding: 0
      },
      '& h1': {
        padding: 0,
        fontSize: '1.1em'
      },
      '& h2': {
        padding: 0,
        fontSize: '1em'
      },
      '& ul': {
        paddingRight: 0
      },
      '& blockquote': {
        width: '80%',
        boxSizing: 'border-box',
        paddingLeft: '1em',
        marginLeft: '0.5em',
        borderLeft: '1px solid rgba(0, 0, 0, 0.2)'
      },
      '& blockquote p': {
        padding: 0
      },
      '& hr': {
        margin: 'auto',
        width: '85%',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
      },
      '& pre': {
        whiteSpace: 'pre-wrap'
      },
      '& figure iframe': {
        width: '300px !important',
        height: '380px !important'
      }
    },
    expandDiv: {
      position: 'absolute',
      width: 300,
      boxSizing: 'border-box',
      background: 'linear-gradient(0deg, white, white, white, transparent)',
      padding: '0.5em',
      paddingTop: '2.5em',
      textAlign: 'center',
      bottom: 85,
      right: 0,
      fontSize: '1.1em'
    },
    collapseDiv: {
      width: '100%',
      textAlign: 'center',
      marginTop: '1em'
    }
  })()

  const [expanded, setExpanded] = React.useState(false)
  const [overflow, setOverflow] = React.useState(false)

  const postRef = node => {
    if (!node) return

    /** Wait for images to load */
    return setInterval(() => {
      if (node.clientHeight < node.scrollHeight) {
        setOverflow(true)
      }
    }, 150)
  }

  return (
    <div
      ref={postRef}
      className={classnames({
        [classes.post]: true,
        [classes.expanded]: expanded
      })}
    >
      {post.title && post.type !== 'link' && (<h1>{post.title}</h1>)}
      {post.type === 'text' && (
        <div
          dangerouslySetInnerHTML={{
            __html: post.body
          }}
        />
      )}
      {post.type === 'photo' && (
        <PhotoPost post={post} />
      )}
      {post.type === 'answer' && (
        <AskPost post={post} />
      )}
      {post.type === 'link' && (
        <LinkPost post={post} />
      )}
      {post.type === 'quote' && (
        <QuotePost post={post} />
      )}
      {post.type === 'audio' && (
        <AudioPost post={post} />
      )}
      {post.type === 'video' && (
        <VideoPost post={post} />
      )}
      {overflow && !expanded && (
        <div
          className={classes.expandDiv}
        >
          <Button
            variant="outlined"
            onClick={() => setExpanded(true)}
          >
            Expand
          </Button>
        </div>
      )}
      {expanded && (
        <div
          className={classes.collapseDiv}
        >
          <Button
            variant="outlined"
            onClick={() => setExpanded(false)}
          >
            Collapse
          </Button>
        </div>
      )}
    </div>
  )
}
