import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widgets.css'
function Widgets() {
    const newsArticle = (heading , subtitle)=>(
        <div className='widgets__article'>
            <div className='widgets__articleleft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
            
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
            
        </div>
        {newsArticle("PAPA react is back", " To news - 9009 readers")}
        {newsArticle("Coronavirus: UK updates", " To news - 886 readers")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
        {newsArticle("Bitcoin Breaks $22k","Cryptography - 8000 readers")}
        {newsArticle("Is Redux too good?","Code - 123 readers")}
        {newsArticle("PAPA react lauches courses"," top news - 3432 readers")}

    </div>
  )
}

export default Widgets