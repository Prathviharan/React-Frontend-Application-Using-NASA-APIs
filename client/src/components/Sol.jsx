const Sol = ({setSol, sol}) => {
  return (
    <section className="sol">
      <h2>SOL - {sol}</h2>
      <input
        type="range"
        min="100"
        max="3200"
        id="solinput"
        step="100"
        onChange={() => setSol(solinput.value)}
      />
    </section>
  );
};

export default Sol;