document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    try {
        // الحصول على قيم المدخلات
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        // التحقق من صحة المدخلات
        if (!validateName(name)) {
            alert('الرجاء إدخال اسم صحيح');
            return;
        }
        
        if (!validatePhone(phone)) {
            alert('الرجاء إدخال رقم هاتف صحيح');
            return;
        }
        
        // رقم الواتساب الخاص بك
        const whatsappNumber = "966558048004";
        
        // رسالة الترحيب مع معلومات المستخدم
        const message = `معلومات العميل الجديد:
الاسم: ${name}
رقم الجوال: ${phone}`;
        
        // محاولة فتح الواتساب عبر عدة طرق
        
        // الطريقة 1: استخدام الرابط المباشر
        const url1 = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
        
        // الطريقة 2: استخدام رابط الويب
        const url2 = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // محاولة فتح الواتساب
        const openWhatsApp = () => {
            // محاولة فتح تطبيق الواتساب أولاً
            window.location.href = url1;
            
            // إذا فشل، حاول فتح نسخة الويب
            setTimeout(() => {
                window.location.href = url2;
            }, 1000);
        };
        
        openWhatsApp();
        
        // إعادة تعيين النموذج
        this.reset();
        
    } catch (error) {
        console.error('حدث خطأ:', error);
        alert('حدث خطأ أثناء محاولة فتح الواتساب. الرجاء المحاولة مرة أخرى.');
    }
});

// دالة للتحقق من صحة الاسم
function validateName(name) {
    return name.trim().length >= 2;
}

// دالة للتحقق من صحة رقم الهاتف
function validatePhone(phone) {
    // يقبل الأرقام فقط، 9-15 رقم
    const phoneRegex = /^[0-9]{9,15}$/;
    return phoneRegex.test(phone.trim());
}
