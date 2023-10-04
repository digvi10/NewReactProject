import React from 'react'
import PropTypes from "prop-types";
import "../css/ProfilePage.css"

const ProfilePage = ({user, onBackClick} ) => {
    
  return (

    <div className='profile_page_main'>
      <div className='Profile_header'>
      <button onClick={onBackClick}>Back</button>
        <h3 className='profile_page_Header'>Profile Page</h3>
      </div>
      <div className='profile_data'>
        <div className='profile_page_1'>
          <div>
            <p className='profile_page_name'>{user.name}</p>
          </div>
            <div className='profile_page_username_section'>
                <p className='profile_page_username'>{user.username}</p>
                <p>|</p>
                <p className='profile_page_catchPhrase'>{user.catchPhrase}</p>
            </div> 
        </div>
        <div className='profile_page_2'>
          <div>
            <p className='profile_page_adress'>{user.address}</p>
          </div>
          <div className='profile_page_email_section'>
            <p className='profile_page_email'>{user.email}</p>
            <p>|</p>
            <p className='profile_page_address'>{user.phone}</p>    
            </div>   
        </div>
      </div>
      <div className="user-profile_page_post_card">
        {user.posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
ProfilePage.propTypes = {
    user: PropTypes.object.isRequired,
    onBackClick: PropTypes.func.isRequired,
  };

export default ProfilePage
