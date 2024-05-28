<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" :to="{name:'homes'}">NCLC Bank</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name:'homes'}">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Account Section
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Loan</a></li>
              <li><a class="dropdown-item" href="#">Card dETAILS</a></li>
              <li><router-link class="dropdown-item" :to="{ name: 'account' }">Account</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <router-link class="btn btn-success" :to="{ name: 'login' }">Login</router-link>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <router-view/>
    </div>
  </div>

</template>
<script>
export default {
  name: 'NavbarComponent'
}
</script>