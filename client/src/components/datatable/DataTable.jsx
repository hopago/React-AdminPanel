import './datatable.scss';
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from '../../datatableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const DataTable = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter(item => item.id !== id));
    };

    const actionsColumn = [
        {field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to="/users/userId" className='link'>
                      <div className='viewButton'>View</div>
                    </Link>
                    <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }}
    ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to='/users/new' className='link'>
          Add
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionsColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable
