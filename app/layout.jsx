import './globals.css';

export const metadata = {
  title: 'Deboxe x Citrine | Collab Fitness Premium',
  description:
    'Landing page premium da collab Deboxe x Citrine com esttica black and gold, linguagem automotiva e captacao de leads.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
