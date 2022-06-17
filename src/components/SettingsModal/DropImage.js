import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import "firebase/storage";
import "firebase/auth";
import { toast } from 'react-toastify';


function DropImage(props) {
    const {globalUser, firebase} = props

    const onDrop = useCallback(acceptedFiles => {
        const {dispatchUserEvent, globalUser} = props
        const userProfile = {...globalUser, photoURL: URL.createObjectURL(acceptedFiles[0]) }
        dispatchUserEvent({type: 'update', payload: userProfile})
        uploadImage(acceptedFiles[0]).then(()=>{
            updateUserAvatar()
        })
    }, [])

    const uploadImage = file =>   {
        const ref = firebase.storage().ref().child(`avatar/${globalUser.uid}`)
        return ref.put(file)
    }

    const updateUserAvatar = () => {
        firebase
          .storage()
          .ref(`avatar/${globalUser.uid}`)
          .getDownloadURL()
          .then(async response => {
            await firebase.auth().currentUser.updateProfile({ photoURL: response });
            toast.success('Avatar updated successfully')
          })
          .catch((err) => {
            toast.error("Error updating avatar");
            console.log(err)
          });
      };

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