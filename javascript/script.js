document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // الحصول على قيم المدخلات
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // التحقق من صحة المدخلات
    if (name.trim() === '') {
        alert('الرجاء إدخال الاسم');
        return;
    }
    
    if (phone.trim() === '') {
        alert('الرجاء إدخال رقم الجوال');
        return;
    }

    // تجهيز رابط الواتساب
    const message = `الاسم: ${name}
رقم الجوال: ${phone}`;

    // استخدام الرابط المباشر للواتساب
    const whatsappLink = `https://wa.me/966558048004?text=${encodeURIComponent(message)}`;
    
    // فتح الرابط في نفس النافذة
    window.location.href = whatsappLink;
});
