import React, { useContext } from 'react';
import { data } from '../../data';

const PersonContext = React.createContext();

const T81_32_context_api = () => {
  const [people, setPeople] = React.useState(data);

  const removePerson = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h3>prop drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);

  return (
    <>
      {people.map((person) => (
        <SinglePerson key={person.id} {...person} />
      ))}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default T81_32_context_api;
