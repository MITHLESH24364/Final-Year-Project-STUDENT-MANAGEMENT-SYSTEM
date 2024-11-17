import React from 'react'
import Chart from 'react-apexcharts';
const AdminDashboard = () => {

    const chartOptions = {
        chart: {
          type: "area", // For Spline chart
        },
        series: [
          {
            name: "Teachers",
            data: [42, 60, 75, 70, 50, 42, 30], // Data for Teachers
          },
          {
            name: "Students",
            data: [30, 45, 55, 65, 52, 52, 40], // Data for Students
          },
        ],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months as X-axis
        },
        stroke: {
          curve: "smooth", // Spline effect
        },
        legend: {
          position: "top", // Legend at the top
        },
        dataLabels: {
          enabled: false, // Disable data labels
        },
        tooltip: {
          shared: true, // Show both series in the tooltip
          intersect: false,
        },
        colors: ["#4F46E5", "#2DD4BF"], // Custom colors for series
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.2,
          },
        },
      };

      const chartOptions1 = {
        chart: {
          type: "bar", // Bar chart type
          stacked: false, // Disable stacking for grouped bars
        },
        series: [
          {
            name: "Girls",
            data: [400, 600, 500, 700, 600, 500, 650], // Data for Girls
          },
          {
            name: "Boys",
            data: [300, 500, 450, 600, 550, 470, 620], // Data for Boys
          },
        ],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis categories (Months)
        },
        colors: ["#4F46E5", "#2DD4BF"], // Custom colors for series
        dataLabels: {
          enabled: false, // Disable data labels
        },
        plotOptions: {
          bar: {
            horizontal: false, // Vertical bars
            columnWidth: "55%", // Adjust bar width
            borderRadius: 4, // Rounded corners
          },
        },
        legend: {
          position: "top", // Place legend on top
        },
        tooltip: {
          shared: true, // Show both series in the tooltip
          intersect: false,
        },
        grid: {
          borderColor: "#e0e0e0",
          strokeDashArray: 4, // Dashed grid lines
        },
      };
    
  return (
    <div>
        <div class="page-wrapper">
            <div class="content container-fluid">

                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-sub-header">
                                <h3 class="page-title">Welcome Admin!</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active">Admin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Students</h6>
                                        <h3>50055</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="assets/img/icons/dash-icon-01.svg" alt="Dashboard Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Awards</h6>
                                        <h3>50+</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="assets/img/icons/dash-icon-02.svg" alt="Dashboard Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Department</h6>
                                        <h3>30+</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="assets/img/icons/dash-icon-03.svg" alt="Dashboard Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12 d-flex">
                        <div class="card bg-comman w-100">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-info">
                                        <h6>Revenue</h6>
                                        <h3>$505</h3>
                                    </div>
                                    <div class="db-icon">
                                        <img src="assets/img/icons/dash-icon-04.svg" alt="Dashboard Icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 col-lg-6">

                        <div class="card card-chart">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col-6">
                                        <h5 class="card-title">Overview</h5>
                                    </div>
                                    <div class="col-6">
                                        <ul class="chart-list-out">
                                            <li><span class="circle-blue"></span>Teacher</li>
                                            <li><span class="circle-green"></span>Student</li>
                                            <li class="star-menus"><a href="javascript:;"><i
                                                        class="fas fa-ellipsis-v"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                            <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="area"
          height="350"
        />
                            </div>
                        </div>

                    </div>
                    <div class="col-md-12 col-lg-6">

                    <div className="card card-chart">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col-6">
            <h5 className="card-title">Number of Students</h5>
          </div>
          <div className="col-6">
            <ul className="chart-list-out">
              <li>
                <span className="circle-blue"></span>Girls
              </li>
              <li>
                <span className="circle-green"></span>Boys
              </li>
              <li className="star-menus">
                <a href="javascript:void(0);">
                  <i className="fas fa-ellipsis-v"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body">
        <Chart
          options={chartOptions1}
          series={chartOptions1.series}
          type="bar"
          height="350"
        />
      </div>
    </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6 d-flex">

                        <div class="card flex-fill student-space comman-shadow">
                            <div class="card-header d-flex align-items-center">
                                <h5 class="card-title">Star Students</h5>
                                <ul class="chart-list-out student-ellips">
                                    <li class="star-menus"><a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table
                                        class="table star-student table-hover table-center table-borderless table-striped">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th class="text-center">Marks</th>
                                                <th class="text-center">Percentage</th>
                                                <th class="text-end">Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-nowrap">
                                                    <div>PRE2209</div>
                                                </td>
                                                <td class="text-nowrap">
                                                    <a href="profile.html">
                                                        <img class="rounded-circle"
                                                            src="assets/img/profiles/avatar-02.jpg" width="25"
                                                            alt="Star Students"/>
                                                        John Smith
                                                    </a>
                                                </td>
                                                <td class="text-center">1185</td>
                                                <td class="text-center">98%</td>
                                                <td class="text-end">
                                                    <div>2019</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-nowrap">
                                                    <div>PRE1245</div>
                                                </td>
                                                <td class="text-nowrap">
                                                    <a href="profile.html">
                                                        <img class="rounded-circle"
                                                            src="assets/img/profiles/avatar-01.jpg" width="25"
                                                            alt="Star Students"/>
                                                        Jolie Hoskins
                                                    </a>
                                                </td>
                                                <td class="text-center">1195</td>
                                                <td class="text-center">99.5%</td>
                                                <td class="text-end">
                                                    <div>2018</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-nowrap">
                                                    <div>PRE1625</div>
                                                </td>
                                                <td class="text-nowrap">
                                                    <a href="profile.html">
                                                        <img class="rounded-circle"
                                                            src="assets/img/profiles/avatar-03.jpg" width="25"
                                                            alt="Star Students"/>
                                                        Pennington Joy
                                                    </a>
                                                </td>
                                                <td class="text-center">1196</td>
                                                <td class="text-center">99.6%</td>
                                                <td class="text-end">
                                                    <div>2017</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-nowrap">
                                                    <div>PRE2516</div>
                                                </td>
                                                <td class="text-nowrap">
                                                    <a href="profile.html">
                                                        <img class="rounded-circle"
                                                            src="assets/img/profiles/avatar-04.jpg" width="25"
                                                            alt="Star Students"/>
                                                        Millie Marsden
                                                    </a>
                                                </td>
                                                <td class="text-center">1187</td>
                                                <td class="text-center">98.2%</td>
                                                <td class="text-end">
                                                    <div>2016</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-nowrap">
                                                    <div>PRE2209</div>
                                                </td>
                                                <td class="text-nowrap">
                                                    <a href="profile.html">
                                                        <img class="rounded-circle"
                                                            src="assets/img/profiles/avatar-05.jpg" width="25"
                                                            alt="Star Students"/>
                                                        John Smith
                                                    </a>
                                                </td>
                                                <td class="text-center">1185</td>
                                                <td class="text-center">98%</td>
                                                <td class="text-end">
                                                    <div>2015</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-6 d-flex">

                        <div class="card flex-fill comman-shadow">
                            <div class="card-header d-flex align-items-center">
                                <h5 class="card-title ">Student Activity </h5>
                                <ul class="chart-list-out student-ellips">
                                    <li class="star-menus"><a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="activity-groups">
                                    <div class="activity-awards">
                                        <div class="award-boxs">
                                            <img src="assets/img/icons/award-icon-01.svg" alt="Award"/>
                                        </div>
                                        <div class="award-list-outs">
                                            <h4>1st place in "Chess”</h4>
                                            <h5>John Doe won 1st place in "Chess"</h5>
                                        </div>
                                        <div class="award-time-list">
                                            <span>1 Day ago</span>
                                        </div>
                                    </div>
                                    <div class="activity-awards">
                                        <div class="award-boxs">
                                            <img src="assets/img/icons/award-icon-02.svg" alt="Award"/>
                                        </div>
                                        <div class="award-list-outs">
                                            <h4>Participated in "Carrom"</h4>
                                            <h5>Justin Lee participated in "Carrom"</h5>
                                        </div>
                                        <div class="award-time-list">
                                            <span>2 hours ago</span>
                                        </div>
                                    </div>
                                    <div class="activity-awards">
                                        <div class="award-boxs">
                                            <img src="assets/img/icons/award-icon-03.svg" alt="Award"/>
                                        </div>
                                        <div class="award-list-outs">
                                            <h4>Internation conference in "St.John School"</h4>
                                            <h5>Justin Leeattended internation conference in "St.John School"</h5>
                                        </div>
                                        <div class="award-time-list">
                                            <span>2 Week ago</span>
                                        </div>
                                    </div>
                                    <div class="activity-awards mb-0">
                                        <div class="award-boxs">
                                            <img src="assets/img/icons/award-icon-04.svg" alt="Award"/>
                                        </div>
                                        <div class="award-list-outs">
                                            <h4>Won 1st place in "Chess"</h4>
                                            <h5>John Doe won 1st place in "Chess"</h5>
                                        </div>
                                        <div class="award-time-list">
                                            <span>3 Day ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

             
            </div>
            
        </div>
    </div>
  )
}

export default AdminDashboard;
