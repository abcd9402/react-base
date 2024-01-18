import React from 'react';


function Modal({상세}){
    
    return (
        
        <div className='modal'>
            <h4>제목:{상세.title} </h4>
            <p>날짜:{상세.date}</p>
            <p>상세내용</p>
        </div>
    )
};


export default Modal;