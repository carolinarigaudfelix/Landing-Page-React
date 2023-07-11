import "./style.css"
type TCardProps = {     
  cardTitle: string;
  cardImage: string;
  cardDescription: string;
  cardURL: string;
};
export function Card({cardTitle, cardImage, cardDescription, cardURL}:TCardProps) {   
  return (
    <div className="card">
      <div className="card-image">
        <img src={cardImage} />
      </div>
      <div className="card-content">
        <p className="titles">{cardTitle}</p>
        <p>{cardDescription}</p>
        <a href={cardURL}>Learn More {"->"}</a>
      </div>
    </div>
  );
}
