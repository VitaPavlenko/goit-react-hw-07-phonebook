import { useSelector, useDispatch } from 'react-redux';
// import { contactsActions } from 'redux/index';
import { removeContact } from '../../redux/operations';

const filterInputHandler = (filter, contact) => {
  if (contact.length > 0) {
    return contact.filter(item =>
      item.name.toLowerCase().includes(filter?.toLowerCase())
    );
  }
  return [];
};

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contact = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const contacts = filterInputHandler(filter, contact);

  return (
    <ul>
      {contacts.map(
        ({ id, name, number }) =>
          contacts && (
            <li key={id}>
              {name}
              {number}
              <button onClick={() => dispatch(removeContact(id))}>
                Delete
              </button>
            </li>
          )
      )}
    </ul>
  );
};

export default ContactList;
