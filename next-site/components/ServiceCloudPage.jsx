"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function ServiceCloudPage() {
  const { t } = useLang();

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> /{" "}
            <Link href="/#სერვისები">{t("nav.services")}</Link> / Cloud
          </p>
          <h1>{t("svc.cld.title")}</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "50ch" }}>
            Microsoft Azure, Microsoft 365, ჰიბრიდული მოდელი და სარეზერვო სტრატეგია.
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <h2>რას ვაკეთებთ</h2>
          <ul>
            <li>
              <strong>Microsoft Azure</strong> — რესურსების გეგმა, განთავსება,
              ღირებულების ოპტიმიზაცია.
            </li>
            <li>
              <strong>Microsoft 365</strong> — ლიცენზიები, უსაფრთხოება, ელფოსტა და
              თანამშრომლობა.
            </li>
            <li>
              <strong>Hybrid Cloud</strong> — ონპრემისი + Azure, ინტეგრაცია და
              რეპლიკაცია.
            </li>
            <li>
              <strong>Cloud Backup &amp; DR</strong> — სარეზერვო პოლიტიკები და
              აღდგენის ტესტები.
            </li>
            <li>
              <strong>Azure AD / SSO</strong> — ერთიანი ანგარიშები და წვდომის
              მართვა.
            </li>
          </ul>

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
