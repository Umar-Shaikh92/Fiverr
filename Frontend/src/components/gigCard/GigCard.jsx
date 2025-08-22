import { useQuery } from "@tanstack/react-query";
import "./GigCard.scss";
import { Link } from "react-router";
import newRequest from "../../Utils/newRequest.js";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`${item.userId}`],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "Loading"
          ) : error ? (
            "Something Went Wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/img/no-avatar.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>

          <div className="star">
            {item?.starNumber > 0 ? (
              [...Array(item.starNumber)].map((_, index) => (
                <img key={index} src="./img/star.png" alt="star" />
              ))
            ) : (
              <span>No rating</span>
            )}
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              {/* <sup>99</sup> */}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
