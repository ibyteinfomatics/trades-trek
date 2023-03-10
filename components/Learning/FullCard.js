import React from 'react'

const FullCard = ({item}) => {
  return (
    <div className='FullCard'>
      <div className='learningCard'>
        <div className='cardTitle'>
          <div className='cardIcon'>
           <img  src={`${item.baseUrl}${item.filePath}`}/>
          </div>
          <h4>{item?.categoryName}</h4>
        </div>
        <div className='cardText blueText'>
        {item?.result?.map((data) => {
            return (
              <p>
                <a target="_blank" href={data?.url}>
                  {data?.title}
                </a>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default FullCard