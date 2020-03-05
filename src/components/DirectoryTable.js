import React from 'react';
import MaterialTable from 'material-table';
import { baseUrl } from '../utils/API.ts';

const DirectoryTable = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'first_name' },
      { title: 'Last Name', field: 'last_name' },
      {
        title: 'Department',
        field: 'department',
        lookup: { 1: 'Platform1', 2: 'SpaceCamp', 3: 'LevelUP' },
      },
      {
        title: 'Team',
        field: 'team',
        lookup: { 1: 'Gravitas', 2: 'Napoleon', 3: 'Party Bus', 4: 'Big Bang' }
      }
    ],
    data: [
      { first_name: 'Genesis', last_name: 'Murillo', department: 1, team: 2 },
      { first_name: 'Shannon', last_name: 'Romero', department: 1, team: 2 }
    ],
  });
  
baseUrl.get('/employees/')
  .then(function(response){
    console.log(response.data);
  }).catch(function(error){
    console.log(error);
  });
  
  return (
    
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

export default DirectoryTable;
