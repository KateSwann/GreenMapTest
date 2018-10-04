<template>
  <b-navbar toggleable="md" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">
      <img src="~/assets/images/greenmap_logo.png" width="98" height="50">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>

        <b-nav-item-dropdown id="nav7_ddown" text="Все оценки" extra-toggle-classes="nav-link-custom" right>
          <b-dropdown-item>one</b-dropdown-item>
          <b-dropdown-item>two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>three</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/users">Users</b-nav-item>
        <b-nav-item href="/placesmap">Places Map</b-nav-item>
        <b-nav-item href="/places">Places List</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>