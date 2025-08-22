import React from "react";
import "./Gig.scss";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Utils/newRequest.js";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reviews from "../../components/reviews/Reviews.jsx";

// function Gig() {
//   const { id } = useParams();

//   const { isLoading, error, data } = useQuery({
//     queryKey: ["gig"],
//     queryFn: () =>
//       newRequest.get(`/gigs/single/${id}`).then((res) => {
//         return res.data;
//       }),
//   });

//   const {
//     isLoading: isLoadingUser,
//     error: errorUser,
//     data: dataUser,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: () =>
//       newRequest.get(`/users/${data.userId}`).then((res) => {
//         return res.data;
//       }),
//   });
//   // console.log(data);
// // console.log(dataUser.image);


//   return (
//     <div className="gig">
//       {isLoading ? (
//         "Loading"
//       ) : error ? (
//         "Something Went Wrong!"
//       ) : (
//         <div className="container">
//           <div className="left">
//             <span className="breadcrumbs">Fiverr | Graphics & Design |</span>
//             <h1>{data.title}</h1>
//             {isLoadingUser ? (
//               "Loading"
//             ) : errorUser ? (
//               "Something Went Wrong!"
//             ) : (
//               <div className="user">
//                 <img
//                   className="pp"
//                   src={dataUser.img || "/img/no-avatar.png"}
//                   alt=""
//                 />
//                 <span>{dataUser.username}</span>
//                 <div className="star">
//                   {data?.starNumber > 0 ? (
//                     [...Array(data.starNumber)].map((_, index) => (
//                       <img key={index} src="/img/star.png" alt="star" />
//                     ))
//                   ) : (
//                     <span>No rating</span>
//                   )}
//                 </div>
//               </div>
//             )}

//             {/* swiper */}
//             <Swiper
//               modules={[Navigation, Pagination]}
//               navigation
//               loop={true}
//               pagination={false}
//               slidesPerView={1}
//               slidesPerGroup={1}
//               className="slider"
//             >
//               {data.images.map((img) => (
//                 <SwiperSlide>
//                   <img src={img} key={img} alt="Image" />
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             <h2>About This Gig</h2>
//             <p>{data.desc}</p>

//             {isLoadingUser ? (
//               "Loading"
//             ) : errorUser ? (
//               "Something Went Wrong!"
//             ) : (
//               <div className="seller">
//                 <h2>About The Seller</h2>
//                 <div className="user">
//                   <img src={dataUser.img || "/img/no-avatar.png"} alt="" />
//                   <div className="info">
//                     <span>{dataUser.username}</span>

//                     <div className="star">
//                       {data?.starNumber > 0 ? (
//                         [...Array(data.starNumber)].map((_, index) => (
//                           <img key={index} src="/img/star.png" alt="star" />
//                         ))
//                       ) : (
//                         <span>No rating</span>
//                       )}
//                     </div>

//                     <button>Contact Me</button>
//                   </div>
//                 </div>
//                 <div className="box">
//                   <div className="items">
//                     <div className="item">
//                       <span className="title">From</span>
//                       <span className="desc">{dataUser.country}</span>
//                     </div>
//                     <div className="item">
//                       <span className="title">Member since</span>
//                       <span className="desc">Aug 2022</span>
//                     </div>
//                     <div className="item">
//                       <span className="title">Avg. response time</span>
//                       <span className="desc">4 hours</span>
//                     </div>
//                     <div className="item">
//                       <span className="title">Last delivery</span>
//                       <span className="desc">1 day</span>
//                     </div>
//                     <div className="item">
//                       <span className="title">Languages</span>
//                       <span className="desc">English</span>
//                     </div>
//                   </div>
//                   <hr />
//                   <p>{dataUser.desc}</p>
//                 </div>
//               </div>
//             )}
//             <Reviews gigId={id} />
//           </div>
//           <div className="right">
//             <div className="price">
//               <h3>{data.shortTitle}</h3>
//               <h2>$ {data.price}</h2>
//             </div>
//             <p>{data.shortDesc}</p>
//             <div className="details">
//               <div className="item">
//                 <img src="/img/clock.png" alt="" />
//                 <span>{data.deliveryTime} Days Delivery</span>
//               </div>
//               <div className="item">
//                 <img src="/img/recycle.png" alt="" />
//                 <span>{data.revisionNumber} Revisions</span>
//               </div>
//             </div>
//             <div className="features">
//               {data.features.map((feature) => (
//                 <div className="item" key={feature}>
//                   <img src="/img/greencheck.png" alt="" />
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <button>Continue</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Gig;







// sir wala code



function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Fiverr {">"} Graphics & Design {">"}
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "/img/no-avatar.png"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            
<Swiper
              modules={[Navigation, Pagination]}
              navigation
              loop={true}
              pagination={false}
              slidesPerView={1}
              slidesPerGroup={1}
              className="slider"
            >
              {data.images.map((img) => (
                <SwiperSlide>
                  <img src={img} key={img} alt="Image" />
                </SwiperSlide>
              ))}
            </Swiper>

            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
            <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;