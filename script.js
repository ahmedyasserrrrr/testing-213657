document.addEventListener('DOMContentLoaded', function() {
    // تحميل اللغة المخزنة
    let storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);

    // إضافة مستمعين لكل الأزرار
    document.querySelectorAll('.language-toggle').forEach(function(button) {
        button.addEventListener('click', function() {
            // تبديل اللغة بين العربية والإنجليزية
            let newLanguage = (document.documentElement.lang === 'ar') ? 'en' : 'ar';
            setLanguage(newLanguage);
        });
    });
});

function setLanguage(language) {
    // حفظ اللغة في التخزين المحلي
    localStorage.setItem('language', language);

    // تغيير النصوص في الصفحة
    document.querySelectorAll('[data-en]').forEach(function(element) {
        if (language === 'ar') {
            element.textContent = element.getAttribute('data-ar');
            document.documentElement.setAttribute('lang', 'ar');
            document.body.style.direction = 'rtl';
        } else {
            element.textContent = element.getAttribute('data-en');
            document.documentElement.setAttribute('lang', 'en');
            document.body.style.direction = 'ltr';
        }
    });

    // تحديث نص الأزرار
    document.querySelectorAll('.language-toggle').forEach(function(button) {
        button.textContent = (language === 'ar') ? 'English' : 'العربيه';
    });
}