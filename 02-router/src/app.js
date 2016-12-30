import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'
import sergeyTpl from './templates/sergey.hbs'
import magnusTpl from './templates/magnus.hbs'

const $app = $('#app')

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function notFound() {
  $app.html(notFoundTpl())
}

function sergey() {
  $app.html(sergeyTpl())
}

function magnus() {
  $app.html(magnusTpl())
}

router('/', index)
router('/players/sergey', sergey)
router('/players/magnus', magnus)
router('/contact', contact)
router('*', notFound)
router()