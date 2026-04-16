import type { LocalizedPost } from "../types";

export const post: LocalizedPost = {
  meta: {
    slug: "ein-nomer-kakvo-e-kak-da-go-poluchite",
    date: "2026-04-14",
    author: "GetUSA LLC",
    image: "/og.webp",
    readingTime: 14,
    relatedSlugs: ["kak-da-registriram-llc-v-amerika-ot-bulgaria", "stripe-ot-bulgaria-s-amerikansko-llc", "siddo-spogodba-bulgaria-sasht-danaci"],
  },
  translations: {
    bg: {
      title: "EIN номер — Какво е и как да го получите от България (2026)",
      description: "Пълен гайд за EIN за българи. Какво е, защо ви трябва, как да кандидатствате и колко време отнема.",
      category: "Регистрация",
      tags: ["EIN", "IRS", "данъчен номер", "LLC", "Form SS-4"],
      tldr: "EIN е 9-цифрен данъчен номер от IRS, необходим за банкова сметка, Stripe и декларации. Чуждестранни лица кандидатстват с Form SS-4 по факс. Отнема 3-4 седмици. Безплатно.",
      content: [
        { id: "kakvo-e-ein", heading: "Какво е EIN и защо ви трябва", body: `<p>EIN (Employer Identification Number) е <strong>9-цифрен номер</strong> от IRS, идентифициращ вашето LLC. Формат: XX-XXXXXXX. Еквивалент на ЕИК/БУЛСТАТ.</p><p><strong>За какво:</strong></p><ul><li><strong>Банкова сметка:</strong> Mercury, Relay изискват EIN</li><li><strong><a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe</a>:</strong> Задължителен</li><li><strong>Данъчна декларация:</strong> Всички IRS форми изискват EIN</li><li><strong>Клиенти:</strong> Американски клиенти искат W-9 с EIN</li></ul><p><strong>Важно:</strong> EIN не е SSN. SSN е за физически лица, EIN за бизнеси. Не ви трябва SSN за EIN.</p>` },
        { id: "koga-da-kandidatstvate", heading: "Кога да кандидатствате — Правилният момент", body: `<p>Кандидатствайте <strong>веднага след регистрацията на LLC</strong>. Процесът отнема 3-4 седмици — всеки ден забавяне = по-късен бизнес старт.</p><p><strong>Трябва да имате:</strong> Одобрени Articles of Organization, име и адрес на LLC, паспорт.</p><p><strong>Оптимален график:</strong> Ден 1: Articles → Ден 3-5: Одобрение → Ден 5: EIN заявка → Седмица 4-5: EIN получен → Седмица 5: Mercury заявка.</p>` },
        { id: "kak-da-kandidatstvate", heading: "3 метода за кандидатстване от България", body: `<p><strong>1. По факс (препоръчителен) — 3-4 седмици:</strong> Form SS-4 по факс до IRS: (855) 215-1627. Ползвайте eFax ако нямате факс.</p><p><strong>2. По поща — 6-8 седмици:</strong> До IRS, Cincinnati, OH 45999. По-бавно, не препоръчваме.</p><p><strong>3. По телефон — веднага, но сложно:</strong> (267) 941-1099, Пон-Пет 6:00-23:00 EST. 1-2 часа чакане, езикова бариера.</p><p><strong>Онлайн НЕ работи</strong> за чуждестранни лица без SSN.</p><p>Ако искате да спестите усилието — <a href="/contact">нашият екип</a> може да подаде заявката.</p>` },
        { id: "form-ss4", heading: "Как да попълните Form SS-4 правилно", body: `<p><strong>Line 1:</strong> Точното име на LLC (с "LLC")</p><p><strong>Line 3:</strong> Вашето пълно име</p><p><strong>Lines 4a-4b:</strong> Бизнес адрес в САЩ</p><p><strong>Line 7a:</strong> Вашето име</p><p><strong>Line 7b:</strong> Напишете "Foreign" + приложете паспорт</p><p><strong>Line 9a:</strong> "Limited liability company", 1 member</p><p><strong>Line 10:</strong> "Started new business"</p><p><strong>Line 14:</strong> Опишете дейността</p><p><strong>Подпис:</strong> Физически подпис, дата, телефон.</p>` },
        { id: "sled-poluchavane", heading: "След получаване на EIN — Следващи стъпки", body: `<p><strong>1. Запазете CP 575 Notice</strong> — банките го искат.</p><p><strong>2. Mercury банкова сметка</strong> — с LLC документи + EIN.</p><p><strong>3. <a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe активиране</a></strong> — с LLC + EIN + Mercury.</p><p><strong>4. Подгответе се за <a href="/blog/siddo-spogodba-bulgaria-sasht-danaci">данъчна декларация</a></strong> — EIN задължава за годишна декларация.</p>` },
        { id: "ein-vs-itin", heading: "EIN срещу ITIN — Каква е разликата", body: `<p><strong>EIN:</strong> За бизнеси. XX-XXXXXXX. Безплатен. За банка, Stripe, декларации на LLC.</p><p><strong>ITIN:</strong> За физически лица без SSN. 9XX-XX-XXXX. За лична данъчна декларация, кредитни карти.</p><p><strong>Трябва ли ви ITIN?</strong> За повечето — <strong>не</strong>. EIN е достатъчен за LLC. ITIN трябва само за лична кредитна карта или лични US доходи извън LLC.</p>` },
        { id: "chesti-problemi-ein", heading: "Чести проблеми и решения", body: `<p><strong>1. IRS не отговаря:</strong> Изчакайте 4 седмици. При 5+ — изпратете отново.</p><p><strong>2. Грешка във формуляра:</strong> IRS връща с обяснение. Най-често: грешно име, липсващ подпис.</p><p><strong>3. Банката не приема EIN:</strong> Поискайте CP 575 Notice от IRS.</p><p><strong>4. Стар EIN от предишно LLC:</strong> Всяко LLC има собствен EIN. Не ползвайте стар.</p><p><strong>5. Загубен EIN:</strong> Обадете се на IRS: (267) 941-1099.</p>` },
      ],
      faq: [
        { question: "Колко време отнема?", answer: "Факс: 3-4 седмици. Поща: 6-8. Телефон: веднага (но 1-2ч чакане). Онлайн не работи без SSN." },
        { question: "Безплатно ли е?", answer: "Да. IRS не таксува. Form SS-4 е безплатен." },
        { question: "Мога ли онлайн?", answer: "Не без SSN/ITIN. Ползвайте факс или телефон." },
        { question: "Трябва ли EIN за банка?", answer: "Да. Всички US банки изискват EIN за бизнес сметка." },
        { question: "Мога ли да имам повече от един EIN?", answer: "Всяко LLC има собствен EIN. Две LLC = два EIN-а." },
      ],
    },
    en: {
      title: "EIN — What It Is and How to Get One from Abroad (2026)",
      description: "Complete EIN guide for foreign founders. What it is, why you need it, how to apply and how long it takes.",
      category: "Registration",
      tags: ["EIN", "IRS", "tax ID", "LLC", "Form SS-4"],
      tldr: "An EIN is a 9-digit IRS tax ID required for a bank account, Stripe and tax filings. Foreign persons apply with Form SS-4 by fax. Takes 3-4 weeks. Free.",
      content: [
        { id: "kakvo-e-ein", heading: "What an EIN is and why you need it", body: `<p>An EIN (Employer Identification Number) is a <strong>9-digit number</strong> from the IRS that identifies your LLC. Format: XX-XXXXXXX. The US equivalent of a business tax ID.</p><p><strong>What it's for:</strong></p><ul><li><strong>Bank account:</strong> Mercury, Relay require an EIN</li><li><strong><a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe</a>:</strong> Mandatory</li><li><strong>Tax return:</strong> All IRS forms require an EIN</li><li><strong>Clients:</strong> US clients ask for a W-9 with the EIN</li></ul><p><strong>Important:</strong> EIN is not SSN. SSN is for individuals, EIN is for businesses. You do not need an SSN to get an EIN.</p>` },
        { id: "koga-da-kandidatstvate", heading: "When to apply — the right moment", body: `<p>Apply <strong>immediately after LLC registration</strong>. The process takes 3-4 weeks — every day of delay = a later business launch.</p><p><strong>You need:</strong> Approved Articles of Organization, LLC name and address, passport.</p><p><strong>Optimal schedule:</strong> Day 1: Articles → Day 3-5: Approval → Day 5: EIN application → Week 4-5: EIN received → Week 5: Mercury application.</p>` },
        { id: "kak-da-kandidatstvate", heading: "3 methods of applying from abroad", body: `<p><strong>1. By fax (recommended) — 3-4 weeks:</strong> Form SS-4 by fax to IRS: (855) 215-1627. Use eFax if you don't have a fax machine.</p><p><strong>2. By mail — 6-8 weeks:</strong> To IRS, Cincinnati, OH 45999. Slower, not recommended.</p><p><strong>3. By phone — instant but tricky:</strong> (267) 941-1099, Mon-Fri 6:00-23:00 EST. 1-2 hour wait, language barrier.</p><p><strong>Online does NOT work</strong> for foreign persons without an SSN.</p><p>If you want to skip the hassle — <a href="/contact">our team</a> can file the application.</p>` },
        { id: "form-ss4", heading: "How to fill in Form SS-4 correctly", body: `<p><strong>Line 1:</strong> The exact LLC name (with "LLC")</p><p><strong>Line 3:</strong> Your full name</p><p><strong>Lines 4a-4b:</strong> US business address</p><p><strong>Line 7a:</strong> Your name</p><p><strong>Line 7b:</strong> Write "Foreign" + attach passport</p><p><strong>Line 9a:</strong> "Limited liability company", 1 member</p><p><strong>Line 10:</strong> "Started new business"</p><p><strong>Line 14:</strong> Describe the activity</p><p><strong>Signature:</strong> Wet signature, date, phone.</p>` },
        { id: "sled-poluchavane", heading: "After receiving the EIN — next steps", body: `<p><strong>1. Save the CP 575 Notice</strong> — banks ask for it.</p><p><strong>2. Mercury bank account</strong> — with LLC documents + EIN.</p><p><strong>3. <a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe activation</a></strong> — with LLC + EIN + Mercury.</p><p><strong>4. Prepare for the <a href="/blog/siddo-spogodba-bulgaria-sasht-danaci">tax return</a></strong> — an EIN obliges you to file annually.</p>` },
        { id: "ein-vs-itin", heading: "EIN vs ITIN — what's the difference", body: `<p><strong>EIN:</strong> For businesses. XX-XXXXXXX. Free. For bank, Stripe, LLC returns.</p><p><strong>ITIN:</strong> For individuals without an SSN. 9XX-XX-XXXX. For personal tax returns, credit cards.</p><p><strong>Do you need an ITIN?</strong> For most — <strong>no</strong>. The EIN is enough for the LLC. ITIN is only needed for a personal credit card or personal US income outside the LLC.</p>` },
        { id: "chesti-problemi-ein", heading: "Common problems and solutions", body: `<p><strong>1. IRS doesn't respond:</strong> Wait 4 weeks. After 5+ — resend.</p><p><strong>2. Form error:</strong> IRS returns it with an explanation. Most often: wrong name, missing signature.</p><p><strong>3. Bank doesn't accept the EIN:</strong> Request the CP 575 Notice from IRS.</p><p><strong>4. Old EIN from a previous LLC:</strong> Each LLC has its own EIN. Don't reuse an old one.</p><p><strong>5. Lost EIN:</strong> Call IRS: (267) 941-1099.</p>` },
      ],
      faq: [
        { question: "How long does it take?", answer: "Fax: 3-4 weeks. Mail: 6-8. Phone: instant (but 1-2h wait). Online doesn't work without an SSN." },
        { question: "Is it free?", answer: "Yes. IRS doesn't charge. Form SS-4 is free." },
        { question: "Can I apply online?", answer: "Not without SSN/ITIN. Use fax or phone." },
        { question: "Do I need an EIN for a bank?", answer: "Yes. All US banks require an EIN for a business account." },
        { question: "Can I have more than one EIN?", answer: "Each LLC has its own EIN. Two LLCs = two EINs." },
      ],
    },
  },
};
