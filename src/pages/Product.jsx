import React from 'react'
import Helmet from '../compoments/Helmet/Helmet'
import Clock from '../compoments/Clock/Clock'
import './main.css'
import data from '../assets/JsonData/table_data.json'
import Table from '../compoments/Table/Table'
const Product = () => {
  const getHeadings = () => {
    console.log (Object.keys(data[0]));
    return Object.keys(data[0]);
    
  }
  return (
    <Helmet title= "Bảng Sản Phẩm">
      <div> 
      <div className="row">
        <div className="col-md-12">
          <div className="menu-title">
            <div className="menu-breadcrumb breadcrumb">
              <div className="breadcrumb-item">
                <b>Bảng Sản Phẩm </b>
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
                    Tạo mới sản phẩm
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
             <Table theadata={getHeadings()} tbodydata={data}></Table>
            </div>
          </div>
        </div>
      </div>

      </div>
    </Helmet>
  )
}

export default Product