
import React from 'react'
import Helmet from '../compoments/Helmet/Helmet'
import Clock from '../compoments/Clock/Clock'
import './main.css'
import Table from '../compoments/Table/Table'
// import img1 from '../assets/img-anhthe/1.jpg'
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
              <Table/>
            </div>
          </div>
        </div>
      </div>

      </div>
    </Helmet>
  )
}

export default Employee