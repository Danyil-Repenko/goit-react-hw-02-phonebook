export const ContactItem = ({ name, number, handleRemoval }) => {
  return (
    <li onClick={handleRemoval}>
      {name}: {number}
      <button type="button">Delete</button>
    </li>
  );
};
