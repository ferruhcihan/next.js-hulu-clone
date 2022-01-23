const Results = ({ results }) => {
  return (
    <div>
      {results.map((item, index) => (
        <h3 key={index}>{item.title}</h3>
      ))}
    </div>
  );
};

export default Results;
