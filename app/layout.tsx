import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Regression concept check',
  description: 'Interactive questions on least squares, test performance, parameter uncertainty and the Gauss–Markov theorem.',
};
export default function Layout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
