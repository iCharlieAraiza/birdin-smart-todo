import React from 'react'
import { TaskSectionTitle } from '../../components/General'
import SettingsForm from '../../components/SettingsForm'


const Profile = () => {
  return (
    <>
        <TaskSectionTitle>
            My Profile
        </TaskSectionTitle>
        <p>Change account settings</p>
        <SettingsForm />
    </>
    )
}

export default Profile