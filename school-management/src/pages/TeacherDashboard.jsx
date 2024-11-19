import React from 'react'
const TeacherDashboard = () => {
  return (
    <div>
  {/* Page Header */}
  <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Welcome Mithlesh!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">Teacher</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


           {/* Dashboard Stats */}
           <div className="row">
            {[
              { title: "Total Classes", count: "04/06", icon: "teacher-icon-01.svg" },
              { title: "Total Students", count: "40/60", icon: "dash-icon-01.svg" },
              { title: "Total Lessons", count: "30/50", icon: "teacher-icon-02.svg" },
              { title: "Total Hours", count: "15/20", icon: "teacher-icon-03.svg" },
            ].map((stat, index) => (
              <div className="col-xl-3 col-sm-6 col-12 d-flex" key={index}>
                <div className="card bg-comman w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-info">
                        <h6>{stat.title}</h6>
                        <h3>{stat.count}</h3>
                      </div>
                      <div className="db-icon">
                        <img
                          src={`assets/img/icons/${stat.icon}`}
                          alt="Dashboard Icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

 {/* Main Content */}
 <div className="row">
            {/* Upcoming Lessons */}
            <div className="col-12 col-lg-8 col-xl-8 d-flex">
              <div className="card flex-fill comman-shadow">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="card-title">Upcoming Lesson</h5>
                    </div>
                    <div className="col-6">
                      <span className="float-end view-link">
                        <a href="#">View All Courses</a>
                      </span>
                    </div>
                  </div>
                </div>
          <div className="pt-3 pb-3">
                  <div className="table-responsive lesson">
                    <table className="table table-center">
                      <tbody>
                        {Array.from({ length: 2 }).map((_, idx) => (
                          <tr key={idx}>
                            <td>
                              <div className="date">
                                <b>Lessons 30</b>
                                <p>3.1 Ipsum dolor</p>
                                <ul className="teacher-date-list">
                                  <li>
                                    <i className="fas fa-calendar-alt me-2"></i>Sep 5, 2022
                                  </li>
                                  <li>|</li>
                                  <li>
                                    <i className="fas fa-clock me-2"></i>09:00 - 10:00 am
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td>
                              <div className="lesson-confirm">
                                <a href="#">Confirmed</a>
                              </div>
                              <button type="submit" className="btn btn-info">
                                Reschedule
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                </div>
            </div>
            </div>
    </div>
  );
};

export default TeacherDashboard;
