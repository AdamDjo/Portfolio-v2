import Link from 'next/link';
import './_Languages.scss';
import Image from 'next/image';
export default function LanguageSwitcher() {
  return (
    <div className="languages">
      <Link href="/en" locale="en">
        <Image
          src="/images/english.png"
          alt="French Language"
          width={20}
          height={20}
        ></Image>
      </Link>

      <Link href="/fr" locale="fr">
        <Image
          src="/images/france.png"
          alt="French Language"
          width={20}
          height={20}
        ></Image>
      </Link>
    </div>
  );
}
