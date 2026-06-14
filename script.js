const translations = {
    ru: {
        heroTitle: "Узнайте историю любого авто за секунды",
        heroDesc: "Полная проверка по VIN-коду: аварии, пробег, регистрация, сервис и техническое состояние.",
        featuresTitle: "Возможности системы",
        feat1: "Аварии и ДТП",
        feat2: "Технические данные",
        feat3: "Пробег",
        feat4: "Регистрация",
        feat5: "Сервисная история",
        feat6: "Фотографии",
        howTitle: "Как это работает",
        step1: "Введите VIN",
        step2: "Купите отчёт",
        step3: "Изучите историю",
        whatTitle: "Что входит в отчёт",
        contactTitle: "Связаться с нами",
        footerEmail: "📧 info@deepcar.vin",
        link1: "Условия",
        link2: "Конфиденциальность",
        link3: "Поддержка",
        link4: "API",
        copyright: "© 2024 DeepCar.vin"
    },
    ky: {
        heroTitle: "Ар бир унаанын тарыхын секундада билиңиз",
        heroDesc: "VIN коду боюнча толук текшеруу: авариялар, км, каттоо, сервис жана техникалык абалы.",
        featuresTitle: "Системанын мүмкүнчүлүктөрү",
        feat1: "Авариялар жана ДТП",
        feat2: "Техникалык маалыматтар",
        feat3: "Километраж",
        feat4: "Каттоо",
        feat5: "Техникалык куралдоо тарыхы",
        feat6: "Фотографиялар",
        howTitle: "Кантип иштейт",
        step1: "VIN киргизиңиз",
        step2: "Отчетун сатып алыңыз",
        step3: "Тарыхын аныктаңыз",
        whatTitle: "Отчетто эмне бар",
        contactTitle: "Биз менен байланышыңыз",
        footerEmail: "📧 info@deepcar.vin",
        link1: "Шарттар",
        link2: "Жайкылык",
        link3: "Колдоо",
        link4: "API",
        copyright: "© 2024 DeepCar.vin"
    },
    kz: {
        heroTitle: "Кез келген автомобильдің тарихын секунд ішінде біліңіз",
        heroDesc: "VIN коды бойынша толық тексеру: ынамсыз оқиғалар, км, тіркеу, сервис және техникалық жағдай.",
        featuresTitle: "Жүйе мүмкіндіктері",
        feat1: "Ынамсыз оқиғалар және ДТП",
        feat2: "Техникалық деректер",
        feat3: "Километраж",
        feat4: "Тіркеу",
        feat5: "Техникалық қызмет көрсету тарихы",
        feat6: "Суреттер",
        howTitle: "Қалай жұмыс істейді",
        step1: "VIN енгізіңіз",
        step2: "Есептемесін сатып алыңыз",
        step3: "Тарихын аңдаңыз",
        whatTitle: "Есептемеде не бар",
        contactTitle: "Бізге хабарласыңыз",
        footerEmail: "📧 info@deepcar.vin",
        link1: "Шарттар",
        link2: "Құпиялылық",
        link3: "Қолдау",
        link4: "API",
        copyright: "© 2024 DeepCar.vin"
    },
    uz: {
        heroTitle: "Ixtiyoriy avtomobilning tarixini sonik ichida bilib oling",
        heroDesc: "VIN kodi bo'yicha to'liq tekshirish: avarialar, km, ro'yxat, xizmat va texnik holati.",
        featuresTitle: "Tizimning imkoniyatlari",
        feat1: "Avarialar va DTP",
        feat2: "Texnik ma'lumotlar",
        feat3: "Kilometraz",
        feat4: "Ro'yxat",
        feat5: "Texnik xizmat tarixи",
        feat6: "Rasmlar",
        howTitle: "Qanday ishlaydi",
        step1: "VIN kiriting",
        step2: "Hisobot sotib oling",
        step3: "Tarixni o'rganing",
        whatTitle: "Hisobotda nima bor",
        contactTitle: "Biz bilan bog'lanish",
        footerEmail: "📧 info@deepcar.vin",
        link1: "Shartlar",
        link2: "Maxfiylik",
        link3: "Qo'llab-quvvatlash",
        link4: "API",
        copyright: "© 2024 DeepCar.vin"
    }
};

let lang = localStorage.getItem('lang') || 'ru';

const vinInput = document.getElementById('vinInput');
const submitBtn = document.getElementById('submitBtn');
const langBtns = document.querySelectorAll('.lang-btn');
const results = document.getElementById('results');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

function setLang(newLang) {
    lang = newLang;
    localStorage.setItem('lang', lang);
    langBtns.forEach(btn => {
        btn.dataset.lang === lang ? btn.classList.add('active') : btn.classList.remove('active');
    });
    updateTexts();
}

function updateTexts() {
    const t = translations[lang];
    document.getElementById('heroTitle').textContent = t.heroTitle;
    document.getElementById('heroDesc').textContent = t.heroDesc;
    document.getElementById('featuresTitle').textContent = t.featuresTitle;
    document.getElementById('feat1').textContent = t.feat1;
    document.getElementById('feat2').textContent = t.feat2;
    document.getElementById('feat3').textContent = t.feat3;
    document.getElementById('feat4').textContent = t.feat4;
    document.getElementById('feat5').textContent = t.feat5;
    document.getElementById('feat6').textContent = t.feat6;
    document.getElementById('howTitle').textContent = t.howTitle;
    document.getElementById('step1').textContent = t.step1;
    document.getElementById('step2').textContent = t.step2;
    document.getElementById('step3').textContent = t.step3;
    document.getElementById('whatTitle').textContent = t.whatTitle;
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('footerEmail').textContent = t.footerEmail;
    document.getElementById('link1').textContent = t.link1;
    document.getElementById('link2').textContent = t.link2;
    document.getElementById('link3').textContent = t.link3;
    document.getElementById('link4').textContent = t.link4;
    document.getElementById('copyright').textContent = t.copyright;
}

function handleSearch() {
    const vin = vinInput.value.trim().toUpperCase();
    if (vin.length !== 17) {
        error.style.display = 'block';
        results.style.display = 'none';
        return;
    }
    error.style.display = 'none';
    results.style.display = 'none';
    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';
        showResults(vin);
    }, 1500);
}

function showResults(vin) {
    const data = {
        mileage: Math.floor(Math.random() * 300000) + 1000,
        accidents: Math.floor(Math.random() * 3),
        problems: Math.floor(Math.random() * 4),
        status: Math.random() > 0.8 ? 'ОПАСНО' : 'ОК'
    };
    document.getElementById('mileage').textContent = data.mileage.toLocaleString();
    document.getElementById('accidents').textContent = data.accidents;
    document.getElementById('problems').textContent = data.problems;
    document.getElementById('status').textContent = data.status;
    results.style.display = 'block';
}

submitBtn.addEventListener('click', handleSearch);
vinInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSearch(); });
langBtns.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

setLang(lang);
