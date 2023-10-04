import React from 'react';
import "../css/UserCard.css";
const UserCard = ({ user, onClick }) => {

  



  return (
      <div className='userCardMain' onClick={() => onClick(user.id)}>
        <p className='cardName'>Name: {user.name}</p>
        <p className='cardPostCount'>Post: {user.posts.length}</p>
      </div>
    );
}

export default UserCard;
