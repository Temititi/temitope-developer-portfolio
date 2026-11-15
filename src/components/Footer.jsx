import { socials } from '../data/socials';
export default function Footer() {
  return <footer className="footer wrap"><span>© {new Date().getFullYear()} Temitope Matuluko</span><span>Built with intention <span className="accent">✳</span></span><div>{socials.map(({label, url, Icon}) => <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={18}/></a>)}</div></footer>;
}
