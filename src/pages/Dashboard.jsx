<<<<<<< HEAD
import React from 'react'
import './main.css'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../compoments/status-card/StatusCard'
import Chart from 'react-apexcharts'
import Clock from '../compoments/Clock/Clock'
import Helmet from '../compoments/Helmet/Helmet'
const chartOptions = {
  series: [{
      name: 'Online Customers',
      data: [40,70,20,90,36,80,30,91,60]
  }, {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
  }],
  options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
          background: 'transparent'
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      legend: {
          position: 'top'
      },
      grid: {
          show: false
      }
  }
}

const Dashboard = () => {
  return (
    <Helmet title="Bảng Điều Khiển">
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="menu-title">
            <div className="menu-breadcrumb breadcrumb">
              <div className="breadcrumb-item">
                <b>Bảng Điều Khiển</b>
              </div>
            
          </div>
          <div id="clock">
              <Clock />
            </div>
         </div>
       </div>
     </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
            <div className="row">
            {
              statusCards.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <StatusCard
                    icon={item.icon}
                    active={item.active}
                    description={item.description}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              ))         
            }
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Tình trạng đơn hàng</h3>
                  <div>
                <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID đơn hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AL3947</td>
                        <td>Phạm Thị Ngọc</td>
                        <td>
                          19.770.000 đ
                        </td>
                        <td><span class="badge bg-info">Chờ xử lý</span></td>
                      </tr>
                      <tr>
                        <td>ER3835</td>
                        <td>Nguyễn Thị Mỹ Yến</td>
                        <td>
                          16.770.000 đ	
                        </td>
                        <td><span class="badge bg-warning">Đang vận chuyển</span></td>
                      </tr>
                      <tr>
                        <td>MD0837</td>
                        <td>Triệu Thanh Phú</td>
                        <td>
                          9.400.000 đ	
                        </td>
                        <td><span class="badge bg-success">Đã hoàn thành</span></td>
                      </tr>
                      <tr>
                        <td>MT9835</td>
                        <td>Đặng Hoàng Phúc	</td>
                        <td>
                          40.650.000 đ	
                        </td>
                        <td><span class="badge bg-danger">Đã hủy	</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                
              </div>
              <div class="col-md-12">
                <div class="tile">
                  <h3 class="tile-title">Khách hàng mới</h3>
                <div>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên khách hàng</th>
                        <th>Ngày sinh</th>
                        <th>Số điện thoại</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#183</td>
                        <td>Hột vịt muối</td>
                        <td>21/7/1992</td>
                        <td><span class="tag tag-success">0921387221</span></td>
                      </tr>
                      <tr>
                        <td>#219</td>
                        <td>Bánh tráng trộn</td>
                        <td>30/4/1975</td>
                        <td><span class="tag tag-warning">0912376352</span></td>
                      </tr>
                      <tr>
                        <td>#627</td>
                        <td>Cút rang bơ</td>
                        <td>12/3/1999</td>
                        <td><span class="tag tag-primary">01287326654</span></td>
                      </tr>
                      <tr>
                        <td>#175</td>
                        <td>Hủ tiếu nam vang</td>
                        <td>4/12/20000</td>
                        <td><span class="tag tag-danger">0912376763</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Dữ liệu 6 tháng đầu vào</h3>
                {/* <div class="embed-responsive embed-responsive-16by9"> */}
                <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='bar'
                            height='100%'
                        />
              {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Helmet>

  )
}

=======
import React from 'react'
import './main.css'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../compoments/status-card/StatusCard'
import Chart from 'react-apexcharts'
import Clock from '../compoments/Clock/Clock'
import Helmet from '../compoments/Helmet/Helmet'
const chartOptions = {
  series: [{
      name: 'Online Customers',
      data: [40,70,20,90,36,80,30,91,60]
  }, {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
  }],
  options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
          background: 'transparent'
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      legend: {
          position: 'top'
      },
      grid: {
          show: false
      }
  }
}

const Dashboard = () => {
  return (
    <Helmet title="Bảng Điều Khiển">
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="menu-title">
            <div className="menu-breadcrumb breadcrumb">
              <div className="breadcrumb-item">
                <b>Bảng Điều Khiển</b>
              </div>
            
          </div>
          <div id="clock">
              <Clock />
            </div>
         </div>
       </div>
     </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
            <div className="row">
            {
              statusCards.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <StatusCard
                    icon={item.icon}
                    active={item.active}
                    description={item.description}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              ))         
            }
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Tình trạng đơn hàng</h3>
                  <div>
                <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID đơn hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>AL3947</td>
                        <td>Phạm Thị Ngọc</td>
                        <td>
                          19.770.000 đ
                        </td>
                        <td><span class="badge bg-info">Chờ xử lý</span></td>
                      </tr>
                      <tr>
                        <td>ER3835</td>
                        <td>Nguyễn Thị Mỹ Yến</td>
                        <td>
                          16.770.000 đ	
                        </td>
                        <td><span class="badge bg-warning">Đang vận chuyển</span></td>
                      </tr>
                      <tr>
                        <td>MD0837</td>
                        <td>Triệu Thanh Phú</td>
                        <td>
                          9.400.000 đ	
                        </td>
                        <td><span class="badge bg-success">Đã hoàn thành</span></td>
                      </tr>
                      <tr>
                        <td>MT9835</td>
                        <td>Đặng Hoàng Phúc	</td>
                        <td>
                          40.650.000 đ	
                        </td>
                        <td><span class="badge bg-danger">Đã hủy	</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                
              </div>
              <div class="col-md-12">
                <div class="tile">
                  <h3 class="tile-title">Khách hàng mới</h3>
                <div>
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên khách hàng</th>
                        <th>Ngày sinh</th>
                        <th>Số điện thoại</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#183</td>
                        <td>Hột vịt muối</td>
                        <td>21/7/1992</td>
                        <td><span class="tag tag-success">0921387221</span></td>
                      </tr>
                      <tr>
                        <td>#219</td>
                        <td>Bánh tráng trộn</td>
                        <td>30/4/1975</td>
                        <td><span class="tag tag-warning">0912376352</span></td>
                      </tr>
                      <tr>
                        <td>#627</td>
                        <td>Cút rang bơ</td>
                        <td>12/3/1999</td>
                        <td><span class="tag tag-primary">01287326654</span></td>
                      </tr>
                      <tr>
                        <td>#175</td>
                        <td>Hủ tiếu nam vang</td>
                        <td>4/12/20000</td>
                        <td><span class="tag tag-danger">0912376763</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Dữ liệu 6 tháng đầu vào</h3>
                {/* <div class="embed-responsive embed-responsive-16by9"> */}
                <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='bar'
                            height='100%'
                        />
              {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Helmet>

  )
}

>>>>>>> fcbc12e (update func)
export default Dashboard