import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../../../utils/validators/validators'
import { Checkbox, Input } from '../../../common/FormControls/FormControls'
import s from './ProfileDataForm.module.css'

const ProfileDataForm = ({ profile }) => {
  return (
    <form>
      <div><button >Save Profile</button></div>
      <div>
        <b>Full name: <Field placeholder='Full name' name='fullname' component={Input} className={s.input} validate={[required]} /></b>
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}<Field name='lookingForJob' component={Checkbox} className={s.checkbox} />
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skills: {profile.lookingForAJobDescription}</b>
        </div>
      }
      <div>
        <b>About me: {profile.aboutMe}</b>
      </div>
      {/* <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div> */}
    </form>
  )
}

export default reduxForm({
  form: 'profile_data'
})(ProfileDataForm)