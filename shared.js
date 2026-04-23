// ===================== PRODUCTS DATA =====================
const products = [
    // Wooden Pergolas
    { id: 1, name: 'Chess Board', category: 'wooden', basePrice: 29250, image: 'assets/product16.jpeg', description: 'فخامة كلاسيكية مع شكل لوح الشطرنج المميز' },
    { id: 2, name: 'Solid Type', category: 'wooden', basePrice: 31000, image: 'assets/product19.jpeg', description: 'خشب طبيعي معالج ضد الرطوبة والحشرات' },
    { id: 3, name: 'Forest Line', category: 'wooden', basePrice: 35000, image: 'assets/product4.jpeg', description: 'تصميم عصري pattern من المعدن والخشب الطبيعي' },
    { id: 4, name: 'Palm Breeze', category: 'wooden', basePrice: 42000, image: 'assets/product6.jpeg', description: 'برجولة مودرن من الشرائح الكلاسيكية' },
    { id: 5, name: 'Pitch Pine', category: 'wooden', basePrice: 92200, image: 'assets/product17.jpeg', description: 'تصميم مميز لعشاق الستائر الظلية الخشبية' },
    { id: 6, name: 'Wave Sail', category: 'wooden', basePrice: 32900, image: 'assets/product18.jpeg', description: 'أناقة عصرية لإطارات شراعية مموجة' },

    // Aluminum Pergolas
    { id: 7, name: 'Royal Shade', category: 'aluminum', basePrice: 63000, image: 'assets/product2.png', description: 'شرائح الومنيوم بقوائم معدنية ومتاح تغيير الألوان' },
    { id: 8, name: 'Majestic', category: 'aluminum', basePrice: 57000, image: 'assets/product7.jpeg', description: 'ألومنيوم مقاوم للصدأ بتصميم عصري' },
    { id: 9, name: 'Imperial', category: 'aluminum', basePrice: 58000, image: 'assets/product8.jpeg', description: 'برجولة من الالومنيوم بستائر وإضاءة LED Profile' },
    // Steel Pergolas
    { id: 10, name: 'Ruby', category: 'steel', basePrice: 42000, image: 'assets/product10.jpeg', description: 'حديد الكتروستاتيك مقاوم وخشب طبيعي' },
    { id: 11, name: 'Heaven', category: 'wooden', basePrice: 42000, image: 'assets/product11.jpeg', description: 'تصميم بسيط وأنيق بخطوط راقية' },
    // Mixed / Premium
    { id: 12, name: 'Emerald', category: 'premium', basePrice: 130000, image: 'assets/product12.jpeg', description: 'مزيج من الخشب WPC والالومنيوم' },
    { id: 13, name: 'Golden', category: 'premium', basePrice: 32000, image: 'assets/product13.jpeg', description: 'سقف مميز مع لمسة عصرية' },
    { id: 14, name: 'Crown', category: 'wooden', basePrice: 30000, image: 'assets/product14.jpeg', description: 'برجولة فخمة من الخشب الطبيعي' },
    { id: 15, name: 'Elite', category: 'wooden', basePrice: 40000, image: 'assets/product15.jpeg', description: 'برجولة متداخلة من الخشب الطبيعي المعالج' },
];

// Dimension options & price additions for each product (keyed by product id)
const dimensionOptions = {
    // Wooden Pergolas
    1: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 1950 },
        { label: '4×4 متر', value: '4x4', priceAdd: 5750 },
    ],
    2: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 3500 },
        { label: '4×4 متر', value: '4x4', priceAdd: 8000 },
    ],
    3: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 10000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 25000 },
    ],
    4: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 8000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 14000 },
    ],

    5: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 14800 },
        { label: '4×4 متر', value: '4x4', priceAdd: 33300 },
    ],
    6: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 3000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 6100 },
    ],
    // Aluminum Pergolas
    7: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 22000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 52000 },
    ],
    8: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 9000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 21000 },
    ],
    9: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 12000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 23000 },
    ],
    // Steel Pergolas
    10: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 13000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 23000 },
    ],
    11: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 9000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 18000 },
    ],
    // Mixed / Premium
    12: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 30000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 75000 },
    ],
    13: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 13000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 23000 },
    ],
    14: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 8000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 15000 },
    ],
    15: [
        { label: '3×3 متر', value: '3x3', priceAdd: 0 },
        { label: '3×4 متر', value: '3x4', priceAdd: 14000 },
        { label: '4×4 متر', value: '4x4', priceAdd: 32000 },
    ],
};

// Portfolio projects
const portfolioProjects = [
    { image: 'assets/portfolio3.jpeg', title: 'فيلا التجمع الخامس', description: 'برجولة خشب طبيعي مع إضاءة ديكورية وحديقة متكاملة' },
    { image: 'assets/portfolio4.jpeg', title: 'روف تاون هاوس', description: 'برجولة خشبية فاخرة مع الجلسة الخارجية ومنطقة الجلوس' },
    { image: 'assets/portfolio5.jpeg', title: 'فيلا الشيخ زايد', description: 'برجولة بريميوم لقاعات المناسبات سلسة وعملية' },
    { image: 'assets/portfolio6.jpeg', title: 'بنتهاوس المعادي', description: 'برجولة روف مودرن بإطلالة بانورامية في المطاعم والكافيهات' },
];

// Hero slider data
const heroSlides = [
    { image: 'assets/hero1.png', title: 'صمم مساحتك الخارجية', subtitle: 'برجولات خشبية فاخرة بتصميمات فريدة تناسب ذوقك' },
    { image: 'assets/hero223.jpeg', title: 'أناقة بلا حدود', subtitle: 'برجولات ألومنيوم مودرن بأعلى معايير الجودة' },
    { image: 'assets/hero123.jpeg', title: 'استمتع بالهواء الطلق', subtitle: 'تصميمات عصرية مع إضاءة ديكورية مميزة' },
    { image: 'assets/hero323.jpeg', title: 'لمسة طبيعية ساحرة', subtitle: 'برجولات كلاسيكية مع نباتات متسلقة وزهور طبيعية' },
    { image: 'assets/hero5.png', title: 'رفاهية لا تُضاهى', subtitle: 'مشاريع فاخرة بجانب المسابح والحدائق' },
];

// ===================== CART STATE =====================
let cart = JSON.parse(localStorage.getItem('hilltopCart')) || [];

// ===================== CART FUNCTIONS =====================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get selected dimension
    const selectedRadio = document.querySelector(`input[name="dim-${productId}"]:checked`);
    const productDims = dimensionOptions[productId];
    const selectedDim = selectedRadio ? selectedRadio.value : productDims[0].value;
    const dimOption = productDims.find(d => d.value === selectedDim);
    const finalPrice = product.basePrice + dimOption.priceAdd;

    const existingItem = cart.find(item => item.id === productId && item.dimension === selectedDim);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            dimension: selectedDim,
            dimensionLabel: dimOption.label,
            price: finalPrice,
            image: product.image,
            quantity: 1,
        });
    }

    saveCart();
    updateCartUI();
    showCartPopup();

    // Animate button
    const btn = document.querySelector(`[data-add-cart="${productId}"]`);
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ تمت الإضافة';
        btn.classList.add('!bg-green-500');
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('!bg-green-500');
        }, 1500);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    renderCartPopupItems();
}

function updateQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
    renderCartPopupItems();
}

function saveCart() {
    localStorage.setItem('hilltopCart', JSON.stringify(cart));
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update navbar cart count
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.classList.toggle('hidden', totalItems === 0);
    }

    // Update floating mobile cart button
    const floatingCartBtn = document.getElementById('floating-cart-btn');
    const floatingCartCount = document.getElementById('floating-cart-count');
    if (floatingCartBtn && floatingCartCount) {
        floatingCartCount.textContent = totalItems;
        if (totalItems > 0) {
            floatingCartBtn.classList.remove('hidden');
        } else {
            floatingCartBtn.classList.add('hidden');
        }
    }

    // Cart popup total
    const cartPopupTotal = document.getElementById('cart-popup-total');
    if (cartPopupTotal) {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartPopupTotal.textContent = total.toLocaleString('ar-EG');
    }

    // Request form visibility
    updateRequestFormVisibility();
}

function renderCartPopupItems() {
    const cartPopupItems = document.getElementById('cart-popup-items');
    if (!cartPopupItems) return;

    if (cart.length === 0) {
        cartPopupItems.innerHTML = '<p class="text-center text-gray-400 py-4">جدول الزيارات فارغ</p>';
        return;
    }

    cartPopupItems.innerHTML = cart.map((item, index) => `
        <div class="flex items-center gap-3 bg-gray-50 rounded-xl p-3 fade-in">
            <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover">
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-sm text-gray-800 truncate">${item.name}</h4>
                <p class="text-xs text-teal-600">${item.dimensionLabel}</p>
                <div class="flex items-center gap-2 mt-1">
                    <button onclick="updateQuantity(${index}, -1)" class="w-6 h-6 rounded-md bg-gray-200 hover:bg-gray-300 text-xs font-bold flex items-center justify-center transition-colors">-</button>
                    <span class="text-sm font-bold">${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)" class="w-6 h-6 rounded-md bg-gray-200 hover:bg-gray-300 text-xs font-bold flex items-center justify-center transition-colors">+</button>
                </div>
            </div>
            <div class="text-left">
                <span class="font-bold text-teal-600 text-sm block">${(item.price * item.quantity).toLocaleString('ar-EG')}</span>
                <span class="text-xs text-gray-400">جنيه</span>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-600 p-1 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
        </div>
    `).join('');
}

function showCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    if (cartPopup) {
        cartPopup.classList.remove('hidden');
        cartPopup.classList.add('slide-up');
        renderCartPopupItems();
    }
}

function closeCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    if (cartPopup) {
        cartPopup.classList.add('hidden');
    }
}

function toggleCartPanel() {
    const cartPopup = document.getElementById('cart-popup');
    if (cartPopup) {
        if (cartPopup.classList.contains('hidden')) {
            showCartPopup();
        } else {
            closeCartPopup();
        }
    }
}

// ===================== PRICE UPDATE =====================
function updatePrice(productId) {
    const selectedRadio = document.querySelector(`input[name="dim-${productId}"]:checked`);
    if (!selectedRadio) return;

    const product = products.find(p => p.id === productId);
    const dimOption = dimensionOptions[productId].find(d => d.value === selectedRadio.value);
    const finalPrice = product.basePrice + dimOption.priceAdd;

    const priceEl = document.getElementById(`price-${productId}`);
    if (priceEl) {
        // Add animation
        priceEl.classList.add('price-bounce');
        priceEl.textContent = finalPrice.toLocaleString('ar-EG') + ' جنيه';
        setTimeout(() => priceEl.classList.remove('price-bounce'), 300);
    }
}

// ===================== HERO SLIDER =====================
let currentSlide = 0;
let slideInterval = null;

function initHeroSlider() {
    const sliderContainer = document.getElementById('hero-slider');
    const thumbsContainer = document.getElementById('hero-thumbs');
    if (!sliderContainer) return;

    // Render slides
    sliderContainer.innerHTML = heroSlides.map((slide, i) => `
        <div class="hero-slide absolute inset-0 transition-all duration-700 ease-in-out ${i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}" data-slide="${i}">
            <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div class="absolute bottom-8 right-8 left-8 md:bottom-16 md:right-16 text-white">
                <h2 class="text-2xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">${slide.title}</h2>
                <p class="text-sm md:text-lg text-white/90 max-w-lg">${slide.subtitle}</p>
            </div>
        </div>
    `).join('');

    // Render thumbnails
    if (thumbsContainer) {
        thumbsContainer.innerHTML = heroSlides.map((slide, i) => `
            <button onclick="goToSlide(${i})" class="hero-thumb flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${i === 0 ? 'border-lime-400 scale-110 shadow-lg shadow-lime-400/30' : 'border-white/30 hover:border-white/60 opacity-70 hover:opacity-100'}" data-thumb="${i}">
                <img src="${slide.image}" alt="slide ${i + 1}" class="w-full h-full object-cover">
            </button>
        `).join('');
    }

    startAutoSlide();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const thumbs = document.querySelectorAll('.hero-thumb');

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('opacity-0', 'z-0');
            slide.classList.add('opacity-100', 'z-10');
        } else {
            slide.classList.remove('opacity-100', 'z-10');
            slide.classList.add('opacity-0', 'z-0');
        }
    });

    thumbs.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('border-lime-400', 'scale-110', 'shadow-lg', 'shadow-lime-400/30');
            thumb.classList.remove('border-white/30', 'opacity-70');
        } else {
            thumb.classList.remove('border-lime-400', 'scale-110', 'shadow-lg', 'shadow-lime-400/30');
            thumb.classList.add('border-white/30', 'opacity-70');
        }
    });

    currentSlide = index;
    resetAutoSlide();
}

function nextSlide() {
    goToSlide((currentSlide + 1) % heroSlides.length);
}

function prevSlide() {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// ===================== PRODUCT RENDERING =====================
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = products.map(p => `
        <div class="product-card bg-white rounded-2xl overflow-hidden shadow-lg card-hover fade-in" data-category="${p.category}">
            <div class="aspect-[4/3] bg-gray-100 relative overflow-hidden group">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                <div class="absolute top-3 right-3">
                    <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-700 text-xs font-bold rounded-full shadow-sm">${getCategoryLabel(p.category)}</span>
                </div>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg text-gray-800 mb-1">${p.name}</h3>
                <p class="text-gray-500 text-sm mb-4">${p.description}</p>
                
                <div class="space-y-2 mb-4">
                    <p class="text-xs font-bold text-gray-600 mb-1">اختر المقاس:</p>
                    ${(dimensionOptions[p.id] || []).map((dim, i) => `
                        <label class="flex items-center gap-3 cursor-pointer group/dim p-2 rounded-lg hover:bg-teal-50 transition-colors">
                            <input type="radio" name="dim-${p.id}" value="${dim.value}" ${i === 0 ? 'checked' : ''} 
                                onchange="updatePrice(${p.id})"
                                class="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300">
                            <span class="text-sm text-gray-700 group-hover/dim:text-teal-700 transition-colors flex-1">${dim.label}</span>
                            <span class="text-xs font-bold ${dim.priceAdd > 0 ? 'text-teal-600' : 'text-gray-400'}">${dim.priceAdd > 0 ? '+' + dim.priceAdd.toLocaleString('ar-EG') + ' جنيه' : 'السعر الأساسي'}</span>
                        </label>
                    `).join('')}
                </div>

                <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                        <span class="text-xs text-gray-400">السعر</span>
                        <span class="block text-xl font-extrabold text-teal-600" id="price-${p.id}">${p.basePrice.toLocaleString('ar-EG')} جنيه</span>
                    </div>
                    <button onclick="addToCart(${p.id})" data-add-cart="${p.id}"
                        class="btn-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                        احجز معاينة مجانية
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        wooden: 'خشب طبيعي',
        aluminum: 'ألومنيوم',
        steel: 'حديد مشغول',
        premium: 'Pitch Pine',
    };
    return labels[category] || category;
}

// ===================== PORTFOLIO RENDERING =====================
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = portfolioProjects.map(p => `
        <div class="portfolio-card group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <img src="${p.image}" alt="${p.title}" class="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 right-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="text-white font-bold text-xl mb-1">${p.title}</h3>
                <p class="text-white/80 text-sm">${p.description}</p>
            </div>
        </div>
    `).join('');
}

// ===================== REQUEST FORM VISIBILITY =====================
function updateRequestFormVisibility() {
    const formSection = document.getElementById('request-form-section');
    if (!formSection) return;

    if (cart.length > 0) {
        formSection.classList.remove('hidden');
        formSection.classList.add('fade-in');
    } else {
        formSection.classList.add('hidden');
    }
}

// ===================== WHATSAPP INTEGRATION =====================
function generateWhatsAppMessage() {
    const customerName = document.getElementById('customer-name')?.value || '';
    const customerPhone = document.getElementById('customer-phone')?.value || '';
    const customerNotes = document.getElementById('customer-notes')?.value || '';
    const visitDate = document.getElementById('visit-date')?.value || '';

    let message = `مرحبا، أرغب في حجز معاينة\n`;
    message += `━━━━━━━━━━━━━━━━━\n\n`;

    cart.forEach((item, index) => {
        message += `📦 *المنتج ${index + 1}:*\n`;
        message += `• الموديل: ${item.name}\n`;
        message += `• المقاس: ${item.dimensionLabel}\n`;
        message += `• الكمية: ${item.quantity}\n`;
        message += `• السعر: ${(item.price * item.quantity).toLocaleString('ar-EG')} جنيه\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `💰 *الإجمالي:* ${total.toLocaleString('ar-EG')} جنيه\n\n`;

    if (visitDate) {
        message += `📅 *تاريخ المعاينة:* ${visitDate}\n\n`;
    }

    message += `👤 *بيانات العميل:*\n`;
    message += `• الاسم: ${customerName}\n`;
    message += `• رقم الهاتف: ${customerPhone}\n`;
    if (customerNotes) {
        message += `• العنوان بالتفصيل: ${customerNotes}\n`;
    }

    message += `\n━━━━━━━━━━━━━━━━━\n`;
    message += `✨ شكراً لاختياركم هيلتوب`;

    return message;
}

function handleFormSubmit(e) {
    e.preventDefault();

    const customerName = document.getElementById('customer-name')?.value;
    const customerPhone = document.getElementById('customer-phone')?.value;
    const visitDate = document.getElementById('visit-date')?.value;

    if (!customerName || !customerPhone) {
        showToast('الرجاء إدخال الاسم ورقم الهاتف', 'error');
        return;
    }

    if (!visitDate) {
        showToast('الرجاء تحديد موعد المعاينة', 'error');
        return;
    }

    if (cart.length === 0) {
        showToast('الرجاء إضافة منتج واحد على الأقل', 'error');
        return;
    }

    // Show loading state
    const submitBtn = document.getElementById('submit-btn');
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="animate-spin inline-block">↻</span> جاري التحويل...';

    setTimeout(() => {
        const message = generateWhatsAppMessage();
        // Replace with actual WhatsApp number
        const whatsappUrl = `https://wa.me/201550796114?text=${encodeURIComponent(message)}`;

        // Clear cart
        clearCart();

        // Reset form
        document.getElementById('request-form')?.reset();

        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        showToast('تم إرسال طلبك بنجاح! 🎉', 'success');
    }, 1000);
}

// ===================== TOAST NOTIFICATION =====================
function showToast(message, type = 'success') {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = `fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-2xl text-white font-bold text-sm transition-all duration-300 transform translate-y-0 opacity-100 ${type === 'error' ? 'bg-red-500' : 'bg-green-500'}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-4');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===================== MOBILE MENU =====================
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!mobileMenu) return;

    function toggleMenu() {
        const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
        if (isHidden) {
            mobileMenu.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    mobileMenuBtn?.addEventListener('click', toggleMenu);
    closeMobileMenu?.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
}

// ===================== NAVBAR SCROLL =====================
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===================== SCROLL ANIMATIONS =====================
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===================== SMOOTH SCROLL =====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToProducts() {
    scrollToSection('products');
}

// ===================== DATE PICKER =====================
function setupDatePicker() {
    const dateInput = document.getElementById('visit-date');
    if (!dateInput) return;

    // Set minimum date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
}

// ===================== CATEGORY FILTERING =====================
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

// ===================== INITIALIZATION =====================
function initPage() {
    // Prevent horizontal scroll
    window.scrollTo(0, 0);
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;

    // Initialize components
    initHeroSlider();
    renderProducts();
    renderPortfolio();
    updateCartUI();
    renderCartPopupItems();
    setupNavbarScroll();
    setupMobileMenu();
    setupDatePicker();
    setupScrollAnimations();

    // Form submission
    const form = document.getElementById('request-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Mobile Input UX
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            setTimeout(() => {
                input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });
    });
}
