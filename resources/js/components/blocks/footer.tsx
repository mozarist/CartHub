
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLogo from '../app-logo';
import { Input } from '../ui/input';

const footerLinkGroups = [
  {
    label: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'New Arrivals', href: '#' },
      { title: 'Best Sellers', href: '#' },
      { title: 'Categories', href: '#' },
      { title: 'Sales', href: '#' },
    ],
  },
  {
    label: 'Support',
    links: [
      { title: 'Contact Us', href: '#' },
      { title: 'FAQ', href: '#' },
      { title: 'Shipping Info', href: '#' },
      { title: 'Returns', href: '#' },
      { title: 'Track Order', href: '#' },
      { title: 'Help Center', href: '#' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About Us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Press', href: '#' },
      { title: 'Partners', href: '#' },
      { title: 'Sustainability', href: '#' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '#' },
      { title: 'Terms of Service', href: '#' },
      { title: 'Cookie Policy', href: '#' },
      { title: 'Accessibility', href: '#' },
      { title: 'Compliance', href: '#' },
      { title: 'Licenses', href: '#' },
    ],
  },
];

export default function Footer() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-background to-muted/30 pt-12 text-foreground">
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 md:gap-0 md:grid-cols-2">
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-2">
                <AppLogo />
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Beautifully crafted e-commerce experiences. Built with modern design principles
                and cutting-edge technology to deliver exceptional shopping journeys.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
            </div>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <Input placeholder="Enter your email" />
              <Button className="rounded-full">
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="my-8 h-px bg-border" />

        <div className="mb-8 grid gap-8 md:gap-0 grid-cols-2 md:grid-cols-4">
          {footerLinkGroups.map((group) => (
            <div key={group.label} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                {group.label}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="inline-flex items-center text-xs text-muted-foreground transition-all hover:text-primary hover:translate-x-0.5"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-8 h-px bg-border" />

        <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy
            </a>
            <span className="text-border">/</span>
            <a href="#" className="transition-colors hover:text-primary">
              Terms
            </a>
            <span className="text-border">/</span>
            <a href="#" className="transition-colors hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}
