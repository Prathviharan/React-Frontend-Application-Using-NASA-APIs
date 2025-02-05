import "../styles/astro_img.scss";

const Figure = ({ data }) => {
  return (
    <figure>
      <img src={data.url} alt={data.title} />
      <div className="window">
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title">{data.title}</h1>
          <button aria-label="Resize" className="resize"></button>
        </div>
        <div className="details-bar">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <p>{data.explanation}</p>
      </div>
    </figure>
  );
};

export default Figure;