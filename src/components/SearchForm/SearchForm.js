export default function SearchForm({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit"></button>
    </form>
  );
}
