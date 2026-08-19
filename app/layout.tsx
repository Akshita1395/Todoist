import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Todoist — Get your head clear (Conceptual Redesign)',
  description: 'Turn everything on your mind into a simple plan for today. Conceptual homepage redesign created for a frontend assignment.',
  keywords: ['Todoist Redesign', 'Task Management', 'Productivity', 'Get Your Head Clear'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAF8F5] text-todoist-charcoal min-h-screen antialiased selection:bg-[#E44232]/20 selection:text-[#E44232]">
        {children}
      </body>
    </html>
  );
}
