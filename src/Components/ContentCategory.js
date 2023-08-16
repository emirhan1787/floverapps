import React from 'react'
import './ContentCategory.css'

const LeftCards = [
  {
    category: "Fresh Flovers",
    img: true
  },

  {
    category: "Live Plants",
    img: true
  },
  {
    category: "Fresheners",
    img: false
  }

]

const RightCards = [
  {
    category: "Dried Flowers",
  },
  {
    category: "Aroma Candels",
  },
]


const ContentCategory = () => {


  return (
    <>
      <div>
        {LeftCards?.map((item, key) => (
          <div key={key}>
            <div className='cardCategory'>
              <div className='cardCategoryLabel'>
                <span>{item?.category}</span>
              </div>
              <div className='categoryText'>
                <span className='categoryTextBtn'>Shop Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z" fill="black" />
                </svg>
              </div>
            </div>

            {item?.img && <div className={`cardItemImg${2 * (key + 1)}`} />}
          </div>
        ))}


        {/* <div className='cardCategory'>
          <div className='cardCategoryLabel'>
            <span>Live Plants</span>
          </div>
          <div className='categoryText'>
            <span className='categoryTextBtn'>Shop Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z" fill="black" />
            </svg>
          </div>
        </div>

        <div className='cardItemImg1' />


        <div className='cardCategory'>
          <div className='cardCategoryLabel'>
            <span>Fresheners</span>
          </div>
          <div className='categoryText'>
            <span className='categoryTextBtn'>Shop Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z" fill="black" />
            </svg>
          </div>
        </div> */}
      </div>


      <div>
        {RightCards?.map((item, key) => (
          <div key={key}>
            <div className={`cardItemImg${2 * (key + 1) - 1}`} />

            <div className='cardCategory'>
              <div className='cardCategoryLabel'>
                <span>{item?.category}</span>
              </div>
              <div className='categoryText'>
                <span className='categoryTextBtn'>Shop Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z" fill="black" />
                </svg>
              </div>
            </div>
            
            {key === 1 && <div className={`cardItemImg5`} />}
          </div>
        ))}
        {/* <div className='cardItemImg3' />

        <div className='cardCategory'>
          <div className='cardCategoryLabel'>
            <span>Fresh Flowers</span>
          </div>
          <div className='categoryText'>
            <span className='categoryTextBtn'>Shop Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z" fill="black" />
            </svg>
          </div>
        </div>

        <div className='cardItemImg4' />

        <div className='cardCategory'>
          <div className='cardCategoryLabel'>
            <span>Live Plants</span>
          </div>
          <div className='categoryText'>
            <span className='categoryTextBtn'>Shop Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z" fill="black" />
            </svg>
          </div>
        </div>

        <div className='cardItemImg5' /> */}

      </div>

    </>
  );
};


export default ContentCategory