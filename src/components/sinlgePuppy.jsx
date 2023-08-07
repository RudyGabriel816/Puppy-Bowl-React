const singlePuppy = ({ contact }) => {
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.id}</td>
        <td>{contact.breed}</td>
      </tr>
    );
  }
  
  export default singlePuppy;