const Card = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#0D3140 ",
          margin: "10px",
          padding: "16px",
          color: "#ffffff",
        }}
      >
        {children}
      </div>
    </>
  );
};
export default Card;
