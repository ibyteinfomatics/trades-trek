import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";


const SuggestCard = () => {
  const [topCompanies, setTopCompanies] = useState()
  const { topCompany } = useSelector((state) => state.popularCompanyWrapper)
  useEffect(() => {
    setTopCompanies(topCompany)
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 10000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="explore--comp">
      <h3 className="heading3">EXPLORE OTHER POPULAR COMPANIES</h3>
      <div className="explore_flex">
       {topCompanies && <Carousel responsive={responsive}
          autoPlay={false}
          autoPlaySpeed={1500}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="topScrollContent">
          {topCompanies && topCompanies.map((item, index) => {
            return (
              <div key={index} className="card--style">
                <div className="card--data p--4">
                  <div className="card--row">
                    <ul>
                      <li>
                        <p className="card--title--label">Stock Name</p>
                        <p className="card--title">{item.Symbol}</p>
                        <p className="card--title">{item.Name}</p>

                      </li>

                      <li>
                        <p className="card--title--label">Current Price</p>
                        <p className="card--title">{item.Last?.toFixed(2)}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="card--row">
                    <ul>
                      <li>
                        <p className="card--title--label">Volume</p>
                        <p className="card--title">{item?.Volume}</p>
                      </li>

                      <li>
                        <p className="card--title--label">Change</p>
                        <p className="card--title">{item?.Change}</p>
                      </li>

                      <li>
                        <p className="card--title--label">%Change</p>
                        <p className="card--title">{item?.PerChange}%</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </Carousel>}
      </div>

    </div>
  );
};

export default SuggestCard;
