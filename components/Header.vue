<template>
    <header class="header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <nuxt-link class="navbar-item" to="/">
              <img src="~/assets/images/greenmap_logo.png" width="98" height="50">
            </nuxt-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
              <nuxt-link class="navbar-item" to="/users">Users</nuxt-link>
              <nuxt-link class="navbar-item" to="/placesmap">Places Map</nuxt-link>
              <nuxt-link class="navbar-item" to="/places">Places List</nuxt-link>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    About
                  </a>
                  <a class="navbar-item">
                    Jobs
                  </a>
                  <a class="navbar-item">
                    Contact
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        background-color: gold;
    }
</style>