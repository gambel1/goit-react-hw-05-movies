import { useLocation, useNavigate } from 'react-router-dom';
// import { Input, Space } from 'antd';

// const { Search } = Input;
// const onSearch = value => console.log(value);

export default function SearchForm() {
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
        {/* <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onFormSubmit}
            style={{
              width: 200,
            }}
          />
        </Space> */}

        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
