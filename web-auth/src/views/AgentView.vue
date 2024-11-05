<template>
  <div>
    <h1 class="mb-4">Agent Workspace</h1>

    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">My Stats</h5>
            <div class="list-group mt-3">
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1">Cases Handled</h6>
                  <span class="badge bg-primary">24</span>
                </div>
              </div>
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1">Avg Response Time</h6>
                  <span>2m 45s</span>
                </div>
              </div>
              <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1">Customer Satisfaction</h6>
                  <span>4.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Status</h5>
            <select class="form-select mt-3">
              <option value="online">Online</option>
              <option value="break">Break</option>
              <option value="busy">Busy</option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Active Cases</h5>
            <div class="list-group mt-3">
              <a href="#" class="list-group-item list-group-item-action active">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1">Case #12345 - Technical Support</h6>
                  <small>3 mins ago</small>
                </div>
                <p class="mb-1">Customer reporting issues with login...</p>
                <small>Priority: High</small>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1">Case #12346 - Billing Question</h6>
                  <small>15 mins ago</small>
                </div>
                <p class="mb-1">Invoice clarification needed...</p>
                <small>Priority: Medium</small>
              </a>
              
              <!-- Add more cases as needed -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>