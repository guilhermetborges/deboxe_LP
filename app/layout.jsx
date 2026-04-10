import './globals.css';

export const metadata = {
  title: 'Deboxe x Citrine | Collab Fitness Premium',
  description:
    'Landing page premium da collab Deboxe x Citrine com estética black and gold, linguagem automotiva e captação de leads.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
