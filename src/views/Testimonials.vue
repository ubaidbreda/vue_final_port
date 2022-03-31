<template>
<div class="pt-5 pb-5">

</div>
<div class="container rounded shadow-5-strong border pt-4 mb-5 bg-light">
    <h2><u>Testimonials</u></h2>
    <div class="row border-top pb-2">
        <div class="col-4">
            <div class="container">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    <div class="card testimonial-card mt-2 mb-3">
                        <div class="card-up aqua-gradient"></div>
                        <div class="avatar mx-auto white">
                            <img :src="require('@/assets/testimonials/darren.jpg')" class="rounded-circle img-fluid"
                                alt="Darren img">
                        </div>
                        <div class="card-body text-center">
                            <h4 class="card-title font-weight-bold">Darren Pettersen</h4>
                            <p>Peer</p>
                            <hr>
                            <p><i class="fas fa-quote-left"></i> He is a honest, humble and hardworking individual, who can adapt to most situations and who is always willing to help when needed.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="col-4">
            <div class="container">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    <div class="card testimonial-card mt-2 mb-3">
                        <div class="card-up aqua-gradient"></div>
                        <div class="avatar mx-auto white">
                            <img :src="require('@/assets/testimonials/Godwin.jpeg')" class="rounded-circle img-fluid"
                                alt="Godwin img">
                        </div>
                        <div class="card-body text-center">
                            <h4 class="card-title font-weight-bold">Godwin Dzvapatsva</h4>
                            <p>Lecture</p>
                            <hr>
                            <p><i class="fas fa-quote-left"></i> I am confident that Ubaidullah can meet your expectations. He is hard working. I recommend him.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="col-4">
            <div class="container">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    <div class="card testimonial-card mt-2 mb-3">
                        <div class="card-up aqua-gradient"></div>
                        <div class="avatar mx-auto white">
                            <img :src="require('@/assets/testimonials/jude.jpeg')" class="rounded-circle img-fluid"
                                alt="Jude img">
                        </div>
                        <div class="card-body text-center">
                            <h4 class="card-title font-weight-bold">Muhammad Jude Julious</h4>
                            <p>Peer</p>
                            <hr>
                            <p><i class="fas fa-quote-left"></i> He has shown alot of grown since starting here, not only is he a hard worker and a fast but a amazing collegue to work with I recommend him to any company.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="col-4">
            <div class="container">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    <div class="card testimonial-card mt-2 mb-3">
                        <div class="card-up aqua-gradient"></div>
                        <div class="avatar mx-auto white">
                            <img :src="require('@/assets/testimonials/darren.jpg')" class="rounded-circle img-fluid"
                                alt="woman avatar">
                        </div>
                        <div class="card-body text-center">
                            <h4 class="card-title font-weight-bold">Mugammad Breda</h4>
                            <p>Peer</p>
                            <hr>
                            <p><i class="fas fa-quote-left"></i> Ubaidullah has the potential to do great things. He is a team player and gets along well with his colleagues.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="col-4">
            <div class="container">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    <div class="card testimonial-card mt-2 mb-3">
                        <div class="card-up aqua-gradient"></div>
                        <div class="avatar mx-auto white">
                            <img :src="require('@/assets/testimonials/darren.jpg')" class="rounded-circle img-fluid"
                                alt="woman avatar">
                        </div>
                        <div class="card-body text-center">
                            <h4 class="card-title font-weight-bold">M.Yaasien Salaam</h4>
                            <p>Peer</p>
                            <hr>
                            <p><i class="fas fa-quote-left"></i> Ubaidullah is a hardworking individual,  always paying attention to detail, always there to lend a helping hand when he can and a great addition to any team.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <div class="row"></div>
</div>

<div class="pt-5"></div>
</template>

<script>
export default {

}
</script>

<style>
.testimonial-card .card-up {
  height: 120px;
  overflow: hidden;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.aqua-gradient {
  background: #31313a;
}

.testimonial-card .avatar {
  width: 120px;
  margin-top: -60px;
  overflow: hidden;
  border: 5px solid #fff;
  border-radius: 50%;
}
</style>