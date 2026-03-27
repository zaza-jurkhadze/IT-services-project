"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function ServiceAiPage() {
  const { t } = useLang();

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> /{" "}
            <Link href="/#სერვისები">{t("nav.services")}</Link> / AI
          </p>
          <h1>{t("svc.ai.title")}</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "50ch" }}>
            უსაფრთხო და პრაქტიკული AI გამოყენება ოფისის ყოველდღიურ სამუშაოში.
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <h2>რას ვაკეთებთ ამ მიმართულებით</h2>
          <p>
            ხელოვნური ინტელექტის ინსტრუმენტები უკვე ნაწილია ბევრი პროცესისა.
            ჩვენ გეხმარებით აირჩიოთ შესაბამისი პლატფორმები, დააყენოთ წესები
            (დოკუმენტების კონფიდენციალურობა, წვდომა), მოამზადოთ პრომპტები და
            მცირე ავტომატიზაციები — რათა გუნდმა დრო დაზოგოს და რისკები იყოს
            კონტროლქვეშ.
          </p>

          <h2>ძირითადი სამუშაოები</h2>
          <ul>
            <li>
              <strong>პოლიტიკა და უსაფრთხოება</strong> — რა მონაცემი შეიძლება
              იყოს AI-ში, როგორ გამოვიყენოთ კორპორატიული ანგარიშები და რა
              ლოგირებაა საჭირო.
            </li>
            <li>
              <strong>პრომპტები და შაბლონები</strong> — სტანდარტიზებული
              ინსტრუქციები ხშირი ამოცანებისთვის (რეზიუმეები, ანგარიშები,
              ელფოსტის ნაბეჭდი ვერსიები).
            </li>
            <li>
              <strong>ინტეგრაცია</strong> — სამუშაო პროცესებთან მიერთება
              (ელფოსტა, ცხრილები, ჩატ-ბოტები შეთანხმებით).
            </li>
            <li>
              <strong>სწავლება</strong> — მოკლე სესიები თანამშრომლებისთვის
              პასუხისმგებლი გამოყენების შესახებ.
            </li>
          </ul>

          <h2>ვინ სარგებლობს</h2>
          <p>
            ოფისები, სადაც სურთ AI-ს სარგებლობა დოკუმენტებისა და კომუნიკაციის
            დასაჩქარებლად, მაგრამ სჭირდებათ ნათელი წესები და ტექნიკური
            მხარდაჭერა.
          </p>

          <div className="prose-cta">
            <a href="/#კონტაქტი" className="btn btn-primary">
              {t("nav.contact")}
            </a>
            <a
              href="/#სერვისები"
              className="btn btn-ghost"
              style={{ marginInlineStart: "0.5rem" }}
            >
              {t("svc.nav_other")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
