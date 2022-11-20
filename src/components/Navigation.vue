<template>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Vue Router</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link active" to="/" aria-current="page" >Home</router-link>
            <!-- <router-link class="nav-link" to="/portfolio">Portfolio</router-link> -->
            <router-link class="nav-link" to="/dynamic">Dynamic</router-link>
            <router-link class="nav-link" to="/detail">Details</router-link>
            <router-link class="nav-link" to="/list">List</router-link>
            <router-link class="nav-link" to="/article">Article</router-link>
          </div>
        </div>
      </div>
    </nav>
    </template>