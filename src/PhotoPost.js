import React from 'react'
import {CardActionArea, Modal, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {resize} from 'aspectratio'

export function PhotoPost ({ post }) {
  const classes = makeStyles({
    modal: {
      marginTop: '5vh',
      maxHeight: '85vh',
      maxWidth: '100vw',
      margin: 'auto',
      width: 'max-content',
      height: 'max-content',
      boxSizing: 'border-box',
      padding: '1em',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      textAlign: 'center',
      borderRadius: 5
    },
    modalImage: {
      maxHeight: '90%',
      maxWidth: '100%'
    },
    readMoreButtons: {
      display: 'block',
      margin: 'auto'
    },
    actionArea: {
      padding: 0,
      width: 300,
      marginLeft: '-1.5rem',
      marginBottom: '0.5em',
      '& figure': {
        marginLeft: 0,
        marginTop: '0 !important'
      }
    },
    caption: {
      color: 'white',
      width: '100%',
      boxSizing: 'border-box',
      padding: '1em',
      textAlign: 'left'
    }
  })()

  const [modalOpen, setModalOpen] = React.useState(false)
  const [modalImage, setModalImage] = React.useState({})
  const [readMore, setReadMore] = React.useState(false)

  return (
    <div>
      {post.photos.map(photo => (
        <CardActionArea
          key={photo.original_size.url}
          onClick={() => {
            setModalImage(photo)
            setModalOpen(true)
          }}
          className={classes.actionArea}
        >
          <figure>
            <img
              src={photo.original_size.url}
              alt={photo.caption}
            ></img>
          </figure>
        </CardActionArea>
      ))}
      {
        post.caption_abstract && !readMore && (
          <div>
            <span dangerouslySetInnerHTML={{ __html: post.caption_abstract }} />
            <Button
              onClick={() => setReadMore(true)}
              variant="outlined"
              className={classes.readMoreButtons}
            >
              Read More
            </Button>
          </div>
        )
      }
      {
        (!post.caption_abstract || readMore) && (
          <div>
            <span dangerouslySetInnerHTML={{ __html: post.caption }} />
          </div>
        )
      }
      {
        post.caption_abstract && readMore && (
          <Button
            onClick={() => setReadMore(false)}
            variant="outlined"
            className={classes.readMoreButtons}
          >
            Collapse
          </Button>
        )
      }
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setModalImage({})
        }}
      >
        <div className={classes.modal}>
          <img
            className={classes.modalImage}
            src={modalImage.original_size && modalImage.original_size.url}
            alt={modalImage.caption}
          />
          {modalImage.caption && (
            <div className={classes.caption}>
              {modalImage.caption}
            </div>
          )}
        </div>
      </Modal>
    </div>
  )
}