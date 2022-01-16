function RadioButtons({ name }) {
  return (
    <ul>
      <li>
        <input id={`${name}1`} type="radio" name={name} value="1" />
        <label htmlFor={`${name}1`}>1</label>
      </li>
      <li>
        <input id={`${name}2`} type="radio" name={name} value="2" />
        <label htmlFor={`${name}2`}>2</label>
      </li>
      <li>
        <input id={`${name}3`} type="radio" name={name} value="3" />
        <label htmlFor={`${name}3`}>3</label>
      </li>
      <li>
        <input id={`${name}4`} type="radio" name={name} value="4" />
        <label htmlFor={`${name}4`}>4</label>
      </li>
    </ul>
  );
}
export default RadioButtons;
