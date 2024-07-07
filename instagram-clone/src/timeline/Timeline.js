import React from 'react';
import "./Timeline.css";
import Sugesstions from './Sugesstions';
import Post from './Post';
import { useState } from "react";

function Timeline(){
    const [posts,setPosts] = useState([
        {
            user: "Devara",
            postImage:"https://imgs.search.brave.com/Qow2R1x4dkR9i_z9rq_u18PZtb1gDv1WS8Yc2bKazZA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/MS8yOS8xMC8wOS9z/dHJlZXQtNzc1Mjk0/MF82NDAuanBn",
            likes: 12,
            timestamp:"2d",
        },
        {
            user: "Amul",
            postImage:"https://imgs.search.brave.com/sMMUPw_GcCtlf2TW9w1cljyHQRD6D3kckWCSqDCz5M0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MC8xNi8yMi8yMS9y/ZWQtZmlzaC0xNzQ2/NDU2XzY0MC5qcGc",
            likes: 101,
            timestamp:"12h",
        },
        {
            user: "be_genuine",
            postImage:"https://imgs.search.brave.com/bA-XkHLgCj3y6blCauRx0cUKmnq6LacgXTqubUTJkHc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2Nkbi1j/Z2kvaW1hZ2Uvdz03/MDAwLGZpdD1jb250/YWluLHE9OTAsZj1h/dXRvL2xpYnJhcnkv/Y29udGVudC9pbWFn/ZXMvMjAyMC8wNS9G/cmFtZS05LnBuZw",
            likes: 59,
            timestamp:"18h",
        },
        {
            user: "mokshitha",
            postImage:"https://imgs.search.brave.com/2g_auUCZeM8GJ8WG4DaOF3umCZH9AzH_3rNgb2OK9ss/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/NC8xMC8xMi80Ny9z/b2NpYWwtbmV0d29y/a3MtNTAyNTY1N182/NDAuanBn",
            likes: 209,
            timestamp:"5d",
        },
        {
            user: "varun",
            postImage:"https://imgs.search.brave.com/zthGUiap3unTzNE44yliBSFYMdUWO26R8xUxKF4fvxk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Ny8zMS8wNC8xMS90/b21hdG8tMjU1NjQy/Nl82NDAuanBn",
            likes: 79,
            timestamp:"10d",
        },
    ]);
    return(
        <div className="timeline">
            <div className="timeline__left">
                <div className="timeline__posts">
                  {posts.map((post) => (
                    <Post 
                    user={post.user} 
                    postImage={post.postImage} 
                    likes={post.likes} 
                    timestamp={post.timestamp}
                    />
                  ))}
                </div>
            </div>
            <div className="timeline__right">
                <Sugesstions />
            </div>
        </div>
    )
}

export default Timeline