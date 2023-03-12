import React, { useState } from 'react';
import employeeList from '../../assets/JsonData/employee_list.json';

const Employee = ({ index, employee, onDelete }) => {
  const handleDeleteRow = () => {
    onDelete(index);
  };

  return (
    <tr>
      <td width="10">
        <input type="checkbox" name="check1" value="1" />
      </td>
      <td>{employee.ID}</td>
      <td>{employee.Name}</td>
      <td>
        <img className="img-card-person" src={employee.Image} alt="" />
      </td>
      <td>{employee.Address} </td>
      <td>{employee.Birthday}</td>
      <td>{employee.Gender}</td>
      <td>{employee.Phone}</td>
      <td>{employee.Position}</td>
      <td className="table-td-center">
        <button className="btn btn-primary btn-sm trash" type="button" title="Xóa" onClick={handleDeleteRow}>
          <i className="bx bx-trash"></i>
        </button>
        <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                      data-toggle="modal" data-target="#ModalUP"><i class='bx bx-edit' ></i>
        </button>
      </td>
    </tr>
  );
};

const Table = () => {
  const [tableData, setTableData] = useState(employeeList);

  const handleDeleteRow = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th width="10">
            <input type="checkbox" id="all" />
          </th>
          <th>ID nhân viên</th>
          <th width="150">Họ và tên</th>
          <th width="20">Ảnh thẻ</th>
          <th width="300">Địa chỉ</th>
          <th>Ngày sinh</th>
          <th>Giới tính</th>
          <th>SĐT</th>
          <th>Chức vụ</th>
          <th width="100">Tính năng</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((employee, index) => (
          <Employee key={employee.ID} index={index} employee={employee} onDelete={handleDeleteRow} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
