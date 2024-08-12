const Cameras = ({ setCamera, camera, rover }) => {
  return (
    <section className="cameras">
      {camera !== "" ? <h2>{camera}</h2> : <h2>Select the camera:</h2>}

      <div>
        <button onClick={() => setCamera("FHAZ")}>FHAZ</button>
        <button onClick={() => setCamera("RHAZ")}>RHAZ</button>
        <button onClick={() => setCamera("NAVCAM")}>NAVCAM</button>
        {rover === "curiosity" ? (
          <>
            <button onClick={() => setCamera("MAST")}>MAST</button>
            <button onClick={() => setCamera("CHEMCAM")}>CHEMCAM</button>
            <button onClick={() => setCamera("MAHLI")}>MAHLI</button>
            <button onClick={() => setCamera("MARDI")}>MARDI</button>
          </>
        ) : null}
        {rover === "opportunity" || rover === "spirit" ? (
          <>
            <button onClick={() => setCamera("PANCAM")}>PANCAM</button>
            <button onClick={() => setCamera("MINITES")}>MINITES</button>
          </>
        ) : null}
        <button onClick={() => setCamera("")}>All Cameras</button>
      </div>
    </section>
  );
};

export default Cameras;
