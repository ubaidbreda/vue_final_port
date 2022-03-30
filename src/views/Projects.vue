<template>
<div class="pt-5 pb-5">
    
</div>

<!-- Work and Education -->
<div class="container rounded shadow-5-strong border pt-4 mb-5 bg-light">
    <h2><u>Projects</u></h2>
    <div class="row border-top pt-4 pb-2">
        <div class="col-4">
            <MDBCard>
                <MDBCardImg
                    :src="require('@/assets/projects/calculator.jpg')"
                    top
                    alt="..."
                />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                    </MDBCardText>
                    <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
        <div class="col-4">
            <MDBCard>
                <MDBCardImg
                    :src="require('@/assets/projects/mock.png')"
                    top
                    alt="..."
                />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                    </MDBCardText>
                    <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
        <div class="col-4">
            <MDBCard>
                <MDBCardImg
                    :src="require('@/assets/projects/music_site.png')"
                    top
                    alt="..."
                />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                    </MDBCardText>
                    <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
        
    </div>
    <div class="row pb-2 pt-4">
        <div class="col-4">
            <MDBCard>
                <MDBCardImg
                    :src="require('@/assets/projects/tempreture.jpg')"
                    top
                    alt="..."
                />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                    </MDBCardText>
                    <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
        <div class="col-4">
            <MDBCard>
                <MDBCardImg
                    :src="require('@/assets/projects/Travel_guide.png')"
                    top
                    alt="..."
                />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                    </MDBCardText>
                    <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
        <div class="col-4">
            <MDBCard>
                <MDBCardImg
                    :src="require('@/assets/projects/calculator.jpg')"
                    top
                    alt="..."
                />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                    </MDBCardText>
                    <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
        
    </div>
</div>

<div class="pt-5"></div>
</template>

<script>
import { 
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCardImg, 
    MDBBtn 
    } 
    from "mdb-vue-ui-kit";
export default {
    components: {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardImg,
        MDBBtn
    }
};
</script>

<style>

</style>