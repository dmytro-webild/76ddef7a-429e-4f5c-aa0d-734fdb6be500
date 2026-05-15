"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { CreditCard, ShieldCheck, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Início",
          id: "home",
        },
        {
          name: "Coleções",
          id: "products",
        },
        {
          name: "Depoimentos",
          id: "testimonials",
        },
        {
          name: "Contato",
          id: "contact",
        },
      ]}
      brandName="Toca dos Baixinhos"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="Moda Infantil com Conforto, Estilo e Carinho 💖"
      description="Roupinhas infantis do 2 ao 12 anos com entrega para todo o Brasil."
      buttons={[
        {
          text: "Comprar pelo WhatsApp",
          href: "https://wa.me/5500000000000",
        },
        {
          text: "Ver Coleção",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/dancing-team-studio_1303-10934.jpg"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/mother-with-her-little-cute-daughter-with-shopping-bags_1303-18577.jpg",
          alt: "Mother with her little cute daughter",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-mother-presenting-new-toy-daughter_7502-4242.jpg",
          alt: "Attractive mother presenting new toy",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cute-fairskinned-little-girl-child-with-red-hair-plays-with-her-young-mother-home-concept-spending-time_197531-32745.jpg",
          alt: "Cute little girl playing with mother",
        },
        {
          src: "http://img.b2bpic.net/free-photo/females-standing-with-shopping-bags_1301-1592.jpg",
          alt: "Females standing with shopping bags",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mother-daughter-with-shopping-bag-city_1157-27268.jpg",
          alt: "Mother and daughter shopping in city",
        },
      ]}
      avatarText="Junte-se a centenas de mamães satisfeitas"
    />
  </div>

  <div id="trust" data-section="trust">
      <AboutMetric
      useInvertedBackground={true}
      title="Nossos Diferenciais"
      metrics={[
        {
          icon: Truck,
          label: "Envio Nacional",
          value: "Todo Brasil",
        },
        {
          icon: CreditCard,
          label: "Facilidade",
          value: "Pagamento",
        },
        {
          icon: ShieldCheck,
          label: "Qualidade",
          value: "Garantida",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="categories" data-section="categories">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Categorias de Moda"
      description="Encontre o look ideal para cada ocasião."
      accordionItems={[
        {
          id: "1",
          title: "Conjuntos Femininos",
          content: "Looks delicados para pequenas estilosas.",
        },
        {
          id: "2",
          title: "Conjuntos Masculinos",
          content: "Conforto e diversão para os meninos.",
        },
        {
          id: "3",
          title: "Novidades",
          content: "Peças exclusivas que acabaram de chegar.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-spring-wardrobe-switch_23-2150478959.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Conjunto Primavera",
          price: "R$ 89,90",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-modern-female-grey-coat_613910-7078.jpg",
        },
        {
          id: "p2",
          name: "Look Casual Azul",
          price: "R$ 79,90",
          imageSrc: "http://img.b2bpic.net/free-photo/group-children-playing-with-soap-bubbles_23-2148843681.jpg",
        },
        {
          id: "p3",
          name: "Vestido Floral",
          price: "R$ 119,90",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-girls-with-shopping-bag-city_1157-28137.jpg",
        },
        {
          id: "p4",
          name: "Shorts de Verão",
          price: "R$ 69,90",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-girls-wearing-dresses_23-2149037173.jpg",
        },
        {
          id: "p5",
          name: "Saia Rodada",
          price: "R$ 95,90",
          imageSrc: "http://img.b2bpic.net/free-photo/view-comical-scene-with-child_23-2151087466.jpg",
        },
        {
          id: "p6",
          name: "Camisa Polo",
          price: "R$ 85,90",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-kid-is-shopping-outdoors_624325-553.jpg",
        },
      ]}
      title="Mais Vendidos"
      description="Seleção especial de looks que nossas mamães amam."
    />
  </div>

  <div id="why" data-section="why">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Como recebo meu pedido?",
          content: "Entregamos via correios para todo o Brasil com código de rastreio.",
        },
        {
          id: "2",
          title: "Como fazer trocas?",
          content: "Nosso processo de troca é simples e sem burocracia, feito via WhatsApp.",
        },
        {
          id: "3",
          title: "Como comprar?",
          content: "Clique no botão de WhatsApp e fale diretamente com nosso atendimento personalizado.",
        },
      ]}
      sideTitle="Por que a Toca?"
      sideDescription="Dúvidas frequentes de nossas mamães clientes."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "BabyStyle",
        "KidsWear",
        "PetitFash",
        "Soft Cotton",
        "CuteBrands",
        "MiniModa",
        "GlobalWear",
      ]}
      title="Nossas Parcerias"
      description="Marcas que garantem o conforto dos nossos pequenos."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ana Silva",
          date: "10/2024",
          title: "Adorei a qualidade!",
          quote: "Os tecidos são incríveis e a entrega foi super rápida.",
          tag: "Cliente fiel",
          avatarSrc: "http://img.b2bpic.net/free-photo/sister-together-paperbag-human-bags_1301-1578.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/dancing-team-studio_1303-10934.jpg",
          imageAlt: "happy mother portrait children boutique client",
        },
        {
          id: "2",
          name: "Beatriz Lima",
          date: "09/2024",
          title: "Melhor atendimento",
          quote: "Fui muito bem atendida via WhatsApp, nota 10!",
          tag: "Recomendado",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-women-chooses-wear-clothes-shop-focus-woman_1398-1523.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-spring-wardrobe-switch_23-2150478959.jpg",
          imageAlt: "happy mother portrait children boutique client",
        },
        {
          id: "3",
          name: "Carla Souza",
          date: "08/2024",
          title: "Looks lindos",
          quote: "As roupinhas são ainda mais bonitas pessoalmente.",
          tag: "Compras recorrentes",
          avatarSrc: "http://img.b2bpic.net/free-photo/expressive-middle-aged-woman-posing_344912-3158.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/cool-young-parisian-good-mood-eyeglasses-long-white-skirt-dark-sneakers-sitting-floor-posing-blue-backdrop_197531-28341.jpg",
          imageAlt: "happy mother portrait children boutique client",
        },
        {
          id: "4",
          name: "Daniela Mendes",
          date: "07/2024",
          title: "Confiança total",
          quote: "Comprei sem sair de casa e recebi tudo certinho.",
          tag: "Experiência perfeita",
          avatarSrc: "http://img.b2bpic.net/free-photo/what-you-think-about-this-shirt_329181-8048.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/three-young-smiling-beautiful-girls-with-colorful-penny-skateboards_158538-16375.jpg",
          imageAlt: "happy mother portrait children boutique client",
        },
        {
          id: "5",
          name: "Elaine Costa",
          date: "06/2024",
          title: "Qualidade excelente",
          quote: "Muito satisfeita com o atendimento e o produto.",
          tag: "Mamãe contente",
          avatarSrc: "http://img.b2bpic.net/free-photo/mother-with-her-little-cute-daughter-with-shopping-bags_1303-18576.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-modern-female-grey-coat_613910-7078.jpg",
          imageAlt: "happy mother portrait children boutique client",
        },
      ]}
      title="Amor de nossas mamães"
      description="Veja o que nossas clientes dizem sobre a experiência na Toca."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Fale com a gente"
      description="Quer tirar uma dúvida ou fazer um pedido personalizado? Estamos aqui!"
      inputs={[
        {
          name: "nome",
          type: "text",
          placeholder: "Seu Nome",
        },
        {
          name: "telefone",
          type: "tel",
          placeholder: "Seu Telefone (WhatsApp)",
        },
        {
          name: "cidade",
          type: "text",
          placeholder: "Sua Cidade",
        },
      ]}
      textarea={{
        name: "mensagem",
        placeholder: "Como podemos ajudar?",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-eco-bakery-kids_23-2149884406.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navegação",
          items: [
            {
              label: "Início",
              href: "#home",
            },
            {
              label: "Produtos",
              href: "#products",
            },
            {
              label: "Contato",
              href: "#contact",
            },
          ],
        },
        {
          title: "Suporte",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/5500000000000",
            },
            {
              label: "Trocas",
              href: "#",
            },
            {
              label: "Termos",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Toca dos Baixinhos"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
