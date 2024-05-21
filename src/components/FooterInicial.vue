<template>
  <footer>
      <div class="footer-item1">
          <a href="https://twitter.com/?lang=es" target="_blank">
              <img srcset="../assets/img-twiter.png" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
              <img srcset="../assets/img-intagram.png" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
              <img srcset="../assets/img-facebook.png" />
          </a>
      </div>


  </footer>
</template>

<style>
footer {
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  font-size: 1rem;
}

.footer-item1 {
  display: flex;
  justify-content: flex-start;
  align-items: start;
}

.footer-item1 a {
  margin: 0 10px;
  text-decoration: none;
  color: #000000a8;
}


.footer-item1 img {
  width: 3rem;
  height: 3rem;
  margin-top: 5%;
   margin: 0 10px;
}


</style>