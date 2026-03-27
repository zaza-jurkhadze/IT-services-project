"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function ServiceNetworkPage() {
  const { t } = useLang();

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">{t("nav.home")}</Link> /{" "}
            <Link href="/#სერვისები">{t("nav.services")}</Link> / ქსელური
            ინჟინერია
          </p>
          <h1>ქსელური ინჟინერია</h1>
          <p className="section-subtitle" style={{ margin: 0, maxWidth: "50ch" }}>
            სტაბილური და მასშტაბირებადი ქსელი — ოფისიდან ფილიალებამდე.
          </p>
        </div>
      </div>

      <section className="prose-section">
        <div className="container prose">
          <h2>რას ვაკეთებთ ამ მიმართულებით</h2>
          <p>
            ქსელური ინჟინერია მოიცავს თქვენი ინფრასტრუქტურის პროექტირებას,
            კონფიგურაციას, დიაგნოსტიკას და განვითარებას. მიზანია, რომ
            მონაცემები და სერვისები იყოს სწრაფი, ხელმისაწვდომი და გამჭვირვალე
            მონიტორინგისთვის გასაგები.
          </p>

          <h2>ძირითადი სამუშაოები</h2>
          <ul>
            <li>
              <strong>LAN / შიდა ქსელი</strong> — სვიჩები, VLAN-ები, ლინკების
              აგრეგაცია, პორტებისა და ტრაფიკის ოპტიმიზაცია.
            </li>
            <li>
              <strong>Wi‑Fi</strong> — კავშირის გეგმა, წერტილების განთავსება,
              SSID და უსაფრთხოების პოლიტიკები, ინტერფერენციის შემცირება.
            </li>
            <li>
              <strong>ინტერნეტი და მარშრუტიზაცია</strong> — როუტერები, NAT,
              პორტების გადამისამართება, ორმაგი ხაზი (შეთანხმებით).
            </li>
            <li>
              <strong>VPN</strong> — დისტანციური წვდომა ფილიალებსა და მობილურ
              მომხმარებლებზე, უსაფრთხო ტუნელები.
            </li>
            <li>
              <strong>დიაგნოსტიკა</strong> — ჩაჭედილი სიჩქარე, კავშირის ვარდნა,
              DNS/DHCP პრობლემები, ლოგებისა და მონიტორინგის ანალიზი.
            </li>
          </ul>

          <h2>ვინ სარგებლობს</h2>
          <p>
            ოფისები, კლინიკები, საცალო ქსელები, პატარა და საშუალო საიურიდიო
            პირები, ასევე კერძო სახლები სადაც საჭიროა საიმედო ქსელი და
            დისტანციური მხარდაჭერა.
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
