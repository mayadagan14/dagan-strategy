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
  document.addEventListener("DOMContentLoaded", () => {

    const contentByStep = {
      1: `
        <h3>
 היכרות, הגדרת מטרות ותיאום ציפיות
</h3>
        <p>השלב הראשון בתכנון פיננסי 360 אינו הכסף – אלא החיים.
הפגישה מתקיימת עם שני בני הזוג יחד, מתוך הבנה שמטרות חיים וכסף הם תהליך זוגי ומשפחתי.
באמצעות שיח פתוח והדדי אנחנו מגדירים את מטרות החיים בטווח הקצר, הבינוני והארוך,
ומוודאים שיש איזון בין איכות החיים בהווה לבין הביטחון והחופש בעתיד.
במקום להישאר ברמת הצהרות כלליות כמו “לשמור על רמת החיים בפרישה”,
אנחנו מתרגמים את המטרות ליעדים ברורים ומדידים:
באיזה גיל רוצים לפרוש, איזו רמת הכנסה נטו נדרשת,
אילו אבני דרך צפויות בדרך, ומה לוחות הזמנים לכל מטרה.
כך חלומות הופכים ליעדים שניתן לתכנן, לבחון ולהגשים.
כאשר קיימות מטרות רבות, ולא תמיד ניתן להגשים את כולן במקביל,
אנחנו מגדירים סדרי עדיפויות מוסכמים –
מה חשוב יותר, מה דחוף יותר, ומה ניתן לדחות.
המטרה היא לייצר בחירה מודעת, לא ויתור כפוי.
בשלב זה אנו בוחנים גם את סיבולת הסיכון –
היכולת הפסיכולוגית של כל אחד מבני הזוג להתמודד עם תנודתיות, אי־ודאות וירידות בשווקים.
הבנה זו חיונית כדי שהדרך שנבנה בהמשך תהיה לא רק נכונה על הנייר,
אלא גם כזו שניתן להתמיד בה לאורך זמן.</p>
      `,
      2: `
        <h3>איסוף מידע והבנת התמונה המלאה</h3>
    
        <p>
          בשלב זה אנחנו ממפים את כל מרכיבי התמונה הפיננסית של המשפחה:
נכסים, התחייבויות, הכנסות, הוצאות, פנסיה, ביטוח, השקעות, נדל״ן וחסכונות.
המטרה אינה רק לאסוף נתונים, אלא להבין איך כל החלקים עובדים יחד –
ואיפה קיימים פערים, חוסר בהירות או ניהול אוטומטי שלא נבחן שנים.
לאחר שבפגישות ההיכרות הגדרנו את מטרות החיים, סדרי העדיפויות וסיבולת הסיכון,
עוברים לשלב העובדתי: איסוף הנתונים הכמותיים.
בשלב זה אנו מרכזים את כל המידע הפיננסי של המשפחה בצורה מובנית ומסודרת:
נכסים, התחייבויות, הכנסות, הוצאות, פנסיה, ביטוחים, השקעות, נדל״ן, חובות וחסכונות.
בנוסף, אנו אוספים ומנתחים מידע על עמלות, דמי ניהול ועלויות נלוות
שלרוב אינן שקופות במלואן, אך משפיעות משמעותית על התוצאה לאורך זמן.
זהו השלב שבו המספרים מחליפים את ההערכות,
והתחושות מקבלות עוגן במציאות.
המטרה היא לבנות תמונת מצב מלאה, מדויקת ואובייקטיבית
שתשמש נקודת פתיחה אמינה להמשך התהליך.
התוצר של שלב זה הוא מאזן משפחתי מסודר והבנה ברורה של המצב הקיים,
שמאפשרים לעבור לשלב הבא — ניתוח הנתונים, זיהוי פערים והזדמנויות,
ובניית האסטרטגיה הפיננסית.
        </p>
      `,
      3: `
        <h3>ניתוח פיננסי וזיהוי Quick Wins </h3>
        <p>לאחר שיש בידינו תמונת מצב כמותית מלאה, מתחיל שלב הניתוח.
בשלב זה אנו מגבשים הנחות בסיס ריאליות לגבי העתיד:
הכנסות והוצאות, קצב חיסכון, תשואות צפויות, אינפלציה ושינויים אפשריים לאורך החיים.
הנחות אלו אינן תרחיש אופטימי או פסימי, אלא בסיס עבודה אחראי לקבלת החלטות.
כחלק מהניתוח נבנית גם תחזית פרישה:
מה צפויה להיות ההכנסה החודשית בגיל הפרישה, מה הפער מול רמת החיים הרצויה,
ואילו פעולות ניתן לבצע כבר היום כדי לצמצם או לסגור את הפער לאורך זמן.
במקביל נבחן מבנה החוב של המשפחה:
משכנתאות, הלוואות והתחייבויות שונות –כולל עלויות מימון, תנאים, לוחות סילוקין ואפשרויות למחזור או הוזלה. לעיתים התאמות נכונות במבנה החוב מייצרות הקלה תזרימית
והשפעה משמעותית בטווח הקצר והבינוני.
חלק מרכזי נוסף בשלב זה הוא מיפוי חשיפות לסיכונים:
תנודתיות בשוק ההון, חשיפה למטבע, סיכוני מיסוי, וכן סיכוני חיים כגון מוות, מחלה או פגיעה בכושר ההשתכרות.
המטרה אינה להימנע מסיכון בכל מחיר, אלא להבין אילו סיכונים קיימים, אילו מהם מנוהלים ואילו דורשים טיפול.
לעיתים, כבר בשלב זה מזוהים שינויים נקודתיים
שאינם חלק מהאסטרטגיה ארוכת הטווח, אלא טקטיקה נטו:
התאמות פשוטות, תיקונים או החלטות שניתן ליישם מיידית,
ואשר עשויים להביא לחיסכון כספי משמעותי –
מה שמכונה לא פעם “כסף על הרצפה” 
עוד לפני בניית התוכנית הכוללת.
שלב זה מאפשר לזהות פערים, סיכונים והזדמנויות,
ולעבור מהבנת המצב הקיים לבניית אסטרטגיה פיננסית מבוססת מספרים, תרחישים ובחירה מודעת.</p>
      `,
      4: `
        <h3>בניית האסטרטגיה הפיננסית להשגת המטרות
</h3>
        <p>לאחר שהוגדרו המטרות ונותחו הנתונים, נבנית האסטרטגיה הפיננסית.
בשלב זה מתורגמת כל מטרה – פרישה, תמיכה בילדים, החלפת רכב, יציאה לדרך עצמאית, רכישת דירה או יצירת חופש כלכלי – לתשתית כלכלית שתאפשר את מימושה בצורה אחראית ומבוקרת.
האסטרטגיה הפיננסית מתמקדת בשאלה איך נכון לפעול: כיצד לחלק חיסכון והשקעות בין טווחי זמן שונים, איך לבחור ולשלב בין אפיקי השקעה מתאימים ובמכשירים הפיננסים הנכונים ואיך לאזן בין יעדים קצרי טווח ליעדים ארוכי טווח. 
כחלק מהאסטרטגיה נבנית גם אסטרטגיית השקעות ואופטימיזציית מס, הכוללת שילוב מושכל בין השקעות בשוק ההון, השקעות בנדל״ן, מכשירים פנסיוניים ואפיקי חיסכון נוספים, לצד היערכות לאירועי חירום בלתי צפויים כגון פגיעה בהכנסה, מחלה או שינוי חד במצב המשפחתי. 
בנוסף, נבנית אסטרטגיית העברה בין־דורית שמאפשרת להעביר ערך, ביטחון ושגשוג לדור הבא בצורה מתוכננת, יעילה ומותאמת למשפחה.
האסטרטגיות הנבנות עבור המטרות השונות אינן עומדות בפני עצמן, אלא משתלבות זו בזו לכדי אסטרטגיה פיננסית כוללת אחת, גמישה וניתנת לעדכון, שמלווה את המשפחה גם כשהחיים משתנים.</p>
      `,
      5: `
        <h3>הצגת התוכנית וקבלת החלטות משותפת</h3>
        <p>זהו שלב מרכזי בתהליך, שבו האסטרטגיה הפיננסית פוגשת אתכם באמת.
כאן זה המקום לשאול שאלות, להעלות חששות, להתלבט ולהעמיק –
ולוודא שהתוכנית לא רק נכונה מקצועית, אלא גם נכונה עבורכם.
בשלב זה מוצגות חלופות שונות לכל מטרה, יחד עם המשמעויות, היתרונות והמחירים של כל בחירה. אין פתרון אחד “נכון” – יש בחירה שמתאימה לערכים, ליכולות ולדרך שבה אתם רוצים לחיות.
זהו גם הזמן להציף אמונות פיננסיות שנבנו לאורך השנים:
אמונות לגבי סיכון, כסף, חובות, השקעות או ביטחון.
הדיון מתקיים בצורה פתוחה ולא שיפוטית, מתוך מטרה לבחון יחד
אילו אמונות מעצימות אתכם ואילו עלולות להגביל אתכם –
ולבצע התאמות בתוכנית כך שתהיה כזו שתוכלו להתמיד בה לאורך זמן.
בסיום שלב זה, האסטרטגיה מתורגמת ל־ ACTION ITEMS ברורים ומוגדרים:
מה בדיוק צריך לעשות, באיזה סדר, ובאילו לוחות זמנים.
לכל Action Item מוגדר גם מי הגורם המקצועי הרלוונטי לביצוע –
יועץ השקעות, סוכן ביטוח, רואה חשבון, יועץ משכנתאות או גורם אחר –
כך שאין עמימות בין ההחלטה לבין הביצוע.
המטרה היא שתצאו מהשלב הזה עם בהירות מלאה:
אתם יודעים מה הוחלט, מה הצעד הבא, ומי צריך לפעול מולו.
בידיעה שאתם מנהלים את הכסף,
שהכסף עובד עבורכם ולא אתם עבורו,
ושאתם בדרך הנכונה להגשים את מטרות החיים שהוגדרו.</p>
      `,
      6: `
        <h3>ליווי ויישום התוכנית</h3>
        <p>תוכנית טובה שלא מיושמת – נשארת על הנייר.
בשלב זה אני מלווה אתכם ביישום ההחלטות בפועל,
ובתיאום מול אנשי המקצוע הרלוונטיים:
יועצי השקעות, סוכני ביטוח, רואי חשבון, יועצי משכנתאות ועוד.
הליווי מבטיח שהתוכנית אכן מיושמת, מותאמת לשינויים לאורך הדרך,
ושומרת על כיוון ברור גם כשהחיים משתנים.</p>
      `
    };
  
    const buttons = document.querySelectorAll(".step-btn");
    const box = document.getElementById("processContent");
  
    function setStep(step){
      buttons.forEach(b => b.classList.toggle("active", b.dataset.step == step));
      if (box) box.innerHTML = contentByStep[step] || "";
    }
  
    buttons.forEach(btn => {
      btn.addEventListener("click", () => setStep(btn.dataset.step));
    });
  
    // ✅ ברירת מחדל: שלב 1 פתוח
    setStep("1");
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMsg");
  
    if (!form) return;
  
    form.addEventListener("submit", () => {
      msg.textContent = "ההודעה נשלחה בהצלחה, נחזור אליכם בהקדם 😊";
      msg.className = "form-msg ok";
    });
  });
  