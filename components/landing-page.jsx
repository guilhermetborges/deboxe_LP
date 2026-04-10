'use client';

import { useEffect, useRef, useState } from 'react';

const openingThumbnails = [
  {
    src: '/images/WhatsApp%20Image%202026-04-08%20at%2015.42.14%20%281%29.jpeg',
    alt: 'Imagem de abertura da deboxesports Deboxe x Citrine.',
  },
  {
    src: '/images/deboxe-gallery-truck.jpg',
    alt: 'Caminhonete da deboxesports com estética automotiva premium.',
  },
  {
    src: '/images/WhatsApp%20Image%202026-04-08%20at%2016.16.56.jpeg',
    alt: 'Detalhe visual da campanha em ambiente de evento.',
  },
];

const carouselImages = [
  {
    src: '/images/WhatsApp%20Image%202026-04-08%20at%2015.42.14%20%281%29.jpeg',
    alt: 'Atleta em close da campanha Deboxe x Citrine.',
  },
  {
    src: '/images/WhatsApp%20Image%202026-04-08%20at%2015.42.14.jpeg',
    alt: 'Atleta ao lado do carro da campanha.',
  },
  {
    src: '/images/WhatsApp%20Image%202026-04-08%20at%2016.16.56.jpeg',
    alt: 'Composição visual da deboxesports em ambiente externo.',
  },
  {
    src: '/images/WhatsApp%20Image%202026-04-08%20at%2016.17.07.jpeg',
    alt: 'Look da campanha com linguagem urbana premium.',
  },
];

const buildPoints = [
  'Você quer treinar se sentindo forte e bem vestida',
  'Procura roupa com presença, e não só funcionalidade',
  'Gosta da mistura entre performance, evento e lifestyle',
  'Se conecta com marcas que criam comunidade de verdade',
  'Quer vestir uma energia que também aparece fora do treino',
];

const soundTags = ['Grade acústica', 'Paredão premium', 'Preto piano', 'Metal polido', 'Luz violeta'];
const logoPrimary = '/images/LOGO%20-deboxe.png';
const logoSecondary = '/images/logo2.png';

export default function LandingPage() {
  const pageRef = useRef(null);
  const [activePulse, setActivePulse] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '' });
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 1800, 1);
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(3));
    };

    const handlePointerMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = ((event.clientX / innerWidth) * 2 - 1).toFixed(3);
      const y = ((event.clientY / innerHeight) * 2 - 1).toFixed(3);
      document.documentElement.style.setProperty('--pointer-x', x);
      document.documentElement.style.setProperty('--pointer-y', y);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const triggerPulse = (key) => {
    setActivePulse(key);
    window.clearTimeout(triggerPulse.timer);
    triggerPulse.timer = window.setTimeout(() => setActivePulse(null), 340);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formState.name || !formState.email || !formState.phone) {
      setFeedback('Preencha nome, e-mail e telefone para entrar nesta lista premium.');
      return;
    }

    setIsSubmitting(true);
    setFeedback('Enviando seu cadastro...');

    try {
      const response = await fetch('https://jbxaqzwpnsijxlkqdgzl.supabase.co/functions/v1/citrine-deboxe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setFeedback(`Cadastro recebido, ${formState.name}. Agora você está na rota das novidades da deboxesports.`);
      setFormState({ name: '', email: '', phone: '' });
    } catch (error) {
      setFeedback('Não foi possível enviar seu cadastro agora. Tente novamente em instantes.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="landing-page" ref={pageRef}>
      <header className="topbar shell">
        <a href="#hero" className="brand pulse-target" onClick={() => triggerPulse('brand')}>
          <span className={`brand-mark ${activePulse === 'brand' ? 'is-pulsing' : ''}`}>
            <img src={logoPrimary} alt="Logo Deboxe" className="brand-logo-img" />
          </span>
          <span className="brand-copy">
            <strong>Deboxe x Citrine</strong>
            <small>Força, atitude, comunidade e presença.</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Navegação principal">
          <a href="#manifesto">Manifesto</a>
          <a href="#gallery">Desejo</a>
          <a href="#sound">Som & Energia</a>
          <a href="#lead-form" className="nav-cta pulse-target" onClick={() => triggerPulse('nav-cta')}>
            Entrar agora
          </a>
        </nav>
      </header>

      <section id="gallery" className="opening-gallery shell" data-reveal>
        <div className="section-heading narrow">
          <p className="eyebrow">Galeria rápida</p>
          <p className="opening-caption">Três cliques para sentir a energia da deboxesports.</p>
        </div>

        <div className="thumb-grid">
          {openingThumbnails.map((image) => (
            <figure className="thumb-card build-panel" key={image.src}>
              <img src={image.src} alt={image.alt} className="thumb-image" />
            </figure>
          ))}
        </div>
      </section>

      <section id="lead-form" className="lead shell" data-reveal>
        <div className="lead-copy build-panel">
          <img src={logoSecondary} alt="Logo Deboxe alternativa" className="panel-logo" />
          <p className="eyebrow">Cadastro</p>
          <h2 className="lead-title-single-line">Cadastro para receber seu presente</h2>
        </div>

        <form className="lead-form build-panel" onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={formState.name}
              onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))}
              placeholder="Seu nome"
              required
            />
          </label>

          <label>
            <span>E-mail</span>
            <input
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))}
              placeholder="seuemail@exemplo.com"
              required
            />
          </label>

          <label>
            <span>Telefone</span>
            <input
              type="tel"
              value={formState.phone}
              onChange={(event) => setFormState((state) => ({ ...state, phone: event.target.value }))}
              placeholder="(00) 00000-0000"
              required
            />
          </label>

          <button type="submit" className="btn btn-primary btn-full pulse-target" onClick={() => triggerPulse('submit')} disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Quero receber novidades'}
          </button>

          <p className="form-feedback" role="status" aria-live="polite">
            {feedback}
          </p>
        </form>
      </section>

      <section id="hero" className="hero shell" data-reveal>
        <div className="hero-copy build-layer build-layer-copy">
          <p className="eyebrow">LANÇAMENTO DEBOXESPORTS</p>
          <h1 className="hero-title">DEBOXE x CITRINE</h1>
          <p className="hero-text">
            Deboxe x Citrine une roupa fitness premium, estética urbana e energia de evento em uma coleção feita para mulheres que querem presença dentro e fora do treino.
          </p>

          <div className="hero-actions">
            <a
              href="https://www.instagram.com/deboxesport/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-instagram pulse-target"
              onClick={() => triggerPulse('hero-instagram')}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="instagram-icon">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle cx="17.5" cy="6.5" r="1.25" />
              </svg>
              <span>Seguir no Instagram</span>
            </a>

            <a href="#lead-form" className="btn btn-primary pulse-target" onClick={() => triggerPulse('lead')}>
              Quero fazer parte
            </a>
            <a
              href="https://citrineloja.com.br/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary pulse-target"
              onClick={() => triggerPulse('store')}
            >
              Conhecer a Citrine
            </a>
          </div>

          <ul className="hero-points" aria-label="Valores da deboxesports">
            <li>Modelagem com impacto visual</li>
            <li>Luxo esportivo com linguagem automotiva</li>
            <li>Comunidade feminina que vive treino e evento</li>
          </ul>
        </div>

        <div className="hero-visual build-layer build-layer-visual">
          <figure className="hero-image-wrap pulse-target" onClick={() => triggerPulse('hero-image')}>
            <img src="/images/deboxe-hero-main.jpg" alt="Imagem principal da deboxesports Deboxe x Citrine." className="hero-image" />
          </figure>
        </div>
      </section>

      <section id="manifesto" className="manifesto shell" data-reveal>
        <div className="section-heading narrow">
          <img src={logoPrimary} alt="Logo Deboxe" className="section-logo" />
          <p className="eyebrow">Manifesto</p>
          <h2>Não é só uma coleção fitness. É uma imagem de marca para quem gosta de chamar presença.</h2>
        </div>

        <div className="manifesto-grid">
          <article className="statement-card build-panel">
            <p>
              A Deboxe chega com a força do evento, do paredão e da rua. A Citrine entra com acabamento, desejo e curadoria. <strong>Juntas, elas transformam roupa esportiva em atitude visível.</strong>
            </p>
          </article>

          <article className="detail-card build-panel">
            <p>
              Essa coleção fala com quem gosta de treinar, se produzir, ir para evento e ser lembrada. O visual vem do preto piano, do dourado quente, da luz violeta e da estrutura de carro de som customizado reinterpretada como campanha premium.
            </p>
          </article>
        </div>
      </section>

      <section className="identity shell" data-reveal>
        <div className="section-heading left narrow">
          <img src={logoSecondary} alt="Logo Deboxe alternativa" className="section-logo" />
          <p className="eyebrow">Conexão</p>
          <h2>Se você se reconhece nisso, essa coleção foi pensada para o seu repertório de vida.</h2>
        </div>

        <div className="identity-grid">
          <div className="identity-list build-panel">
            {buildPoints.map((point, index) => (
              <button
                type="button"
                className={`identity-item ${activePulse === `identity-${index}` ? 'is-pulsing' : ''}`}
                onClick={() => triggerPulse(`identity-${index}`)}
                key={point}
              >
                <span>0{index + 1}</span>
                <p>{point}</p>
              </button>
            ))}
          </div>

          <aside className="identity-highlight build-panel">
            <span className="community-x">
              <img src={logoSecondary} alt="Logo Deboxe" className="community-logo-img" />
            </span>
            <p>Então a mensagem é simples: você não está olhando só para um drop.</p>
            <strong>Você está entrando em uma comunidade.</strong>
          </aside>
        </div>
      </section>

      <section id="sound" className="sound-section shell" data-reveal>
        <div className="section-heading narrow">
          <img src={logoPrimary} alt="Logo Deboxe" className="section-logo" />
          <p className="eyebrow">Som & Energia</p>
          <h2>O universo do carro de som aparece aqui como textura de poder, brilho e pressão visual.</h2>
        </div>

        <div className="sound-grid">
          <div className="sound-stage build-panel">
            <div className="woofer-wall">
              {Array.from({ length: 8 }).map((_, index) => (
                <button
                  type="button"
                  key={`woofer-${index}`}
                  className={`woofer ${activePulse === `woofer-${index}` ? 'is-pulsing' : ''}`}
                  onClick={() => triggerPulse(`woofer-${index}`)}
                  aria-label={`Ativar woofer ${index + 1}`}
                />
              ))}
            </div>

            <div className="equalizer" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={`bar-${index}`} style={{ animationDelay: `${index * 0.08}s` }} />
              ))}
            </div>

            <div className="sound-wave sound-wave-top" aria-hidden="true" />
            <div className="sound-wave sound-wave-bottom" aria-hidden="true" />
          </div>

            <div className="sound-copy build-panel">
              <p>
                A referência automotiva não entra como fantasia. Ela entra como linguagem: parede de woofer, metal escuro, reflexo verniz, luz roxa e sensação de grave. Cada clique reage como um pulso para reforçar a ideia de energia e presença.
              </p>

            <div className="sound-tags">
              {soundTags.map((tag) => (
                <button type="button" key={tag} className="sound-tag pulse-target" onClick={() => triggerPulse(tag)}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="photo-carousel shell" data-reveal>
        <div className="section-heading narrow">
          <img src={logoSecondary} alt="Logo Deboxe alternativa" className="section-logo" />
          <p className="eyebrow">Mais fotos</p>
          <p className="opening-caption">Deslize para ver mais imagens da deboxesports.</p>
        </div>

        <div className="carousel-track" aria-label="Carrossel de fotos da deboxesports">
          {carouselImages.map((image) => (
            <figure className="carousel-slide build-panel" key={image.src}>
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </figure>
          ))}
        </div>
      </section>

      <section className="cta-band shell" data-reveal>
        <div className="cta-copy build-panel">
          <img src={logoPrimary} alt="Logo Deboxe" className="panel-logo" />
          <p className="eyebrow">Direcionamentos</p>
          <h2>Veja a coleção nos canais onde compra, acompanha e se conecta com a marca.</h2>
          <p>Entre na loja da Citrine para conhecer o universo do produto e acompanhe a Deboxe no Instagram para ver a energia da campanha acontecendo ao vivo.</p>
        </div>

        <div className="cta-links">
          <a href="https://citrineloja.com.br/" target="_blank" rel="noreferrer" className="cta-card build-panel pulse-target" onClick={() => triggerPulse('citrine-card')}>
            <span>Loja oficial</span>
            <strong>Acessar loja Citrine</strong>
            <small>Peças, desejo e assinatura da Deboxe x Citrine.</small>
          </a>

          <a href="https://www.instagram.com/deboxesport/" target="_blank" rel="noreferrer" className="cta-card build-panel pulse-target" onClick={() => triggerPulse('instagram-card')}>
            <span>Comunidade em movimento</span>
            <strong>Seguir Deboxe no Instagram</strong>
            <small>Campanha, eventos e energia da marca em tempo real.</small>
          </a>
        </div>
      </section>

    </main>
  );
}
