import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function DropImage(props) {
  const onDrop = useCallback(acceptedFiles => {
    const {dispatchUserEvent, globalUser} = props
    const userProfile = {...globalUser, photoURL: URL.createObjectURL(acceptedFiles[0]) }
    dispatchUserEvent({type: 'update', payload: userProfile})
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg', '.png']
        },
        noKeyboard: true,
        onDrop
    })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {props.children}
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p></p>
      }
    </div>
  )
}

export default DropImage