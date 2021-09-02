import { useState } from 'react';
import '../styles/officerviewvisitor.css';
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../data/dummyData';
import Navbar from '../components/Navbar';


function OfficerViewVisitor() {
    const [data, setData] = useState( userRows );   // not import test data

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {field: 'visitorName', headerName: 'Visitor Name', width: 220,},
        { field: 'contactNo', headerName: 'Contact No', width: 150 },
        { field: 'NICNo', headerName: 'NIC No', width: 150 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'city', headerName: 'City', width: 120 },
    ];

    return (
        <>
            <Navbar />
            <div className="OfficerViewVisitor">
                <DataGrid
                    rows={data}
                    // disableSelectionOnClick
                    columns={columns}
                    pageSize={10}
                    // checkboxSelection
                />
            </div>
        </>
    );
}

export default OfficerViewVisitor;
