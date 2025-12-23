import React, { useState, useEffect, FormEvent } from "react";
import "./StudentForms.css";
import { Link, useNavigate  } from "react-router-dom";
import { Student } from "../types/Student";
import { useDispatch } from "react-redux";
import { ADD_STUDENT, UPDATE_STUDENT } from "../redux/actions";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";


const StudentForms: React.FC = () => {
  const [student, setStudent] = useState<Student>({
    fname: "",
    lname: "",
    gender: "",
    dateofbirth: "",
    branch: "",
    dateofjoining: "",
    graduation: "",
    fathername: "",
    mothername: "",
    mobile: "",
    email: "",
    aadhar: "",
    photo: "",
    ssc: "",
    inter: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  

  const selectedStudent = useSelector(
    (state: RootState) => state.students.selectedStudent
  );

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
      setEditId(selectedStudent.id!);
    }
  }, [selectedStudent]);



  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(student)

    if (editId !== null) {
      console.log("Updating student with ID:", editId);
      dispatch({
        type: UPDATE_STUDENT,
        payload: { ...student, id: editId },
      });
      navigate("/table");
    } else {
      dispatch({
        type: ADD_STUDENT,
        payload: student,
      });
      navigate("/table");
    }


    setStudent({
      fname: "",
      lname: "",
      gender: "",
      dateofbirth: "",
      branch: "",
      dateofjoining: "",
      graduation: "",
      fathername: "",
      mothername: "",
      mobile: "",
      email: "",
      aadhar: "",
      photo: "",
      ssc: "",
      inter: "",
    });
    navigate('/table');
  };

  return (
    <div >
      <header>
          <h1>Student Form</h1>
          <p>This is only for the Training Purpose  Only not for Real Time</p>
      </header>  
      <div className="main">
          <div  className="Student-Form">
              <section  className="view-head">
                  <h1>Fill The form</h1>
                  <p>Fill the form very carefully and Submit the Form</p>
              </section>
              <div>
                <button className="btns" ><Link to='/table'>Table</Link></button>
              </div>
              <form onSubmit={handleSubmit} >
                  <div  className="details">
                      <label htmlFor="fname">First Name:</label>
                      <input type="text" id="fname" name="fname" placeholder="First Name..." value={student.fname}    onChange={(e) => setStudent({...student,fname: e.target.value})}  required/> 
                      <label htmlFor="lname">Second Name:</label>
                      <input type="text" id="lname" name="lname" placeholder="Last Name..." value={student.lname}   onChange={(e) => setStudent({...student, lname: e.target.value})}    required/><br /><br />
                      <label htmlFor="gender">Gender:</label>
                      <label htmlFor="male"><input type="radio" id="male" name= "gender" value="Male" checked={student.gender === "Male"}   onChange={(e) => setStudent({...student,gender: e.target.value})} /> Male</label>
                      
                      <label htmlFor="female"><input type="radio" id="female" name="gender" value="Female" checked={student.gender === "Female"}   onChange={(e) => setStudent({...student,gender: e.target.value})} /> Female</label> <br /><br />

                      <label htmlFor="dateofbirth">Date of Birth:</label>
                      <input type="date" id="dateofbirth" name="dateofbirth"  value={student.dateofbirth} onChange={(e) => setStudent({...student,dateofbirth: e.target.value})}   required/>
                  </div>
                  <div  className="details">
                      <label htmlFor="branch">Branch:</label>
                      <select name="branch" value={student.branch}  onChange={(e) => setStudent({...student,branch: e.target.value})}    required>
                          <option value="">Select Branch...</option>
                          <option value="Computer Science And Engineering">Computer Science and Engineering</option>
                          <option value="Electronics Communications And Engineering">Electronics Comminication and Engineering </option>
                          <option value="Electrical Engineering">Electrical Engineering</option>
                          <option value="Civil Engineering">Civil Engineering</option>
                          <option value="Mechanical Engineering">Mechanical Engineering</option>
                          <option value="Chemical Engineering">Chemical Engineering</option>
                          <option value="Aerospace Engineering">Aerospace Engineering</option>
                          <option value="Aeronautical Engineering">Aeronautical Engineering</option>
                          <option value="Agricultural Engineering">Agricultural Engineering</option>
                          <option value="Mining Engineering">Mining Engineering</option>
                      </select> <br /><br />
                      <label htmlFor="dateofjoining">Date of Joining:</label>
                      <input type="date" id="dateofjoining" name="dateofjoining"  value={student.dateofjoining} onChange={(e) => setStudent({...student,dateofjoining: e.target.value})}   required/> <br /><br />
                      <label htmlFor="graduation">Year of Graduation: </label>
                      <select name="graduation" id="graduationselect"  value={student.graduation} onChange={(e) => setStudent({...student,graduation: e.target.value})}   required>
                          <option value="">Select..</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                      </select>
                  </div>

                  <div  className="details">
                      <label htmlFor="fathername">Father Name:</label>
                      <input type="text" id="fathername" name="fathername" placeholder="Father Name..." value={student.fathername} onChange={(e) => setStudent({...student,fathername: e.target.value})}  required/>
                      <label htmlFor="mothername">Mother Name:</label>
                      <input type="text" id="mothername" name="mothername" placeholder="Mother Name..." value={student.mothername} onChange={(e) => setStudent({...student,mothername: e.target.value})}   required/> <br /><br />
                      <label htmlFor="mobile">Mobile Number:</label>
                      <input type="number" id="mobile" name="mobile" placeholder="9876543210" value={student.mobile} onChange={(e) => setStudent({...student,mobile: e.target.value})}    required/>
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email"  name="email" placeholder="Email.."  value={student.email} onChange={(e) => setStudent({...student,email: e.target.value})}   required/><br /><br />
                      <label htmlFor="aadhar">Aadhar Number:</label>
                      <input type="number" id="aadhar" name="aadhar" placeholder="12-digit AAdhar Number..." value={student.aadhar} onChange={(e) => setStudent({...student,aadhar: e.target.value})}   required/> <br /><br />
                  </div>

                  <div  className="details">
                      <label>Certifiates Submitted</label><br />
                      
                      <label htmlFor="photo"><input type="checkbox"  id="photo" name="photo" value="photo" checked={student.photo === "photo"}    onChange={(e) => setStudent({...student,photo: e.target.value})}  required/> Passport Size Photo</label><br />
                      
                      <label htmlFor="ssc"><input type="checkbox" id="ssc" name="ssc" value="ssc" checked={student.ssc === "ssc"}  onChange={(e) => setStudent({...student,ssc: e.target.value})}  required/> SSC Certificate </label><br /> 
                      
                      <label htmlFor="inter"><input type="checkbox" id="inter" name="inter" value="inter" checked={student.inter === "inter"}  onChange={(e) => setStudent({...student,inter: e.target.value})}/> Inter Mediate </label>
                  </div>
                  <button type="submit"  className="btn">{editId ? "Update" : "Submit"}</button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default StudentForms;