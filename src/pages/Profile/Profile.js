import React from 'react'
import { TaskSectionTitle } from '../../components/General'
import SettingsForm from '../../components/SettingsForm'
import { AiOutlineLeft } from 'react-icons/ai'
import SettingsLayout from '../../layout/SettingsLayout/SettingsLayout'

const Profile = () => {
    
    return (
        <SettingsLayout title={"My Account"} subtitle={"Change account settings"}>
            <SettingsForm />
        </SettingsLayout>
    )

    return (
        <>
            <TaskSectionTitle>
                <span>
                    <AiOutlineLeft />
                </span>
                
                My Account
            </TaskSectionTitle>
            <p>Change account settings</p>
            <SettingsForm />
        </>
        )
}

export default Profile