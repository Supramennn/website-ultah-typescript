import { siteConfig } from "../data/config";
import { HeartDoodle } from "./doodles";

export function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-sky/60 bg-paper px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <HeartDoodle className="h-7 w-7 text-blush" />
        <p className="mt-3 font-hand text-2xl leading-tight text-ink">{siteConfig.footer.line}</p>
        <p className="mt-1 text-sm font-medium text-ink-soft">{siteConfig.footer.date}</p>
        <p className="mt-4 font-hand text-xl leading-none text-ink-soft">{siteConfig.footer.note}</p>
        <a
          href="#atas"
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-sticker px-3 py-2 text-sm font-semibold text-ink underline decoration-butter decoration-2 underline-offset-4 transition hover:decoration-ink"
        >
          {siteConfig.footer.top}
        </a>
      </div>
    </footer>
  );
}
