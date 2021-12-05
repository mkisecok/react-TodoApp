import "../App.css";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button disabled={disabled} className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
