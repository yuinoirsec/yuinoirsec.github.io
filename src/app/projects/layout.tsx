import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Akash R A',
  description:
    'Technical and creative projects by Akash R A — penetration testing reports, secure network architectures, library systems, and the Chronicles of Lumina fantasy novel series.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
