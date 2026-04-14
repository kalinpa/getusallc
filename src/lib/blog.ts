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
  body: string; // HTML string
}

export interface FAQ {
  question: string;
  answer: string;
}

// All blog posts
const posts: BlogPost[] = [
  {
    slug: "kak-da-registriram-llc-v-amerika-ot-bulgaria",
    title: "Как да регистрирам LLC в Америка от България — Пълен гайд 2026",
    description: "Стъпка по стъпка процес за регистрация на американска LLC от България. Научете кой щат да изберете, какви документи са нужни, колко струва и колко време отнема.",
    date: "2026-04-14",
    author: "GetUSA LLC",
    image: "/og.webp",
    category: "Регистрация",
    tags: ["LLC", "регистрация", "САЩ", "България"],
    readingTime: 12,
    tldr: "За да регистрирате LLC от България, ви трябват: избор на щат (Wyoming е оптимален за повечето), registered agent в САЩ, Articles of Organization, Operating Agreement и EIN номер от IRS. Целият процес отнема 3-5 работни дни и може да се направи 100% дистанционно с помощта на лицензиран CPA и адвокат.",
    content: [
      {
        id: "kakvo-e-llc",
        heading: "Какво е LLC и защо ви трябва",
        body: `<p>LLC (Limited Liability Company) е най-популярната бизнес структура в САЩ за чуждестранни предприемачи. Тя съчетава <strong>ограничена отговорност</strong> (като при корпорация) с <strong>гъвкаво данъчно облагане</strong> (като при едноличен търговец).</p>
<p>За българските предприемачи LLC дава достъп до:</p>
<ul>
<li>Американски банкови сметки (Mercury, Relay)</li>
<li>Платежни процесори (Stripe, PayPal Business)</li>
<li>Глобален пазар за SaaS, e-commerce и услуги</li>
<li>Данъчни предимства чрез СИДДО спогодбата между България и САЩ</li>
</ul>`
      },
      {
        id: "koj-shtat-da-izbera",
        heading: "Кой щат да изберете — Wyoming, Delaware или друг",
        body: `<p><strong>Wyoming</strong> е оптималният избор за 90% от българите. Ето защо:</p>
<ul>
<li>Нулев щатски данък върху доходите</li>
<li>Ниски годишни такси ($60/год.)</li>
<li>Силна защита на личните данни</li>
<li>Бърза регистрация (1-2 дни)</li>
</ul>
<p><strong>Delaware</strong> е подходящ ако планирате да привличате инвеститори или да излизате на борсата. За повечето малки бизнеси и фрийлансъри обаче Wyoming е по-евтин и по-практичен.</p>
<p><strong>New Mexico</strong> е алтернатива с нулев Annual Report, но е по-малко разпознаваем от банките.</p>
<p>Ако не сте сигурни кой щат е подходящ за вашия бизнес, <a href="/contact">свържете се с нас</a> за безплатна консултация.</p>`
      },
      {
        id: "neobhodimi-dokumenti",
        heading: "Необходими документи за регистрация",
        body: `<p>За регистрация на LLC в САЩ от България ви трябват:</p>
<ol>
<li><strong>Articles of Organization</strong> — основният документ, който се подава до Secretary of State на избрания щат</li>
<li><strong>Registered Agent</strong> — физическо или юридическо лице с адрес в щата, което приема официална кореспонденция</li>
<li><strong>Operating Agreement</strong> — вътрешен документ, който определя как се управлява LLC-то</li>
<li><strong>EIN (Employer Identification Number)</strong> — данъчен номер от IRS, еквивалент на ЕИК в България</li>
</ol>
<p>Не ви трябва SSN (Social Security Number) за регистрация. Чуждестранните лица могат да получат EIN с паспорт.</p>`
      },
      {
        id: "stypki-za-registracia",
        heading: "5 стъпки за регистрация на LLC",
        body: `<p>Ето точния процес стъпка по стъпка:</p>
<p><strong>Стъпка 1: Изберете име за LLC-то</strong><br/>Името трябва да е уникално в избрания щат и да съдържа "LLC" или "Limited Liability Company".</p>
<p><strong>Стъпка 2: Наемете Registered Agent</strong><br/>Задължително е да имате Registered Agent с физически адрес в щата. Това може да бъде професионална агенция.</p>
<p><strong>Стъпка 3: Подайте Articles of Organization</strong><br/>Подават се онлайн или по пощата до Secretary of State. В Wyoming таксата е $100.</p>
<p><strong>Стъпка 4: Изгответе Operating Agreement</strong><br/>Въпреки че не е задължителен във всички щати, е критично важен за банките и данъчните власти.</p>
<p><strong>Стъпка 5: Получете EIN от IRS</strong><br/>Подавате Form SS-4 до IRS. За чуждестранни лица процесът отнема 3-4 седмици по факс.</p>`
      },
      {
        id: "kolko-struva",
        heading: "Колко струва регистрация на LLC от България",
        body: `<p>Разходите за регистрация на LLC се състоят от:</p>
<ul>
<li><strong>Държавна такса:</strong> $100 (Wyoming) до $300+ (Delaware, California)</li>
<li><strong>Registered Agent:</strong> $50-150/год.</li>
<li><strong>EIN заявка:</strong> безплатна (ако подавате сами) или $50-100 чрез агенция</li>
<li><strong>Бизнес адрес:</strong> $50-200/год.</li>
</ul>
<p>Общо за първата година в Wyoming: приблизително <strong>$300-500</strong> за държавни и задължителни разходи.</p>
<p>Професионалните услуги (CPA, адвокат) са допълнителен разход, но спестяват време и грешки. <a href="/contact">Поискайте индивидуална оферта</a> от нашия екип.</p>`
      },
      {
        id: "bankova-smetka-i-stripe",
        heading: "Как да отворите банкова сметка и Stripe след регистрацията",
        body: `<p>След като имате LLC и EIN, следващата стъпка е финансова инфраструктура:</p>
<p><strong>Банкова сметка:</strong> Препоръчваме <strong>Mercury</strong> — изцяло онлайн банка, която приема чуждестранни LLC собственици. Процесът е дистанционен и отнема 3-5 работни дни.</p>
<p><strong>Stripe:</strong> С американско LLC, EIN и банкова сметка можете да активирате Stripe за приемане на картови плащания от целия свят. Stripe не работи директно с български фирми, затова LLC-то е ключово.</p>
<p><strong>PayPal Business:</strong> Може да се активира с LLC и EIN. Полезен за eBay и международни клиенти.</p>
<p><strong>Wise Business:</strong> Отлична опция за международни преводи с ниски такси. Работи с американски LLC.</p>`
      },
      {
        id: "danaci-i-siddo",
        heading: "Данъци — СИДДО и облагане за българи с LLC в САЩ",
        body: `<p>Най-честият въпрос: <strong>дължа ли данъци в САЩ?</strong></p>
<p>Краткият отговор: в повечето случаи <strong>не</strong>, благодарение на СИДДО (Спогодба за избягване на двойното данъчно облагане) между България и САЩ.</p>
<p>Ако нямате физическо присъствие в САЩ (офис, служители), вашето LLC се третира като "pass-through entity" и доходите се облагат само в България.</p>
<p>Важно: дори да не дължите данъци в САЩ, трябва да подадете годишна данъчна декларация (Form 1065 или 5472). Неподаването води до глоби от $25,000.</p>
<p>Препоръчваме да работите с <a href="/contact">лицензиран CPA</a>, запознат със СИДДО спогодбата, за да минимизирате данъчните си задължения законно.</p>`
      }
    ],
    faq: [
      {
        question: "Трябва ли да пътувам до САЩ за регистрация на LLC?",
        answer: "Не. Целият процес е 100% дистанционен. Не е необходимо да стъпвате в Америка — от регистрацията до банковата сметка, всичко се прави онлайн."
      },
      {
        question: "Колко време отнема регистрацията на LLC?",
        answer: "Самата регистрация отнема 3-5 работни дни в повечето щати. EIN номерът от IRS идва за 3-4 седмици. Банковата сметка се отваря до 1 седмица след получаване на EIN."
      },
      {
        question: "Мога ли да регистрирам LLC без SSN?",
        answer: "Да. Чуждестранните лица могат да регистрират LLC и да получат EIN с паспорт. SSN не е необходим."
      },
      {
        question: "Кой щат е най-подходящ за българи?",
        answer: "Wyoming е оптимален за повечето българи — нулев щатски данък, ниски такси ($60/год.), силна защита на данните и бърза регистрация."
      },
      {
        question: "Какви годишни разходи да очаквам?",
        answer: "В Wyoming годишните разходи са приблизително $200-400: $60 Annual Report + Registered Agent ($50-150) + бизнес адрес ($50-200). Счетоводни услуги и данъчна декларация са допълнителни."
      }
    ],
    relatedSlugs: []
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
