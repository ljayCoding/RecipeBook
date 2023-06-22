import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LinkButton = ({ url, name, variant }) => {
  return (
    <>
      {!variant && (
        <Link to={url} style={{ textDecoration: 'none' }}>
          <button>{name}</button>
        </Link>
      )}
      {variant === 'outlined' && (
        <Link to={url} style={{ textDecoration: 'none' }}>
          <button className="outlined-button">{name}</button>
        </Link>
      )}
      {variant === 'solid' && (
        <Link to={url} style={{ textDecoration: 'none' }}>
          <button className="outlined-button">{name}</button>
        </Link>
      )}
    </>
  );
};
export default LinkButton;
