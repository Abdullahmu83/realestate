// القائمة المتحركة للهواتف
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// إغلاق القائمة عند النقر على رابط
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// تأثيرات التمرير للصناديق
const featureBoxes = document.querySelectorAll('.feature-box');

const showBoxesOnScroll = () => {
    featureBoxes.forEach((box, index) => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(boxPosition < screenPosition) {
            setTimeout(() => {
                box.classList.add('show');
            }, 150 * index);
        }
    });
};

// تشغيل التأثيرات عند تحميل الصفحة
window.addEventListener('load', () => {
    showBoxesOnScroll();
});

// تشغيل التأثيرات عند التمرير
window.addEventListener('scroll', () => {
    showBoxesOnScroll();
});

// تأثير النبض للعنوان الفرعي
const subtitle = document.querySelector('.subtitle');
setInterval(() => {
    subtitle.classList.toggle('pulse');
}, 2000);

// تأثير التمايل لزر CTA عند التحويم
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter', () => {
    ctaButton.classList.add('bounce');
});

ctaButton.addEventListener('mouseleave', () => {
    ctaButton.classList.remove('bounce');
});

// تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});