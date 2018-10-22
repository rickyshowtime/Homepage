import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './Portfolio.css'
import $ from '../node_modules/jquery';


class Portfolio extends Component {
	
		
componentDidMount() {
	
	var myObject = $(this);
	
	setTimeout(function()
	{
		$('#loading').fadeOut();
	}, 1800);
	
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.project li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
	  	window.scroll({
		  top: 0, 
		  behavior: 'smooth' 
		});
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
	  	window.scroll({
		  top: 0, 
		  behavior: 'smooth' 
		});
  });
  navigate(0);
	
$(document).keydown(function (event) {
  if (event.keyCode == 37) {
     navigate(-1); //back
	  	window.scroll({
		  top: 0, 
		  behavior: 'smooth' 
		});
  } else if (event.keyCode == 39) {
    navigate(1); //forward
	  	window.scroll({
		  top: 0, 
		  behavior: 'smooth' 
		});
  }
});

	$(document).ready(function(){
    $(".active li").mouseover(function(){
        $(".accent").addClass("hover");
		$(".active li.current").addClass("hover");
    });
    $(".active li").mouseleave(function(){
        $(".accent").removeClass("hover");
		$(".active li.current").removeClass("hover");
    });
});
	
	
	$(function(){
			// numéro d'index de l'image en cours
			var i = 0;
 
			// on regarde une image pendant 3s
			var intervalDelay = 3000;
 
			// pour sauvegarder le résultat de setInterval
			var refInterval = null;
 
			// objet jquery représentant la div d'id containers
			var obj = $("#containers");
 
			// nombre d'images - 1 incluses dans la div d'id containers
			var n = $("img", obj[0]).length - 1;
 
			// pour cacher toutes les images de la div d'id containers, sauf la première
			$("img", obj[0]).not(":first").hide();
 
			// au survol du containers on montre les images
			obj.hover(
				function(){
					// mouseenter, montrer les images
 
					// array d'objets jQuery, les images contenues dans la div d'id containers 
					var tabObj =  $("img", obj[0]);
 
					/*
					 * on prend une image de l'array tabObj
					 * on en fait un objet jQuery pour
					 * pouvoir lui appliquer un effet
					 */ 
					function showAllImg(){
						$(tabObj[i++]).fadeOut(800, function(){
							if (i === n){
								i = 0;
							}
 
							$(tabObj[i]).fadeIn(800);
						});
					}
 
					// première exécution et les suivantes toutes les intervalDelay/1000 s
					showAllImg();
 
					// les suivantes toutes les intervalDelay/1000 s
					refInterval = setInterval(showAllImg, intervalDelay);
				},
				function(){
					// mouseleave, stop
					clearInterval(refInterval);
				}
			);
		});
}
	
  render() {

	  
    return (
      <div>
		<div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="object" id="object_four" />
            <div className="object" id="object_three" />
            <div className="object" id="object_two" />
            <div className="object" id="object_one" />
          </div>
		</div>
      	</div>
		
		<div className="mobile-fix">
		<div className="mobile"></div>
		<div className="portfolio-title">Portfolio</div>
		<div className="home"><Link to={"/home"}><i className="fas fa-arrow-left" /><span className="return"> back to homepage </span></Link></div>
		
		<div className="carouselbox">
        <div className="buttons">
          <div className="prev">-</div>
		  <div className="next">-</div>
        </div>
        <ol className="project">
          <li id="Rio">Rio <span className="accent">Carnaval</span> 2018</li>
          <li id="KineBach">KINE <span className="accent">&</span> BACH</li>
          <li id="1">more</li>
		  <li id="2">coming</li>
          <li id="3">soon !</li>
        </ol>
		</div>
		 <footer>
                <div className="footer-wrapper2">
                  <ul>
                    <li id="footer-info"><span>Eric Chautems &nbsp;</span><span>|&nbsp; UI UX Web Designer</span></li>
                    <li>
                      <a href="https://www.facebook.com/eric.chautems" target="_blank"><i className="fab fa-facebook-f" /></a>
                      <a href="https://www.linkedin.com/in/eric-chautems-639605108/" target="_blank"><i className="fab fa-linkedin-in" /></a>
                      <a href="https://www.instagram.com/ricky_r_ik/" target="_blank"><i className="fab fa-instagram" /></a>
                      <a href="https://twitter.com/rickyshowtime" target="_blank"><i className="fab fa-twitter" /></a>
                      <a href="mailto:chautems.eric@gmail.com?Subject=WEB%20Project" target="_blank"><i className="fas fa-envelope" /></a>
                    </li>
                    <li><span id="copyright">© Copyright 2018, RickyLabs Corporation</span></li>
                  </ul>
                </div>
              </footer>
		</div>
      </div>
		
    );
  }
}

export default Portfolio;