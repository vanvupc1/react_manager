<<<<<<< HEAD
import React from 'react'

const Employee = () => {
  return (
    <div>Employee</div>
  )
}

=======
import React from 'react'
import Helmet from '../compoments/Helmet/Helmet'
import Clock from '../compoments/Clock/Clock'
import './main.css'
import img1 from '../assets/img-anhthe/1.jpg'
const Employee = () => {
  return (
    <Helmet title= "Bảng Nhân Viên">
      <div> 
      <div className="row">
        <div className="col-md-12">
          <div className="menu-title">
            <div className="menu-breadcrumb breadcrumb">
              <div className="breadcrumb-item">
                <b>Bảng Nhân Viên </b>
              </div>
            
          </div>
          <div id="clock">
              <Clock />
            </div>
         </div>
       </div>
     </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="row element-button">
                <div className="col-sm-2">
                  <div className="btn  btn-sm btn-add">
                    <i class='bx bx-plus'></i>
                    Tạo mới nhân viên
                  </div>
                  
                </div>
                <div className="col-sm-2">
                  <div className="btn btn-delete btn-sm nhap-tu-file">
                  <i class='bx bx-upload'></i>
                  Tải Từ File
                  </div>
                 
                </div>
                <div className="col-sm-2">
                  <div class="btn btn-delete btn-sm print-file" type="button" title="In"><i class='bx bx-printer' ></i>
                  In Dữ Liệu
                  </div>
                </div>
                <div className="col-sm-2">
                  <div class="btn btn-delete btn-sm print-file js-textareacopybtn" type="button" title="Sao chép"><i class='bx bx-copy-alt' ></i>
                  Sao Chép
                  </div>
                </div>
                <div className="col-sm-2">
                  <div class="btn btn-delete btn-sm pdf-file" type="button" title="In"><i class='bx bxs-file-pdf' ></i>
                  Xuất PDF
                  </div>
                </div>
                <div className="col-sm-2">
                  <div class="btn btn-delete btn-sm" type="button" title="Xóa"><i class='bx bx-trash' ></i>
                  Xóa Tất Cả
                  </div>
                </div>
              </div>
              <table class="table table-hover table-bordered js-copytextarea" cellpadding="0" cellspacing="0" border="0"
              id="sampleTable">
              <thead>
                <tr>
                  <th width="10"><input type="checkbox" id="all"/></th>
                  <th>ID nhân viên</th>
                  <th >Họ và tên</th>
                  <th width="100">Ảnh thẻ</th>
                  <th width="300">Địa chỉ</th>
                  <th>Ngày sinh</th>
                  <th>Giới tính</th>
                  <th>SĐT</th>
                  <th>Chức vụ</th>
                  <th width="100">Tính năng</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td width="10"><input type="checkbox" name="check1" value="1"/></td>
                  <td>#CD12837</td>
                  <td>Hồ Thị Thanh Ngân</td>
                  <td><img class="img-card-person" src={img1} alt=""/></td>
                  <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                  <td>12/02/1999</td>
                  <td>Nữ</td>
                  <td>0926737168</td>
                  <td>Bán hàng</td>
                  <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                      onclick="myFunction(this)"><i class='bx bx-trash' ></i>
                    </button>
                    <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                      data-toggle="modal" data-target="#ModalUP"><i class='bx bx-edit' ></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      </div>
    </Helmet>
  )
}

>>>>>>> fcbc12e (update func)
export default Employee