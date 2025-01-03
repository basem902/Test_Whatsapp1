// التأكد من تحميل jQuery
$(document).ready(function() {
    console.log("jQuery is working!");
    
    // الكود الأصلي
    $('#whatsappForm').on('submit', function(e) {
        e.preventDefault();
        
        // الحصول على قيم المدخلات باستخدام jQuery
        const name = $('#name').val();
        const phone = $('#phone').val();
        
        // التحقق من صحة المدخلات
        if (!name.trim()) {
            alert('الرجاء إدخال الاسم');
            return;
        }
        
        if (!phone.trim()) {
            alert('الرجاء إدخال رقم الجوال');
            return;
        }

        // إعدادات API
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.ultramsg.com/instance103032/messages/chat",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "data": {
                "token": "iwerginq0051ef9z",
                "to": "966558048004",
                "body": `معلومات العميل الجديد:
الاسم: ${name}
رقم الجوال: ${phone}`
            }
        };

        // إرسال الرسالة باستخدام jQuery Ajax
        $.ajax(settings)
            .done(function(response) {
                console.log('تم إرسال الرسالة بنجاح:', response);
                alert('تم إرسال الرسالة بنجاح!');
                $('#whatsappForm')[0].reset();
            })
            .fail(function(error) {
                console.error('حدث خطأ:', error);
                alert('حدث خطأ أثناء إرسال الرسالة');
            });
    });
});
