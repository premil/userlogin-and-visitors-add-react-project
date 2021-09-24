// import { useState } from 'react';
import '../styles/officerviewvisitor.css';
// import { DataGrid } from '@material-ui/data-grid';
// import { userRows } from '../data/dummyData';
import Navbar from '../components/Navbar';
import ViewVisitor from '../components/ViewVisitor';
// import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { getAllList }   from '../redux/actions/viewListAction';     // import redux/action ==> fetchpost



function OfficerViewVisitor() {
    /* const [data, setData] = useState(userRows);   // not import test data

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'visitorName', headerName: 'Visitor Name', width: 220, },
        { field: 'contactNo', headerName: 'Contact No', width: 150 },
        { field: 'NICNo', headerName: 'NIC No', width: 150 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'city', headerName: 'City', width: 120 },
    ]; */


    // function match(dispatch) {
    //     return bindActionCreators((FetchPost), dispatch)
    // }

    // connect(null, match)

     const dispatch = useDispatch();

     const handleClick = () => {
         dispatch(getAllList());
     }

    return (
        <>
            <Navbar />
            {/* <div className="OfficerViewVisitor">
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                />
            </div> */}
            <div className="fetch-post">
                <button
                    className="fetch-data"
                    onClick={handleClick}
                    >
                    View List
                </button>

            </div>
            <ViewVisitor />
        </>
    );
}

export default OfficerViewVisitor;
