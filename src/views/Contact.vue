<template>
<div class="pt-5 pb-5"></div>

<div class="container rounded shadow-5-strong border pt-4 bg-light animate__animated animate__fadeIn">
    <h2><u>Contact ME</u></h2>
    <div class="row border-top pt-5 mb-4">
      <div class="row pb-5">
          
          <div class="pt-3 row">
            <a 
              id="connect"
              class="col-4"
              href="https://github.com/bredau00"
              target="_blank"
              >
              <i class="fa-brands fa-github"></i>
              Github:
              <p class="text-muted">bredau00</p>
            </a>
            <a 
              id="connect"
              class="col-4"
              href="https://www.linkedin.com/in/ubaidullah-breda-356a03224/"
              target="_blank"
              >
              <i class="fa-brands fa-linkedin"></i>
              LinkedIn:
              <p class="text-muted">Ubaidullahbreda</p>
            </a>
            <a 
              
              id="connect"
              class="col-4"
              href="https://codepen.io/bredau00"
              target="_blank"
              >
              <i class="fa-brands fa-codepen"></i>
              CodePen:
              <p class="text-muted">bredau00</p>
            </a>
          </div>
        </div>
        <h4><u>Connect with me</u></h4>
        <div class="row pt-3">
          <div class="col-6 border-end">
            <h4><u>Message me</u></h4>
            <form 
              class="pt-5 mb-5"
              action="https://formspree.io/f/xleakvqo"
              method="POST"
              enctype="multipart/form-data"
            >
              <!-- Name input -->
              <MDBInput
                type="text"
                label="Name"
                name="name"
                id="form4Name"
                v-model="Name"
                wrapperClass="mb-4"
              />
            
              <!-- Email input -->
              <MDBInput
                type="email"
                label="Email address"
                id="form4Email"
                name="email"
                v-model="Email"
                wrapperClass="mb-4"
              />
            
              <!-- Message input -->
              <MDBTextarea
                label="Message"
                id="form4Textarea"
                v-model="Message"
                wrapperClass="mb-4"
                name=""
              />
            
              <!-- Submit button -->
              <MDBBtnGroup>
                <MDBBtn color="dark" size="lg" type="reset"> reset </MDBBtn>
                <MDBBtn color="dark" size="lg" type="submit" target="_blank"> Send </MDBBtn>
              </MDBBtnGroup>
              
            </form> 
          </div>
          <div class="col-6">
            <div class="row pt-3 pb-2">
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="card" id="connect">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div class="align-self-center">
                        <i class="fa-solid fa-at fa-3x"></i>
                      </div>
                      <div>
                        <h4>Email:</h4>
                        <p class="text-muted mb-0">ubaidbreda@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="card" id="connect">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div class="align-self-center">
                        <i class="fa-solid fa-mobile fa-3x"></i>
                      </div>
                      <div>
                        <h4>Phone:</h4>
                        <p class="mb-0">067 839 8557</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-sm-12 col-12 mb-4">
                <div class="card" id="connect">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div class="align-self-center">
                        <i class="fa-solid fa-location-dot fa-3x"></i>
                      </div>
                      <div>
                        <h4>Location:</h4>
                        <p class="text-muted mb-0">Cape Town, Mitchells Plain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn, 
    MDBTextarea,
    MDBBtnGroup,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader
  } from "mdb-vue-ui-kit";
import { ref } from "vue";
  export default {
    components: {
      MDBInput,
      MDBCheckbox,
      MDBBtn,
      MDBTextarea,
      MDBBtnGroup,
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBCardHeader
    },
    data() {
    return {
      name: "",
      email: "",
      message: "",
    };
    },
    setup() {
      const name = ref("");
      const email = ref("");
      const message = ref("");

      return {
        name,
        email,
        message,
      };
    },
  };
</script>

<style>
#connect:hover {
    transform: scale(1.03);
    /* background-color: #31313a; */
    color: black;
}

a {
  color: black;
}

</style>
