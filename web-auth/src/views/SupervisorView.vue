<template>
  <div>
    <h1 class="mb-4">Supervisor Dashboard</h1>

    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Team Performance</h5>
            
            <div class="table-responsive mt-3">
              <table class="table">
                <thead>
                  <tr>
                    <th>Agent</th>
                    <th>Cases Handled</th>
                    <th>Avg. Response Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice Smith</td>
                    <td>45</td>
                    <td>2m 30s</td>
                    <td><span class="badge bg-success">Online</span></td>
                  </tr>
                  <tr>
                    <td>Bob Johnson</td>
                    <td>38</td>
                    <td>3m 15s</td>
                    <td><span class="badge bg-warning text-dark">Break</span></td>
                  </tr>
                  <!-- Add more rows as needed -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Quick Stats</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Active Agents
                <span class="badge bg-primary rounded-pill">8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Pending Cases
                <span class="badge bg-warning rounded-pill">12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Resolved Today
                <span class="badge bg-success rounded-pill">45</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
