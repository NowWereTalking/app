/* eslint-disable */
import React, { useState } from 'react';
import './style/profile.css';

const Profile = () => {
  const [edit, setEdit] = useState(false);

 const [value, inputChange] = useState("")

  function toggleEdit(e) {
    setEdit( !edit )
  }

  function save(){
    fetch("/submit", {
        method:"post", 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: value
    });
  }

  console.log(value);
  return (
    <div className="container-profile" id="border">
        <div className="row">
            <div className="col-1">
                <div className="card" id="profCard">
                    <div className="card-body no-gutters">
                    <div className="editBar">
                        <button
                        type="button"
                        onClick={toggleEdit}
                        className="btn btn-primary"
                        id="editBtn"
                        >
                        {' '}
                        edit
                        {' '}
                        </button>
                        {' '}
                    </div>

                    <img
                        src="https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190921125147"
                        href="profPic"
                        alt="profileImg"
                        id="profileImg"
                    />

                    <div className="form">
                    <div>
                    <input
                        id="Name"
                        className="input"
                        placeholder=" Name"
                        />
                        {' '}
                        <hr id="underline" />
                    </div>
                    </div>
                    {' '}
                    <div className="bioForm">
                    <input
                        id="bio"
                        contentEditable="false"
                        placeholder="Bio: This is some text within a card body."
                        maxLength="200"
                        onChange={(e)=> inputChange(e.target.value)}
                        value = {value}
                    />
                
                    {' '}
                    <div className="widgets">
                        <div className="location">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="bi bi-geo-alt-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg><input
                        id="location"
                        className="input"
                        placeholder="Calabasas"
                        />
                        {' '}
                        </div>
                        {' '}
                        <div className="twitter">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg><input
                        id="twitter"
                        className="input"
                        placeholder="@yourTwitterHere"
                        />
                        {' '}
                        </div>
                        {' '}
                        <div className="facebook">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="bi bi-facebook"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg><input
                        id="facebook"
                        className="input"
                        placeholder="http://yourfacebooklink.com"
                        />
                        {' '}
                        </div>
                        </div>
                        {' '}
                    </div>
                    { edit ? <button type='button' class='btn btn-primary' onClick={()=>{save()}}>Save</button>  : <div /> }
                    {' '}
                    </div>
                </div>
                {' '}
            </div>
            <div className="col-7" id="topicsCont">
                <div
                className="card text-white bg-primary mb-3"
                style={{
                    width: '18rem',
                }}
                id="topic1"
                >
                <div className="card-header"> Header </div>
                {' '}
                <div className="card-body">
                    <h5 className="card-title"> Primary card title </h5>
                    {' '}
                    <p className="card-text">
                    {' '}
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                    </p>
                    {' '}
                </div>
                {' '}
                </div>
                <div
                className="card text-white bg-primary mb-3"
                style={{
                    width: '18rem',
                }}
                id="topic1"
                >
                <div className="card-header"> Header </div>
                {' '}
                <div className="card-body">
                    <h5 className="card-title"> Primary card title </h5>
                    {' '}
                    <p className="card-text">
                    {' '}
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                    </p>
                    {' '}
                </div>
                {' '}
                </div>
                <div
                className="card text-white bg-primary mb-3"
                style={{
                    width: '18rem',
                }}
                id="topic1"
                >
                <div className="card-header"> Header </div>
                {' '}
                <div className="card-body">
                    <h5 className="card-title"> Primary card title </h5>
                    {' '}
                    <p className="card-text">
                    {' '}
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                    </p>
                    {' '}
                </div>
                {' '}
                </div>
                <div
                className="card text-white bg-primary mb-3"
                style={{
                    width: '18rem',
                }}
                id="topic1"
                >
                <div className="card-header"> Header </div>
                {' '}
                <div className="card-body">
                    <h5 className="card-title"> Primary card title </h5>
                    {' '}
                    <p className="card-text">
                    {' '}
                    Some quick example text to build on the card title and make up the
                    bulk of the cards content.
                    </p>
                    {' '}
                </div>
                {' '}
                </div>
                {' '}
            </div>
            {' '}
        </div>
    </div>
  );
};

export default Profile;
