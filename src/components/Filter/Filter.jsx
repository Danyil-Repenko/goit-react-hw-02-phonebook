export const Filter = ({ handleInput }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleInput} />
    </div>
  );
};
