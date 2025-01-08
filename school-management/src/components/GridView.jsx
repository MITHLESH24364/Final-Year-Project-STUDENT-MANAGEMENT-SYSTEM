import React from "react";

const GridView = ({ teachers }) => {
  return (
    <div className="row mt-4">
      {teachers.map((teacher) => (
        <div className="col-lg-4 col-md-6" key={teacher.id} style={{ marginBottom: "20px" }}>
          <div className="card">
            <img
              src={`assets/img/profiles/${teacher.image || "mks.jpg"}`}
              alt={teacher.name}
              className="card-img-top rounded-circle"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                margin: "15px auto",
              }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{teacher.fullname}</h5>
              <p className="card-text">{teacher.department}</p>
              <p><strong>{teacher.gender}</strong></p>
              <p>{teacher.email}</p>
              <p>{teacher.phoneNumber}</p>
              <button className="btn btn-outline-primary btn-sm">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
