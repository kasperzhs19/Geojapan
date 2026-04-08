const reasons = [
  {
    title: "Технологиялық жетекшілік",
    detail:
      "Кузнецов тұжырымдамасында " +
      "'бас' ел дегеніміз инновация ағынын басқаратын мемлекет. Жапония электроника, робототехника және машина жасауда әлемдік стандарт орнатты.",
    image: "/images/japan-tech-robotics.jpg",
    alt: "Жапониядағы робототехника зертханасы",
  },
  {
    title: "Ұйымдасу мәдениеті",
    detail:
      "Өндірістегі Kaizen, дәлдік, сапаға адалдық және ұзақ мерзімді жоспарлау экономиканың тұрақты әрі жоғары тиімді болуына негіз болды.",
    image: "/images/japan-kaizen-factory.jpg",
    alt: "Kaizen қағидалары қолданылатын жапон зауыты",
  },
  {
    title: "Білім мен кадр капиталы",
    detail:
      "Жоғары сапалы инженерлік білім, зерттеу институттары және корпоративтік оқыту жүйесі жаңа технологияларды тез игеруге мүмкіндік берді.",
    image: "/images/japan-education-lab.jpg",
    alt: "Инженерлік білім беретін жапон зертханасы",
  },
  {
    title: "Аймақтық ықпал",
    detail:
      "Жапония Азия-Тынық мұхиты кеңістігінде қаржы, логистика және өндіріс тізбектерін үйлестіретін торапқа айналып, экономикалық орталық рөлін күшейтті.",
    image: "/images/japan-logistics-port.jpg",
    alt: "Жапонияның логистикалық порты",
  },
  {
    title: "Дағдарыстан жаңғыру моделі",
    detail:
      "Соғыстан кейінгі күйзелістен қысқа мерзімде технологиялық державаға айналуы Кузнецов логикасындағы " +
      "'бас' елдің негізгі белгісі - бейімделгіш жаңғыру қабілетін дәлелдейді.",
    image: "/images/japan-resilience-city.jpg",
    alt: "Жапонияның заманауи әрі төзімді қалалық инфрақұрылымы",
  },
];

export default function App() {
  return (
    <main className="h-screen snap-y snap-proximity scroll-smooth overflow-y-auto bg-zinc-950 text-zinc-100">
      <section className="relative isolate flex min-h-screen snap-start items-end overflow-hidden">
        <img
          src="/images/japan-zen-hero.jpg"
          alt="Жапония панорамасы және Фудзи тауы"
          className="absolute inset-0 h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/88 via-zinc-950/52 to-zinc-950/38" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
          <p className="mb-4 animate-fade-up text-xs tracking-[0.32em] text-red-200/75 [animation-delay:120ms]">
            K U Z N E T S O V &nbsp; C O N C E P T
          </p>
          <h1 className="max-w-4xl animate-fade-up text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl [animation-delay:260ms]">
            日本 - Жапония неге Кузнецов тұжырымдамасында "бас" ел саналады?
          </h1>
          <p className="mt-5 max-w-2xl animate-fade-up text-base text-zinc-100/80 sm:text-lg [animation-delay:420ms]">
            Қысқа презентация: 5 негізгі себеп, таза композиция, тыныш жапон эстетикасы.
          </p>
          <a
            href="#concept"
            className="mt-8 inline-flex animate-fade-up items-center gap-3 border border-zinc-100/25 px-5 py-2.5 text-sm tracking-wide text-zinc-100 transition-colors duration-500 hover:border-zinc-100/55 hover:text-zinc-50 [animation-delay:560ms]"
          >
            Себептерге өту
            <span className="inline-block animate-arrow-float">↓</span>
          </a>
        </div>
      </section>

      <section id="concept" className="relative isolate flex min-h-screen snap-start items-center overflow-hidden">
        <img
          src="/images/japan-concept-temple.jpg"
          alt="Киото ғибадатханасы және қалалық кеңістік"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/88 via-zinc-950/68 to-zinc-950/45" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-16">
          <p className="animate-fade-up text-xs tracking-[0.3em] text-red-300/70">ТҰЖЫРЫМДАМА НЕГІЗІ</p>
          <h2 className="mt-4 max-w-4xl animate-fade-up text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl [animation-delay:140ms]">
            "Бас" ел - даму векторын анықтайтын өзек
          </h2>
          <p className="mt-5 max-w-3xl animate-fade-up text-zinc-200 sm:text-lg [animation-delay:220ms]">
            Кузнецов үлгісінде әлемдік жүйеде мемлекеттер функциясына қарай сараланады. "Бас" ел ғылыми-техникалық
            жаңалықтарды, басқару моделін және аймақтық экономикалық ырғақты айқындайды.
          </p>
          <p className="mt-5 max-w-3xl animate-fade-up text-zinc-200 sm:text-lg [animation-delay:320ms]">
            Жапонияның ерекшелігі: инновация, тәртіп, адами капитал және геоэкономикалық ықпал бір жүйеге бірігіп,
            оны Азиядағы стратегиялық "бағыттаушы орталық" деңгейіне шығарды.
          </p>
        </div>
      </section>

      {reasons.map((reason, index) => (
        <section
          key={reason.title}
          className="relative isolate flex min-h-screen snap-start items-end overflow-hidden"
        >
          <img src={reason.image} alt={reason.alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/58 to-zinc-950/34" />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-24 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <p className="animate-fade-up text-xs tracking-[0.26em] text-red-200/75">СЕБЕП {String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 max-w-4xl animate-fade-up text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl [animation-delay:140ms]">
              {reason.title}
            </h3>
            <p className="mt-5 max-w-3xl animate-fade-up text-zinc-200 sm:text-lg [animation-delay:240ms]">{reason.detail}</p>
          </div>
        </section>
      ))}

      <section className="relative isolate flex min-h-screen snap-start items-center overflow-hidden">
        <img
          src="/images/japan-conclusion-tokyo.jpg"
          alt="Токио қаласының түнгі панорамасы"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/72 to-zinc-950/54" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-16">
          <p className="animate-fade-up text-xs tracking-[0.3em] text-red-300/70">ҚОРЫТЫНДЫ</p>
          <h2 className="mt-4 max-w-4xl animate-fade-up text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl [animation-delay:140ms]">
            Жапония "бас" ел ретінде: тек экономика емес, өркениеттік басқару моделі
          </h2>
          <p className="mt-5 max-w-3xl animate-fade-up text-zinc-200 sm:text-lg [animation-delay:240ms]">
            Осы себептердің жиынтығы Жапонияны Кузнецов логикасындағы "бас" ел ретінде қарастыруға мүмкіндік береді:
            ол даму бағытын ұсынады, стандарт орнатады және аймақтық жүйеге тұрақтандырушы ықпал жасайды.
          </p>
        </div>
      </section>
    </main>
  );
}
