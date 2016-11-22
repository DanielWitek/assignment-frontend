import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'
import playerTpl from './templates/player.hbs'

const $app = $('#app')

var players = {
  'sergey': {
    name: 'Sergey Karjakin',
    image: 'https://cdn.worldchess.com/static/img/nyfide/karjakin_2x.png',
    description: `
      Karjakin is a Russian (formerly representing Ukraine) chess grandmaster. He is a former chess prodigy and 
      holds the record for the world's youngest Grandmaster, having qualified for this title at the age of 12 years and 7 months.
      On March 28, 2016, Sergey Karjakin became the Challenger to Magnus Carlsen in the World Chess Championship 2016 after 
      winning the Candidates Tournament 2016 in Moscow.`
    },
  'magnus': {
    name: 'Magnus Carlsen',
    image: 'https://cdn.worldchess.com/static/img/nyfide/carlsen_2x.png',
    description: `
      Carlsen is a Norwegian chess grandmaster, and the current World Chess Champion. 
      Carlsen was a chess prodigy. He became a Grandmaster in 2004, at the age of 13 years, 148 days. 
      This made him the third-youngest grandmaster in history.`
 }
}

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function ThePlayers(ctx) {
  let player = players[ctx.params.player];
  if(player==undefined)
  {
    notFound();
  }
  else
  {
    let name = player.name;
    let image = player.image;
    let description = player.description;
    $app.html(playerTpl({name, image, description}));
  }
}

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/players/:player', ThePlayers)
router('/contact', contact)
router('*', notFound)
router()
