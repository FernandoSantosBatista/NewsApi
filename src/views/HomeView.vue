<template>
  <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <a
            v-if="
              articles[currentIndex].title &&
              articles[currentIndex].urlToImage &&
              articles[currentIndex].description
            "
            :href="articles[currentIndex].url"
          >
            <img
              class="img-fluid hero-image"
              :src="articles[currentIndex].urlToImage"
              style="
                width: 100%;
                display: block;
                margin: 0 auto;
                height: 300px;
                object-fit: cover;
              "
            />
            <h1 class="hero-title">{{ articles[currentIndex].title }}</h1>
            <p class="hero-description text-justify">
              {{ articles[currentIndex].description }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div
        v-for="(article, index) in filteredArticles"
        :key="index"
        class="col-md-4"
      >
        <div class="card mb-3">
          <a :href="article.url">
            <div class="card-body d-flex flex-column align-items-center">
              <img
                class="img-fluid card-img-top article-image"
                :src="article.urlToImage"
                style="width: 100%; display: block; margin: 0 auto"
              />
              <h5 class="card-title text-left">{{ article.title }}</h5>
              <p class="card-text text-justify text-left">
                {{ article.description }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      drawer: true, // true to show/hide the side navigation drawer
      api_key: "a1c71a98e29743059b9ea8318e9db390",
      articles: [],
      errors: [],
      currentIndex: 0,
    };
  },
  created() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&pageSize=40&apiKey=" +
          this.api_key
      )
      .then((response) => {
        this.articles = response.data.articles;
        this.changeArticle();
        setInterval(() => {
          this.changeArticle();
        }, 9000).catch((e) => {
          this.errors.push(e);
        });
      });
  },
  methods: {
    changeArticle() {
      this.currentIndex++;
      if (this.currentIndex >= this.articles.length) {
        this.currentIndex = 0;
      }
    },
  },
  computed: {
    filteredArticles() {
      return this.articles.filter(
        (article) => article.title && article.urlToImage && article.description
      );
    },
  },
};
</script>

<style>
.card-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  margin: 0;
  border: none;
  border-radius: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: rgb(62, 62, 63);
}

.hero {
  background-color: #e5e5e5;
  padding: 40px 0;
}
.hero-title {
  text-align: center;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #333;
  text-align: left;
}
.hero-description {
  text-align: center;
  font-size: 18px;
  color: #333;
  line-height: 1.5;
  text-align: left;
}
</style>
