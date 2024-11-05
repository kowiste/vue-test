<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>Admin Dashboard</h1>
      <button class="btn btn-primary">Add New User</button>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">System Overview</h5>
        
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="card bg-primary text-white">
              <div class="card-body">
                <h6 class="card-title">Total Users</h6>
                <h2 class="card-text">1,234</h2>
              </div>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="card bg-success text-white">
              <div class="card-body">
                <h6 class="card-title">Active Sessions</h6>
                <h2 class="card-text">856</h2>
              </div>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="card bg-info text-white">
              <div class="card-body">
                <h6 class="card-title">System Status</h6>
                <h2 class="card-text">Healthy</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="table-responsive mt-4">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>john.doe</td>
                <td>Agent</td>
                <td><span class="badge bg-success">Active</span></td>
                <td>
                  <button class="btn btn-sm btn-primary me-2">Edit</button>
                  <button class="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>