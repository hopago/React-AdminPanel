import './datatable.scss';
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from '../../datatableSource';


const DataTable = () => {

    const actionsColumn = [
        {field: 'action', headerName: 'Action', width: 200, renderCell: () => {
            return (
                <div className='cellAction'>
                    <div className='viewButton'>View</div>
                    <div className='deleteButton'>Delete</div>
                </div>
            )
        }}
    ];

  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionsColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable
