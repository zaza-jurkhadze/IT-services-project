"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function ServiceSecurityPage() {
  const { t } = useLang();

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> /{" "}
            <Link href="/#სერვისები">{t("nav.services")}</Link> / კიბერუსაფრთხოება
          </p>
          <h1>კიბერუსაფრთხოება</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "50ch" }}>
            ქსელისა და სისტემების დაცვა — პრაქტიკული ზომები, რომლებიც
            შეესაბამება თქვენს რისკს.
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <h2>რას ვაკეთებთ ამ მიმართულებით</h2>
          <p>
            კიბერუსაფრთხოება SME და კერძო კლიენტებისთვის ხშირად ნიშნავს ჯაჭვის
            სუსტი რგოლების აღმოფხვრას: ნაგულისხმევი პაროლები, გახსნილი პორტები,
            უსაფრთხოების განახლებების გამოტოვება და უკონტროლო წვდომა შიდა
            რესურსებზე. ჩვენ ვქმნით გასაგებ, გამოსაყენებელ პოლიტიკებს და
            ტექნიკურ კონფიგურაციას.
          </p>

          <h2>ძირითადი სამუშაოები</h2>
          <ul>
            <li>
              <strong>ფაიერვოლი და საზღვარი</strong> — წესების გამართვა,
              ზედმეტი პორტების დახურვა, NAT და სანდო ზონების განსაზღვრა.
            </li>
            <li>
              <strong>სეგმენტაცია</strong> — სტუმრები, IoT და კრიტიკული
              სერვისები ცალკე VLAN/ქსელებში, სადაც ეს შესაძლებელია.
            </li>
            <li>
              <strong>წვდომის კონტროლი</strong> — მომხმარებლის უფლებები,
              ადმინისტრატორის ანგარიშების შეზღუდვა, საჭიროებისამებრ MFA.
            </li>
            <li>
              <strong>განახლებები</strong> — Windows Update / პაჩების პოლიტიკა,
              კრიტიკული CVE-ებზე რეაგირების გეგმა.
            </li>
            <li>
              <strong>რეზერვი და აღდგენა</strong> — ransomware-ის რისკის
              შემცირება სარეზერვო სტრატეგიით (ერთად სისტემურ
              ადმინისტრირებასთან).
            </li>
            <li>
              <strong>შეგნებულობა</strong> — ფიშინგის ნიშნები და ძირითადი წესები
              თანამშრომლებისთვის (მოკლე გაიდლაინები).
            </li>
          </ul>

          <h2>რას არ ვაცხადებთ</h2>
          <p>
            სრული SOC ან სერტიფიცირებული აუდიტი ცალკე სპეციალიზაციაა; ჩვენ
            ვამზადებთ ფუნდამენტს და ვამცირებთ ყოველდღიულ რისკებს, ხოლო
            საჭიროების შემთხვევაში გირჩევთ პარტნიორ საკონსულტაციო სერვისებთან
            დაკავშირებას.
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
