<template>
<div class="pt-5 pb-5">

</div>
<div class="container rounded shadow-5-strong border pt-4 pb-4 mb-5 bg-light">
  <h2><u>About Me</u></h2>
  <div class="row border-top pb-2">
    <div class="col-6 pt-4">
        <img :src="require('@/assets/landing/hero_img.jpg')" alt="About.Img" srcset="" class="img-fluid rounded">
    </div>
    <div class="col pt-4">
      <h3><u>head</u></h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, iste nesciunt. Voluptatibus pariatur esse perspiciatis qui illum nesciunt minus quaerat inventore, autem a maxime consectetur assumenda unde sint natus fugit.</p>
      <h3><u>head</u></h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, iste nesciunt. Voluptatibus pariatur esse perspiciatis qui illum nesciunt minus quaerat inventore, autem a maxime consectetur assumenda unde sint natus fugit.</p>
      <br>
      <div class="row">
        <div class="col-6">
          <h4><u>details</u></h4>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div class="col-6">
          <h4><u>hobbies</u></h4>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
      <br>
      <MDBBtn color="dark" size="lg">Download CV</MDBBtn>
    </div>
    
  </div>
</div>

<!-- Skills -->
<div class="container rounded shadow-5-strong border pt-4 mb-4 bg-light">
    <h2>Skills</h2>
    <div class="row border-top pb-2">
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>80 %</h3>
                <p class="mb-0">HTML</p>
              </div>
              <div class="align-self-center">
                <i class="fab fa-html5 fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 80%;" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>60 %</h3>
                <p class="mb-0">CSS</p>
              </div>
              <div class="align-self-center">
                <i class="fab fa-css3-alt fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 60%;" aria-valuenow="35"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>50 %</h3>
                <p class="mb-0">Javascript</p>
              </div>
              <div class="align-self-center">
                <i class="fab fa-js fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 50%;" aria-valuenow="60"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>70 %</h3>
                <p class="mb-0">Bootstrap</p>
              </div>
              <div class="align-self-center">
                <i class="fab fa-bootstrap fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 70%;" aria-valuenow="40"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>30 %</h3>
                <p class="mb-0">Mongoose</p>
              </div>
              <div class="align-self-center">
                <i class="fa-solid fa-database fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 30%;" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>60 %</h3>
                <p class="mb-0">MySQL</p>
              </div>
              <div class="align-self-center">
                <i class="fa-solid fa-server fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 60%;" aria-valuenow="35"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>50 %</h3>
                <p class="mb-0">NodeJS</p>
              </div>
              <div class="align-self-center">
                <i class="fa-brands fa-node fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 50%;" aria-valuenow="60"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>70 %</h3>
                <p class="mb-0">MDBootstrap</p>
              </div>
              <div class="align-self-center">
                <i class="fa-brands fa-mdb fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 70%;" aria-valuenow="40"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>30 %</h3>
                <p class="mb-0">Express</p>
              </div>
              <div class="align-self-center">
                <i class="fa-brands fa-node-js fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 30%;" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>70 %</h3>
                <p class="mb-0">MDBootstrap</p>
              </div>
              <div class="align-self-center">
                <i class="fa-brands fa-mdb fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 70%;" aria-valuenow="40"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<div class="pt-5"></div>

</template>

<script>
import { 
    MDBBtn 
  } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBBtn
    }
  };
</script>

<style>
i:hover {
    transform: scale(1.2);
}
i {
    color: #31313a;
}
</style>
