import React from 'react'
// import img1 from '../../assets/img-anhthe/1.jpg'
import employee from "../../assets/JsonData/employee_list.json"
 const Employee = (props) =>{
  return(
    <tr>
                <td width="10"><input type="checkbox" name="check1" value="1"/></td>
                  <td>{props.ID}</td>
                  <td>{props.Name}</td>
                  <td><img class="img-card-person" src={props.Image}alt=""/></td>
                  <td>{props.Address} </td>
                  <td>{props.Birthday}</td>
                  <td>{props.Gender}</td>
                  <td>{props.Phone}</td>
                  <td>{props.Position}</td>
                  <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                      onclick="myFunction(this)"><i class='bx bx-trash' ></i>
                    </button>
                    <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                      data-toggle="modal" data-target="#ModalUP"><i class='bx bx-edit' ></i>
                    </button>
                  </td>

                </tr>
  )
 }
const Table = props => {
  return (
    <table class="table table-hover table-bordered js-copytextarea" cellpadding="0" cellspacing="0" border="0" id="sampleTable">
       <thead>
                <tr>
                  <th width="10"><input type="checkbox" id="all"/></th>
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
                {
                  employee.map((employee) =>
                  
                  <Employee
                    ID={employee.ID}
                    Name={employee.Name}
                    Image={employee.Image}
                    Address={employee.Address}
                    Birthday={employee.Birthday}
                    Gender={employee.Gender}
                    Phone={employee.Phone}
                    Position={employee.Position}
                  />
                   
                  )
                }
      </tbody>
    </table>
  )
}

export default Table
