import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Tabs } from 'antd'
import PersonalInfo from '../components/forms/PersonalInfo'
import WorkExp from '../components/forms/WorkExp'
import Education from '../components/forms/Education'

const Profile = () => {
  const onChange = (key) => {
    console.log(key)
  }
  return (
    <DefaultLayout>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        className="site-card"
        items={[
          {
            label: `Personal Info`,
            key: '1',
            children: <PersonalInfo />,
          },
          {
            label: `Education and Skills`,
            key: '2',
            children: <Education />,
          },
          {
            label: `Work Experience and Projects`,
            key: '3',
            children: <WorkExp />,
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default Profile
