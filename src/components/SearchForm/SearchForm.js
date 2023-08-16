import { useLocation, useNavigate } from 'react-router-dom';
import { Input } from 'antd';

const { Search } = Input;

export default function SearchForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const onSearch = value => {
    navigate({
      ...location,
      search: `query=${value}`,
    });
  };

  return (
    <div>
      <form>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="medium"
          onSearch={onSearch}
          style={{
            width: '30%',
          }}
        />
      </form>
    </div>
  );
}
