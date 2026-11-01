import Link from "next/link";
import { BytenLogo } from "@/components/logo";
import { LocalTime } from "@/components/local-time";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer__top">
          <div className="footer__brand">
            <BytenLogo width={128} />
            <p>
              A digital engineering company building web platforms, mobile
              apps, and retail systems for teams that need them to hold.
            </p>
            <Link href="/contact" className="link-line">
              Start a project <ArrowUpRight size={15} />
            </Link>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {site.footerNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="footer__contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <a href={site.url} target="_blank" rel="noreferrer">
              {site.domain}
            </a>
            <LocalTime className="mono-label" />
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} Byten. All rights reserved.
          </span>
          <span className="footer__status">Open for select projects</span>
          <span>India / working worldwide</span>
          <a href="#top">Back to top</a>
        </div>

      </div>
    </footer>
  );
}
