document.getElementById('salamiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // ১. ডাটা কালেকশন
    const name = document.getElementById('userName').value;
    const bkash = document.getElementById('bkash').value;
    const age = parseInt(document.getElementById('age').value);
    const gpa = parseFloat(document.getElementById('result').value);
    const reason = document.getElementById('reason').value || "ঈদ মানেই আনন্দ!";

    // ২. সালামি ক্যালকুলেশন (আপনার ফর্মুলা: Salami = Result * (24 - Age))
    let ageDiff = 24 - age;
    if (ageDiff <= 0) ageDiff = 2; // বড়দের জন্য ফিক্সড সম্মানসূচক ভ্যালু

    // ৩. টোটাল সালামি (১০ দিয়ে গুন করে বাস্তবসম্মত করা হয়েছে)
    let finalSalami = (gpa * ageDiff * 10).toFixed(0);

    // ৪. ইউআই পরিবর্তন
    document.getElementById('ui-input').classList.add('hidden');
    const resultUI = document.getElementById('ui-result');
    resultUI.classList.remove('hidden');
    resultUI.classList.add('fade-in');

    // ৫. কন্টেন্ট আপডেট
    document.getElementById('displayGreeting').innerText = `ঈদ মোবারক, ${name}! 🌙`;
    document.getElementById('salamiAmount').innerText = finalSalami;
    document.getElementById('displayBkash').innerText = bkash;

    // ৬. আপনার দেওয়া টেক্সট অনুযায়ী বাংলায় বিশেষ এবং ফরমাল মেসেজ
    const happyMessage = document.getElementById('happyMessage');
    
    happyMessage.innerHTML = `
        <span class="salam-text">আসসালামু আলাইকুম, ঈদ মোবারক!</span><br>
        প্রিয় <b>${name}</b>, আপনার বার্তাটি পেয়ে আমি সত্যিই অনেক আনন্দিত। যেহেতু আপনি অনেক আশা নিয়ে সালামি চেয়েছেন, তাই আপনি অবশ্যই আপনার প্রাপ্য সালামি পাবেন। <br><br>
        আপনার আবেদনটি সফলভাবে রেকর্ড করা হয়েছে। ইনশাআল্লাহ, চাঁদরাতের আগেই আপনার দেওয়া <b>${bkash}</b> নাম্বারে সালামি পাঠিয়ে আপনাকে চমকে দেওয়া হবে।<br><br>
        আপনার মতো মেধাবী এবং অমায়িক মানুষের জন্য এই ক্ষুদ্র উপহার দিতে পেরে আমি গর্বিত। দোয়া করি আপনার পড়াশোনার সাফল্য অটুট থাকুক এবং এবারের ঈদ আপনার জীবনে বয়ে আনুক অনাবিল সুখ ও সমৃদ্ধি। সবসময় হাসি-খুশি থাকবেন। <br>
        <b>ধন্যবাদ!</b> ✨🎉
    `;

    // ৭. কনফেটি অ্যানিমেশন (আঁতশবাজি)
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ffffff', '#064e3b']
    });
});