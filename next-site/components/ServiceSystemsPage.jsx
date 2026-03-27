"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function ServiceSystemsPage() {
  const { t } = useLang();

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> /{" "}
            <Link href="/#სერვისები">{t("nav.services")}</Link> / სისტემური
            ადმინისტრირება
          </p>
          <h1>სისტემური ადმინისტრირება</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "50ch" }}>
            სერვერები და სამუშაო ადგილები — სტაბილური, განახლებული და
            აღდგენადი.
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <h2>რას ვაკეთებთ ამ მიმართულებით</h2>
          <p>
            სისტემური ადმინისტრირება უზრუნველყოფს თქვენი IT გარემოს ყოველდღიურ
            მუშაობას: სერვერებისა და სამუშაო სადგურების კონფიგურაცია,
            მომხმარებლების მხარდაჭერა, განახლებები და ინციდენტებზე
            რეაგირება — დისტანციურად ან ადგილზე.
          </p>

          <h2>ძირითადი სამუშაოები</h2>
          <ul>
            <li>
              <strong>სერვერები</strong> — Windows Server / Linux სერვისების
              დაყენება, როლები, განახლებები, რესურსების მონიტორინგი.
            </li>
            <li>
              <strong>დომენი და იდენტობა</strong> — Active Directory
              (საჭიროებისამებრ), მომხმარებლები, ჯგუფები, პოლიტიკები.
            </li>
            <li>
              <strong>სამუშაო სადგურები</strong> — ოპერაციული სისტემა,
              დრაივერები, ოფისის პროგრამები, პრინტერები და პერიფერია.
            </li>
            <li>
              <strong>სარეზერვო კოპიები</strong> — გეგმის შედგენა და
              კონფიგურაცია, აღდგენის ტესტირება (შეთანხმებით).
            </li>
            <li>
              <strong>ვირტუალიზაცია</strong> — Hyper-V / VMware / Proxmox
              მიმართულებით ძირითადი ამოცანები, სადაც ეს შეესაბამება
              ინფრასტრუქტურას.
            </li>
            <li>
              <strong>ოპერაციული მხარდაჭერა</strong> — ინციდენტები, ტიკეტინგი
              ელფოსტით, პრიორიტეტები SLA-ის მიხედვით.
            </li>
          </ul>

          <h2>რატომ ეს მნიშვნელოვანია</h2>
          <p>
            გაჩერებული სერვერი ან დაკარგული მონაცემები პირდაპირ ზრდის
            დანახარჯებს და აფერხებს ბიზნეს პროცესებს. სისტემური
            ადმინისტრირება ამცირებს გაუთვალისწინებელ შვებულებებს და ხსნის
            თქვენს გუნდს ტექნიკური ტვირთისგან.
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
