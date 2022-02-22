import { useSelector, useDispatch } from 'react-redux';
import { handleFilter } from '../../redux/slice';
const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label>
      <p> Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(handleFilter(event.target.value))}
      ></input>
    </label>
  );
};

export default Filter;
