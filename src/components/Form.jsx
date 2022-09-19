import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  
    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [purpose, setPurpose] = useState("");
    const [date, setDate] = useState("");
    const [visitors, setVisitors] = useState([
      {
        id: 1,
        firstname: "Eddie",
        lastname: "Gingco",
        purpose: "Payment",
        date: "10-20-29",
      },
      {
        id: 2,
        firstname: "Eds",
        lastname: "Gins",
        purpose: "Visit my son",
        date: "03-20-31",
      },
    ]);


  const history = useNavigate();

  const handleAdd = () => {
    const newPeople = {
      firstname: firstname,
      lastname: lastname,
      purpose: purpose,
      date: date,
    };

    setVisitors((prev) => [...prev, newPeople]);
    console.log(visitors);
  };


  const handleDelete = (id) => {
    let index = visitors
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    visitors.splice(index, 1);
    console.log(index);
    console.log("delete btn");
    history("/");
  };


    return (
        <div className="Form mt-4 d-flex justify-content-between">
        <div className="card">
            <div className="container">
                <div className="card-title">
                <h1>Visitor Entry</h1>
                </div>
            <div className="card-body">

                <label htmlFor="firstname">Firstname</label>
                <br/>
                <input type="text"  name="firstname" placeholder="Firstname" 
                  onChange={(e) => {
                  setFirstname(e.target.value);
                  }}
                  className="w-100"
                  />
                <br/>

                <label htmlFor="lastname">Lastname</label>
                <br/>
                <input type="text" name="lastname" placeholder="Lastname" 
                    onChange={(e) => {
                    setLastname(e.target.value);
                    }}
                    className="w-100"
                />
                <br />
                <label htmlFor="purpose">Purpose</label>
                <br />
                <textarea cols="5" rows="5" type="text" name="purpose"  placeholder="What's your purpose in coming here?" 
                    onChange={(e) => {
                    setPurpose(e.target.value);
                    }}
                    className="w-100"
                />
                <br />
                <label htmlFor="date">Date</label>
                <br />
                <input type="date" name="date"
                    onChange={(e) => {
                    setDate(e.target.value);
                    }}
                    className="w-100"
                />
                <br />
                <button
                    onClick={handleAdd}
                    className="btn btn-success btn-sm mt-3 w-100"
                >
                    Submit
                </button>
            </div>
            
            </div>
        </div>
    
        <div className="table w-75">
          <table className="table table-striped">
            <thead className="thead-dark bg-primary">
              <tr>
                <th scope="col">Fullname</th>
                <th scope="col">Purpose</th>
                <th scope="col">Date</th>
                {/* <th scope="col">Edit</th> */}
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((visitor, index) => {
                return (
                  <tr key={index}>
                    <td>{visitor.lastname},&nbsp; {visitor.firstname}</td>
                    <td>{visitor.purpose}</td>
                    <td>{visitor.date}</td>
                    {/* <td>
                      <button
                        className="btn btn-sm bg-info m-1 w-50 text-white"
                        onClick={() => handleEdit(visitor.id)}
                      >
                        edit
                      </button>
                    </td> */}
                    <td>
                      <i className="fa fa-times-circle m-1 h-50 w-50 text-danger" 
                        onClick={() => handleDelete(visitor.id)} id="b1">
                       
                      </i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
}
 
export default Form;











// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = (id) => {
//   setShow(true);
//   // visitors.splice(index, 1);
//   // console.log("delete btn");
//   console.log(index);
//   history("/");
// };
