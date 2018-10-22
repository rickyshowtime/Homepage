import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './Home.css'
import $ from '../node_modules/jquery';
import ScrollReveal from '../node_modules/scrollreveal';


class Home extends Component {
	
		
componentDidMount() {
	
	window.sr = ScrollReveal()
	window.sr.reveal('.reveal')
	
	var myObject = $(this);
	
	setTimeout(function()
	{
		$('#loading').fadeOut();
	}, 2800);

	var myObject = $(this);

	setTimeout(function()
	{
		$('.icon-scroll-loader').addClass("show");
	}, 10000);
	
	setTimeout(function()
	{
		$('.icon-scroll-loader').removeClass("show");
	}, 20000);
		
	
	var mainbottom = $('#home').offset().top + $('#home').height();

	// on scroll, 
	$(window).on('scroll',function(){ "use strict";
									 
		// we round here to reduce a little workload
		var stop = Math.round($(window).scrollTop());

		  		if (stop > mainbottom - 450 ) {
					$('.mdc-linear-progress__buffer').removeClass('start');
					var myObject = $(this);

						setTimeout(function()
						{
							$('.icon-scroll-loader').addClass("show");
						}, 10000);
					
						setTimeout(function()
						{
							$('.icon-scroll-loader').removeClass("show");
						}, 20000);

				} 

				else {
					$('.mdc-linear-progress__buffer').addClass('start');
					$('.icon-scroll-loader').removeClass("show");
				}
									
	});
	
	var previousScroll = 0;
	$(window).scroll(function(event){
	   var scroll = $(this).scrollTop();
	   if (scroll > previousScroll){
		   $('#back').fadeOut();
	   } else {
		   $('#back').fadeIn();
	   }
	   previousScroll = scroll;
	});

	
	$("#back").click(function() {
		window.scroll({
		  top: 0, 
		  behavior: 'smooth' 
		});
	});
	
	$("#button").click(function() {
		$('.modal').addClass('show-modal');
	});
	
	$(".close-button").click(function() {
		$('.modal').removeClass('show-modal');
	});
	

	$(window).scroll(function () {
        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
            $('#back').fadeOut();
        }
    })
	
      
	var timer;
	$(window).bind('scroll',function () {
		clearTimeout(timer);
		timer = setTimeout( refresh , 2000 );
	});
	var refresh = function () { 
		$('#back').fadeOut();
	};
		
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
		<div className="wrap-bg">
		    <div className="bg"></div>
			<div className="Shade"></div>
			<div className="Shade"></div>
	  	</div>	
        <div className="top" id="back" onclick="this.scrollToTop">
          <ul>
            <li><i className="fas fa-chevron-circle-up" /></li>
            <li>Back to top</li>
          </ul>
        </div>
        <div id="home">
          <div className="title" id="bigtitle">Hi, I’m Eric</div>
          <div className="title" id="smalltitle">UI &amp; UX Designer</div>
          <div id="button"><Link to={"/Portfolio"}><button className="foo-button mdc-button btnformat">PORTFOLIO</button></Link></div>
          <div className="icon-scroll-loader"><div className="icon-scroll" /></div>
          <a href="https://www.facebook.com/eric.chautems" target="_blank"><i className="fab fa-facebook-f" /></a>
          <a href="https://twitter.com/rickyshowtime" target="_blank"><i className="fab fa-twitter" /></a>
          <a href="https://www.instagram.com/ricky_r_ik/" target="_blank"><i className="fab fa-instagram" /></a>
          <a href="https://www.linkedin.com/in/eric-chautems-639605108/" target="_blank"><i className="fab fa-linkedin-in" /></a>
        </div>
        <main className="mdl-layout__content">
          <div className="scroll" id="bg-light-top">
            <div className="bg-light">
              <section className="skills" id="S1">
                <h1 className="sectiontitle">PROFESSIONAL SKILLS</h1>
                <div className="grid" id="skills-grid">
                  <div className="skills-box">
                    <div className="skills-title">Adobe CC, Sketch, Figma</div>
                    <div className="skills-progress">80%</div>			
                    <div className="progressbar">
                      <div role="progressbar" className="mdc-linear-progress ">
                        <div className="mdc-linear-progress__buffering-dots" />
                        <div className="mdc-linear-progress__buffer start" id="progressbar1" />
                        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.5)'}}><span className="mdc-linear-progress__bar-inner" /></div>
                        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span className="mdc-linear-progress__bar-inner" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-title">HTML5, CSS, SASS, LESS</div>
                    <div className="skills-progress">100%</div>	
                    <div className="progressbar">
                      <div role="progressbar" className="mdc-linear-progress ">
                        <div className="mdc-linear-progress__buffering-dots" />
                        <div className="mdc-linear-progress__buffer start" id="progressbar2" />
                        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.5)'}}><span className="mdc-linear-progress__bar-inner" /></div>
                        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span className="mdc-linear-progress__bar-inner" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-title">Angular JS, Ruby, React JS</div>
                    <div className="skills-progress">60%</div>			
                    <div className="progressbar">
                      <div role="progressbar" className="mdc-linear-progress ">

                        <div className="mdc-linear-progress__buffering-dots" />
                        <div className="mdc-linear-progress__buffer start" id="progressbar3" />
                        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.5)'}}><span className="mdc-linear-progress__bar-inner" /></div>
                        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span className="mdc-linear-progress__bar-inner" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-title">GitHub, CodePen</div>
                    <div className="skills-progress">100%</div>	
                    <div className="progressbar">
                      <div role="progressbar" className="mdc-linear-progress ">
                        <div className="mdc-linear-progress__buffering-dots" />
                        <div className="mdc-linear-progress__buffer start" id="progressbar4" />
                        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.5)'}}><span className="mdc-linear-progress__bar-inner" /></div>
                        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span className="mdc-linear-progress__bar-inner" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-title">Wordpress, Tumblr, Wix</div>
                    <div className="skills-progress">80%</div>			
                    <div className="progressbar">
                      <div role="progressbar" className="mdc-linear-progress ">
                        <div className="mdc-linear-progress__buffering-dots" />
                        <div className="mdc-linear-progress__buffer start" id="progressbar5" />
                        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.8)'}}><span className="mdc-linear-progress__bar-inner" /></div>
                        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span className="mdc-linear-progress__bar-inner" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-title">GA, AdWords, SEO, AMP</div>	
                    <div className="skills-progress">60%</div>			
                    <div className="progressbar">
                      <div role="progressbar" className="mdc-linear-progress ">
                        <div className="mdc-linear-progress__buffering-dots" />
                        <div className="mdc-linear-progress__buffer start" id="progressbar6" />
                        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{transform: 'scaleX(0.5)'}}><span className="mdc-linear-progress__bar-inner" /></div>
                        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span className="mdc-linear-progress__bar-inner" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="os">OS:
                  <i className="fab fa-windows" />
                  <i className="fab fa-apple" />
                  <i className="fab fa-linux" />
                </div>
              </section>	
              <section className="experience" id="S2">
                <h1 className="sectiontitle">EXPERIENCE</h1>
                <div className="grid" id="experience-grid">
                  <div className="experience-box">
                    <div className="reveal">
                      <div className="experience-number">01</div>	
                      <div className="experience-title">BUSINESS IT ANALYST</div>	
                      <div className="experience-subtitle">NESTLE SA  |  2016 - Today</div>		
                      <div className="experience-content">Financial Analysis, SAP Data migration, SAP transaction automation (Worksoft Certify), SharePoint Virtual Board Expert,
                        team coordinator, Microsoft Excel VBA data automation, technical reporting, ...</div>							
                    </div>
                  </div>
                  <div className="experience-box">
                    <div className="reveal">
                      <div className="experience-number">02</div>	
                      <div className="experience-title">COMMUNICATIONS TRAINEE</div>	
                      <div className="experience-subtitle">NESTLE SA  |  2015 - 2016</div>		
                      <div className="experience-content">Event planning (internal event and yearly award contest), maintenance of Nestlé intranet site (design update of communication site and user acess management), news publishing via Nestlé intranet, page creation for Nestlé
                        intranet, creation of the new Nestlé GLOBE newsletter (HTML), management of the newsletter sending process,
                        management of site access privilege, surveys creation (Opinio), statistics creation (with Google Analytics), revision of the Nestlé intranet pages design, participation to the implementation of new projects (Lync, Skype for Business, Office 365).</div>							
                    </div>
                  </div>
                  <div className="experience-box">
                    <div className="reveal">
                      <div className="experience-number">03</div>	
                      <div className="experience-title">IT ASSISTANT TRAINEE</div>	
                      <div className="experience-subtitle">SAPAL SA Ecublens  |  August 2013</div>		
                      <div className="experience-content">new IT equipment installation, new MAC addresses registration into the BOSCH database, BOSCH intranet site
                        maintenance, installation of the new extensions for BOSCH intranet, IT support to the company’s staff, IT maintenance at
                        Demaurex SA for 2 days, keeping a logbook, SAP debugging, installation of new programs into SAP, creation of new rules
                        into SAP.</div>							
                    </div>
                  </div>
                  <div className="experience-box">
                    <div className="reveal">
                      <div className="experience-number">04</div>	
                      <div className="experience-title">HIGH SCHOOL INTERNSHIP</div>	
                      <div className="experience-subtitle">NOVAWAY Busigny  |  2015 - 2016</div>		
                      <div className="experience-content">Head of purchasing department, Use of Sage 100, accountancy, billing, order by phone in German and English, keeping a logbook, management of invoice creation, order and delivery form management, stock management of good, office supply management, creation of statistics and establishment of the forecast figures, documents classification (billing,
                        invoice, etc.).</div>							
                    </div>
                  </div>
                  <div className="experience-box">
                    <div className="reveal">
                      <div className="experience-number">05</div>	
                      <div className="experience-title">JAVA PROGRAMMING</div>	
                      <div className="experience-subtitle">CESSNOV YVERDON  |  FEBRUARY 2012</div>		
                      <div className="experience-content">Use of Eclipse, small applications creation, learn of the JAVA language basis.</div>								
                    </div>
                  </div>
                  <div className="experience-box" />
                </div>
              </section>
              <section className="education" id="S3">
                <h1 className="sectiontitle">EDUCATION</h1>
                <div className="timeline"> 
                  <div className="line" />
                  <div className="dots">
                    <div className="circle" id="o1" />
                    <div className="circle" id="o2" />
                    <div className="circle" id="o3" />
                  </div>
                  <div className="container">
                    <div className="content" id="c1">
                      <div className="reveal">
                        <div className="round"><i className="fas fa-graduation-cap" /></div>
                        <div className="education-title">CESSNOV YVERDON <span>2015</span>&nbsp;&nbsp;<i className="fas fa-graduation-cap" /></div>
                        <div className="education-content">General Culture and Commerce degree, Commercial Professional Maturity (MPC), Federal Certificate of Capacity (CFC).</div>
                      </div>
                    </div>
                    <div className="education-date" id="date1">2015</div>
                    <div className="content" id="c2" />
                    <div className="content" id="c3" />
                    <div className="content" id="c4">
                      <div className="reveal">
                        <div className="round"><i className="fas fa-laptop" /></div>
                        <div className="education-title"><i className="fas fa-laptop" />&nbsp;&nbsp; HEIG-VD Yverdon   <span>2016</span></div>
                        <div className="education-content">Computer management system,  evening class (C ++, JAVA, ...).</div>
                      </div>
                    </div>
                    <div className="education-date" id="date2">2016</div>
                    <div className="content" id="c5">
                      <div className="reveal">
                        <div className="round"><i className="fab fa-html5" /></div>
                        <div className="education-title">PROCOM (SAWI) LAUSANNE<span>2017</span>&nbsp;&nbsp;<i className="fab fa-html5" /></div>
                        <div className="education-content">
                          UI / UX Designer training (HTML, CSS, JAVA). Design, realization and development of a complete website (Sketching, Sprint, Prototyping, Design and Code).</div>
                      </div>
                    </div>
                    <div className="education-date" id="date3">2017</div>
                    <div className="content" id="c6" />
                  </div>	
                </div>
              </section>
              <div className="bg-light" id="bg-light-bottom" />
              <footer>
                <div className="footer-wrapper">
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
        </main>
      </div>
    );
  }
}

export default Home;