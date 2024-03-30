const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const startContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyles = {
  fontSize: "1.5rem",
  margin: 0,
};

export const StarRating = ({ maxRating = 5 }) => {
  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <span key={index}>⭐️</span>
        ))}
      </div>
      <p style={textStyles}>{maxRating}</p>
    </div>
  );
};
