import React, { useState } from 'react';
import { Zap, Droplets, Flame, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { companyInfo } from '../mock';

const BudgetSimulator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    name: '',
    phone: '',
    address: '',
    description: ''
  });

  const services = [
    { id: 'eletrica', name: 'Elétrica', icon: Zap, color: '#00FFD1' },
    { id: 'hidraulica', name: 'Hidráulica', icon: Droplets, color: '#00FFD1' },
    { id: 'aquecedores', name: 'Aquecedores e Boiler', icon: Flame, color: '#00FFD1' }
  ];

  const handleServiceSelect = (serviceId) => {
    setFormData({ ...formData, serviceType: serviceId });
    setStep(2);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const serviceName = services.find(s => s.id === formData.serviceType)?.name || '';
    const message = `*Solicitação de Orçamento - RBM Manutenção*%0A%0A` +
      `*Serviço:* ${serviceName}%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Telefone:* ${formData.phone}%0A` +
      `*Endereço:* ${formData.address}%0A` +
      `*Descrição:* ${formData.description}`;
    
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${message}`, '_blank');
  };

  const isStep2Valid = formData.name && formData.phone && formData.address && formData.description;

  return (
    <div id="orcamento" className="budget-simulator-section">
      <div className="budget-container">
        <div className="budget-header">
          <h2 className="budget-title">Solicite seu Orçamento</h2>
          <p className="budget-subtitle">Rápido, fácil e sem compromisso</p>
          
          <div className="steps-indicator">
            <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Serviço</span>
            </div>
            <div className="step-line"></div>
            <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Dados</span>
            </div>
            <div className="step-line"></div>
            <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Enviar</span>
            </div>
          </div>
        </div>

        <div className="budget-content">
          {step === 1 && (
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="service-card"
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <CardContent className="service-card-content">
                      <div className="service-icon-wrapper">
                        <Icon size={48} strokeWidth={1.5} />
                      </div>
                      <h3 className="service-card-title">{service.name}</h3>
                      <ArrowRight className="service-arrow" size={24} />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {step === 2 && (
            <div className="form-container">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone *</label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(21) 99999-9999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="address">Endereço/Bairro *</label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Seu bairro ou endereço"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="description">Descrição do Serviço *</label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Descreva o problema ou serviço que precisa..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={4}
                  />
                </div>
              </div>

              <div className="form-actions">
                <Button
                  onClick={() => setStep(1)}
                  className="btn-back"
                >
                  <ArrowLeft size={20} />
                  Voltar
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!isStep2Valid}
                  className="btn-next"
                >
                  Continuar
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="summary-container">
              <Card className="summary-card">
                <CardContent className="summary-content">
                  <h3 className="summary-title">Resumo da Solicitação</h3>
                  
                  <div className="summary-grid">
                    <div className="summary-item">
                      <span className="summary-label">Serviço:</span>
                      <span className="summary-value">
                        {services.find(s => s.id === formData.serviceType)?.name}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Nome:</span>
                      <span className="summary-value">{formData.name}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Telefone:</span>
                      <span className="summary-value">{formData.phone}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Endereço:</span>
                      <span className="summary-value">{formData.address}</span>
                    </div>
                    <div className="summary-item full">
                      <span className="summary-label">Descrição:</span>
                      <span className="summary-value">{formData.description}</span>
                    </div>
                  </div>

                  <div className="summary-actions">
                    <Button
                      onClick={() => setStep(2)}
                      className="btn-back"
                    >
                      <ArrowLeft size={20} />
                      Voltar
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="btn-whatsapp"
                    >
                      <MessageCircle size={20} />
                      Enviar via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetSimulator;