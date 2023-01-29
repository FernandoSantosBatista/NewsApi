<template>
  <nav class="navbar navbar-expand justify-content-center">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/"> Notícias do Brasil </router-link>
      </li>
      <li class="nav-item">
        <a
          class="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        ></a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categorias
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link class="dropdown-item" to="/tecnologia"
              >Técnologia</router-link
            >
          </li>
          <li>
            <router-link class="dropdown-item" to="/negocios"
              >Negócios</router-link
            >
          </li>
          <li>
            <router-link class="dropdown-item" to="/entreterimento"
              >Entreterimento</router-link
            >
          </li>
          <li><router-link class="dropdown-item" to="/saude">Saúde</router-link></li>
          <li>
            <router-link class="dropdown-item" to="/ciencias">Ciências</router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/esportes">Esportes</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style>
.navbar {
  background-color: #fff;
  font-weight: bold;
  padding: 15px;
  font-size: 18px;
}

nav a {
 
  text-decoration: none;
  color: #071c58;
  padding: 10px;
  display: inline-block;
}

a {
  
  color: #182bd8;
}
nav a:hover {
  text-decoration: none;
  color: #0431f8;

}
</style>
