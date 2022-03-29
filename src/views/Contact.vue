<template>
<div class="pt-5"></div>
<div class="container pt-5">
    <h2><b>Contact ME</b></h2>
    <div class="row pt-5 border">
        <div class="col-6 mt-5 mb-5 border w-50">
           <form>
              <!-- Name input -->
              <MDBInput
                type="text"
                label="Name"
                id="form4Name"
                v-model="Name"
                wrapperClass="mb-4"
              />
            
              <!-- Email input -->
              <MDBInput
                type="email"
                label="Email address"
                id="form4Email"
                v-model="Email"
                wrapperClass="mb-4"
              />
            
              <!-- Message input -->
              <MDBTextarea
                label="Message"
                id="form4Textarea"
                v-model="Message"
                wrapperClass="mb-4"
              />
            
              <!-- Submit button -->
              <MDBBtnGroup>
                <MDBBtn color="dark" size="lg" type="reset"> reset </MDBBtn>
                <MDBBtn color="dark" size="lg" type="submit"> Send </MDBBtn>
              </MDBBtnGroup>
              
            </form> 
        </div>
        <div class="col-6 mb-5">
          <MDBCard>
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>

              </MDBCardText>
              <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                
              </MDBCardText>
              <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                
              </MDBCardText>
              <MDBBtn tag="a" href="#!" color="primary">Go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
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
//     methods: {
//     handleSubmit() {
//       fetch("https://eccomerce-backend.herokuapp.com/contact", {
//         method: "POST",
//         body: JSON.stringify({
//           name: this.name,
//           email: this.email,
//           message: this.message,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           (this.contact = data),
//           alert("message sent");
//           })
//         .catch((err) => console.log(err.message));
//     },
//   },
  };
</script>

<style>

</style>