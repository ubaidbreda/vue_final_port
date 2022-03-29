import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import Testimonials from '../views/Testimonials.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/conatct',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
