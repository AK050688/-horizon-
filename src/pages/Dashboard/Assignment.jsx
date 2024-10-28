import React from 'react';

function Assignment() {
  return (
    <div className="adminAssignmentContainer">
      <h1 className="title">Student Assignment</h1>

    
      <div className="spinner" role="status">
        <span className="loader"></span>
      </div>

      {/* Table structure for displaying assignments */}
      <div className="table-container">
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Teacher Name</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Description</th>
                <th>Assignment For</th>
                <th>Show Submission Assignment/Marks</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample static data for assignments */}
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Teacher {index + 1}</td>
                  <td>Assignment Title {index + 1}</td>
                  <td>{new Date().toLocaleDateString("en-GB")}</td>
                  <td>Description for Assignment {index + 1}</td>
                  <td>Class {index + 1}</td>
                  <td>
                    <button className="showButton">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
