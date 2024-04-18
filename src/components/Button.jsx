

// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => (
  <button type="button" className={`bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${styles}`}>
    Get Started
  </button>
);

export default Button;
