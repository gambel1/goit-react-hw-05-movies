import { useLocation, useNavigate } from 'react-router-dom';

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();

  function onFormSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
