"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function ServiceSupportPage() {
  const { t } = useLang();

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> /{" "}
            <Link href="/#სერვისები">{t("nav.services")}</Link> /{" "}
            {t("svc.sup.title")}
          </p>
          <h1>{t("svc.sup.title")}</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "50ch" }}>
            Help Desk დისტანციურად და ადგილზე — SLA-ს მიხედვით.
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <h2>რას ვაკეთებთ</h2>
          <ul>
            <li>
              <strong>Help Desk</strong> — დისტანციური და ადგილზე მხარდაჭერა,
              ინციდენტების რიგი.
            </li>
            <li>
              <strong>აპარატურა</strong> — მონტაჟი, გამოცვლა, საგარანტიო პერიოდის
              კოორდინაცია.
            </li>
            <li>
              <strong>Structured Cabling</strong> — პაჩპანელები, ეტიკეტირება,
              დოკუმენტაცია.
            </li>
            <li>
              <strong>UPS და ელექტრო უსაფრთხოება</strong> — შემოწმება და
              შეთანხმებული მომსახურება.
            </li>
            <li>
              <strong>SLA</strong> — პასუხის დროები და ანგარიშგება ხელშეკრულების
              მიხედვით.
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
