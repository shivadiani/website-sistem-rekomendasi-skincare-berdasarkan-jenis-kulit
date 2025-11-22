// Data rekomendasi skincare berdasarkan jenis kulit
const skincareRecommendations = {
    normal: {
        cleanser: [
            { name: "Cetaphil Gentle Skin Cleanser", description: "Pembersih lembut untuk kulit normal" },
            { name: "La Roche-Posay Toleriane Hydrating Gentle Cleanser", description: "Membersihkan tanpa membuat kering" },
            { name: "CeraVe Hydrating Cleanser", description: "Dengan ceramides untuk menjaga kelembaban" }
        ],
        toner: [
            { name: "Thayers Witch Hazel Toner", description: "Menyeimbangkan pH kulit" },
            { name: "Klairs Supple Preparation Toner", description: "Hidrasi ringan untuk kulit normal" }
        ],
        moisturizer: [
            { name: "Neutrogena Hydro Boost Water Gel", description: "Pelembap ringan dengan hyaluronic acid" },
            { name: "CeraVe Daily Moisturizing Lotion", description: "Melembapkan tanpa membuat berminyak" }
        ],
        sunscreen: [
            { name: "Biore UV Aqua Rich Watery Essence", description: "SPF 50+ PA++++, ringan dan tidak lengket" },
            { name: "La Roche-Posay Anthelios Ultra Light", description: "SPF 60, proteksi tinggi" }
        ],
        tips: [
            "Gunakan produk yang seimbang, tidak terlalu berat atau terlalu ringan",
            "Tetap gunakan sunscreen setiap hari meskipun kulit sudah seimbang",
            "Lakukan eksfoliasi 1-2 kali seminggu untuk menjaga tekstur kulit",
            "Minum air putih yang cukup untuk menjaga hidrasi dari dalam"
        ]
    },
    oily: {
        cleanser: [
            { name: "Neutrogena Oil-Free Acne Wash", description: "Mengontrol minyak dan mencegah jerawat" },
            { name: "CeraVe Foaming Facial Cleanser", description: "Pembersih berbusa untuk kulit berminyak" },
            { name: "La Roche-Posay Effaclar Purifying Foaming Gel", description: "Membersihkan pori-pori dalam" }
        ],
        toner: [
            { name: "Paula's Choice Skin Perfecting 2% BHA Liquid", description: "Mengurangi minyak dan mengecilkan pori-pori" },
            { name: "The Ordinary Glycolic Acid 7% Toning Solution", description: "Eksfoliasi kimia untuk kulit berminyak" }
        ],
        moisturizer: [
            { name: "Neutrogena Oil-Free Moisture", description: "Pelembap bebas minyak, non-comedogenic" },
            { name: "La Roche-Posay Effaclar Mat", description: "Mengontrol kilau dan melembapkan" },
            { name: "The Ordinary Natural Moisturizing Factors", description: "Ringan dan tidak menyumbat pori" }
        ],
        sunscreen: [
            { name: "Biore UV Perfect Milk", description: "SPF 50+ PA++++, mattifying, tidak membuat berminyak" },
            { name: "Neutrogena Ultra Sheer Dry-Touch", description: "SPF 50+, cepat menyerap, tidak lengket" }
        ],
        tips: [
            "Cuci muka maksimal 2 kali sehari untuk menghindari over-cleansing",
            "Gunakan produk berbasis gel atau water-based, hindari krim berat",
            "Pilih produk non-comedogenic yang tidak menyumbat pori-pori",
            "Gunakan clay mask 1-2 kali seminggu untuk menyerap minyak berlebih",
            "Hindari produk dengan kandungan minyak tinggi"
        ]
    },
    dry: {
        cleanser: [
            { name: "CeraVe Hydrating Cleanser", description: "Pembersih krim yang tidak membuat kering" },
            { name: "La Roche-Posay Toleriane Dermo-Cleanser", description: "Membersihkan sambil melembapkan" },
            { name: "Cetaphil Gentle Skin Cleanser", description: "Lembut untuk kulit kering dan sensitif" }
        ],
        toner: [
            { name: "Klairs Supple Preparation Unscented Toner", description: "Hidrasi intensif tanpa alkohol" },
            { name: "Hada Labo Gokujyun Premium Lotion", description: "5 jenis hyaluronic acid untuk hidrasi maksimal" }
        ],
        moisturizer: [
            { name: "CeraVe Moisturizing Cream", description: "Krim kaya dengan ceramides dan hyaluronic acid" },
            { name: "La Roche-Posay Lipikar AP+ Baume", description: "Pelembap intensif untuk kulit sangat kering" },
            { name: "The Ordinary Natural Moisturizing Factors + HA", description: "Melembapkan dengan berbagai asam amino" }
        ],
        sunscreen: [
            { name: "CeraVe Hydrating Mineral Sunscreen", description: "SPF 50, melembapkan sambil melindungi" },
            { name: "La Roche-Posay Anthelios Ultra Cream", description: "SPF 50+, krim yang melembapkan" }
        ],
        tips: [
            "Hindari pembersih berbusa yang bisa membuat kulit lebih kering",
            "Gunakan pelembap krim yang lebih kaya daripada lotion",
            "Tambahkan serum hyaluronic acid sebelum pelembap",
            "Gunakan face oil di malam hari untuk mengunci kelembaban",
            "Hindari air panas saat mencuci muka, gunakan air hangat",
            "Pertimbangkan menggunakan humidifier di ruangan"
        ]
    },
    combination: {
        cleanser: [
            { name: "CeraVe Foaming Facial Cleanser", description: "Membersihkan area berminyak tanpa mengeringkan" },
            { name: "La Roche-Posay Toleriane Purifying Foaming Cleanser", description: "Seimbang untuk kulit kombinasi" },
            { name: "Neutrogena Ultra Gentle Daily Cleanser", description: "Lembut untuk semua area wajah" }
        ],
        toner: [
            { name: "Thayers Witch Hazel Toner", description: "Menyeimbangkan tanpa terlalu mengeringkan" },
            { name: "Klairs Supple Preparation Toner", description: "Hidrasi ringan untuk area kering" }
        ],
        moisturizer: [
            { name: "Neutrogena Oil-Free Moisture for Combination Skin", description: "Ringan untuk T-zone, melembapkan area kering" },
            { name: "CeraVe PM Facial Moisturizing Lotion", description: "Seimbang untuk kulit kombinasi" },
            { name: "La Roche-Posay Toleriane Double Repair Moisturizer", description: "Melembapkan tanpa membuat berminyak" }
        ],
        sunscreen: [
            { name: "Biore UV Aqua Rich Watery Essence", description: "SPF 50+ PA++++, ringan untuk semua area" },
            { name: "EltaMD UV Clear Broad-Spectrum", description: "SPF 46, cocok untuk kulit kombinasi" }
        ],
        tips: [
            "Gunakan pendekatan multi-masking: clay mask di T-zone, hydrating mask di area kering",
            "Pilih produk yang seimbang, tidak terlalu berat atau terlalu ringan",
            "Fokus kontrol minyak di T-zone, hidrasi di area pipi",
            "Gunakan toner yang berbeda untuk area berbeda jika perlu",
            "Eksfoliasi area berminyak lebih sering daripada area kering"
        ]
    },
    sensitive: {
        cleanser: [
            { name: "CeraVe Hydrating Cleanser", description: "Lembut, bebas parfum, cocok untuk kulit sensitif" },
            { name: "La Roche-Posay Toleriane Dermo-Cleanser", description: "Minimal ingredients, sangat lembut" },
            { name: "Vanicream Gentle Facial Cleanser", description: "Bebas dari bahan iritan umum" }
        ],
        toner: [
            { name: "Klairs Supple Preparation Unscented Toner", description: "Bebas parfum, menenangkan kulit" },
            { name: "Avene Thermal Spring Water", description: "Menenangkan dan mengurangi kemerahan" }
        ],
        moisturizer: [
            { name: "CeraVe Moisturizing Cream", description: "Dengan ceramides, bebas parfum" },
            { name: "La Roche-Posay Toleriane Ultra", description: "Minimal ingredients, sangat aman untuk sensitif" },
            { name: "Avene Tolerance Extreme Emulsion", description: "Hanya 7 bahan, sangat minimal" }
        ],
        sunscreen: [
            { name: "CeraVe Hydrating Mineral Sunscreen", description: "SPF 50, zinc oxide, lembut untuk sensitif" },
            { name: "La Roche-Posay Anthelios Mineral Ultra Light", description: "SPF 50, mineral-based, tidak iritasi" }
        ],
        tips: [
            "Selalu patch test produk baru di area kecil sebelum digunakan di seluruh wajah",
            "Hindari produk dengan parfum, alkohol, atau bahan aktif yang keras",
            "Pilih produk dengan minimal ingredients (minimalist skincare)",
            "Hindari eksfoliasi berlebihan, maksimal 1 kali seminggu",
            "Gunakan produk yang bebas dari sulfat, paraben, dan pewarna",
            "Jika terjadi iritasi, hentikan penggunaan dan konsultasi dermatolog",
            "Perkenalkan satu produk baru dalam satu waktu untuk mengidentifikasi alergen"
        ]
    }
};

// Fungsi untuk menampilkan rekomendasi
function displayRecommendations(skinType) {
    const recommendations = skincareRecommendations[skinType];
    const recommendationsSection = document.getElementById('recommendations');
    const recommendationsContent = document.getElementById('recommendationsContent');
    
    // Tampilkan section rekomendasi
    recommendationsSection.classList.remove('hidden');
    
    // Buat HTML untuk rekomendasi
    let html = '';
    
    // Cleanser
    html += `
        <div class="recommendation-category">
            <h3>🧼 Pembersih (Cleanser)</h3>
            <ul class="product-list">
    `;
    recommendations.cleanser.forEach(product => {
        html += `
            <li class="product-item">
                <strong>${product.name}</strong>
                <span>${product.description}</span>
            </li>
        `;
    });
    html += `</ul></div>`;
    
    // Toner
    html += `
        <div class="recommendation-category">
            <h3>💧 Toner</h3>
            <ul class="product-list">
    `;
    recommendations.toner.forEach(product => {
        html += `
            <li class="product-item">
                <strong>${product.name}</strong>
                <span>${product.description}</span>
            </li>
        `;
    });
    html += `</ul></div>`;
    
    // Moisturizer
    html += `
        <div class="recommendation-category">
            <h3>🌿 Pelembap (Moisturizer)</h3>
            <ul class="product-list">
    `;
    recommendations.moisturizer.forEach(product => {
        html += `
            <li class="product-item">
                <strong>${product.name}</strong>
                <span>${product.description}</span>
            </li>
        `;
    });
    html += `</ul></div>`;
    
    // Sunscreen
    html += `
        <div class="recommendation-category">
            <h3>☀️ Tabir Surya (Sunscreen)</h3>
            <ul class="product-list">
    `;
    recommendations.sunscreen.forEach(product => {
        html += `
            <li class="product-item">
                <strong>${product.name}</strong>
                <span>${product.description}</span>
            </li>
        `;
    });
    html += `</ul></div>`;
    
    // Tips
    html += `
        <div class="tips-section">
            <h3>💡 Tips Perawatan Kulit ${getSkinTypeName(skinType)}</h3>
            <ul>
    `;
    recommendations.tips.forEach(tip => {
        html += `<li>${tip}</li>`;
    });
    html += `</ul></div>`;
    
    recommendationsContent.innerHTML = html;
    
    // Scroll ke rekomendasi
    recommendationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Fungsi untuk mendapatkan nama jenis kulit dalam bahasa Indonesia
function getSkinTypeName(skinType) {
    const names = {
        normal: 'Normal',
        oily: 'Berminyak',
        dry: 'Kering',
        combination: 'Kombinasi',
        sensitive: 'Sensitif'
    };
    return names[skinType] || skinType;
}

// Event listener untuk form
document.getElementById('skinTypeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedSkinType = document.querySelector('input[name="skinType"]:checked');
    
    if (selectedSkinType) {
        displayRecommendations(selectedSkinType.value);
    } else {
        alert('Silakan pilih jenis kulit Anda terlebih dahulu!');
    }
});

// ========== CHATBOT FUNCTIONALITY ==========

// Data rekomendasi chatbot berdasarkan jenis kulit
const chatbotRecommendations = {
    normal: {
        cleanser: ['Cetaphil Gentle Skin Cleanser', 'La Roche-Posay Toleriane Hydrating Gentle Cleanser', 'CeraVe Hydrating Cleanser'],
        toner: ['Thayers Witch Hazel Toner', 'Klairs Supple Preparation Toner', 'Hada Labo Gokujun Hyaluronic Lotion'],
        moisturizer: ['Neutrogena Hydro Boost Water Gel', 'CeraVe Daily Moisturizing Lotion', 'The Ordinary Natural Moisturizing Factors'],
        sunscreen: ['EltaMD UV Clear Broad-Spectrum SPF 46', 'La Roche-Posay Anthelios Ultra Light SPF 60', 'Neutrogena Ultra Sheer Dry-Touch SPF 50']
    },
    oily: {
        cleanser: ['CeraVe Foaming Facial Cleanser', 'Neutrogena Oil-Free Acne Wash', 'La Roche-Posay Effaclar Purifying Foaming Gel'],
        toner: ['Paula\'s Choice Skin Perfecting 2% BHA Liquid', 'The Ordinary Glycolic Acid 7% Toning Solution', 'COSRX AHA/BHA Clarifying Treatment Toner'],
        moisturizer: ['Neutrogena Oil-Free Moisture', 'CeraVe PM Facial Moisturizing Lotion', 'The Ordinary Natural Moisturizing Factors + HA'],
        sunscreen: ['Neutrogena Ultra Sheer Dry-Touch SPF 50', 'EltaMD UV Clear Broad-Spectrum SPF 46', 'La Roche-Posay Anthelios Clear Skin SPF 60']
    },
    dry: {
        cleanser: ['CeraVe Hydrating Cleanser', 'La Roche-Posay Toleriane Hydrating Gentle Cleanser', 'Cetaphil Gentle Skin Cleanser'],
        toner: ['Klairs Supple Preparation Unscented Toner', 'Hada Labo Gokujun Hyaluronic Lotion', 'The Ordinary Hyaluronic Acid 2% + B5'],
        moisturizer: ['CeraVe Moisturizing Cream', 'La Roche-Posay Toleriane Double Repair Moisturizer', 'The Ordinary Natural Moisturizing Factors + HA'],
        sunscreen: ['EltaMD UV Clear Broad-Spectrum SPF 46', 'La Roche-Posay Anthelios Melt-in Milk SPF 60', 'Neutrogena Ultra Sheer Dry-Touch SPF 50']
    },
    combination: {
        cleanser: ['CeraVe Foaming Facial Cleanser', 'La Roche-Posay Toleriane Purifying Foaming Cleanser', 'Neutrogena Ultra Gentle Daily Cleanser'],
        toner: ['Thayers Witch Hazel Toner', 'Paula\'s Choice Skin Perfecting 2% BHA Liquid', 'Klairs Supple Preparation Toner'],
        moisturizer: ['CeraVe PM Facial Moisturizing Lotion', 'Neutrogena Oil-Free Moisture', 'The Ordinary Natural Moisturizing Factors'],
        sunscreen: ['EltaMD UV Clear Broad-Spectrum SPF 46', 'La Roche-Posay Anthelios Ultra Light SPF 60', 'Neutrogena Ultra Sheer Dry-Touch SPF 50']
    },
    sensitive: {
        cleanser: ['CeraVe Hydrating Cleanser', 'La Roche-Posay Toleriane Hydrating Gentle Cleanser', 'Cetaphil Gentle Skin Cleanser'],
        toner: ['Klairs Supple Preparation Unscented Toner', 'Thayers Witch Hazel Toner (Alcohol-Free)', 'Hada Labo Gokujun Hyaluronic Lotion'],
        moisturizer: ['CeraVe Moisturizing Cream', 'La Roche-Posay Toleriane Double Repair Moisturizer', 'The Ordinary Natural Moisturizing Factors'],
        sunscreen: ['EltaMD UV Clear Broad-Spectrum SPF 46', 'La Roche-Posay Anthelios Mineral SPF 50', 'Neutrogena Sensitive Skin SPF 60']
    }
};

// Fungsi untuk mendapatkan respons chatbot
function getChatbotResponse(message) {
    const msg = message.toLowerCase().trim();
    
    // Greeting
    if (msg.includes('halo') || msg.includes('hai') || msg.includes('hi') || msg.includes('hello')) {
        return 'Halo! 👋 Saya siap membantu memberikan rekomendasi produk skincare berdasarkan jenis kulit Anda. Silakan pilih jenis kulit atau tanyakan tentang produk tertentu!';
    }
    
    // Jenis kulit
    if (msg.includes('normal')) {
        return formatRecommendation('normal');
    }
    if (msg.includes('berminyak') || msg.includes('oily')) {
        return formatRecommendation('oily');
    }
    if (msg.includes('kering') || msg.includes('dry')) {
        return formatRecommendation('dry');
    }
    if (msg.includes('kombinasi') || msg.includes('combination')) {
        return formatRecommendation('combination');
    }
    if (msg.includes('sensitif') || msg.includes('sensitive')) {
        return formatRecommendation('sensitive');
    }
    
    // Cara mengetahui jenis kulit
    if (msg.includes('cara mengetahui') || msg.includes('tahu jenis kulit') || msg.includes('tentukan jenis kulit')) {
        return 'Untuk mengetahui jenis kulit Anda:\n\n' +
               '🌿 **Kulit Normal**: Seimbang, tidak terlalu berminyak atau kering, pori halus\n' +
               '💧 **Kulit Berminyak**: Mudah berkilau, pori besar, cenderung berjerawat\n' +
               '🌵 **Kulit Kering**: Terasa kencang, kasar, mudah mengelupas\n' +
               '🎭 **Kulit Kombinasi**: Berminyak di T-zone, kering di area lain\n' +
               '🛡️ **Kulit Sensitif**: Mudah iritasi, kemerahan, atau alergi\n\n' +
               'Anda juga bisa melakukan "tissue test": cuci muka, tunggu 1 jam, tekan tissue ke wajah.';
    }
    
    // Produk spesifik
    if (msg.includes('cleanser') || msg.includes('pembersih')) {
        return 'Cleanser digunakan untuk membersihkan wajah dari kotoran, minyak, dan makeup. Gunakan 2 kali sehari (pagi dan malam). Pilih yang sesuai jenis kulit Anda.';
    }
    if (msg.includes('toner')) {
        return 'Toner membantu menyeimbangkan pH kulit, menghidrasi, dan mempersiapkan kulit untuk produk berikutnya. Gunakan setelah cleanser.';
    }
    if (msg.includes('moisturizer') || msg.includes('pelembap')) {
        return 'Moisturizer melembapkan dan mengunci hidrasi kulit. Penting untuk semua jenis kulit. Gunakan pagi dan malam setelah toner/serum.';
    }
    if (msg.includes('sunscreen') || msg.includes('tabir surya')) {
        return 'Sunscreen WAJIB digunakan setiap hari, bahkan di dalam ruangan! SPF minimal 30, reapply setiap 2-3 jam jika di luar ruangan.';
    }
    
    // Default response
    return 'Saya bisa membantu memberikan rekomendasi produk skincare berdasarkan jenis kulit Anda. Coba tanyakan tentang:\n\n' +
           '• Cara mengetahui jenis kulit\n' +
           '• Rekomendasi untuk kulit normal/berminyak/kering/kombinasi/sensitif\n' +
           '• Produk spesifik (cleanser, toner, moisturizer, sunscreen)';
}

// Format rekomendasi
function formatRecommendation(skinType) {
    const rec = chatbotRecommendations[skinType];
    const skinTypeNames = {
        normal: 'Kulit Normal',
        oily: 'Kulit Berminyak',
        dry: 'Kulit Kering',
        combination: 'Kulit Kombinasi',
        sensitive: 'Kulit Sensitif'
    };
    
    return `Rekomendasi produk untuk **${skinTypeNames[skinType]}**:\n\n` +
           `🧴 **Cleanser**:\n${rec.cleanser.map(p => `• ${p}`).join('\n')}\n\n` +
           `💧 **Toner**:\n${rec.toner.map(p => `• ${p}`).join('\n')}\n\n` +
           `✨ **Moisturizer**:\n${rec.moisturizer.map(p => `• ${p}`).join('\n')}\n\n` +
           `☀️ **Sunscreen**:\n${rec.sunscreen.map(p => `• ${p}`).join('\n')}`;
}

// Fungsi untuk menambahkan pesan
function addChatbotMessage(content, isUser = false) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Format pesan dengan line breaks
    let formattedContent = content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>')
        .replace(/•/g, '•');
    
    contentDiv.innerHTML = formattedContent;
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll ke bawah
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Inisialisasi chatbot
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const quickBtns = document.querySelectorAll('.quick-btn');
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.toggle('active');
    });
    
    // Close chatbot
    chatbotClose.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
    });
    
    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addChatbotMessage(message, true);
            chatbotInput.value = '';
            
            // Simulasi delay
            setTimeout(() => {
                const response = getChatbotResponse(message);
                addChatbotMessage(response, false);
            }, 500);
        }
    }
    
    chatbotSend.addEventListener('click', sendMessage);
    
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Quick buttons
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            chatbotInput.value = question;
            sendMessage();
        });
    });
});

