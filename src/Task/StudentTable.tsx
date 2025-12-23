import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_STUDENT, EDIT_STUDENT } from "../redux/actions";
import { Link } from "react-router-dom";
import "./StudentForms.css";
import { SET_EDIT_STUDENT } from "../redux/actions";
import { Student } from "../types/Student";
import { useNavigate } from "react-router-dom";

  interface RootState {
    students: {
      students: Student[];
    };
  }

  const StudentTable: React.FC = () => {
    const students = useSelector(
      (state: RootState) => state.students.students
    );

    const dispatch = useDispatch();

    const handleEdit = (student: Student) => {
      dispatch({
        type: SET_EDIT_STUDENT,
        payload: student,
      });
    };

    const navigator = useNavigate();


    const handleDelete = (id: number) => {
      // dispatch({ type: DELETE_STUDENT, payload: id });


      if(students.length <= 1){
        navigator('/');
        dispatch({ type: DELETE_STUDENT, payload: id });
        return
      }
      dispatch({ type: DELETE_STUDENT, payload: id });
       

    };

    return (
      <div className="table-container">
        
        <section className="view-head table-heading">
          <h1>Your Details</h1>
        </section>
        <button className="btns" ><Link to='/'>Form</Link></button>

        <table id="final-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Branch</th>
              <th>Joining</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td className="name">{s.fname} {s.lname}</td>
                <td>{s.gender}</td>
                <td>{s.branch}</td>
                <td>{s.dateofjoining}</td>
                <td>{s.mobile}</td>
                <td>
                  <button className="btns editBtn" onClick={() => handleEdit(s)}><Link to='/'>Edit</Link></button>
                  <button className="btns deleteBtn" onClick={() => handleDelete(s.id!)} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default StudentTable;

