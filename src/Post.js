import React,{forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOptions from './InputOption'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Post=forwardRef(({name ,description , message , photoUrl },ref)=> {
  return (
    <div ref={ref} className="post">
        <div className='post__header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className='post__buttons'>
            <InputOptions Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
            <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
            <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
})

export default Post