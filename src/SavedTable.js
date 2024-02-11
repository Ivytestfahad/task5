// SavedTable.js

import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';
// import './SavedTable.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; 
const SavedTable = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [savedData, setSavedData] = useState([]);

  const handleBlurFirstName = (e) => {
    setFirstName(e.target.value);
    saveData();
  };

  const handleBlurLastName = (e) => {
    setLastName(e.target.value);
    saveData();
  };

  const saveData = () => {
    if (firstName && lastName) {
      setSavedData([...savedData, { firstName, lastName }]);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div className="centered-container">
  <Table striped>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</Table>
    </div>
  );
};

export default SavedTable;
