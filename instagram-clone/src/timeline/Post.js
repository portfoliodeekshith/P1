import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerAuthor">
                <Avatar>D</Avatar>
                Devara . <span>12h</span>
                </div>
                <MoreHoriz />
                </div>
            <div className="post__image">
                <img src="https://www.istockphoto.com/resources/images/FreePhotos/Free-Photo-740x492-2058274222.jpg" alt="" />
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconMain">
                        <FavoriteBorderIcon className="postIcon"/>
                        <ChatBubbleOutlineIcon className="postIcon"/>
                        <TelegramIcon className="postIcon"/>
                    </div>
                    <div className="post__iconSave">
                        <BookmarkBorderIcon className="postIcon"/>
                    </div>
                </div>
                Liked by 25 people.
            </div>
        </div>
    )
}

export default Post 