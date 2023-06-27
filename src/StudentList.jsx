import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Sdata from './Sdata'

const StudentList = () => {
    return (
        <>
            <h2 className='text-center'>Student List </h2>

            <div className="row border">
                <div className="col-md-1 text-center fw-bold border">
                    No.
                </div>
                <div className="col-md-3 text-center fw-bold border">
                    Name
                </div>
                <div className="col-md-4 text-center fw-bold border">
                    Email
                </div>
                <div className="col-md-4 text-center fw-bold border">
                    Action
                </div>
            </div>

            {Sdata.map((value, i) => {
                console.log(value.sid);
                return (
                    <div className="row border">
                        <div className="col-md-1 text-center fw-bold border">
                            {value.sid}
                        </div>
                        <div className="col-md-3 text-center fw-bold border">
                            {value.sname}
                        </div>
                        <div className="col-md-4 text-center fw-bold border">
                            {value.semail}
                        </div>
                        <div className="col-md-4 text-center fw-bold border">
                            <VisibilityIcon /> <EditIcon /> <DeleteIcon />
                        </div>
                    </div>
                )

            }
            )}

        </>
    )
}

export default StudentList