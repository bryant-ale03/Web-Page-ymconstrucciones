import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Servicios', href: getPermalink('/#servicios') },
    { text: 'Proyectos', href: getPermalink('/#proyectos') },
    { text: 'Cómo trabajamos', href: getPermalink('/#proceso') },
    { text: 'Dudas', href: getPermalink('/#consultas') },
    { text: 'Contacto', href: getPermalink('/#contacto') },
  ],
  actions: [{ text: 'Pedir presupuesto', href: getPermalink('/#presupuesto') }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Reformas integrales', href: getPermalink('/#servicios') },
        { text: 'Fontanería', href: getPermalink('/#servicios') },
        { text: 'Instalaciones', href: getPermalink('/#servicios') },
        { text: 'Reparaciones generales', href: getPermalink('/#servicios') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Proyectos realizados', href: getPermalink('/#proyectos') },
        { text: 'Cómo trabajamos', href: getPermalink('/#proceso') },
        { text: 'Preguntas frecuentes', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Solicitar presupuesto', href: getPermalink('/#presupuesto') },
        { text: 'Enviar una consulta', href: getPermalink('/#consultas') },
        { text: 'Llamar: 624 70 12 28', href: 'tel:+34624701228' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Aviso legal', href: getPermalink('/terms') },
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Teléfono', icon: 'tabler:phone', href: 'tel:+34624701228' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:yosmarmontes@gmail.com' },
  ],
  footNote: `
    Web hecha con Astro + Tailwind CSS.
  `,
};
