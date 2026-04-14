export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  image?: string;
  category: string;
  tags: string[];
  readingTime: number;
  tldr: string;
  content: Section[];
  faq?: FAQ[];
  relatedSlugs?: string[];
}

export interface Section {
  id: string;
  heading: string;
  body: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

const posts: BlogPost[] = [
  {
    slug: "kak-da-registriram-llc-v-amerika-ot-bulgaria",
    title: "Как да регистрирам LLC в Америка от България — Пълен гайд 2026",
    description: "Стъпка по стъпка процес за регистрация на американска LLC от България. Кой щат, документи, цена, време.",
    date: "2026-04-14",
    author: "GetUSA LLC",
    image: "/og.webp",
    category: "Регистрация",
    tags: ["LLC", "регистрация", "САЩ", "България", "Wyoming"],
    readingTime: 15,
    tldr: "За да регистрирате LLC от България, ви трябват: избор на щат (Wyoming е оптимален), registered agent, Articles of Organization, Operating Agreement и EIN номер от IRS. Процесът отнема 3-5 работни дни и е 100% дистанционен.",
    relatedSlugs: ["wyoming-vs-delaware-koj-shtat-za-bulgari", "ein-nomer-kakvo-e-kak-da-go-poluchite", "stripe-ot-bulgaria-s-amerikansko-llc"],
    content: [{
      id: "kakvo-e-llc",
      heading: "Какво е LLC и защо ви трябва",
      body: `<p>LLC (Limited Liability Company) е най-популярната бизнес структура в САЩ за чуждестранни предприемачи. Тя съчетава <strong>ограничена отговорност</strong> с <strong>гъвкаво данъчно облагане</strong>.</p><p>За разлика от българските ЕООД и ООД, американското LLC предлага значително по-голяма гъвкавост в управлението. Няма изискване за минимален капитал, а административната тежест е минимална.</p><p>За българските предприемачи LLC дава достъп до:</p><ul><li><strong>Американски банкови сметки</strong> — Mercury, Relay, Wise Business</li><li><strong>Платежни процесори</strong> — <a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe</a>, PayPal Business за приемане на картови плащания</li><li><strong>Глобален пазар</strong> — SaaS, e-commerce, дигитални услуги, фрийланс</li><li><strong>Данъчни предимства</strong> — чрез <a href="/blog/siddo-spogodba-bulgaria-sasht-danaci">СИДДО спогодбата</a> избягвате двойно облагане</li><li><strong>Кредибилност</strong> — американска фирма вдъхва доверие на международни клиенти</li></ul>`
    }, {
      id: "llc-vs-corporation",
      heading: "LLC срещу Corporation — Коя структура е по-подходяща",
      body: `<p>За 95% от българските предприемачи LLC е правилният избор:</p><ul><li>Няма двойно облагане — печалбата минава директно към собственика (pass-through)</li><li>Минимална бюрокрация — без борд на директорите и годишни събрания</li><li>Гъвкаво управление чрез Operating Agreement</li><li>По-ниски разходи за поддръжка</li></ul><p>Corporation е подходяща когато планирате VC инвестиции, IPO или stock options за служители. За онлайн бизнес, фрийланс или e-commerce — LLC е по-простата и по-подходяща опция.</p>`
    }, {
      id: "koj-shtat-da-izbera",
      heading: "Кой щат да изберете — Wyoming, Delaware или друг",
      body: `<p>Подробно сравнение: <a href="/blog/wyoming-vs-delaware-koj-shtat-za-bulgari">Wyoming vs Delaware гайд</a>. Накратко:</p><p><strong>Wyoming</strong> е оптималният избор за 90% от българите:</p><ul><li>Нулев щатски данък върху доходите</li><li>Най-ниски годишни такси — $60 Annual Report</li><li>Силна защита на личните данни</li><li>Бърза регистрация — 1-2 работни дни</li></ul><p><strong>Delaware</strong> е подходящ за стартъпи с VC финансиране и по-сложна капиталова структура. Годишният Franchise Tax е $300.</p><p><strong>New Mexico</strong> — нулев Annual Report, но по-малко разпознаваем от банките.</p><p>Ако не сте сигурни, <a href="/contact">свържете се с нас</a> за безплатна консултация.</p>`
    }, {
      id: "neobhodimi-dokumenti",
      heading: "Необходими документи за регистрация на LLC",
      body: `<p>За регистрация на LLC от България ви трябват:</p><p><strong>1. Articles of Organization</strong> — основният документ до Secretary of State. Съдържа името на LLC, адрес на registered agent, цел на бизнеса.</p><p><strong>2. Registered Agent</strong> — лице с физически адрес в щата, което приема официална кореспонденция. Цена: $50-150/год.</p><p><strong>3. Operating Agreement</strong> — вътрешен документ за управление на LLC. Критично важен за банки и правна защита.</p><p><strong>4. EIN</strong> — данъчен номер от IRS. Подробности: <a href="/blog/ein-nomer-kakvo-e-kak-da-go-poluchite">Как да получите EIN</a>.</p><p><strong>5. Паспорт</strong> — SSN не е необходим. Чуждестранните лица кандидатстват с паспорт.</p>`
    }, {
      id: "stypki-za-registracia",
      heading: "7 стъпки за регистрация на LLC от България",
      body: `<p><strong>Стъпка 1: Изберете име</strong> — уникално в щата, съдържащо "LLC". Проверете наличността в базата на Secretary of State.</p><p><strong>Стъпка 2: Изберете щат</strong> — <a href="/blog/wyoming-vs-delaware-koj-shtat-za-bulgari">Wyoming е оптималният избор</a> за повечето.</p><p><strong>Стъпка 3: Наемете Registered Agent</strong> — задължителен с физически адрес в щата.</p><p><strong>Стъпка 4: Подайте Articles of Organization</strong> — онлайн или по поща. Wyoming: $100, 1-2 дни.</p><p><strong>Стъпка 5: Изгответе Operating Agreement</strong> — задължителен за банки и данъчни цели.</p><p><strong>Стъпка 6: Получете EIN</strong> — <a href="/blog/ein-nomer-kakvo-e-kak-da-go-poluchite">Form SS-4 по факс</a>, 3-4 седмици.</p><p><strong>Стъпка 7: Банкова сметка и Stripe</strong> — Mercury + <a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe</a> за приемане на плащания.</p>`
    }, {
      id: "kolko-struva",
      heading: "Колко струва — Пълна разбивка",
      body: `<p><strong>Еднократни разходи (Wyoming):</strong></p><ul><li>Articles of Organization: <strong>$100</strong></li><li>Registered Agent (първа година): <strong>$0-50</strong></li><li>Operating Agreement: <strong>$0-200</strong></li><li>Бизнес адрес: <strong>$50-200/год.</strong></li><li>EIN заявка: <strong>безплатна</strong></li></ul><p><strong>Годишни разходи:</strong></p><ul><li>Annual Report (Wyoming): <strong>$60</strong></li><li>Registered Agent: <strong>$50-150</strong></li><li>Бизнес адрес: <strong>$50-200</strong></li><li>Счетоводство и данъчна декларация: <strong>$300-800</strong></li></ul><p><strong>Общо първа година:</strong> $300-600 без професионални услуги. <a href="/contact">Поискайте индивидуална оферта</a>.</p>`
    }, {
      id: "kolko-vreme",
      heading: "Колко време отнема целият процес",
      body: `<ul><li><strong>Ден 1-2:</strong> Подготовка и подаване на документи</li><li><strong>Ден 3-5:</strong> Одобрение от Secretary of State</li><li><strong>Ден 5-7:</strong> Operating Agreement + EIN заявка</li><li><strong>Седмица 2-4:</strong> Получаване на EIN (3-4 седмици)</li><li><strong>Седмица 4-5:</strong> Mercury банкова сметка (3-5 дни)</li><li><strong>Седмица 5-6:</strong> Stripe активиране (1-3 дни)</li></ul><p><strong>Общо от старт до първо плащане: 4-6 седмици.</strong> С нашия екип повечето клиенти получават пълен пакет за <strong>под 4 седмици</strong>.</p>`
    }, {
      id: "bankova-smetka-i-stripe",
      heading: "Банкова сметка и Stripe след регистрацията",
      body: `<p>Подробен гайд: <a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Как да отворя Stripe от България</a>.</p><p><strong>Mercury (препоръчително):</strong> Онлайн банка, приема чуждестранни LLC собственици, безплатна сметка, дебитна карта, интеграция със Stripe. Отваряне: 3-5 дни.</p><p><strong>Stripe:</strong> С LLC + EIN + Mercury можете да приемате картови плащания от целия свят. Активиране: 1-3 дни.</p><p><strong>Допълнителни:</strong> Relay (алтернатива на Mercury), Wise Business (международни преводи), PayPal Business.</p>`
    }, {
      id: "danaci-i-siddo",
      heading: "Данъци — СИДДО и облагане за българи",
      body: `<p>Подробен анализ: <a href="/blog/siddo-spogodba-bulgaria-sasht-danaci">СИДДО спогодба България-САЩ</a>.</p><p><strong>Дължа ли данъци в САЩ?</strong> В повечето случаи <strong>не</strong>. Ако нямате офис/служители в САЩ, LLC-то е pass-through entity и доходите се облагат само в България.</p><p><strong>Задължително:</strong> Годишна данъчна декларация (Form 5472 + 1120). Глоба за неподаване: <strong>$25,000</strong>.</p><p>Работете с <a href="/contact">лицензиран CPA</a> за правилно прилагане на СИДДО.</p>`
    }, {
      id: "chesti-greshki",
      heading: "10 грешки, които българите правят при LLC регистрация",
      body: `<p><strong>1.</strong> Избор на скъп щат без причина — <a href="/blog/wyoming-vs-delaware-koj-shtat-za-bulgari">Wyoming е по-добър</a> за повечето.</p><p><strong>2.</strong> Липса на Operating Agreement — банките го изискват.</p><p><strong>3.</strong> Неподаване на данъчна декларация — глоба $25,000.</p><p><strong>4.</strong> Използване на личен адрес — наемете бизнес адрес в САЩ.</p><p><strong>5.</strong> Работа с нелицензирани посредници.</p><p><strong>6.</strong> Игнориране на <a href="/blog/siddo-spogodba-bulgaria-sasht-danaci">СИДДО</a> — рискувате двойно облагане.</p><p><strong>7.</strong> Грешен EIN процес — онлайн заявката не работи за чуждестранни лица.</p><p><strong>8.</strong> Забавяне на банковата сметка.</p><p><strong>9.</strong> Смесване на лични и бизнес средства.</p><p><strong>10.</strong> Непроследяване на deadlines за Annual Report и декларации.</p>`
    }],
    faq: [{
      question: "Трябва ли да пътувам до САЩ?",
      answer: "Не. Целият процес е 100% дистанционен."
    }, {
      question: "Колко време отнема регистрацията?",
      answer: "LLC: 3-5 дни. EIN: 3-4 седмици. Банкова сметка: 3-5 дни. Общо: 4-6 седмици."
    }, {
      question: "Мога ли без SSN?",
      answer: "Да. Кандидатствате с паспорт."
    }, {
      question: "Кой щат е най-подходящ?",
      answer: "Wyoming — нулев данък, $60/год. такса, бърза регистрация."
    }, {
      question: "Какви годишни разходи?",
      answer: "Wyoming: $200-400 (Annual Report + Registered Agent + адрес). Счетоводство допълнително."
    }, {
      question: "LLC или Corporation?",
      answer: "LLC за 95% от случаите. Corporation само за VC инвеститори или IPO."
    }]
  },

  {
    slug: "wyoming-vs-delaware-koj-shtat-za-bulgari",
    title: "Wyoming vs Delaware — Кой щат е по-добър за LLC от България (2026)",
    description: "Подробно сравнение между Wyoming и Delaware за LLC регистрация. Такси, данъци, поверителност, банкови сметки — всичко за българи.",
    date: "2026-04-14",
    author: "GetUSA LLC",
    image: "/og.webp",
    category: "Регистрация",
    tags: ["Wyoming", "Delaware", "LLC", "сравнение", "щати"],
    readingTime: 18,
    tldr: "Wyoming е по-добрият избор за повечето българи: нулев щатски данък, $60 годишна такса (vs $300 в Delaware), силна поверителност. Delaware е само за VC инвестиции или IPO.",
    relatedSlugs: ["kak-da-registriram-llc-v-amerika-ot-bulgaria", "ein-nomer-kakvo-e-kak-da-go-poluchite", "siddo-spogodba-bulgaria-sasht-danaci"],
    content: [{
      id: "zashto-shtatat-e-vajen",
      heading: "Защо изборът на щат е толкова важен",
      body: `<p>В САЩ всеки щат има собствени закони за бизнес, данъци и годишни изисквания. Изборът влияе на:</p><ul><li><strong>Годишни разходи</strong> — разликата може да е стотици долари</li><li><strong>Данъчно облагане</strong> — някои щати налагат допълнителни данъци</li><li><strong>Поверителност</strong> — степента на публична информация за собствениците варира</li><li><strong>Банкиране</strong> — някои банки предпочитат определени щати</li><li><strong>Правна защита</strong> — различни нива на защита на активите</li></ul><p>Като чуждестранен собственик от България, <strong>не сте задължени да регистрирате LLC в щата, където правите бизнес</strong>. Можете да изберете най-благоприятния щат.</p>`
    }, {
      id: "sravnenie-taksi",
      heading: "Сравнение на таксите — Wyoming печели убедително",
      body: `<p><strong>Регистрация:</strong> Wyoming $100 vs Delaware $90</p><p><strong>Годишни разходи:</strong></p><ul><li>Wyoming: <strong>$60</strong> (Annual Report)</li><li>Delaware: <strong>$350</strong> ($300 Franchise Tax + $50 Annual Report)</li></ul><p><strong>Registered Agent:</strong> $50-150 в двата щата</p><p><strong>Общо за 5 години:</strong></p><ul><li>Wyoming: ~<strong>$600-900</strong></li><li>Delaware: ~<strong>$2,000-2,500</strong></li></ul><p>Разликата е <strong>$1,000-1,600 за 5 години</strong>. Ако нямате специфична причина за Delaware, спестете тези пари.</p>`
    }, {
      id: "danachno-oblagane",
      heading: "Данъчно облагане в двата щата",
      body: `<p><strong>Wyoming:</strong> Нулев щатски данък, нулев Franchise Tax. Единствен разход: $60 Annual Report.</p><p><strong>Delaware:</strong> $300/год. Franchise Tax (фиксирана). Ако правите бизнес В Delaware — допълнителен данък 2.2-6.6%.</p><p><strong>Важно:</strong> Федералните данъци са еднакви за всички щати. <a href="/blog/siddo-spogodba-bulgaria-sasht-danaci">СИДДО</a> важи навсякъде. Изборът на щат влияе само на щатското облагане.</p>`
    }, {
      id: "poveritelsnost",
      heading: "Поверителност и защита на данните",
      body: `<p><strong>Wyoming:</strong> Не изисква публично разкриване на собствениците. Силни charging order protection закони.</p><p><strong>Delaware:</strong> Също не разкрива собствениците публично. Court of Chancery за бързо разрешаване на спорове. По-слаба charging order protection.</p><p>И двата щата са добри за поверителност, но Wyoming има леко предимство за защита на активи.</p>`
    }, {
      id: "bankirane-i-stripe",
      heading: "Банкиране и Stripe — Има ли разлика",
      body: `<p><strong>Mercury</strong> приема LLC от Wyoming и Delaware еднакво. <strong><a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe</a></strong> също не прави разлика. Relay, Wise, PayPal — без предпочитания.</p><p>Единственото изключение е <strong>New Mexico</strong> — някои банки забавят заявки от NM LLC-та.</p>`
    }, {
      id: "koga-delaware",
      heading: "Кога все пак да изберете Delaware",
      body: `<p>Delaware има смисъл само за:</p><ul><li><strong>VC инвестиции</strong> — фондовете изискват Delaware C-Corp</li><li><strong>IPO</strong> — Delaware е стандартът за публични компании</li><li><strong>Множество собственици от различни държави</strong> — най-развита практика за спорове</li><li><strong>Финтех/blockchain</strong> — регулаторни предпочитания</li></ul><p>Ако нищо от горното не важи — Wyoming е правилният избор.</p>`
    }, {
      id: "drugi-shtati",
      heading: "Другите щати — NM, FL, TX, NV",
      body: `<p><strong>New Mexico:</strong> Нулев Annual Report, но по-малко разпознат от банки.</p><p><strong>Florida:</strong> $138.75 Annual Report, няма предимство пред Wyoming.</p><p><strong>Texas:</strong> Franchise Tax за приходи над $2.47M, излишно усложнение.</p><p><strong>Nevada:</strong> $500/год. — най-скъпото. Маркетингът е по-добър от реалността.</p><p><strong>Класация:</strong> Wyoming > Delaware > New Mexico > Florida > Texas > Nevada</p>`
    }, {
      id: "nashata-rekomendacia",
      heading: "Нашата препоръка — Wyoming за 90% от случаите",
      body: `<p>Wyoming е идеален за: фрийлансъри, e-commerce, SaaS, дигитални услуги, dropshipping, онлайн курсове, консултации.</p><p>Икономията от $300+ годишно, отличната поверителност и простотата правят Wyoming безспорния фаворит за стартиране на американски бизнес от България.</p><p>Готови ли сте? <a href="/blog/kak-da-registriram-llc-v-amerika-ot-bulgaria">Вижте пълния гайд за регистрация</a> или <a href="/contact">свържете се с нас</a> за индивидуална оферта.</p>`
    }],
    faq: [{
      question: "Мога ли да сменя щата по-късно?",
      answer: "Да, чрез domestication процес. Но е по-лесно да изберете правилния щат от началото."
    }, {
      question: "Трябва ли да живея в щата?",
      answer: "Не. Registered Agent-ът е достатъчен."
    }, {
      question: "Има ли щат по-добър за данъци?",
      answer: "Федералните данъци са еднакви. Wyoming няма щатски данък — най-евтиният избор."
    }, {
      question: "Delaware по-лесно ли е за банка?",
      answer: "Не. Mercury приема и двата щата еднакво."
    }, {
      question: "Защо толкова компании са в Delaware?",
      answer: "Заради Court of Chancery — важно за големи корпорации, не за малък бизнес."
    }]
  },

  {
    slug: "stripe-ot-bulgaria-s-amerikansko-llc",
    title: "Stripe от България — Как да приемате плащания с американско LLC (2026)",
    description: "Stripe не работи с български фирми. Научете как да активирате Stripe чрез американско LLC и да приемате картови плащания от целия свят.",
    date: "2026-04-14",
    author: "GetUSA LLC",
    image: "/og.webp",
    category: "Плащания",
    tags: ["Stripe", "плащания", "LLC", "България", "Mercury", "e-commerce"],
    readingTime: 16,
    tldr: "За Stripe от България ви трябва: американско LLC, EIN и Mercury банкова сметка. Активирането отнема 1-3 дни. Stripe поддържа 135+ валути и е ключов за SaaS, e-commerce и фрийланс.",
    relatedSlugs: ["kak-da-registriram-llc-v-amerika-ot-bulgaria", "wyoming-vs-delaware-koj-shtat-za-bulgari", "ein-nomer-kakvo-e-kak-da-go-poluchite"],
    content: [{
      id: "zashto-stripe",
      heading: "Защо Stripe е критично важен за българските предприемачи",
      body: `<p>Stripe е най-големият платежен процесор в света — обработва плащания за Shopify, Amazon, Google и милиони малки бизнеси.</p><ul><li><strong>Глобално покритие:</strong> 195+ държави, 135+ валути</li><li><strong>Ниски такси:</strong> 2.9% + $0.30 за US карти</li><li><strong>Абонаменти:</strong> Вграден Stripe Billing за SaaS</li><li><strong>Лесна интеграция:</strong> Shopify, WordPress, WooCommerce, custom</li></ul><p><strong>Проблемът:</strong> Stripe не поддържа български фирми. България не е в списъка на поддържаните държави. Единственият начин е чрез <a href="/blog/kak-da-registriram-llc-v-amerika-ot-bulgaria">американско LLC</a>.</p>`
    }, {
      id: "kakvo-vi-trqbva",
      heading: "Какво ви трябва — чеклист",
      body: `<p><strong>1. Американско LLC</strong> — регистрирано в <a href="/blog/wyoming-vs-delaware-koj-shtat-za-bulgari">Wyoming</a> или друг щат.</p><p><strong>2. <a href="/blog/ein-nomer-kakvo-e-kak-da-go-poluchite">EIN номер</a></strong> — данъчен номер от IRS.</p><p><strong>3. Mercury банкова сметка</strong> — за получаване на изплащания от Stripe.</p><p><strong>Допълнително:</strong> Паспорт, бизнес адрес в САЩ, описание на бизнеса, активен уебсайт.</p>`
    }, {
      id: "stypka-po-stypka-stripe",
      heading: "Стъпка по стъпка: Активиране на Stripe",
      body: `<p><strong>1.</strong> Регистрирайте се на stripe.com</p><p><strong>2.</strong> Попълнете бизнес информация: LLC тип, име, EIN, адрес, индустрия, уебсайт</p><p><strong>3.</strong> Лична информация: име, дата на раждане, паспортен номер (ако нямате SSN)</p><p><strong>4.</strong> Свържете Mercury: routing number + account number. Stripe прави тестов депозит.</p><p><strong>5.</strong> Верификация: 1-3 работни дни. Може да поискат Articles of Organization.</p><p><strong>6.</strong> Интеграция: Получавате API ключове за Stripe Checkout, Payment Links или Elements.</p>`
    }, {
      id: "stripe-vs-alternativite",
      heading: "Stripe vs PayPal vs Square vs Wise",
      body: `<p><strong>Stripe:</strong> 2.9% + $0.30. Най-добра интеграция, абонаменти, invoicing. Идеален за SaaS, e-commerce.</p><p><strong>PayPal Business:</strong> 3.49% + $0.49. По-скъп, но разпознаваем. Чести замразявания на акаунти.</p><p><strong>Square:</strong> 2.9% + $0.30. Добър за POS, но по-ограничен онлайн.</p><p><strong>Wise Business:</strong> Не е платежен процесор — за банкови преводи с ниски такси.</p><p><strong>Препоръка:</strong> Stripe основен + PayPal допълнителен + Wise за преводи.</p>`
    }, {
      id: "chesti-problemi",
      heading: "Чести проблеми при Stripe и как да ги избегнете",
      body: `<p><strong>1. "Бизнесът не може да бъде верифициран"</strong> — изчакайте 1-2 седмици след LLC регистрацията.</p><p><strong>2. Допълнителни документи</strong> — имайте Articles of Organization и Operating Agreement в PDF.</p><p><strong>3. Задържани средства</strong> — нормално за нови акаунти (2-3% за 90-120 дни).</p><p><strong>4. High-risk категория</strong> — проверете Stripe Restricted Businesses списъка.</p><p><strong>5. Несъответствие LLC/сайт</strong> — уверете се, че сайтът описва дейността на LLC-то.</p>`
    }, {
      id: "stripe-za-saas",
      heading: "Stripe за SaaS бизнеси от България",
      body: `<p><strong>Stripe Billing:</strong> Абонаменти, пробни периоди, ъпгрейди. Автоматично фактуриране.</p><p><strong>Stripe Checkout:</strong> Hosted платежна страница, 10-15% по-добра конверсия. Apple Pay, Google Pay.</p><p><strong>Customer Portal:</strong> Клиентите управляват абонаментите си без да пишете код.</p><p><strong>Stripe Tax:</strong> Автоматичен sales tax и ДДС.</p><p>За SaaS от България: <a href="/blog/kak-da-registriram-llc-v-amerika-ot-bulgaria">LLC в Wyoming</a> + <a href="/blog/ein-nomer-kakvo-e-kak-da-go-poluchite">EIN</a> + Mercury + Stripe. 4-6 седмици. <a href="/contact">Можем да помогнем</a>.</p>`
    }, {
      id: "stripe-za-ecommerce",
      heading: "Stripe за e-commerce и Shopify",
      body: `<p><strong>Shopify Payments</strong> е built on Stripe. С LLC активирате Shopify Payments и избягвате 2% допълнителна такса.</p><p><strong>WooCommerce + Stripe:</strong> Безплатен плъгин, лесна настройка.</p><p><strong>Amazon FBA:</strong> LLC позволява Professional Seller акаунт. Плащанията постъпват в Mercury.</p><p><strong>Дигитални продукти:</strong> Stripe + Gumroad или Lemon Squeezy за прости продажби.</p>`
    }, {
      id: "izplashtane-v-bulgaria",
      heading: "Как да изтеглите парите в България",
      body: `<p><strong>Клиент → Stripe → Mercury → Wise → Българска банка</strong></p><p><strong>Stripe → Mercury:</strong> Автоматични изплащания, T+2 дни.</p><p><strong>Mercury → Wise:</strong> ACH трансфер (безплатно). Wise има най-добър курс USD → BGN.</p><p><strong>Wise → Българска банка:</strong> 0.4-0.6% такса, директно в левове.</p><p><strong>Важно:</strong> Всички средства подлежат на деклариране по <a href="/blog/siddo-spogodba-bulgaria-sasht-danaci">СИДДО</a>. Консултирайте <a href="/contact">CPA</a> за данъчна стратегия.</p>`
    }],
    faq: [{
      question: "Може ли Stripe да ми откаже?",
      answer: "Да, за restricted категории. Уверете се, че имате активен сайт и бизнесът не е в забранения списък."
    }, {
      question: "Колко е първото изплащане?",
      answer: "7 дни за нови акаунти, после 2-дневен цикъл. Instant Payouts: +1% такса."
    }, {
      question: "Мога ли без уебсайт?",
      answer: "Да, с Payment Links. Но сайт помага при верификация."
    }, {
      question: "Месечни такси?",
      answer: "Нула. Само процент от транзакции: 2.9% + $0.30 (US), 3.9% + $0.30 (международни)."
    }]
  },

  {
    slug: "siddo-spogodba-bulgaria-sasht-danaci",
    title: "СИДДО спогодба България-САЩ — Как да не плащате данъци два пъти (2026)",
    description: "Пълен гайд за СИДДО спогодбата. Как да избегнете двойно облагане, какви декларации трябва да подавате и кога дължите данъци.",
    date: "2026-04-14",
    author: "GetUSA LLC",
    image: "/og.webp",
    category: "Данъци",
    tags: ["СИДДО", "данъци", "САЩ", "България", "LLC", "IRS"],
    readingTime: 20,
    tldr: "СИДДО предотвратява двойно облагане. Без офис/служители в САЩ, доходите от LLC се облагат само в България. Но задължително подавайте годишна декларация (Form 5472 + 1120) — глоба за неподаване: $25,000.",
    relatedSlugs: ["kak-da-registriram-llc-v-amerika-ot-bulgaria", "ein-nomer-kakvo-e-kak-da-go-poluchite", "stripe-ot-bulgaria-s-amerikansko-llc"],
    content: [{
      id: "kakvo-e-siddo",
      heading: "Какво е СИДДО и защо е критично важно",
      body: `<p>СИДДО е двустранно споразумение между България и САЩ, в сила от 15 декември 2008 г.</p><p><strong>Без СИДДО:</strong> И двете държави облагат доходите ви → плащате данъци два пъти.</p><p><strong>Със СИДДО:</strong> Определя коя държава облага какъв доход. За повечето българи с LLC → облагане <strong>само в България</strong>.</p><p>Ключови членове:</p><ul><li><strong>Член 7:</strong> Печалби от стопанска дейност — облагат се само в държавата на предприятието, освен ако има PE</li><li><strong>Член 5:</strong> Определя "място на стопанска дейност" (PE) — офис, клон, склад</li><li><strong>Член 14:</strong> Доходи от свободни професии</li></ul>`
    }, {
      id: "koga-ne-dulzite",
      heading: "Кога НЕ дължите данъци в САЩ",
      body: `<p>Не дължите федерален данък ако:</p><p><strong>1. Нямате PE в САЩ:</strong> нито офис, нито служители, нито склад. Registered Agent НЕ е PE. Mercury сметка НЕ е PE.</p><p><strong>2. LLC е single-member disregarded entity:</strong> Доходите pass through към собственика и се облагат в България.</p><p><strong>3. Нямате US-source income:</strong> Работата се извършва от България → foreign-source.</p><p><strong>Накратко:</strong> Живеете в България + работите от България + без присъствие в САЩ = данъци <strong>само в България</strong>.</p>`
    }, {
      id: "koga-dulzite",
      heading: "Кога ДЪЛЖИТЕ данъци в САЩ",
      body: `<p><strong>1. PE в САЩ:</strong> Офис, склад, служители → облагане на свързаните доходи.</p><p><strong>2. Effectively Connected Income:</strong> Консултантски услуги, извършвани физически в САЩ.</p><p><strong>3. FDAP Income:</strong> Дивиденти, лихви, наеми от US имоти — 30% withholding (намален по СИДДО).</p><p><strong>4. US партньор в LLC:</strong> Усложнява данъчната ситуация.</p><p><strong>5. Избрали сте C-Corp облагане:</strong> 21% корпоративен данък.</p><p>Повечето от тези сценарии не са типични за онлайн бизнес. При съмнение — <a href="/contact">консултирайте CPA</a>.</p>`
    }, {
      id: "zadulzitelni-deklaracii",
      heading: "Задължителни данъчни декларации",
      body: `<p><strong>Дори без данъци, подавайте декларации!</strong></p><p><strong>Single-Member LLC:</strong> Form 5472 + Form 1120 до 15 април. Глоба: <strong>$25,000</strong>.</p><p><strong>Multi-Member LLC:</strong> Form 1065 + Schedule K-1 до 15 март.</p><p><strong>Щатски:</strong> Annual Report (Wyoming: $60). Franchise Tax (Delaware: $300).</p><p><strong>Календар:</strong></p><ul><li>15 март: Form 1065 (multi-member)</li><li>15 април: Form 5472 + 1120 (single-member)</li><li>1 юни: Delaware Franchise Tax</li><li>Варира: Wyoming Annual Report</li></ul>`
    }, {
      id: "danaci-v-bulgaria",
      heading: "Облагане на LLC доходите в България",
      body: `<p><strong>Физически лица:</strong> 10% плосък данък + осигуровки. Годишна декларация до 30 април.</p><p><strong>Чрез ЕООД:</strong> 10% корпоративен + 5% данък дивидент при изтегляне.</p><p><strong>За СИДДО:</strong> Може да ви трябва удостоверение за данъчна резиденция от НАП и W-8BEN-E форма.</p><p>Работете с <a href="/contact">CPA, запознат със СИДДО</a>, за правилна подготовка на документите.</p>`
    }, {
      id: "prakticheski-primeri",
      heading: "Практически примери",
      body: `<p><strong>Фрийлансър, $50,000/год.:</strong> US данъци: $0. BG данъци: ~$5,000 + осигуровки. US декларация: задължителна.</p><p><strong>SaaS, $200,000/год.:</strong> US данъци: $0. BG данъци: 10% върху печалбата. Wyoming: $60/год.</p><p><strong>Amazon FBA с US склад:</strong> Инвентарът може да създаде PE! Професионална консултация задължителна.</p><p><strong>Двама собственици (BG + US):</strong> Сложна ситуация — US партньорът дължи US данъци. Form 1065 задължителна.</p>`
    }, {
      id: "greshki-pri-danacite",
      heading: "Най-опасните грешки при данъците",
      body: `<p><strong>1. Неподаване на Form 5472</strong> — $25,000 глоба, автоматична.</p><p><strong>2. Непознаване на СИДДО</strong> — банки могат да удържат 30% данък.</p><p><strong>3. Смесване на лични и бизнес средства</strong> — губите защитата на LLC.</p><p><strong>4. Грешна класификация</strong> — не подавайте Form 8832 без да знаете последствията.</p><p><strong>5. Игнориране на щатски изисквания</strong> — Annual Report, Franchise Tax.</p><p><strong>6. Nexus за sales tax</strong> — Amazon FBA може да създаде задължения.</p><p>За да избегнете тези капани: <a href="/contact">лицензиран CPA</a>.</p>`
    }],
    faq: [{
      question: "Мога ли да избегна всички данъци?",
      answer: "Не. Дължите данъци в България (10%). СИДДО предотвратява двойно облагане, не освобождава от данъци."
    }, {
      question: "Какво е Form 5472?",
      answer: "Информационна декларация за транзакции между LLC и чуждестранния собственик. Задължителна. Глоба $25,000."
    }, {
      question: "Трябва ли ми US счетоводител?",
      answer: "Силно препоръчително. CPA ще подготви декларациите и ще ви спести хиляди от потенциални глоби."
    }, {
      question: "СИДДО автоматична ли е?",
      answer: "Не винаги. Може да трябва W-8BEN-E и удостоверение за резиденция от НАП."
    }, {
      question: "Какво е permanent establishment?",
      answer: "Място на стопанска дейност — офис, клон, склад в САЩ. Без PE = без US данъци."
    }]
  },

  {
    slug: "ein-nomer-kakvo-e-kak-da-go-poluchite",
    title: "EIN номер — Какво е и как да го получите от България (2026)",
    description: "Пълен гайд за EIN за българи. Какво е, защо ви трябва, как да кандидатствате и колко време отнема.",
    date: "2026-04-14",
    author: "GetUSA LLC",
    image: "/og.webp",
    category: "Регистрация",
    tags: ["EIN", "IRS", "данъчен номер", "LLC", "Form SS-4"],
    readingTime: 14,
    tldr: "EIN е 9-цифрен данъчен номер от IRS, необходим за банкова сметка, Stripe и декларации. Чуждестранни лица кандидатстват с Form SS-4 по факс. Отнема 3-4 седмици. Безплатно.",
    relatedSlugs: ["kak-da-registriram-llc-v-amerika-ot-bulgaria", "stripe-ot-bulgaria-s-amerikansko-llc", "siddo-spogodba-bulgaria-sasht-danaci"],
    content: [{
      id: "kakvo-e-ein",
      heading: "Какво е EIN и защо ви трябва",
      body: `<p>EIN (Employer Identification Number) е <strong>9-цифрен номер</strong> от IRS, идентифициращ вашето LLC. Формат: XX-XXXXXXX. Еквивалент на ЕИК/БУЛСТАТ.</p><p><strong>За какво:</strong></p><ul><li><strong>Банкова сметка:</strong> Mercury, Relay изискват EIN</li><li><strong><a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe</a>:</strong> Задължителен</li><li><strong>Данъчна декларация:</strong> Всички IRS форми изискват EIN</li><li><strong>Клиенти:</strong> Американски клиенти искат W-9 с EIN</li></ul><p><strong>Важно:</strong> EIN не е SSN. SSN е за физически лица, EIN за бизнеси. Не ви трябва SSN за EIN.</p>`
    }, {
      id: "koga-da-kandidatstvate",
      heading: "Кога да кандидатствате — Правилният момент",
      body: `<p>Кандидатствайте <strong>веднага след регистрацията на LLC</strong>. Процесът отнема 3-4 седмици — всеки ден забавяне = по-късен бизнес старт.</p><p><strong>Трябва да имате:</strong> Одобрени Articles of Organization, име и адрес на LLC, паспорт.</p><p><strong>Оптимален график:</strong> Ден 1: Articles → Ден 3-5: Одобрение → Ден 5: EIN заявка → Седмица 4-5: EIN получен → Седмица 5: Mercury заявка.</p>`
    }, {
      id: "kak-da-kandidatstvate",
      heading: "3 метода за кандидатстване от България",
      body: `<p><strong>1. По факс (препоръчителен) — 3-4 седмици:</strong> Form SS-4 по факс до IRS: (855) 215-1627. Ползвайте eFax ако нямате факс.</p><p><strong>2. По поща — 6-8 седмици:</strong> До IRS, Cincinnati, OH 45999. По-бавно, не препоръчваме.</p><p><strong>3. По телефон — веднага, но сложно:</strong> (267) 941-1099, Пон-Пет 6:00-23:00 EST. 1-2 часа чакане, езикова бариера.</p><p><strong>Онлайн НЕ работи</strong> за чуждестранни лица без SSN.</p><p>Ако искате да спестите усилието — <a href="/contact">нашият екип</a> може да подаде заявката.</p>`
    }, {
      id: "form-ss4",
      heading: "Как да попълните Form SS-4 правилно",
      body: `<p><strong>Line 1:</strong> Точното име на LLC (с "LLC")</p><p><strong>Line 3:</strong> Вашето пълно име</p><p><strong>Lines 4a-4b:</strong> Бизнес адрес в САЩ</p><p><strong>Line 7a:</strong> Вашето име</p><p><strong>Line 7b:</strong> Напишете "Foreign" + приложете паспорт</p><p><strong>Line 9a:</strong> "Limited liability company", 1 member</p><p><strong>Line 10:</strong> "Started new business"</p><p><strong>Line 14:</strong> Опишете дейността</p><p><strong>Подпис:</strong> Физически подпис, дата, телефон.</p>`
    }, {
      id: "sled-poluchavane",
      heading: "След получаване на EIN — Следващи стъпки",
      body: `<p><strong>1. Запазете CP 575 Notice</strong> — банките го искат.</p><p><strong>2. Mercury банкова сметка</strong> — с LLC документи + EIN.</p><p><strong>3. <a href="/blog/stripe-ot-bulgaria-s-amerikansko-llc">Stripe активиране</a></strong> — с LLC + EIN + Mercury.</p><p><strong>4. Подгответе се за <a href="/blog/siddo-spogodba-bulgaria-sasht-danaci">данъчна декларация</a></strong> — EIN задължава за годишна декларация.</p>`
    }, {
      id: "ein-vs-itin",
      heading: "EIN срещу ITIN — Каква е разликата",
      body: `<p><strong>EIN:</strong> За бизнеси. XX-XXXXXXX. Безплатен. За банка, Stripe, декларации на LLC.</p><p><strong>ITIN:</strong> За физически лица без SSN. 9XX-XX-XXXX. За лична данъчна декларация, кредитни карти.</p><p><strong>Трябва ли ви ITIN?</strong> За повечето — <strong>не</strong>. EIN е достатъчен за LLC. ITIN трябва само за лична кредитна карта или лични US доходи извън LLC.</p>`
    }, {
      id: "chesti-problemi-ein",
      heading: "Чести проблеми и решения",
      body: `<p><strong>1. IRS не отговаря:</strong> Изчакайте 4 седмици. При 5+ — изпратете отново.</p><p><strong>2. Грешка във формуляра:</strong> IRS връща с обяснение. Най-често: грешно име, липсващ подпис.</p><p><strong>3. Банката не приема EIN:</strong> Поискайте CP 575 Notice от IRS.</p><p><strong>4. Стар EIN от предишно LLC:</strong> Всяко LLC има собствен EIN. Не ползвайте стар.</p><p><strong>5. Загубен EIN:</strong> Обадете се на IRS: (267) 941-1099.</p>`
    }],
    faq: [{
      question: "Колко време отнема?",
      answer: "Факс: 3-4 седмици. Поща: 6-8. Телефон: веднага (но 1-2ч чакане). Онлайн не работи без SSN."
    }, {
      question: "Безплатно ли е?",
      answer: "Да. IRS не таксува. Form SS-4 е безплатен."
    }, {
      question: "Мога ли онлайн?",
      answer: "Не без SSN/ITIN. Ползвайте факс или телефон."
    }, {
      question: "Трябва ли EIN за банка?",
      answer: "Да. Всички US банки изискват EIN за бизнес сметка."
    }, {
      question: "Мога ли да имам повече от един EIN?",
      answer: "Всяко LLC има собствен EIN. Две LLC = два EIN-а."
    }]
  }

];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  if (post.relatedSlugs?.length) {
    return post.relatedSlugs
      .map(s => posts.find(p => p.slug === s))
      .filter(Boolean) as BlogPost[];
  }
  return posts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
}

export function getAllSlugs(): string[] {
  return posts.map(p => p.slug);
}
