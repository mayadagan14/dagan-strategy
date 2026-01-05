document.addEventListener("DOMContentLoaded", () => {
    // ===== Mobile menu =====
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");
  
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", () => {
        const isOpen = !mobileNav.hasAttribute("hidden");
        if (isOpen) {
          mobileNav.setAttribute("hidden", "");
          menuBtn.setAttribute("aria-expanded", "false");
        } else {
          mobileNav.removeAttribute("hidden");
          menuBtn.setAttribute("aria-expanded", "true");
        }
      });
    }
  
    // ===== Read more =====
    const readmoreBox = document.getElementById("readmoreBox");
    const readmoreBtn = document.getElementById("readmoreBtn");
  
    if (readmoreBox && readmoreBtn) {
      readmoreBtn.addEventListener("click", () => {
        const isOpen = readmoreBox.classList.toggle("open");
        readmoreBtn.textContent = isOpen ? "סגרו" : "המשיכו לקרוא";
        readmoreBtn.setAttribute("aria-expanded", String(isOpen));
      });
    }
  
    // ===== Dropdown: services (tap/click support) =====
    document.addEventListener("DOMContentLoaded", () => {
        const dropWrap = document.querySelector(".nav-dropdown");
        const dropBtn  = document.querySelector(".nav-dropbtn");
        const dropMenu = dropWrap ? dropWrap.querySelector(".dropdown") : null;
      
        if (!dropWrap || !dropBtn) return;
      
        const isDesktopHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      
        if (isDesktopHover) {
          // בדסקטופ: לא צריך קליק בכלל
          dropBtn.addEventListener("click", (e) => e.preventDefault());
      
          // אם בכל זאת נפתח עם open (מאיזה מצב קודם) – נסגור כשעוזבים
          dropWrap.addEventListener("mouseleave", () => {
            dropWrap.classList.remove("open");
            dropBtn.setAttribute("aria-expanded", "false");
          });
      
        } else {
          // מובייל/טאץ': פתיחה וסגירה בקליק
          dropBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = dropWrap.classList.toggle("open");
            dropBtn.setAttribute("aria-expanded", String(isOpen));
          });
      
          // שלא יסגר בלחיצה בתוך התפריט
          dropMenu?.addEventListener("click", (e) => e.stopPropagation());
      
          // קליק בחוץ סוגר
          document.addEventListener("click", () => {
            dropWrap.classList.remove("open");
            dropBtn.setAttribute("aria-expanded", "false");
          });
        }
      });
      
  
    // ===== Reveal on scroll =====
    const items = document.querySelectorAll(".reveal");
  
    if (items.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("active");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );
  
      items.forEach((el, i) => {
        el.style.transitionDelay = `${i * 80}ms`;
        io.observe(el);
      });
    }
  });
 
  document.addEventListener("DOMContentLoaded", () => {
    const faq = document.querySelector(".faq-card");
    if (!faq) return;
  
    const items = faq.querySelectorAll(".faq-item");
  
    const closeItem = (item) => {
      item.classList.remove("open");
      const btn = item.querySelector(".faq-q");
      const panel = item.querySelector(".faq-a");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (panel) panel.style.maxHeight = null;
    };
  
    const openItem = (item) => {
      item.classList.add("open");
      const btn = item.querySelector(".faq-q");
      const panel = item.querySelector(".faq-a");
      if (btn) btn.setAttribute("aria-expanded", "true");
      if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
    };
  
    items.forEach(item => {
      const btn = item.querySelector(".faq-q");
      const panel = item.querySelector(".faq-a");
  
      // מצב התחלתי סגור
      if (panel) panel.style.maxHeight = null;
  
      btn?.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
  
        // סוגר הכל
        items.forEach(closeItem);
  
        // פותח רק אם היה סגור
        if (!isOpen) openItem(item);
      });
    });
  
    // אם תרצי שברירת מחדל תהיה פתוחה שאלה ראשונה:
    // openItem(items[0]);
  });
  