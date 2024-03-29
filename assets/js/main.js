/**
* Template Name: Nova - v1.2.1
* Template URL: https://bootstrapmade.com/nova-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
let valueOne = null;
let valueTwo = null;
let valueThree = null;


document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });


  const calculatorSelectOne = document.querySelector('.calculator__select-one')
  calculatorSelectOne.addEventListener('change', (event) => {
    console.log(event.target.value);
    const type = document.querySelector(`#${event.target.value}`);
    document.querySelectorAll('.form-select-type').forEach(el => el.classList.add('d-none'));
    document.querySelectorAll('.subcategories').forEach(el => el.classList.add('d-none'));
    type.classList.remove('d-none');
  });
  
  document.addEventListener('change', (event)  => {
    if(event.target.matches('.category')) {
      const type = document.querySelector(`#${event.target.value}`);
      document.querySelectorAll('.subcategories').forEach(el => el.classList.add('d-none'));
      type.classList.remove('d-none');
    }
  });
  
  document.addEventListener('click', (event)  => {
    if(event.target.matches('.subcategories1__btn-add')) {
      document.querySelector('.subcategories1__wrapp').innerHTML += `
              <div>
                <div class="row mb-3">
                  <div class="col-lg-5">
                    <label for="" class="form-label">Метраж</label>
                    <select class="form-select">
                      <option  selected disabled>Выбрать</option>
                      <option  value="subcategories1_1">до 150 кв.м</option>
                      <option  value="subcategories1_2">от 151 до 500 кв. м.</option>
                      <option  value="subcategories1_3">от 501 до 1000 кв. м.</option>
                      <option  value="subcategories1_4">от 1001 до 5000 кв.м.</option>
                      <option  value="subcategories1_5">от 5001 до 10000 кв.м.</option>
                    </select>
                  </div>
                  <div class="col-lg-5">
                    <label for="" class="form-label">Тип помещения</label>
                    <select class="form-select">
                      <option  selected disabled>Выбрать</option>
                      <option value="subcategories1_6">Помещение</option>
                      <option value="subcategories1_7">Здание</option>
                    </select>
                  </div>
                  <div class="col-lg-2">
                    <label for="" class="form-label">Кол-во</label>
                    <input type="text" class="form-control" id="">
                  </div> 
                </div>
                <div class="row">
                  <div class="col-lg-5">
                    <div for="" class="form-label">Сроки выполнения</div>
                    <div>5-7 дней</div>
                  </div> 
                  <div class="col-lg-5">
                    <div for="" class="form-label">Cтоимости работ</div>
                    <div>9999 999 999 </div>
                  </div> 
                </div>
              </div>`;
    }
  });




  document.addEventListener('change', (event)  => {
    if(event.target.matches('.subcategories1__select1')) {
      valueOne = event.target.value;
      resultService();

    }
  });
  document.addEventListener('change', (event)  => {
    if(event.target.matches('.subcategories1__select2')) {
      valueTwo = event.target.value;
      
      resultService();
    }
  });
  document.addEventListener('input', (event)  => {
    if(event.target.matches('.subcategories1__select3')) {
      valueThree = event.target.value;
      
      resultService();
    }
  });


  let template = ` <div>
                    <div class="row mb-3">
                      <div class="col-lg-5">
                        <label for="" class="form-label">Метраж</label>
                        <select class="form-select">
                          <option  selected disabled>Выбрать</option>
                          <option  value="subcategories1_1">до 150 кв.м</option>
                          <option  value="subcategories1_2">от 151 до 500 кв. м.</option>
                          <option  value="subcategories1_3">от 501 до 1000 кв. м.</option>
                          <option  value="subcategories1_4">от 1001 до 5000 кв.м.</option>
                          <option  value="subcategories1_5">от 5001 до 10000 кв.м.</option>
                        </select>
                      </div>
                      <div class="col-lg-5">
                        <label for="" class="form-label">Тип помещения</label>
                        <select class="form-select">
                          <option  selected disabled>Выбрать</option>
                          <option value="subcategories1_6">Помещение</option>
                          <option value="subcategories1_7">Здание</option>
                        </select>
                      </div>
                      <div class="col-lg-2">
                        <label for="" class="form-label">Кол-во</label>
                        <input type="text" class="form-control" id="">
                      </div> 
                    </div>
                    <div class="row">
                      <div class="col-lg-5">
                        <div for="" class="form-label">Сроки выполнения</div>
                        <div>5-7 дней</div>
                      </div> 
                      <div class="col-lg-5">
                        <div for="" class="form-label">Cтоимости работ</div>
                        <div>9999 999 999 </div>
                      </div> 
                    </div>
                  </div>`;


});

let resultService = () => { 
  if(valueOne !== null && valueTwo !== null && valueThree !== null) {
    let b;
    let days;
    switch(valueOne) {
      case "subcategories1_1-1":
        b = valueTwo ==='subcategories1_2-1' ? 35000 : 50000;
        days = valueTwo ==='subcategories1_2-1' ? '3-5' : '4-7';
        break;
      case "subcategories1_1-2":
        b = valueTwo ==='subcategories1_2-1' ? 45000 : 70000;
        days = valueTwo ==='subcategories1_2-1' ? '3-5' : '4-7';
        break;
      case "subcategories1_1-3":
        b = valueTwo ==='subcategories1_2-1' ? 60000 : 90000;
        days = valueTwo ==='subcategories1_2-1' ? '3-5' : '4-7';
        break;
      case "subcategories1_1-4":
        b = valueTwo ==='subcategories1_2-1' ? 80000 : 110000;
        days = valueTwo ==='subcategories1_2-1' ? '3-5' : '4-7';
        break;
      case "subcategories1_1-5":
        b = valueTwo ==='subcategories1_2-1' ? 110000 : 150000;
        days = valueTwo ==='subcategories1_2-1' ? '3-5' : '4-7';
        break;
    };

    document.querySelector(`.subcategories1__result`).classList.remove('d-none');
    document.querySelector(`.subcategories1__result-days`).innerHTML ='';
    document.querySelector(`.subcategories1__result-days`).innerHTML = days;
    document.querySelector(`.subcategories1__result-cell`).innerHTML ='';
    document.querySelector(`.subcategories1__result-cell`).innerHTML = valueThree * b;

  }
};

let resizeReset = function() {
    w = canvasBody.width = window.innerWidth;
    h = canvasBody.height = window.innerHeight;
}

const opts = { 
    particleColor: "rgba(41, 72, 106, 0.33)",
    lineColor: "rgba(41, 72, 106, 0.33)",
    particleAmount: 30,
    defaultSpeed: 1,
    variantSpeed: 1,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 200,
};

window.addEventListener("resize", function(){
    deBouncer();
});

let deBouncer = function() {
    clearTimeout(tid);
    tid = setTimeout(function() {
        resizeReset();
    }, delay);
};

let checkDistance = function(x1, y1, x2, y2){ 
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function(point1, hubs){ 
    for (let i = 0; i < hubs.length; i++) {
        let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        let opacity = 1 - distance / opts.linkRadius;
        if (opacity > 0) { 
            drawArea.lineWidth = 0.5;
            drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
            drawArea.beginPath();
            drawArea.moveTo(point1.x, point1.y);
            drawArea.lineTo(hubs[i].x, hubs[i].y);
            drawArea.closePath();
            drawArea.stroke();
        }
    }
}

Particle = function(xPos, yPos){ 
    this.x = Math.random() * w; 
    this.y = Math.random() * h;
    this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
    this.directionAngle = Math.floor(Math.random() * 360); 
    this.color = opts.particleColor;
    this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
    this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed
    };
    this.update = function(){ 
        this.border(); 
        this.x += this.vector.x; 
        this.y += this.vector.y; 
    };
    this.border = function(){ 
        if (this.x >= w || this.x <= 0) { 
            this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
            this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;	
    };
    this.draw = function(){ 
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
    };
};

function setup(){ 
    particles = [];
    resizeReset();
    for (let i = 0; i < opts.particleAmount; i++){
        particles.push( new Particle() );
    }
    window.requestAnimationFrame(loop);
}

function loop(){ 
    window.requestAnimationFrame(loop);
    drawArea.clearRect(0,0,w,h);
    for (let i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].draw();
    }
    for (let i = 0; i < particles.length; i++){
        linkPoints(particles[i], particles);
    }
}

const canvasBody = document.getElementById("canvas"),
drawArea = canvasBody.getContext("2d");
let delay = 200, tid,
rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();
