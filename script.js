// ===== LOADING SCREEN =====
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Esconder após 2 segundos
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
        
        // Remover do DOM após a transição
        setTimeout(function() {
            loadingScreen.remove();
        }, 500);
    }, 2000);
});

// ===== PARTICLES (Removed - Now using pulsing lights) =====

// ===== MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Verificar tema salvo no localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// ===== COUNTER ANIMATION =====
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

// ===== BUDGET CALCULATOR =====
let currentStep = 1;
let budgetData = {
    service: '',
    description: '',
    urgency: 'normal',
    location: '',
    name: '',
    phone: '',
    email: ''
};

// Service Selection
document.querySelectorAll('.service-option').forEach(option => {
    option.addEventListener('click', function() {
        // Se já está selecionado, despressiona
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            // Remove seleção de todos e seleciona o clicado
            document.querySelectorAll('.service-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        }
        budgetData.service = this.getAttribute('data-service');
        
        setTimeout(() => {
            nextStep();
        }, 500);
    });
});

function nextStep() {
    if (currentStep === 2) {
        // Validate Step 2
        const description = document.getElementById('serviceDescription').value;
        const location = document.getElementById('location').value;
        
        if (!description || !location) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        budgetData.description = description;
        budgetData.urgency = document.getElementById('urgency').value;
        budgetData.location = location;
        
        updateSummary();
    }
    
    if (currentStep < 3) {
        currentStep++;
        updateStepDisplay();
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
    }
}

function updateStepDisplay() {
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index + 1 <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Update step content
    document.querySelectorAll('.step-content').forEach((content, index) => {
        if (index + 1 === currentStep) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

function updateSummary() {
    const serviceNames = {
        'eletrica': 'Elétrica',
        'hidraulica': 'Hidráulica',
        'aquecedores': 'Aquecedores',
        'geral': 'Manutenção Geral'
    };
    
    const urgencyNames = {
        'normal': 'Normal (3-5 dias)',
        'urgente': 'Urgente (1-2 dias)',
        'emergencia': 'Emergência (Hoje)'
    };
    
    document.getElementById('summaryService').textContent = serviceNames[budgetData.service] || '-';
    document.getElementById('summaryUrgency').textContent = urgencyNames[budgetData.urgency] || '-';
    document.getElementById('summaryLocation').textContent = budgetData.location || '-';
    document.getElementById('summaryDescription').textContent = budgetData.description || '-';
}

function sendBudget() {
    const budgetData = {
        service: document.querySelector('.service-option.selected')?.dataset.service,
        description: document.getElementById('serviceDescription').value,
        urgency: document.getElementById('urgency').value,
        serviceDate: document.getElementById('serviceDate').value,
        location: document.getElementById('location').value,
        propertyType: document.getElementById('propertyType').value,
        serviceSize: document.getElementById('serviceSize').value,
        hasMaterials: document.getElementById('hasMaterials').value,
        previousEvaluation: document.getElementById('previousEvaluation').value,
        name: document.getElementById('name').value,
        document: document.getElementById('document').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        neighborhood: document.getElementById('neighborhood').value,
        cep: document.getElementById('cep').value,
        contactTime: document.getElementById('contactTime').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        observations: document.getElementById('observations').value
    };
    
    if (!budgetData.service || !budgetData.description || !budgetData.name || !budgetData.phone || !budgetData.address || !budgetData.neighborhood) {
        alert('Por favor, preencha todos os campos obrigatórios (*).');
        return;
    }
    
    const serviceNames = {
        'eletrica': 'Elétrica',
        'hidraulica': 'Hidráulica',
        'aquecedores': 'Aquecedores',
        'geral': 'Manutenção Geral'
    };
    
    const urgencyNames = {
        'normal': 'Normal (3-5 dias)',
        'urgente': 'Urgente (1-2 dias)',
        'emergencia': 'Emergência (Hoje)'
    };
    
    const contactTimeNames = {
        'manha': 'Manhã (8h - 12h)',
        'tarde': 'Tarde (12h - 18h)',
        'noite': 'Noite (18h - 20h)',
        'qualquer': 'Qualquer horário'
    };
    
    const paymentNames = {
        'dinheiro': 'Dinheiro',
        'pix': 'PIX',
        'cartao': 'Cartão',
        'transferencia': 'Transferência',
        'negociar': 'A negociar'
    };
    
    const propertyTypeNames = {
        'residencial': 'Residencial',
        'comercial': 'Comercial',
        'industrial': 'Industrial',
        'condominio': 'Condomínio'
    };
    
    const serviceSizeNames = {
        'pequeno': 'Pequeno (até 2 horas)',
        'medio': 'Médio (2-4 horas)',
        'grande': 'Grande (mais de 4 horas)',
        'nao_sei': 'Não sei estimar'
    };
    
    const materialsNames = {
        'nao': 'Não, preciso que forneçam',
        'sim': 'Sim, já tenho tudo',
        'parcial': 'Tenho alguns materiais'
    };

    const message = `
╔═══════════════════════════╗
   🔧 *NOVO ORÇAMENTO* 👋
╚═══════════════════════════╝

Vi seu site e gostaria de solicitar um *orçamento*! ⚡

┌─────────────────────────┐
│ 👤 *DADOS PESSOAIS:* │
└─────────────────────────┘
📝 Nome: ${budgetData.name}
${budgetData.document ? `🆔 CPF/CNPJ: ${budgetData.document}\n` : ''}📱 Telefone: ${budgetData.phone}
✉️ Email: ${budgetData.email || 'Não informado'}

┌─────────────────────────┐
│ 📍 *ENDEREÇO:* │
└─────────────────────────┘
🏠 Endereço: ${budgetData.address}
🏘️ Bairro: ${budgetData.neighborhood}
${budgetData.cep ? `📮 CEP: ${budgetData.cep}\n` : ''}📌 Cidade: ${budgetData.location}

┌─────────────────────────┐
│ 🔨 *SERVIÇO:* │
└─────────────────────────┘
⚙️ Tipo: ${serviceNames[budgetData.service]}
📋 Descrição: ${budgetData.description}
⏰ Urgência: ${urgencyNames[budgetData.urgency]}
${budgetData.serviceDate ? `📅 Data desejada: ${new Date(budgetData.serviceDate).toLocaleDateString('pt-BR')}\n` : ''}🏢 Tipo de imóvel: ${propertyTypeNames[budgetData.propertyType]}
📏 Tamanho do serviço: ${serviceSizeNames[budgetData.serviceSize]}
🛠️ Materiais: ${materialsNames[budgetData.hasMaterials]}
${budgetData.previousEvaluation === 'sim' ? '✅ Já foi avaliado por outro profissional\n' : ''}
┌─────────────────────────┐
│ ⚙️ *PREFERÊNCIAS:* │
└─────────────────────────┘
🕐 Melhor horário: ${contactTimeNames[budgetData.contactTime]}
💳 Pagamento: ${paymentNames[budgetData.paymentMethod]}
${budgetData.observations ? `\n📝 Observações: ${budgetData.observations}` : ''}

Poderia me passar mais informações?

Obrigado! ✨
    `.trim();
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '5521991696953';
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setTimeout(() => {
        currentStep = 1;
        updateStepDisplay();
        document.querySelectorAll('.service-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        document.querySelectorAll('input, textarea, select').forEach(field => {
            field.value = '';
        });
    }, 1000);
}

// ===== FAQ =====
function toggleFAQ() {
    const modal = document.getElementById('faqModal');
    modal.classList.toggle('active');
}

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const item = this.parentElement;
        item.classList.toggle('active');
    });
});

// Close FAQ when clicking outside
document.getElementById('faqModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        toggleFAQ();
    }
});

// ===== LEFT INFO BUTTON =====
const leftInfoBtn = document.getElementById('leftInfoBtn');
let isExpanded = false;

if (leftInfoBtn) {
    leftInfoBtn.addEventListener('click', function(e) {
        // Não fechar se clicar no link do telefone
        if (e.target.tagName === 'A') {
            return;
        }
        
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            leftInfoBtn.classList.add('expanded');
        } else {
            leftInfoBtn.classList.remove('expanded');
        }
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', function(e) {
        if (!leftInfoBtn.contains(e.target) && isExpanded) {
            leftInfoBtn.classList.remove('expanded');
            isExpanded = false;
        }
    });
}

// ===== FAB (Floating Action Button) =====
function toggleFAB() {
    const fabMain = document.querySelector('.fab-main');
    const fabMenu = document.getElementById('fabMenu');
    
    fabMain.classList.toggle('active');
    fabMenu.classList.toggle('active');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('themeIcon');
    
    if (document.body.classList.contains('light-mode')) {
        // Ícone de sol
        icon.innerHTML = '<circle cx="12" cy="12" r="5" fill="white"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="white" stroke-width="2" stroke-linecap="round"/>';
        localStorage.setItem('theme', 'light');
    } else {
        // Ícone de lua
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="white"/>';
        localStorage.setItem('theme', 'dark');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Tema já carregado no início do arquivo

// Close FAB menu when clicking outside
document.addEventListener('click', function(e) {
    const fabContainer = document.querySelector('.fab-container');
    if (fabContainer && !fabContainer.contains(e.target)) {
        document.querySelector('.fab-main').classList.remove('active');
        document.getElementById('fabMenu').classList.remove('active');
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.feature-card, .service-card, .portfolio-item, .testimonial-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(el);
});

// ===== AVATAR 3D TILT EFFECT =====
const avatarContainer = document.querySelector('.avatar-container');

if (avatarContainer) {
    avatarContainer.addEventListener('mousemove', (e) => {
        const rect = avatarContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        avatarContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        avatarContainer.style.transition = 'transform 0.1s ease-out';
    });
    
    avatarContainer.addEventListener('mouseleave', () => {
        avatarContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        avatarContainer.style.transition = 'transform 0.5s ease-out';
    });
    
    avatarContainer.addEventListener('mouseenter', () => {
        avatarContainer.style.animation = 'none';
    });
    
    avatarContainer.addEventListener('mouseleave', () => {
        avatarContainer.style.animation = 'avatarFloat 3s ease-in-out infinite';
    });
}

// ===== SIMPLE BUDGET FORM =====
function sendSimpleBudget() {
    const serviceType = document.getElementById('serviceType').value;
    const description = document.getElementById('serviceDescription').value;
    const urgency = document.getElementById('urgency').value;
    const location = document.getElementById('location').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    if (!serviceType || !description || !location || !name || !phone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    const serviceNames = {
        'eletrica': 'Elétrica',
        'hidraulica': 'Hidráulica',
        'aquecedores': 'Aquecedores',
        'geral': 'Manutenção Geral'
    };
    
    const urgencyNames = {
        'normal': 'Normal (3-5 dias)',
        'urgente': 'Urgente (1-2 dias)',
        'emergencia': 'Emergência (Hoje)'
    };
    
    const message = `
╔═══════════════════════════╗
   🔧 *NOVO ORÇAMENTO* 👋
╚═══════════════════════════╝

Vi seu site e gostaria de solicitar um *orçamento*! ⚡

┌─────────────────────────┐
│ 👤 *MEUS DADOS:* │
└─────────────────────────┘
📝 Nome: ${name}
📱 Telefone: ${phone}
✉️ Email: ${email || 'Não informado'}

┌─────────────────────────┐
│ 🔨 *SERVIÇO:* │
└─────────────────────────┘
⚙️ Tipo: ${serviceNames[serviceType]}
📋 Descrição: ${description}
⏰ Urgência: ${urgencyNames[urgency]}
📍 Localização: ${location}

Poderia me passar mais informações?

Obrigado! ✨
    `.trim();
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '5521991696953';
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

// ===== SERVICE SELECTION MODAL =====
function openServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function sendWhatsAppMessage(serviceType) {
    const message = `
╔═══════════════════════════╗
   🔧 OLÁ! 👋
╚═══════════════════════════╝

Vi seu site e gostaria de solicitar um orçamento! ⚡

┌─────────────────────────┐
│ 📋 O QUE PRECISO: │
└─────────────────────────┘
✅ ${serviceType}

Poderia me passar mais informações?

Obrigado! ✨
    `.trim();
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '5521991696953';
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Fechar o modal após enviar
    closeServiceModal();
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeServiceModal();
    }
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    updateStepDisplay();
});
