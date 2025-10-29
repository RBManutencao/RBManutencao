import React, { useState } from 'react';
import { Zap, Droplets, Flame, Phone, Mail, MapPin, Star, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import BudgetSimulator from './BudgetSimulator';
import { services, testimonials, projects, companyInfo } from '../mock';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const getServiceIcon = (iconName) => {
    const icons = { Zap, Droplets, Flame };
    return icons[iconName] || Zap;
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="dark-header">
        <div className="header-content">
          <div className="logo-container">
            <h1 className="logo-text">{companyInfo.name}</h1>
          </div>

          <nav className="dark-nav desktop-nav">
            <button onClick={() => scrollToSection('servicos')} className="dark-nav-link">Serviços</button>
            <button onClick={() => scrollToSection('projetos')} className="dark-nav-link">Projetos</button>
            <button onClick={() => scrollToSection('depoimentos')} className="dark-nav-link">Depoimentos</button>
            <Button onClick={() => scrollToSection('orcamento')} className="btn-primary-header">
              Solicitar Orçamento
            </Button>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('servicos')} className="mobile-nav-link">Serviços</button>
            <button onClick={() => scrollToSection('projetos')} className="mobile-nav-link">Projetos</button>
            <button onClick={() => scrollToSection('depoimentos')} className="mobile-nav-link">Depoimentos</button>
            <Button onClick={() => scrollToSection('orcamento')} className="btn-primary-mobile">
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Soluções Profissionais em
              <span className="hero-highlight"> Manutenção</span>
            </h1>
            <p className="hero-description">
              Especialistas em elétrica, hidráulica e instalação de aquecedores.
              Atendimento rápido e profissional no Rio de Janeiro.
            </p>
            <div className="hero-actions">
              <Button onClick={() => scrollToSection('orcamento')} className="btn-primary">
                Solicitar Orçamento Grátis
              </Button>
              <Button
                onClick={() => window.open(`https://wa.me/${companyInfo.whatsapp}`, '_blank')}
                className="btn-secondary"
              >
                <Phone size={20} />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projetos Concluídos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services-section">
        <div className="section-header">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas para sua residência ou empresa</p>
        </div>
        <div className="services-grid-home">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <Card key={service.id} className="service-card-home">
                <CardContent className="service-content">
                  <div className="service-icon">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Nossos Projetos</h2>
          <p className="section-subtitle">Confira alguns dos trabalhos realizados</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <p className="section-subtitle">Satisfação comprovada em cada projeto</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="testimonial-card">
              <CardContent className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#00FFD1" color="#00FFD1" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-location">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Budget Simulator */}
      <BudgetSimulator />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{companyInfo.name}</h3>
            <p className="footer-description">{companyInfo.description}</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Contato</h4>
            <div className="footer-links">
              <a href={`tel:${companyInfo.phone}`} className="footer-link">
                <Phone size={18} />
                {companyInfo.phone}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="footer-link">
                <Mail size={18} />
                {companyInfo.email}
              </a>
              <div className="footer-link">
                <MapPin size={18} />
                {companyInfo.address}
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Horário de Atendimento</h4>
            <p className="footer-text">Segunda a Sexta: 8h às 18h</p>
            <p className="footer-text">Sábado: 8h às 13h</p>
            <p className="footer-text">Emergências 24h</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 {companyInfo.name}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;