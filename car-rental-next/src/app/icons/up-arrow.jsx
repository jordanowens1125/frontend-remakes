const UpArrowSvgComponent = ({ fill = "currentColor", stroke = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      fill={stroke}
      fillRule="evenodd"
      d="M12 7a1 1 0 0 1 .707.293l7 7a1 1 0 0 1-1.414 1.414L12 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default UpArrowSvgComponent;
