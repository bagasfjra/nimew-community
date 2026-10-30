/**
 * nimew! — Komunitas Anime & Kultur Pop Jepang
 * Pure Vanilla JavaScript (script.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- 1. NAVBAR SCROLL EFFECT & SCROLLSPY ----------
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    // Navbar style on scroll
    if (scrollPos > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollPos > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active link highlighting (Scrollspy)
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // run once on load

  // Smooth scroll to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ---------- 2. MOBILE DRAWER NAVIGATION ----------
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // ---------- 3. ACTIVITY FILTER TABS ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const activityCards = document.querySelectorAll('.activity-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      activityCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ---------- 4. ANIME RECOMMENDER TOOL (INTERACTIVE) ----------
  const animeDatabase = [
    {
      title: "Yuru Camp△ (Laid-Back Camp)",
      mood: "relaxing",
      genre: "Slice of Life • Iyashikei",
      score: "⭐ 8.3 / 10",
      episodes: "12 Episode",
      studio: "C-Station",
      synopsis: "Kisah hangat dan santai gadis-gadis SMA berkemah di dekat Gunung Fuji. Cocok ditonton sambil menyeduh mie instan panas di malam hari."
    },
    {
      title: "Frieren: Beyond Journey's End",
      mood: "relaxing",
      genre: "Adventure • Fantasy • Drama",
      score: "⭐ 9.3 / 10",
      episodes: "28 Episode",
      studio: "Madhouse",
      synopsis: "Setelah raja iblis dikalahkan, elf penyihir bernama Frieren menempuh perjalanan baru untuk memahami arti waktu dan hubungan antarmanusia."
    },
    {
      title: "Jujutsu Kaisen",
      mood: "hype",
      genre: "Action • Supernatural • Shonen",
      score: "⭐ 8.6 / 10",
      episodes: "24 Episode",
      studio: "MAPPA",
      synopsis: "Pertarungan kutukan berenergi tinggi dengan animasi koreografi sakuga yang memanjakan mata, karakter karismatik, dan pacing super intens."
    },
    {
      title: "Tengen Toppa Gurren Lagann",
      mood: "hype",
      genre: "Mecha • Sci-Fi • Action",
      score: "⭐ 8.6 / 10",
      episodes: "27 Episode",
      studio: "Gainax",
      synopsis: "Anime penuh kobaran api semangat pantang menyerah! Bor yang akan menembus batas langit dengan orkestrasi pertempuran skala galaksi."
    },
    {
      title: "Steins;Gate",
      mood: "mystery",
      genre: "Sci-Fi • Thriller • Psychological",
      score: "⭐ 9.1 / 10",
      episodes: "24 Episode",
      studio: "White Fox",
      synopsis: "Eksperimen microwave microwave time-travel yang tanpa sengaja mengubah garis waktu dunia. Siap-siap dibuat mikir keras dan tegang!"
    },
    {
      title: "The Promised Neverland (Season 1)",
      mood: "mystery",
      genre: "Suspense • Mystery • Horror",
      score: "⭐ 8.5 / 10",
      episodes: "12 Episode",
      studio: "CloverWorks",
      synopsis: "Tiga anak cerdas di panti asuhan menemukan rahasia kelam di balik kehidupan nyaman mereka dan merancang pelarian yang mempertaruhkan nyawa."
    },
    {
      title: "A Silent Voice (Koe no Katachi)",
      mood: "emotional",
      genre: "Drama • Romance • School",
      score: "⭐ 8.9 / 10",
      episodes: "Movie (130 Menit)",
      studio: "Kyoto Animation",
      synopsis: "Mantan pembully berusaha menebus kesalahannya kepada gadis tunarungu yang pernah ia sakiti di masa kecil. Penuh pesan penerimaan diri dan empati."
    },
    {
      title: "Violet Evergarden",
      mood: "emotional",
      genre: "Drama • Fantasy • Slice of Life",
      score: "⭐ 8.7 / 10",
      episodes: "13 Episode + Movie",
      studio: "Kyoto Animation",
      synopsis: "Mantan prajurit wanita yang kehilangan kedua tangannya belajar memahami arti kata 'Aku mencintaimu' melalui profesi penulis surat Auto Memory Doll."
    },
    {
      title: "Bocchi the Rock!",
      mood: "relaxing",
      genre: "Comedy • Music • Slice of Life",
      score: "⭐ 8.8 / 10",
      episodes: "12 Episode",
      studio: "CloverWorks",
      synopsis: "Gadis pemalu dengan kecemasan sosial parah yang diam-diam jago bermain gitar dan akhirnya bergabung dalam grup band indie Kessoku Band."
    },
    {
      title: "Mob Psycho 100",
      mood: "hype",
      genre: "Action • Comedy • Supernatural",
      score: "⭐ 8.5 / 10",
      episodes: "3 Season",
      studio: "Bones",
      synopsis: "Seorang anak SMP dengan kekuatan esper luar biasa hanya ingin menjalani kehidupan normal dan memikat gadis pujaannya."
    }
  ];

  const rollAnimeBtn = document.getElementById('rollAnimeBtn');
  const moodSelect = document.getElementById('moodSelect');
  const recommendationResult = document.getElementById('recommendationResult');

  if (rollAnimeBtn && moodSelect && recommendationResult) {
    rollAnimeBtn.addEventListener('click', () => {
      const selectedMood = moodSelect.value;
      
      let pool = animeDatabase;
      if (selectedMood !== 'all') {
        pool = animeDatabase.filter(item => item.mood === selectedMood);
      }

      if (pool.length === 0) return;

      // Pick random anime
      const randomIndex = Math.floor(Math.random() * pool.length);
      const picked = pool[randomIndex];

      // Render Result Card
      recommendationResult.innerHTML = `
        <div class="result-card">
          <div class="result-header">
            <span class="result-genre">${picked.genre}</span>
            <span class="result-score">${picked.score}</span>
          </div>
          <h3 class="result-title">${picked.title}</h3>
          <p class="result-synopsis">${picked.synopsis}</p>
          <div class="result-meta">
            <span>📺 ${picked.episodes}</span>
            <span>•</span>
            <span>🏢 Studio: ${picked.studio}</span>
          </div>
        </div>
      `;
    });
  }

  // ---------- 5. CONTACT FORM VALIDATION & HANDLING ----------
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('nameInput');
  const contactInput = document.getElementById('contactInput');
  const messageInput = document.getElementById('messageInput');
  
  const nameError = document.getElementById('nameError');
  const contactError = document.getElementById('contactError');
  const messageError = document.getElementById('messageError');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Clear previous states
      nameError.textContent = '';
      contactError.textContent = '';
      messageError.textContent = '';
      nameInput.classList.remove('is-invalid');
      contactInput.classList.remove('is-invalid');
      messageInput.classList.remove('is-invalid');

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameError.textContent = 'Silakan isi nama panggilan minimal 2 karakter.';
        nameInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Contact
      if (!contactInput.value.trim() || contactInput.value.trim().length < 3) {
        contactError.textContent = 'Harap isi kontak Discord, email, atau username IG kamu.';
        contactInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        messageError.textContent = 'Pesan terlalu singkat, tulis minimal 5 karakter ya.';
        messageInput.classList.add('is-invalid');
        isValid = false;
      }

      if (isValid) {
        // Show success state
        formSuccessAlert.style.display = 'flex';
        
        // Reset form inputs
        contactForm.reset();

        // Auto hide success alert after 8 seconds
        setTimeout(() => {
          formSuccessAlert.style.display = 'none';
        }, 8000);
      }
    });
  }

  // ---------- 6. DYNAMIC COPYRIGHT YEAR ----------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

