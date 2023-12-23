import React from 'react'

const Main = ({odd}) => {
  return (
    <div className='main'>

        <div className="c" id='g1'>
            <p className="groupName" >
                <p className="name">gname</p>
                <button onClick={odd}>change</button>
            </p>
            <div className="groupImages">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
            </div>
        </div>
        <div className="c" id='g2'>
            <p className="groupName" >
                <p className="name">gname</p>
                <button onClick={odd}>change</button>
            </p>
            <div className="groupImages">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
            </div>
        </div>
    </div>
  )
}

export default Main