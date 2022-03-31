<template>
<div class="pt-5 pb-5">

</div>
<div class="container rounded shadow-5-strong border pt-4 mb-5 bg-light animate__animated animate__backInRight">
  <h2><u>About</u></h2>
  <div class="row border-top pb-2">
    <div class="col-6 pt-4">
        <img :src="require('@/assets/about/hero_img.jpg')" alt="About.Img" srcset="" class="img-fluid rounded">
    </div>
    <div class="col pt-4">
      <h3><u>A little about me</u></h3>
      <p>Hello, I'm Ubaidullah. A web designer from Cape Town. I am a very hard-working and trustworthy person. I am a team player and can follow instructors to the point.</p>
      <h3><u>Why coding?</u></h3>
      <p>My passion for coding comes from the satisfaction of seeing something that I built, and it is functioning.</p>
      <br>
      <div class="row">
        <div class="row">
          <h4><u>Hobbies</u></h4>
          <div class="col hobby text-muted"><i class="fas fa-code"></i> Coding</div>
          <div class="col hobby text-muted"><i class="fas fa-gamepad"></i> Gaming</div>
          <div class="col hobby text-muted"><i class="fas fa-hiking"></i> Hikking</div>
          <div class="col hobby text-muted"><i class="fas fa-bookmark"></i> Reading</div>
        </div>
        
        <div class="row pt-5">
          <h4><u>Details</u></h4>
          <div class="col-lg-4 hobby">
            <i class="fa-solid fa-calendar"></i>
            Birth date:
            <p class="text-muted">27 May 2000</p>
          </div>
          <div class="col-lg-4 hobby">
            <i class="fa-solid fa-house"></i>
            Residence:
            <p class="text-muted">Cape town, South Africa</p>
          </div>
          <div class="col-lg-4 hobby">
            <i class="fa-solid fa-envelope"></i>
            E-mail:
            <p class="text-muted">ubaidbreda@gmail.com</p>
          </div>
          <div class="col-lg-4 hobby">
            <i class="fa-solid fa-mobile"></i>  
            Phone:
            <p class="text-muted">+27 67 839 8557</p>
          </div>
          <div class="col-lg-4 hobby">
            <i class="fa-solid fa-person-digging"></i>
            Freelance:
            <p class="text-muted">Available</p>
          </div>
        </div>
      </div>
      <br>
      <!-- <MDBBtn color="dark" size="lg">Download CV</MDBBtn> -->
    </div>
    
  </div>
</div>

<!-- Skills -->
<div class="container rounded shadow-5-strong border pt-4 mb-4 bg-light animate__animated animate__backInLeft animate__delay-1s">
    <h2><u>Skills</u></h2>
    <div class="row border-top pb-2">
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card" id="skillCard">
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
        <div class="card" id="skillCard">
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
        <div class="card" id="skillCard">
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
        <div class="card" id="skillCard">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>90 %</h3>
                <p class="mb-0">Bootstrap</p>
              </div>
              <div class="align-self-center">
                <i class="fab fa-bootstrap fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 90%;" aria-valuenow="40"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card" id="skillCard">
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
        <div class="card" id="skillCard">
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
        <div class="card" id="skillCard">
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
        <div class="card" id="skillCard">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>90 %</h3>
                <p class="mb-0">MDBootstrap</p>
              </div>
              <div class="align-self-center">
                <i class="fa-brands fa-mdb fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 90%;" aria-valuenow="40"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card" id="skillCard">
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
        <div class="card" id="skillCard">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div>
                <h3>90 %</h3>
                <p class="mb-0">Googling</p>
              </div>
              <div class="align-self-center">
                <i class="fa-brands fa-google fa-3x"></i>
              </div>
            </div>
            <div class="px-md-1">
              <div class="progress mt-3 mb-1 rounded" style="height: 7px;">
                <div class="progress-bar bg-dark" role="progressbar" style="width: 90%;" aria-valuenow="40"
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

#skillCard:hover {
    transform: scale(1.05);
}

.hobby:hover {
  transform: scale(1.09);
}
</style>
