//display
function returnItem(i, cat){
    return `<div
              class="portfolio-item group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="${cat[i].img}"
                  alt="modern e-commerce website design with purple gradient, shopping cart interface, product showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 ${cat[i].category === 'موقع ويب' ?  'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'} rounded-full text-sm font-medium"
                    >${cat[i].category}</span
                  >
                  <div class="flex gap-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">${cat[i].name}</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  ${cat[i].description}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >${cat[i].skill1}</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >${cat[i].skill2}</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >${cat[i].skill3}</span
                  >
                </div>
              </div>
            </div>`
}


var websites = [
    {
        category: "موقع ويب",
        name: "متجر إلكتروني متكامل",
        description: "منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات",
        skill1: "React",
        skill2: "Node.js",
        skill3: "MongoDB",
        img: "assets/imgs/portfolio-1-BqicZ04C.webp"
    },
    {
        category: "موقع ويب",
        name: "موقع شركة استشارية",
        description: "موقع احترافي لشركة استشارات مع نظام حجز المواعيد",
        skill1: "Next.js",
        skill2: "TypeScript",
        skill3: "Prisma",
        img: "assets/imgs/portfolio-4-Czusdp5K.webp"
    },
    {
        category: "موقع ويب",
        name: "موقع مطعم وتوصيل",
        description: "منصة طلب طعام مع نظام توصيل وتتبع الطلبات",
        skill1: "React",
        skill2: "Express",
        skill3: "PostgreSQL",
        img: "assets/imgs/portfolio-7-BXDNVwGk.webp"
    },
]

var apps = [
    {
        category: "تطبيق",
        name: "تطبيق إدارة المهام",
        description: "تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي",
        skill1: "Vue.js",
        skill2: "Firebase",
        skill3: "Tailwind",
        img: "assets/imgs/portfolio-2-D0_acfF_.webp"
    },
    {
        category: "تطبيق",
        name: "لوحة تحليلات اجتماعية",
        description: "منصة تحليل وإدارة حسابات التواصل الاجتماعي",
        skill1: "React",
        skill2: "Chart.js",
        skill3: "API",
        img: "assets/imgs/portfolio-5-ChqqtI-W.webp"
    },
    {
        category: "تطبيق",
        name: "تطبيق لياقة بدنية",
        description: "تطبيق متكامل لتتبع التمارين والتغذية والتقدم",
        skill1: "React Native",
        skill2: "Redux",
        skill3: "Firebase",
        img: "assets/imgs/portfolio-8-BnHB_F_a.webp"
    },
]

var designs = [
    {
        category: "تصميم",
        name: "موقع شخصي إبداعي",
        description: "تصميم موقع شخصي بأسلوب عصري وألوان جريئة",
        skill1: "Figma",
        skill2: "UI/UX",
        skill3: "Prototype",
        img: "assets/imgs/portfolio-3-uJsBXCgl.webp"
    },
    {
        category: "تصميم",
        name: "تصميم تطبيق جوال",
        description: "تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف",
        skill1: "Figma",
        skill2: "Adobe XD",
        skill3: "Sketch",
        img: "assets/imgs/portfolio-9-Q6q-wpwU.webp"
    },
]

var onlineSelling = [
    {
        category: "تجارة",
        name: "متجر أزياء فاخر",
        description: "منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية",
        skill1: "Next.js",
        skill2: "Stripe",
        skill3: "Sanity",
        img: "assets/imgs/portfolio-6-C9bxzsei.webp"
    },
]

var all = [].concat(websites, apps, designs, onlineSelling);


var arrays = {
    websites,
    apps,
    designs,
    onlineSelling,
    all
}
function display(cat){
    var cartona=``;
    for(var i = 0; i < cat.length; i++){
        cartona += returnItem(i, cat);
    }
    document.getElementById("portfolio-grid").innerHTML = cartona;
}
var currentCategory = "all"

var portfolio_filters = document.getElementById("portfolio-filters");

portfolio_filters.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
      var clickedId = e.target.id;
      if(currentCategory === clickedId) return;
      document.getElementById(e.target.id).classList.add("bg-linear-to-r", "from-primary", "to-secondary");
      document.getElementById(currentCategory).classList.remove("bg-linear-to-r", "from-primary", "to-secondary");
      currentCategory = e.target.id;
      if(e.target.id === "all") shuffle();
      display(arrays[e.target.id])
    }
})

function shuffle(){
    for(var i = 0; i < all.length; i++){
        var randomIndex = Math.floor(Math.random() * all.length);
        [all[i], all[randomIndex]] = [all[randomIndex], all[i]];
    }
}



document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("testimonials-carousel");
  const cards = document.querySelectorAll(".testimonial-card");
  const nextBtn = document.getElementById("next-testimonial");
  const prevBtn = document.getElementById("prev-testimonial");
  
  // Grab your indicator buttons
  const indicators = document.querySelectorAll(".carousel-indicator");

  let currentIndex = 0;

  function getVisibleCardCount() {
    if (window.innerWidth >= 1024) return 3; 
    if (window.innerWidth >= 640) return 2;  
    return 1;                                
  }

  function updateIndicators() {
    indicators.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("bg-accent");
        dot.classList.remove("bg-slate-400", "dark:bg-slate-600");
        dot.setAttribute("aria-selected", "true");
      } else {
        // Dim it back out
        dot.classList.remove("bg-accent");
        dot.classList.add("bg-slate-400", "dark:bg-slate-600");
        dot.setAttribute("aria-selected", "false");
      }
    });
  }

  function slide() {
    const visibleCount = getVisibleCardCount();
    const maxIndex = cards.length - visibleCount;

    if (currentIndex > maxIndex) currentIndex = 0;
    if (currentIndex < 0) currentIndex = maxIndex;

    const percentagePerCard = 100 / visibleCount;
    const shiftPercentage = currentIndex * percentagePerCard;

    const isRTL = document.documentElement.dir === "rtl" || document.body.dir === "rtl";

    if (isRTL) {
      track.style.transform = `translateX(${shiftPercentage}%)`;
    } else {
      track.style.transform = `translateX(-${shiftPercentage}%)`;
    }


    updateIndicators();
  }

  // --- Button Listeners ---
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    slide();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    slide();
  });


  indicators.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIndex = parseInt(dot.getAttribute("data-index"));
      
      const visibleCount = getVisibleCardCount();
      const maxIndex = cards.length - visibleCount;
      

      currentIndex = Math.min(targetIndex, maxIndex);
      slide();
    });
  });


  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(slide, 100);
  });

  slide();
});

//theme toggle
var theme_toggle = document.getElementById("theme-toggle-button");
var html = document.querySelector("html");
var theme = localStorage.getItem("theme") || "dark";
if(theme === "light") html.classList.remove("dark");
theme_toggle.addEventListener("click", function(){
    html.classList.toggle("dark");
    var val = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", val);
})


//form stuff


var comboBox = document.querySelectorAll("[role='combobox']");

comboBox.forEach(function(combo){
  combo.addEventListener("click", function(e){
    e.stopPropagation();

    var wrapper = e.target.closest(".custom-select-wrapper");
    var listBox = wrapper.querySelector("[role='listbox']");

    document.querySelectorAll("[role='listbox']").forEach(function(lb){
      if (lb !== listBox) lb.classList.add("hidden");
    });
    listBox.classList.toggle("hidden");
  });
});



var listbox = document.querySelectorAll("[role='listbox']")
listbox.forEach(function(listBox){
  listBox.addEventListener("click", function(e){
    var wrapper = listBox.closest(".custom-select-wrapper");
    var combo = wrapper.querySelector("[role='combobox']");
    combo.querySelector("span").innerHTML = e.target.textContent;
    listBox.classList.add("hidden"); 
  });
});

document.addEventListener("click", function(e){
  var openListBox = document.querySelector("[role='listbox']:not(.hidden)");
  if (!openListBox) return;
  if (openListBox.contains(e.target)) return;
  openListBox.classList.add("hidden");
});

//form validation 
function validate(){
  var full_name = document.getElementById("full-name");
  var email = document.getElementById("email")
  var project_details = document.getElementById("project-details");
  var name_missing = document.getElementById("name-missing");
  var email_missing = document.getElementById("email-missing");
  var project_details_missing = document.getElementById("project-details-missing")

  var valid = true;
  if(full_name.value === "") {
    name_missing.classList.remove("hidden");
    valid = false;
  }
  else name_missing.classList.add("hidden")

  if(email.value === "") {
    email_missing.classList.remove("hidden");
    valid = false;
  }
  else email_missing.classList.add("hidden")

  if(project_details.value === "") {
    project_details_missing.classList.remove("hidden");
    valid = false;
  }
  else project_details_missing.classList.add("hidden");

  return valid;

}

document.getElementById("formSubmission").addEventListener("submit", function(e){
  e.preventDefault();  
  if(!validate()) return;
})


