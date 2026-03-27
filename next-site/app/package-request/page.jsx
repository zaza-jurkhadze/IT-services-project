import Link from "next/link";
import { CONTACT_EMAIL, FORMSUBMIT_ACTION } from "@/constants";

const PLAN_LABELS = {
  basic: "ბეისიკი",
  standard: "სტანდარტი",
  premium: "პრემიუმი",
};

const PLAN_CONTENT = {
  basic: {
    lead: "სტაბილური IT მხარდაჭერის სწრაფი სტარტი მცირე ბიზნესისთვის.",
    includes: [
      "5-მდე end-point მოწყობილობის ტექნიკური მხარდაჭერა და ყოველდღიური გამართულობის კონტროლი.",
      "1 სერვერის ან ქსელური მოწყობილობის ადმინისტრირება დისტანციურად.",
      "Remote Help Desk არხით მომხმარებლების მიმდინარე ტექნიკური მოთხოვნების დამუშავება.",
      "თვეში ერთი სრული IT Audit ინფრასტრუქტურის მდგომარეობის შესაფასებლად.",
      "მომსახურება სამუშაო რეჟიმში 8/5 გრაფიკით.",
      "SLA რეაგირების დრო: High პრიორიტეტზე 4 საათი, Normal პრიორიტეტზე 8 საათი.",
    ],
    solves: [
      "თანამშრომლების დროის დაკარგვა მცირე ტექნიკურ ხარვეზებზე.",
      "IT საკითხების არაორგანიზებული მართვა და პასუხისმგებლის არქონა.",
      "შეფერხებისას დაგვიანებული რეაგირება და პროცესების გაჩერება.",
    ],
    benefits: [
      "ერთიანი მხარდაჭერის არხი და სწრაფი კომუნიკაცია.",
      "უფრო სტაბილური ყოველდღიური ოპერაციები მინიმალური ჩარევით.",
      "პროგნოზირებადი მომსახურება დაბალ ბიუჯეტში.",
    ],
  },
  standard: {
    lead: "ბალანსი სისწრაფეს, უსაფრთხოებასა და მასშტაბირებას შორის.",
    includes: [
      "20-მდე end-point მოწყობილობის სრული ტექნიკური მხარდაჭერა და მონიტორინგი.",
      "3-მდე სერვერის ან ქსელური მოწყობილობის ადმინისტრირება და ინციდენტების მართვა.",
      "Remote და On-site მომსახურება საჭიროების მიხედვით.",
      "VPN და Firewall კონფიგურაციის განახლება/ოპტიმიზაცია უსაფრთხო წვდომისთვის.",
      "ყოველთვიური IT Audit და შესრულებული სამუშაოს დეტალური ანგარიში.",
      "მომსახურება 16/5 გრაფიკით გაფართოებული ხელმისაწვდომობით.",
      "პრიორიტეტული დამუშავების რიგი კრიტიკული მოთხოვნებისთვის.",
      "SLA რეაგირების დრო: Critical 1 საათი, High 2 საათი.",
    ],
    solves: [
      "ქსელური ინციდენტების გახშირება და VPN/წვდომის პრობლემები.",
      "ზრდის ეტაპზე ინფრასტრუქტურის არასტაბილური მუშაობა.",
      "უსაფრთხოების საბაზისო კონტროლების არასაკმარისი დონე.",
    ],
    benefits: [
      "მეტი უწყვეტობა, ნაკლები downtime და სწრაფი აღდგენა.",
      "უსაფრთხოების უკეთესი კონტროლი ბიზნესის შეფერხების გარეშე.",
      "მასშტაბირებისთვის მზად IT გარემო საშუალო ბიზნესისთვის.",
    ],
  },
  premium: {
    lead: "სრული პასუხისმგებლობის აღება თქვენი IT ეკოსისტემისთვის 24/7 რეჟიმში.",
    includes: [
      "end-point მოწყობილობებისა და სერვერების შეუზღუდავი დაფარვა.",
      "24/7 Remote და On-site ტექნიკური მომსახურება უწყვეტი მხარდაჭერისთვის.",
      "Dedicated IT ინჟინერი, რომელიც მუდმივად კურირებს თქვენს ინფრასტრუქტურას.",
      "VPN/Firewall უსაფრთხოების მართვა და Cloud ინფრასტრუქტურის ოპერაციული ზედამხედველობა.",
      "ყოველთვიური IT Audit, ანგარიშგება და მაღალი პრიორიტეტით ინციდენტების დამუშავება.",
      "SLA რეაგირების დრო: Critical ინციდენტზე 30 წუთი.",
    ],
    solves: [
      "კრიტიკული შეფერხებები, რომლებიც პირდაპირ გავლენას ახდენს შემოსავალზე.",
      "კომპლექსური IT გარემოს კოორდინაციის სირთულე მრავალ სისტემას შორის.",
      "მაღალი დატვირთვის პირობებში უსაფრთხოებისა და უწყვეტობის მოთხოვნები.",
    ],
    benefits: [
      "მაქსიმალური ბიზნეს-უწყვეტობა და სწრაფი რეაგირება კრიტიკულ რისკებზე.",
      "სტრატეგიული IT პარტნიორობა და არა მხოლოდ ტექნიკური მხარდაჭერა.",
      "უმაღლესი სანდოობა, კონტროლი და ზრდისთვის მზად არქიტექტურა.",
    ],
  },
};

export const metadata = {
  title: "პაკეტის არჩევა",
  description: "არჩეული პაკეტის დადასტურება და მოთხოვნის გაგზავნა",
};

export default function PackageRequestPage({ searchParams }) {
  const rawPlan = typeof searchParams?.plan === "string" ? searchParams.plan : "basic";
  const planKey = Object.hasOwn(PLAN_LABELS, rawPlan) ? rawPlan : "basic";
  const planLabel = PLAN_LABELS[planKey];
  const planContent = PLAN_CONTENT[planKey];
  const sentOk = searchParams?.sent === "1";

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">მთავარი</Link> / პაკეტის არჩევა
          </p>
          <h1>არჩეული პაკეტი: {planLabel}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-highlight" style={{ marginBottom: "1.25rem" }}>
            <h2 className="section-title" style={{ marginBottom: "0.35rem" }}>
              რატომ {planLabel}?
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "1.25rem" }}>
              {planContent.lead}
            </p>
            <h3>რას მოიცავს</h3>
            <ul className="price-list">
              {planContent.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>რა პრობლემებს აგვარებს</h3>
            <ul className="price-list">
              {planContent.solves.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>რა ბენეფიტს იღებთ</h3>
            <ul className="price-list" style={{ marginBottom: 0 }}>
              {planContent.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-wrap">
          <div className="contact-intro">
            <h2 className="section-title">დადასტურება და გაგზავნა</h2>
            <p className="section-subtitle">
              ფორმაში პაკეტი უკვე შევსებულია. შეავსეთ დანარჩენი ველები და გააგზავნეთ.
            </p>
            {sentOk ? (
              <p className="contact-success" role="status">
                მოთხოვნა წარმატებით გაიგზავნა.
              </p>
            ) : null}
          </div>

          <form className="contact-form" action={FORMSUBMIT_ACTION} method="POST">
            <input type="hidden" name="_subject" value={`TechSol Georgia — პაკეტის მოთხოვნა (${planLabel})`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <label>
              <span>არჩეული პაკეტი</span>
              <input type="text" name="selected_package" value={planLabel} readOnly />
            </label>
            <label>
              <span>სახელი</span>
              <input type="text" name="name" required placeholder="თქვენი სახელი" />
            </label>
            <label>
              <span>ელფოსტა</span>
              <input type="email" name="email" required placeholder="you@company.ge" />
            </label>
            <label>
              <span>კომპანია (არასავალდებულო)</span>
              <input type="text" name="company" placeholder="კომპანიის სახელი" />
            </label>
            <label>
              <span>შეტყობინება</span>
              <textarea
                name="message"
                rows={5}
                required
                defaultValue={`მაინტერესებს ${planLabel} პაკეტი.`}
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              დადასტურება და გაგზავნა
            </button>
            <p className="contact-email">
              <span>ან მოგვწერეთ პირდაპირ: </span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
