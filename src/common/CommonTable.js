import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData } from "../store/Actions/DeleteActions"



const CommonTable = ({ tabletemplate, title, Data,checkBox,Admin,Teacher,Student }) => {
  const { titleStudent, titleTeacher, headerData } = tabletemplate;
   const dispatch = useDispatch();
  return (
    <div>
      <h3>{title === "student" ? titleStudent : titleTeacher}</h3>
      <Table
        style={{ height: "100px", width: "1100px" }}
        size="md"
        bordered
        hover
        responsive
      >
        <thead className="thead-dark">
          <tr>
            {checkBox &&  <th><input type="checkbox" id="main" /></th>}
            <th>id</th>
            {headerData?.map((item, index) => {
              return <th id={index+1}>{item.title}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {Data.length === 0
            ? "No Data added yet"
            : Data &&
              Data.map((data, index) => (
                <tr id={index+1}>
                 {checkBox && <td><input type="checkbox" id={data.id}/></td>}
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                <td>
                  <Link className="btn btn-info mr-3"  to={`/edit/${data.id}`}>edit</Link> 
                    <button className="btn btn-danger mr-3" onClick={() => {
                          dispatch(deleteData(data.id));
                        }} >Delete</button>
                  </td> 
                 </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CommonTable;
