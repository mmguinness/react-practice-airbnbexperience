export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-image" src={"./" + props.card.img} alt="headshot" />
      <div className="card-stats">
        <img width="15px" src={"./" + props.card.img} alt="star" />
        {props.card.rating} 
        <span className="grey"> ({props.card.reviewCount}) </span>
        <span className="grey"> {props.card.location} </span>
      </div>
      <p className="card-title"> {props.card.title} </p>
      <p className="card-price">
        <span className="bold">From ${props.card.price}</span> / person
      </p>
    </div>
  );
}
