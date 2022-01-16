function Checkboxes({ name }) {
  return (
    <ul>
      <li>
        <label>
          <input name={name} type="checkbox" value="colour" />
          It's yellow!
        </label>
      </li>
      <li>
        <label>
          <input name={name} type="checkbox" value="sound" />
          It squeaks!
        </label>
      </li>
      <li>
        <label>
          <input name={name} type="checkbox" value="logo" />
          It has a logo!
        </label>
      </li>
      <li>
        <label>
          <input name={name} type="checkbox" value="size" />
          Its big!
        </label>
      </li>
    </ul>
  );
}

export default Checkboxes;
