import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/_assets/icon-blk.svg';

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center opacity-80"
            >
              <Image
                src={logo}
                alt={`presell logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                <mark className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary font-bold">
                  presell
                </mark>{' '}
                <mark className="text-sm text-info">×</mark>{' '}
                <mark className="bg-clip-text text-transparent bg-gradient-to-br from-orange-600 to-accent font-bold">
                  brasaweb
                </mark>
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80 md:text-left text-center flex flex-col gap-2">
              <span>
                A <strong>brasaweb</strong> entrega a você o estado da arte em
                sistemas de internet.
              </span>
              <span>
                Uma marca <strong>Presell Digital</strong>.
              </span>
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()}
              <br />
              Todos os direitos reservados
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="font-semibold tracking-widest text-sm md:text-left mb-3 text-primary/80">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a
                  href="mailto:contato@presell.news"
                  target="_blank"
                  className="link link-hover"
                  aria-label="Contact Support"
                >
                  Contato
                </a>
                <a
                  href="https://instagram.com/presell.news"
                  target="_blank"
                  className="link link-hover"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className=" font-semibold tracking-widest text-sm md:text-left mb-3 text-primary/80">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/lgpd/termos-de-uso" className="link link-hover">
                  Termos de Uso
                </Link>
                <Link
                  href="/lgpd/politica-de-privacidade"
                  className="link link-hover"
                >
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
