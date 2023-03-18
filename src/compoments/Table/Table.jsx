import React, { useState , useRef } from 'react';
import employeeList from '../../assets/JsonData/employee_list.json';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Employee = ({ index, employee, onDelete , onEdit, onSave, onCancel}) => {
  const handleDeleteRow = () => {
    onDelete(index);
  };

  const handleEditRow = () => {
    onEdit(employee);
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
      <button
        className="btn btn-primary btn-sm edit"
        type="button"
        title="Sửa"
        data-toggle="modal"
        data-target="#ModalUP"
        onClick={handleEditRow}
      >
        <i className="bx bx-edit"></i>
      </button>
    </td>
  </tr>
  );
};

const Table = () => {
  
  const [tableData, setTableData] = useState(employeeList);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const handleDeleteRow = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };
  const handleSave = () => {
    onSave(editedEmployee);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  
  const handleEditSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedEmployee = {
      ID: editingEmployee.ID,
      Name: form.elements.name.value,
      Image: form.elements.image.value,
      Address: form.elements.address.value,
      Birthday: form.elements.birthday.value,
      Gender: form.elements.gender.value,
      Phone: form.elements.phone.value,
      Position: form.elements.position.value,
    };
    const newData = [...tableData];
    const index = newData.findIndex((employee) => employee.ID === editingEmployee.ID);
    newData[index] = updatedEmployee;
    setTableData(newData);
    setEditingEmployee(null);
    setEditingEmployee(null);
    form.reset();
    setIsModalOpen(false);
  };
  const handleEditCancel = () => {
    setEditingEmployee(null);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };
  return (
    <>
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
          <Employee key={employee.ID} index={index} employee={employee} onDelete={handleDeleteRow}  onEdit={handleEditEmployee}/>
        ))}
      </tbody>
    </table>
    <Modal isOpen={true} backdrop="static" keyboard={false}>
      <ModalHeader>
        <div className="thong-tin-thanh-toan">
          <h5>Chỉnh sửa thông tin nhân viên cơ bản</h5>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="form-group col-md-6">
            <label className="control-label">ID nhân viên</label>
            <input
              className="form-control"
              type="text"
              required
              value={editedEmployee.id}
              disabled
            />
          </div>
          <div className="form-group col-md-6">
            <label className="control-label">Họ và tên</label>
            <input
              className="form-control"
              type="text"
              required
              value={editedEmployee.name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label className="control-label">Số điện thoại</label>
            <input
              className="form-control"
              type="number"
              required
              value={editedEmployee.phone}
              name="phone"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label className="control-label">Địa chỉ email</label>
            <input
              className="form-control"
              type="text"
              required
              value={editedEmployee.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label className="control-label">Ngày sinh</label>
            <input
              className="form-control"
              type="date"
              value={editedEmployee.birthday}
              name="birthday"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleSelect1" className="control-label">
              Chức vụ
            </label>
            <select
              className="form-control"
              id="exampleSelect1"
              value={editedEmployee.position}
              name="position"
              onChange={handleInputChange}
            >
              <option>Bán hàng</option>
              <option>Tư vấn</option>
              <option>Dịch vụ</option>
              <option>Thu Ngân</option>
              <option>Quản kho</option>
              <option>Bảo trì</option>
              <option>Kiểm hàng</option>
              <option>Bảo vệ</option>
              <option>Tạp vụ</option>
            </select>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-save" onClick={handleSave}>
          Lưu lại</button>
    </ModalFooter>
    </Modal>
    </>
  );
};

export default Table;
