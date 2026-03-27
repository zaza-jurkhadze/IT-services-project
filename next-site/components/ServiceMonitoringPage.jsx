"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function ServiceMonitoringPage() {
  const { t } = useLang();

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> /{" "}
            <Link href="/#სერვისები">{t("nav.services")}</Link> /{" "}
            {t("svc.mon.title")}
          </p>
          <h1>{t("svc.mon.title")}</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "50ch" }}>
            უწყვეტი მონიტორინგი, ალარმები და პერიოდული IT აუდიტი.
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <h2>რას ვაკეთებთ</h2>
          <ul>
            <li>
              <strong>24/7 მონიტორინგი</strong> — ხელმისაწვდომობა, რესურსები,
              კრიტიკული სერვისები.
            </li>
            <li>
              <strong>ხელსაწყოები</strong> — Zabbix, PRTG, Nagios (შეთანხმებით).
            </li>
            <li>
              <strong>SLA ანგარიშგება</strong> — მეტრიკები და ტრენდები.
            </li>
            <li>
              <strong>პროაქტიული IT Audit</strong> — ხარვეზების აღმოჩენა სანამ
              ინციდენტი მოხდება.
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
