const SelectRover = ({ setRover, setCamera }) => {
  return (
    <section className="selectrover">
      <button
        onClick={() => setRover("spirit") & setCamera("")}
        className="spirit"
      >
        <img src="/icons/rover.png" alt="Spirit rover" />
        <h3>Spirit</h3>
      </button>
      <button
        onClick={() => setRover("opportunity") & setCamera("")}
        className="opportunity"
      >
        <img src="/icons/rover.png" alt="Opportuniy rover" />
        <h3>Opportunity</h3>
      </button>
      <button
        onClick={() => setRover("curiosity") & setCamera("")}
        className="curiosity"
      >
        <img src="/icons/rover.png" alt="Curiosity rover" />
        <h3>Curiosity</h3>
      </button>
     
    </section>
  );
};

export default SelectRover;
