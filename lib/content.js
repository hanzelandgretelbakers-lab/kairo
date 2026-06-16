// Contenido maestro bilingüe de KAIRO (ES/EN).
// Cada campo de texto es { es, en }. Listas: { es:[...], en:[...] }.
// Fuente única para /curso/[slug], /cuenta y /comprar.

export const PAQUETES = [
  {
    slug: "quickstart",
    precio: "$39",
    tipo: "curso",
    duracion: { es: "1 hora · a tu ritmo", en: "1 hour · at your pace" },
    nivel: { es: "Principiante absoluto", en: "Absolute beginner" },
    nombre: { es: "KAIRO Quickstart", en: "KAIRO Quickstart" },
    tagline: { es: "Tu primer agente de IA funcionando en 1 hora — sin saber programar.", en: "Your first AI agent up and running in 1 hour — no coding needed." },
    paraQuien: { es: "Para el que sabe que tiene que usar IA pero no sabe por dónde empezar. Si nunca armaste nada con IA y querés un primer triunfo rápido, este es tu punto de partida.", en: "For the person who knows they should be using AI but has no idea where to start. If you've never built anything with AI and want a fast first win, this is your starting line." },
    promesa: { es: "En menos de una hora salís con un agente de IA tuyo, funcionando, y con la confianza de que esto no es magia: es un proceso que podés repetir.", en: "In under an hour you walk away with your own AI agent, working, and the confidence that this isn't magic — it's a process you can repeat." },
    incluye: {
      es: ["Video paso a paso (te muestro la pantalla, no teoría)", "Plantilla de agente lista para copiar y pegar", "Banco de 30 prompts probados para arrancar", "Checklist de '¿qué automatizo primero?'", "Acceso de por vida + actualizaciones"],
      en: ["Step-by-step video (I show you the screen, not theory)", "Copy-and-paste agent template, ready to go", "A bank of 30 proven starter prompts", "A 'what should I automate first?' checklist", "Lifetime access + updates"],
    },
    modulos: [
      { n: 1, titulo: { es: "El clic mental", en: "The mental click" }, lecciones: { es: ["Qué es (y qué NO es) un agente de IA", "Los 3 lugares donde la IA te da más retorno hoy"], en: ["What an AI agent is (and what it is NOT)", "The 3 places AI pays off the most today"] }, resultado: { es: "Entendés dónde aplicar IA sin marearte con mil herramientas.", en: "You know where to apply AI without drowning in a thousand tools." } },
      { n: 2, titulo: { es: "Armamos tu primer agente", en: "We build your first agent" }, lecciones: { es: ["Elegir la herramienta correcta (gratis para empezar)", "Copiar la plantilla y adaptarla a vos", "La prueba: tu agente respondiendo solo"], en: ["Pick the right tool (free to start)", "Copy the template and adapt it to you", "The test: your agent responding on its own"] }, resultado: { es: "Tenés un agente real funcionando en tu pantalla.", en: "You have a real agent working on your screen." } },
      { n: 3, titulo: { es: "Que no se rompa", en: "Keep it from breaking" }, lecciones: { es: ["Los 5 errores típicos del principiante", "Cómo mejorar las respuestas con buenos prompts", "Tu próximo paso"], en: ["The 5 typical beginner mistakes", "How to improve answers with good prompts", "Your next step"] }, resultado: { es: "Sabés mantenerlo y mejorarlo solo.", en: "You know how to maintain and improve it yourself." } },
    ],
    resultados: {
      es: ["Un agente de IA tuyo, funcionando", "La metodología para repetirlo con otra tarea", "Cero humo: entendés qué pasa por debajo"],
      en: ["Your own AI agent, working", "The method to repeat it with any other task", "Zero fluff: you understand what's happening under the hood"],
    },
    textoLargo: {
      es: "La mayoría de la gente queda paralizada con la IA por la misma razón: hay demasiadas herramientas, demasiados gurús y demasiada teoría. Quickstart rompe esa parálisis con una sola cosa — un triunfo rápido y real. En lugar de explicarte cómo funciona un modelo de lenguaje por dentro, te siento frente a la pantalla y armamos juntos, paso a paso, tu primer agente de IA: algo que responde, que resuelve una tarea concreta tuya, y que podés mostrarle a alguien hoy mismo. La neurociencia del aprendizaje es clara: el primer logro temprano es lo que genera la dopamina que te hace volver. Por eso Quickstart está diseñado para que ganes en menos de una hora, no en semanas. Adentro vas a encontrar el video completo donde te muestro cada clic, la plantilla exacta que uso, un banco de 30 prompts que ya probé, y un checklist para decidir qué tarea conviene automatizar primero en tu caso. No necesitás tarjeta de crédito de ninguna herramienta cara ni saber una línea de código. Cuando termines, no solo vas a tener un agente: vas a tener la metodología para repetirlo con cualquier otra tarea de tu trabajo o tu negocio. Quickstart es la puerta de entrada a todo el universo KAIRO — el primer escalón de una escalera que llega hasta tener tu negocio entero corriendo con IA.",
      en: "Most people freeze up with AI for the same reason: too many tools, too many gurus, too much theory. Quickstart breaks that paralysis with one thing — a fast, real win. Instead of explaining how a language model works under the hood, I sit you in front of the screen and we build your first AI agent together, step by step: something that responds, solves a concrete task of yours, and that you can show someone today. The neuroscience of learning is clear: an early first win is what creates the dopamine that brings you back. That's why Quickstart is designed for you to win in under an hour, not in weeks. Inside you'll find the full video where I show you every click, the exact template I use, a bank of 30 prompts I've already tested, and a checklist to decide which task is worth automating first in your case. You don't need a credit card for any expensive tool or a single line of code. When you're done, you won't just have an agent — you'll have the method to repeat it with any other task in your work or business. Quickstart is the doorway into the whole KAIRO universe: the first step on a ladder that goes all the way to running your entire business on AI.",
    },
    faq: [
      { q: { es: "¿Necesito saber programar?", en: "Do I need to know how to code?" }, a: { es: "No. Todo es con herramientas visuales y plantillas. Si sabés usar WhatsApp, podés con esto.", en: "No. It's all visual tools and templates. If you can use WhatsApp, you can do this." } },
      { q: { es: "¿Cuánto tarda?", en: "How long does it take?" }, a: { es: "Aproximadamente una hora. Podés pausar y seguir cuando quieras.", en: "About an hour. You can pause and continue whenever you want." } },
      { q: { es: "¿Sirve si ya sé algo de IA?", en: "Is it useful if I already know some AI?" }, a: { es: "Si ya armaste agentes, te conviene saltar directo a Foundations.", en: "If you've already built agents, you're better off jumping straight to Foundations." } },
    ],
    cta: { label: { es: "Empezar por $39", en: "Start for $39" }, tipo: "comprar", plan: "quickstart" },
    siguiente: "foundations",
  },
  {
    slug: "foundations",
    precio: "$297",
    tipo: "curso",
    destacado: true,
    duracion: { es: "6 módulos · ~6 semanas a tu ritmo", en: "6 modules · ~6 weeks at your pace" },
    nivel: { es: "De principiante a operador", en: "From beginner to operator" },
    nombre: { es: "KAIRO Foundations", en: "KAIRO Foundations" },
    tagline: { es: "De cero a tu primer sistema de IA que te ahorra horas — o que factura.", en: "From zero to your first AI system that saves you hours — or earns money." },
    paraQuien: { es: "Para el que ya entendió que la IA sirve y quiere construir algo de verdad: un sistema que trabaje por él, ya sea para su propio negocio o para empezar a vender automatizaciones a otros.", en: "For the person who already gets that AI works and wants to build something real: a system that works for them — for their own business, or to start selling automations to others." },
    promesa: { es: "Salís con un sistema de IA completo funcionando de punta a punta, y con el criterio para diseñar el próximo solo. Es la base sobre la que se construye un negocio.", en: "You walk away with a complete AI system running end to end, and the judgment to design the next one on your own. It's the foundation a business is built on." },
    incluye: {
      es: ["6 módulos en video, paso a paso", "Plantillas y blueprints de cada sistema que armamos", "Banco de prompts profesional (100+)", "Mapa de herramientas: qué usar para cada cosa", "Plantilla de propuesta para venderlo como servicio", "Acceso de por vida + actualizaciones"],
      en: ["6 step-by-step video modules", "Templates and blueprints for every system we build", "Professional prompt bank (100+)", "Tool map: what to use for each thing", "A proposal template to sell it as a service", "Lifetime access + updates"],
    },
    modulos: [
      { n: 1, titulo: { es: "Fundamentos que importan", en: "Fundamentals that matter" }, lecciones: { es: ["Cómo 'piensa' la IA (lo justo para usarla bien)", "El lenguaje de los prompts: la habilidad que más rinde", "Tu mapa de oportunidades de automatización"], en: ["How AI 'thinks' (just enough to use it well)", "The language of prompts: the highest-leverage skill", "Your map of automation opportunities"] }, resultado: { es: "Ves tu trabajo con ojos de automatizador.", en: "You start seeing your work through an automator's eyes." } },
      { n: 2, titulo: { es: "Tu primer sistema real", en: "Your first real system" }, lecciones: { es: ["Conectar herramientas sin código", "Disparadores, acciones y datos", "Tu primer flujo que corre solo"], en: ["Connect tools without code", "Triggers, actions and data", "Your first flow that runs on its own"] }, resultado: { es: "Tenés un sistema funcionando, no un experimento.", en: "You have a working system, not an experiment." } },
      { n: 3, titulo: { es: "Agentes que hablan como humanos", en: "Agents that talk like humans" }, lecciones: { es: ["Diseñar la personalidad del agente", "Que responda DMs, mails o WhatsApp", "Califica y deriva solo"], en: ["Design the agent's personality", "Have it answer DMs, emails or WhatsApp", "It qualifies and routes on its own"] }, resultado: { es: "Un agente que atiende por vos 24/7.", en: "An agent that handles things for you 24/7." } },
      { n: 4, titulo: { es: "Contenido en automático", en: "Content on autopilot" }, lecciones: { es: ["Generar imágenes y video con IA", "Pipeline de contenido que se publica solo", "Mantener tu voz y tu marca"], en: ["Generate images and video with AI", "A content pipeline that publishes itself", "Keep your voice and your brand"] }, resultado: { es: "Tu contenido sale sin que estés encima.", en: "Your content goes out without you babysitting it." } },
      { n: 5, titulo: { es: "Que no se caiga", en: "Keep it from falling over" }, lecciones: { es: ["Manejo de errores y límites", "Costos, privacidad y supervisión humana", "Monitoreo: que te avise si algo falla"], en: ["Error handling and limits", "Costs, privacy and human oversight", "Monitoring: get alerted if something breaks"] }, resultado: { es: "Un sistema confiable, no frágil.", en: "A reliable system, not a fragile one." } },
      { n: 6, titulo: { es: "De sistema a negocio", en: "From system to business" }, lecciones: { es: ["Empaquetar lo que armaste como servicio", "Ponerle precio sin regalar tu trabajo", "Tu primera propuesta a un cliente"], en: ["Package what you built as a service", "Price it without giving your work away", "Your first proposal to a client"] }, resultado: { es: "Sabés cómo cobrar por esto.", en: "You know how to get paid for this." } },
    ],
    resultados: {
      es: ["Un sistema de IA completo, tuyo y funcionando", "El criterio para diseñar el próximo sin ayuda", "Una propuesta lista para venderle a tu primer cliente"],
      en: ["A complete AI system, yours and working", "The judgment to design the next one unaided", "A proposal ready to sell to your first client"],
    },
    textoLargo: {
      es: "Foundations es el corazón de KAIRO. Si Quickstart te da el primer triunfo, Foundations te da el oficio. A lo largo de seis módulos construimos juntos — no en teoría, en tu pantalla — un sistema de IA completo: desde los fundamentos que de verdad importan (sin perderte en matemática que no vas a usar), hasta un agente que atiende clientes solo, un pipeline de contenido que se publica sin que estés encima, y la parte que casi nadie te enseña: cómo hacer que todo eso no se caiga. Cada módulo está pensado como un escalón de una transformación: empezás viendo tu trabajo como una lista de tareas manuales y terminás viéndolo como un conjunto de sistemas que pueden correr solos. Esa es la mentalidad que separa al que 'usa ChatGPT' del que construye negocios con IA. El módulo final es el que cambia vidas: tomamos lo que aprendiste a construir y te muestro cómo empaquetarlo como un servicio, ponerle precio sin regalarte, y armar tu primera propuesta para un cliente. Porque la verdad incómoda es esta: aprender IA no te cambia la vida; aprender a vender lo que hacés con IA, sí. Adentro vas a tener los seis módulos en video, los blueprints de cada sistema que armamos para que los copies, un banco de más de 100 prompts profesionales, el mapa de qué herramienta usar para cada cosa, y la plantilla de propuesta comercial. Foundations no es un curso para coleccionar; es la base sobre la que se para todo lo demás — la comunidad, el bootcamp y, si querés, tu propia agencia.",
      en: "Foundations is the heart of KAIRO. If Quickstart gives you the first win, Foundations gives you the craft. Across six modules we build together — not in theory, on your screen — a complete AI system: from the fundamentals that actually matter (without getting lost in math you'll never use), to an agent that handles customers on its own, a content pipeline that publishes without you hovering over it, and the part almost no one teaches you: how to keep all of it from falling over. Each module is built as a step in a transformation: you start seeing your work as a list of manual tasks and end up seeing it as a set of systems that can run themselves. That's the mindset that separates someone who 'uses ChatGPT' from someone who builds businesses with AI. The final module is the one that changes lives: we take what you learned to build and I show you how to package it as a service, price it without giving yourself away, and put together your first proposal for a client. Because here's the uncomfortable truth: learning AI doesn't change your life — learning to sell what you do with AI does. Inside you'll have all six video modules, the blueprints of every system we build so you can copy them, a bank of 100+ professional prompts, the map of which tool to use for what, and the commercial proposal template. Foundations isn't a course to collect; it's the base everything else stands on — the community, the bootcamp, and, if you want, your own agency.",
    },
    faq: [
      { q: { es: "¿Y si nunca automaticé nada?", en: "What if I've never automated anything?" }, a: { es: "Está pensado para arrancar de cero. Si querés un calentamiento previo, hacé Quickstart primero.", en: "It's designed to start from scratch. If you want a warm-up first, do Quickstart." } },
      { q: { es: "¿Las herramientas son caras?", en: "Are the tools expensive?" }, a: { es: "Trabajamos con opciones de bajo costo o gratis para empezar. Te muestro cómo escalar sin gastar de más.", en: "We work with low-cost or free options to start. I show you how to scale without overspending." } },
      { q: { es: "¿Me sirve para conseguir clientes?", en: "Will it help me land clients?" }, a: { es: "Sí. El módulo 6 es justamente cómo empaquetar y vender lo que armás.", en: "Yes. Module 6 is exactly how to package and sell what you build." } },
      { q: { es: "¿Tengo acceso para siempre?", en: "Do I have access forever?" }, a: { es: "Sí, acceso de por vida y todas las actualizaciones futuras incluidas.", en: "Yes — lifetime access and all future updates included." } },
    ],
    cta: { label: { es: "Acceder por $297", en: "Get access for $297" }, tipo: "comprar", plan: "foundations" },
    siguiente: "comunidad",
  },
  {
    slug: "comunidad",
    precio: "$49/mes",
    tipo: "comunidad",
    duracion: { es: "Suscripción mensual · cancelás cuando quieras", en: "Monthly subscription · cancel anytime" },
    nivel: { es: "Todos los niveles", en: "All levels" },
    nombre: { es: "Comunidad KAIRO", en: "KAIRO Community" },
    tagline: { es: "El lugar donde no te quedás solo: cursos, automatizaciones listas, comunidad y lives.", en: "The place where you're never on your own: courses, ready-made automations, community and live calls." },
    paraQuien: { es: "Para el que quiere seguir creciendo con IA con apoyo constante, ideas frescas cada semana y gente que está en la misma. El que aprende mejor acompañado que solo.", en: "For the person who wants to keep growing with AI with steady support, fresh ideas every week, and people on the same path. The kind who learns better with others than alone." },
    promesa: { es: "Cada mes salís con algo nuevo implementado, una duda resuelta y una idea que no se te hubiera ocurrido solo. La garantía de 90 días te cubre: si no te sirve, te devolvemos.", en: "Every month you leave with something new implemented, a question answered, and an idea you wouldn't have had on your own. The 90-day guarantee has you covered: if it's not for you, we refund you." },
    incluye: {
      es: ["Todos los cursos KAIRO incluidos mientras seas miembro", "Biblioteca de automatizaciones listas para copiar", "Lives y Q&A en vivo (ES/EN)", "Comunidad privada para preguntar y compartir", "Plantillas y prompts nuevos cada semana", "Garantía de 90 días"],
      en: ["All KAIRO courses included while you're a member", "A library of ready-to-copy automations", "Live calls and Q&A (ES/EN)", "A private community to ask and share", "New templates and prompts every week", "90-day guarantee"],
    },
    modulos: [
      { n: 1, titulo: { es: "Acceso total a cursos", en: "Full access to courses" }, lecciones: { es: ["Quickstart, Foundations y todo lo nuevo", "Rutas de aprendizaje según tu objetivo"], en: ["Quickstart, Foundations and everything new", "Learning paths based on your goal"] }, resultado: { es: "Aprendés a tu ritmo, sin pagar por separado.", en: "You learn at your pace, without paying separately." } },
      { n: 2, titulo: { es: "Biblioteca de automatizaciones", en: "Automation library" }, lecciones: { es: ["Flujos listos para importar", "Agentes pre-armados para casos comunes"], en: ["Flows ready to import", "Pre-built agents for common cases"] }, resultado: { es: "Copiás algo que ya funciona en vez de empezar de cero.", en: "You copy something that already works instead of starting from scratch." } },
      { n: 3, titulo: { es: "Comunidad + lives", en: "Community + live calls" }, lecciones: { es: ["Q&A en vivo cada semana", "Feedback de tus sistemas", "Networking con gente que está construyendo"], en: ["Live Q&A every week", "Feedback on your systems", "Networking with people who are building"] }, resultado: { es: "Nunca te trabás solo.", en: "You never get stuck alone." } },
    ],
    resultados: {
      es: ["Acceso a todo el conocimiento KAIRO en un solo lugar", "Implementás más rápido copiando lo que ya funciona", "Una red de gente que te empuja a seguir"],
      en: ["Access to all of KAIRO's knowledge in one place", "You implement faster by copying what already works", "A network of people who push you to keep going"],
    },
    textoLargo: {
      es: "La razón número uno por la que la gente abandona la IA no es que sea difícil — es que la encara sola. Se traba en un error, no tiene a quién preguntarle, lo deja para 'cuando tenga tiempo', y nunca vuelve. La Comunidad KAIRO existe para que eso no te pase. Es una membresía mensual que te da tres cosas que solo no podés tener: acceso a todos los cursos de KAIRO mientras seas miembro (Quickstart, Foundations y todo lo que vaya saliendo), una biblioteca de automatizaciones y agentes ya armados que copiás e importás en minutos en vez de construir de cero, y lo más valioso — gente. Lives y sesiones de preguntas y respuestas cada semana donde traés tu sistema, mostrás dónde te trabaste y salís con la solución. La neurociencia de los hábitos lo confirma: lo que sostiene una conducta nueva no es la fuerza de voluntad, es el entorno. Rodearte de gente que está construyendo con IA hace que vos también construyas. Cada semana subimos plantillas y prompts nuevos, así que siempre tenés una excusa para volver y un próximo paso concreto. Y porque creemos en lo que ofrecemos, va con garantía de 90 días: si en tres meses sentís que no te movió la aguja, te devolvemos el dinero. La Comunidad es el lugar natural para quedarte después de Foundations — o para arrancar si lo que querés es no quedarte nunca solo en el camino.",
      en: "The number one reason people give up on AI isn't that it's hard — it's that they face it alone. They hit an error, have no one to ask, push it off until 'when I have time,' and never come back. The KAIRO Community exists so that doesn't happen to you. It's a monthly membership that gives you three things you can't have on your own: access to every KAIRO course while you're a member (Quickstart, Foundations and everything new), a library of pre-built automations and agents you copy and import in minutes instead of building from scratch, and the most valuable part — people. Live calls and Q&A sessions every week where you bring your system, show where you got stuck, and leave with the solution. The neuroscience of habits confirms it: what sustains a new behavior isn't willpower, it's environment. Surrounding yourself with people building with AI makes you build too. Every week we add new templates and prompts, so you always have a reason to come back and a concrete next step. And because we stand behind what we offer, it comes with a 90-day guarantee: if after three months you feel it hasn't moved the needle, we refund you — no interrogation. The Community is the natural place to stay after Foundations — or to start, if what you want is to never be alone on the road.",
    },
    faq: [
      { q: { es: "¿Puedo cancelar cuando quiera?", en: "Can I cancel anytime?" }, a: { es: "Sí, sin vueltas. Cancelás desde tu cuenta y listo.", en: "Yes, no hassle. Cancel from your account and you're done." } },
      { q: { es: "¿Incluye los cursos o los pago aparte?", en: "Does it include the courses or do I pay separately?" }, a: { es: "Incluidos mientras seas miembro: Quickstart, Foundations y lo nuevo.", en: "Included while you're a member: Quickstart, Foundations and anything new." } },
      { q: { es: "¿Y la garantía?", en: "What about the guarantee?" }, a: { es: "90 días. Si no te sirve, te devolvemos el dinero, sin interrogatorio.", en: "90 days. If it's not for you, we refund you — no interrogation." } },
    ],
    cta: { label: { es: "Sumarme por $49/mes", en: "Join for $49/mo" }, tipo: "comprar", plan: "comunidad" },
    siguiente: "bootcamp",
  },
  {
    slug: "bootcamp",
    precio: "$797",
    tipo: "curso",
    duracion: { es: "Cohorte en vivo de 30 días", en: "30-day live cohort" },
    nivel: { es: "Intermedio · implementación con acompañamiento", en: "Intermediate · guided implementation" },
    nombre: { es: "KAIRO Bootcamp", en: "KAIRO Bootcamp" },
    tagline: { es: "30 días, en vivo, conmigo encima — salís con tu sistema implementado de verdad.", en: "30 days, live, with me on your case — you leave with your system actually implemented." },
    paraQuien: { es: "Para el que no quiere otro curso que se queda a medias. El que necesita fecha, ritmo, acompañamiento y un poco de presión sana para terminar lo que empieza.", en: "For the person who doesn't want another course that fizzles out halfway. The one who needs a start date, a rhythm, guidance, and a bit of healthy pressure to finish what they start." },
    promesa: { es: "En 30 días no 'viste' el contenido: lo implementaste. Salís con un sistema de IA funcionando en tu negocio y con la confianza de haberlo hecho acompañado.", en: "In 30 days you didn't just 'watch' the content — you implemented it. You leave with an AI system running in your business and the confidence of having done it with support." },
    incluye: {
      es: ["Cohorte en vivo de 30 días (grupo reducido)", "Sesiones semanales en vivo + grabaciones", "Revisión de tu sistema en directo", "Todo el contenido de Foundations incluido", "Comunidad de tu cohorte (los que arrancan juntos)", "Certificado de finalización KAIRO"],
      en: ["30-day live cohort (small group)", "Weekly live sessions + recordings", "Live review of your system", "All of Foundations included", "Your cohort community (the people who start with you)", "KAIRO certificate of completion"],
    },
    modulos: [
      { n: 1, titulo: { es: "Semana 1 — Tu plan", en: "Week 1 — Your plan" }, lecciones: { es: ["Diagnóstico de tu negocio", "Elegís el sistema que vas a construir", "Setup de herramientas"], en: ["Diagnose your business", "Choose the system you'll build", "Tool setup"] }, resultado: { es: "Salís con un plan claro y fecha.", en: "You leave with a clear plan and a date." } },
      { n: 2, titulo: { es: "Semana 2 — Construís", en: "Week 2 — You build" }, lecciones: { es: ["Armás tu primer flujo en vivo", "Revisión grupal", "Ajustes"], en: ["Build your first flow live", "Group review", "Adjustments"] }, resultado: { es: "Tu sistema empieza a tomar forma.", en: "Your system starts taking shape." } },
      { n: 3, titulo: { es: "Semana 3 — Agente + contenido", en: "Week 3 — Agent + content" }, lecciones: { es: ["Sumás un agente de atención", "Pipeline de contenido", "Pruebas reales"], en: ["Add a support agent", "Content pipeline", "Real-world tests"] }, resultado: { es: "El sistema ya hace trabajo de verdad.", en: "The system is now doing real work." } },
      { n: 4, titulo: { es: "Semana 4 — Lanzás", en: "Week 4 — You launch" }, lecciones: { es: ["Lo dejás funcionando y monitoreado", "Cómo escalarlo o venderlo", "Demo final de tu cohorte"], en: ["Leave it running and monitored", "How to scale or sell it", "Your cohort's final demo"] }, resultado: { es: "Terminás con un sistema vivo y un plan de crecimiento.", en: "You finish with a live system and a growth plan." } },
    ],
    resultados: {
      es: ["Un sistema implementado de verdad en 30 días", "El hábito de construir con fechas y acompañamiento", "Certificado y una cohorte que te conoce"],
      en: ["A system actually implemented in 30 days", "The habit of building with deadlines and support", "A certificate and a cohort that knows you"],
    },
    textoLargo: {
      es: "Todos tenemos cursos comprados que nunca terminamos. No es por falta de ganas — es por falta de estructura. El Bootcamp KAIRO existe para resolver exactamente eso. Es una cohorte en vivo de 30 días donde no estás solo frente a una plataforma: estás conmigo y con un grupo reducido de gente que arranca el mismo día que vos. Hay fecha de inicio, hay ritmo semanal, hay sesiones en vivo donde traés tu sistema y lo revisamos en directo, y hay esa presión sana del grupo que hace que sí o sí avances. La diferencia entre un curso a tu ritmo y un bootcamp es la diferencia entre 'algún día lo hago' y 'lo hice en cuatro semanas'. La estructura está pensada como un sprint: la primera semana diagnosticamos tu negocio y elegís qué sistema vas a construir; la segunda lo armás; la tercera le sumás un agente de atención y un pipeline de contenido; y la cuarta lo dejás funcionando, monitoreado, y con un plan para escalarlo o venderlo. Incluye todo el contenido de Foundations como material de apoyo, las grabaciones de cada sesión por si te perdés alguna, la comunidad de tu cohorte, y un certificado de finalización. Es la opción para el que ya probó aprender solo y sabe que con acompañamiento llega. Si querés terminar lo que empezás y salir con algo real funcionando, el Bootcamp es tu camino.",
      en: "We all have courses we bought and never finished. It's not for lack of motivation — it's for lack of structure. The KAIRO Bootcamp exists to solve exactly that. It's a 30-day live cohort where you're not alone in front of a platform: you're with me and a small group of people who start the same day you do. There's a start date, a weekly rhythm, live sessions where you bring your system and we review it on the spot, and that healthy group pressure that makes you actually move. The difference between a self-paced course and a bootcamp is the difference between 'I'll do it someday' and 'I did it in four weeks.' The structure is built like a sprint: week one we diagnose your business and you choose which system to build; week two you build it; week three you add a support agent and a content pipeline; and week four you leave it running, monitored, with a plan to scale or sell it. It includes all of Foundations as backup material, recordings of every session in case you miss one, your cohort community, and a certificate of completion. It's the option for someone who's tried learning alone and knows that with support they'll get there. If you want to finish what you start and walk away with something real and working, the Bootcamp is your path.",
    },
    faq: [
      { q: { es: "¿Cuándo arranca la próxima cohorte?", en: "When does the next cohort start?" }, a: { es: "Abrimos cohortes por fecha. Dejá tu mail o escribime y te aviso la próxima.", en: "We open cohorts by date. Leave your email or write me and I'll let you know the next one." } },
      { q: { es: "¿Y si me pierdo una sesión en vivo?", en: "What if I miss a live session?" }, a: { es: "Todas quedan grabadas. Igual te recomiendo venir en vivo: ahí está el valor.", en: "They're all recorded. Still, I recommend coming live — that's where the value is." } },
      { q: { es: "¿Necesito experiencia previa?", en: "Do I need prior experience?" }, a: { es: "Ayuda haber hecho Quickstart o Foundations, pero el Bootcamp arranca con un diagnóstico para nivelar.", en: "Having done Quickstart or Foundations helps, but the Bootcamp starts with a diagnostic to level everyone." } },
    ],
    cta: { label: { es: "Reservar mi lugar — $797", en: "Reserve my spot — $797" }, tipo: "comprar", plan: "bootcamp" },
    siguiente: "founders-sprint",
  },
  {
    slug: "founders-sprint",
    precio: "$1.500+",
    tipo: "consultoria",
    duracion: { es: "30 o 90 días · 1-a-1 conmigo", en: "30 or 90 days · 1-on-1 with me" },
    nivel: { es: "Para fundadores y negocios en marcha", en: "For founders and running businesses" },
    nombre: { es: "Founders Sprint 1-a-1", en: "Founders Sprint 1:1" },
    tagline: { es: "Consultoría personal: nos sentamos vos y yo y armamos la IA de tu negocio.", en: "Personal consulting: you and I sit down and build your business's AI together." },
    paraQuien: { es: "Para el dueño de negocio o fundador que no quiere aprender a hacerlo — quiere que se haga, con criterio, mirando sus números y su contexto real.", en: "For the business owner or founder who doesn't want to learn how to do it — they want it done, with judgment, looking at their real numbers and context." },
    promesa: { es: "Trabajamos uno a uno sobre TU negocio. Salís con una estrategia de IA hecha a medida, sistemas priorizados por retorno, y el acompañamiento para implementarlos bien.", en: "We work one-on-one on YOUR business. You leave with a custom AI strategy, systems prioritized by return, and the support to implement them well." },
    incluye: {
      es: ["Diagnóstico profundo de tu negocio y procesos", "Hoja de ruta de IA priorizada por retorno", "Sesiones 1-a-1 (30 o 90 días según el plan)", "Diseño de tus sistemas y agentes clave", "Acompañamiento en la implementación", "Acceso directo conmigo por el período del sprint"],
      en: ["A deep dive into your business and processes", "An AI roadmap prioritized by return", "1-on-1 sessions (30 or 90 days depending on the plan)", "Design of your key systems and agents", "Hands-on support during implementation", "Direct access to me for the length of the sprint"],
    },
    proceso: [
      { paso: 1, titulo: { es: "Diagnóstico", en: "Diagnosis" }, detalle: { es: "Mapeamos tu negocio, tus procesos y dónde se te va el tiempo y la plata. Salimos con las oportunidades de IA ordenadas por retorno.", en: "We map your business, your processes, and where your time and money are leaking. We come out with AI opportunities ranked by return." } },
      { paso: 2, titulo: { es: "Estrategia", en: "Strategy" }, detalle: { es: "Armo tu hoja de ruta: qué sistema primero, qué después, con qué herramientas y qué se puede esperar de cada uno.", en: "I build your roadmap: which system first, which next, with what tools, and what to expect from each." } },
      { paso: 3, titulo: { es: "Diseño + build", en: "Design + build" }, detalle: { es: "Diseñamos y construimos tus sistemas y agentes clave, mirando tus casos reales, no ejemplos de manual.", en: "We design and build your key systems and agents around your real cases, not textbook examples." } },
      { paso: 4, titulo: { es: "Implementación + handoff", en: "Implementation + handoff" }, detalle: { es: "Los dejamos funcionando, te enseño a operarlos y definimos cómo escalar. El conocimiento queda con vos.", en: "We leave them running, I teach you to operate them, and we define how to scale. The knowledge stays with you." } },
    ],
    resultados: {
      es: ["Una estrategia de IA hecha para tu negocio, no genérica", "Sistemas clave diseñados y en marcha", "Criterio propio para seguir solo después del sprint"],
      en: ["An AI strategy built for your business, not generic", "Key systems designed and running", "Your own judgment to continue after the sprint"],
    },
    textoLargo: {
      es: "Hay un punto en el que ya no necesitás otro curso — necesitás que alguien se siente con vos, mire tu negocio de verdad y te diga 'esto primero, esto después, así'. El Founders Sprint es eso. Es consultoría uno a uno, conmigo, durante 30 o 90 días, enfocada cien por ciento en tu negocio. No es contenido genérico: arrancamos con un diagnóstico profundo de tus procesos, dónde se te va el tiempo y la plata, y de ahí salgo con una hoja de ruta de IA priorizada por retorno — porque no todas las automatizaciones valen lo mismo, y empezar por la correcta es la mitad del juego. Después diseñamos y construimos juntos tus sistemas clave, mirando tus casos reales: tus clientes, tu operación, tu contexto. Y los dejamos funcionando, con un handoff donde te enseño a operarlos para que el conocimiento quede con vos y no dependas de nadie. Durante todo el sprint tenés acceso directo conmigo. Es la opción para el fundador que valora su tiempo, que prefiere comprar criterio antes que aprender a los golpes, y que quiere salir con algo construido y una dirección clara. El precio arranca en $1.500 y se define según el alcance — por eso el primer paso siempre es una charla para entender qué necesitás.",
      en: "There's a point where you don't need another course — you need someone to sit down with you, actually look at your business, and tell you 'this first, this next, here's how.' The Founders Sprint is that. It's one-on-one consulting, with me, over 30 or 90 days, focused one hundred percent on your business. It's not generic content: we start with a deep dive into your processes, where your time and money leak, and from there I come out with an AI roadmap prioritized by return — because not all automations are worth the same, and starting with the right one is half the game. Then we design and build your key systems together, around your real cases: your customers, your operation, your context. And we leave them running, with a handoff where I teach you to operate them so the knowledge stays with you and you don't depend on anyone. Throughout the sprint you have direct access to me. It's the option for the founder who values their time, who'd rather buy judgment than learn the hard way, and who wants to walk away with something built and a clear direction. Pricing starts at $1,500 and is set by scope — that's why the first step is always a conversation to understand what you need.",
    },
    faq: [
      { q: { es: "¿Por qué el precio dice '$1.500+'?", en: "Why does the price say '$1,500+'?" }, a: { es: "Porque depende del alcance (30 vs 90 días, cuántos sistemas). Lo cerramos después de una charla de diagnóstico.", en: "Because it depends on scope (30 vs 90 days, how many systems). We lock it in after a diagnostic conversation." } },
      { q: { es: "¿Vos lo construís o me enseñás?", en: "Do you build it or teach me?" }, a: { es: "Las dos cosas: construimos juntos y te dejo operándolo solo. El conocimiento queda con vos.", en: "Both: we build together and I leave you operating it on your own. The knowledge stays with you." } },
      { q: { es: "¿Cómo empiezo?", en: "How do I start?" }, a: { es: "Con una charla de diagnóstico sin compromiso. Ahí definimos alcance y precio.", en: "With a no-commitment diagnostic conversation. That's where we define scope and price." } },
    ],
    cta: { label: { es: "Agendar charla de diagnóstico", en: "Book a diagnostic call" }, tipo: "agendar" },
    siguiente: "hecho-para-vos",
  },
  {
    slug: "hecho-para-vos",
    precio: "A medida",
    precioEn: "Custom",
    tipo: "dfy",
    duracion: { es: "Proyecto + retainer mensual", en: "Project + monthly retainer" },
    nivel: { es: "Para negocios que quieren resultados, no aprender", en: "For businesses that want results, not lessons" },
    nombre: { es: "Hecho para vos", en: "Done for you" },
    tagline: { es: "Vos seguí con lo tuyo. Nosotros construimos y mantenemos la IA de tu negocio.", en: "You keep doing your thing. We build and maintain your business's AI." },
    paraQuien: { es: "Para el negocio que no quiere ni aprender ni implementar — quiere que un equipo le construya las automatizaciones y los agentes, los deje funcionando y los mantenga.", en: "For the business that doesn't want to learn or implement — they want a team to build the automations and agents, leave them running, and maintain them." },
    promesa: { es: "Nos das el problema, nosotros entregamos el sistema funcionando y lo mantenemos andando. Vos ves los resultados; nosotros nos ocupamos de que no se caiga.", en: "You give us the problem, we deliver the working system and keep it running. You see the results; we make sure it doesn't break." },
    incluye: {
      es: ["Automatizaciones y agentes a medida", "Construcción de punta a punta (como hicimos con Ovo Flow)", "Integraciones con tus herramientas actuales", "Monitoreo y mantenimiento mensual (retainer)", "Soporte prioritario", "Reportes de resultados"],
      en: ["Custom automations and agents", "End-to-end build (like we did with Ovo Flow)", "Integrations with your current tools", "Monthly monitoring and maintenance (retainer)", "Priority support", "Results reports"],
    },
    proceso: [
      { paso: 1, titulo: { es: "Diagnóstico y propuesta", en: "Diagnosis and proposal" }, detalle: { es: "Entendemos tu operación y te mandamos una propuesta clara: qué construimos, en cuánto tiempo y qué resultado esperar.", en: "We understand your operation and send a clear proposal: what we build, how long it takes, and what results to expect." } },
      { paso: 2, titulo: { es: "Diseño del sistema", en: "System design" }, detalle: { es: "Diseñamos la solución completa: agentes, automatizaciones e integraciones con lo que ya usás.", en: "We design the full solution: agents, automations, and integrations with what you already use." } },
      { paso: 3, titulo: { es: "Construcción", en: "Build" }, detalle: { es: "Lo construimos de punta a punta. Vos seguís con tu negocio; nosotros te mantenemos al tanto.", en: "We build it end to end. You keep running your business; we keep you in the loop." } },
      { paso: 4, titulo: { es: "Lanzamiento", en: "Launch" }, detalle: { es: "Lo dejamos funcionando en tu operación, probado y monitoreado.", en: "We leave it running in your operation, tested and monitored." } },
      { paso: 5, titulo: { es: "Mantenimiento (retainer)", en: "Maintenance (retainer)" }, detalle: { es: "Nos quedamos para que no se caiga, lo mejoramos con el tiempo y te pasamos reportes de resultados.", en: "We stay on to keep it from breaking, improve it over time, and send you results reports." } },
    ],
    resultados: {
      es: ["Un sistema de IA a medida, funcionando en tu negocio", "Cero tiempo tuyo invertido en construirlo", "Un equipo que lo mantiene andando y lo mejora"],
      en: ["A custom AI system, running in your business", "Zero of your time spent building it", "A team that keeps it running and improves it"],
    },
    textoLargo: {
      es: "No todo el mundo quiere aprender a construir con IA — y está perfecto. Muchos negocios solo quieren el resultado: que los DMs se respondan solos, que el contenido salga sin esfuerzo, que los procesos repetitivos dejen de comerse horas. Para ellos existe 'Hecho para vos'. Es nuestro servicio de construcción a medida: nos contás el problema, diseñamos la solución, la construimos de punta a punta y la dejamos funcionando en tu operación — igual que hicimos con Ovo Flow, una plataforma completa de IA para negocios que armamos desde cero, con agente de atención 24/7, publicación automática de contenido, multi-cuenta y pagos integrados. La diferencia entre 'Hecho para vos' y contratar a un freelance suelto es el mantenimiento: los sistemas de IA no son un cuadro que colgás y listo; necesitan monitoreo, ajustes y mejoras. Por eso trabajamos con un retainer mensual: nos quedamos para que no se caiga, lo mejoramos con el tiempo y te pasamos reportes de resultados. El proceso es ordenado y sin sorpresas: diagnóstico y propuesta clara, diseño, construcción, lanzamiento y mantenimiento. El precio es a medida porque cada negocio es distinto — el primer paso siempre es una charla para entender qué necesitás y mandarte una propuesta concreta. Si querés los resultados de la IA sin tener que convertirte en experto, esto es para vos.",
      en: "Not everyone wants to learn to build with AI — and that's perfectly fine. Many businesses just want the result: DMs answered on their own, content going out effortlessly, repetitive processes that stop eating hours. That's what 'Done for you' is for. It's our custom build service: you tell us the problem, we design the solution, build it end to end, and leave it running in your operation — just like we did with Ovo Flow, a complete AI platform for businesses we built from scratch, with a 24/7 support agent, automatic content publishing, multi-account, and integrated payments. The difference between 'Done for you' and hiring a one-off freelancer is the maintenance: AI systems aren't a painting you hang and forget; they need monitoring, adjustments, and improvements. That's why we work with a monthly retainer: we stay on to keep it from breaking, improve it over time, and send you results reports. The process is orderly and surprise-free: diagnosis and a clear proposal, design, build, launch, and maintenance. Pricing is custom because every business is different — the first step is always a conversation to understand what you need and send you a concrete proposal. If you want the results of AI without having to become an expert, this is for you.",
    },
    faq: [
      { q: { es: "¿Cuánto cuesta?", en: "How much does it cost?" }, a: { es: "A medida, según el proyecto. Te mandamos una propuesta clara después de una charla de diagnóstico.", en: "Custom, based on the project. We send a clear proposal after a diagnostic conversation." } },
      { q: { es: "¿Qué es el retainer?", en: "What's the retainer?" }, a: { es: "Un fee mensual para mantener tus sistemas andando, mejorarlos y darte soporte. La IA necesita mantenimiento.", en: "A monthly fee to keep your systems running, improve them, and support you. AI needs maintenance." } },
      { q: { es: "¿Tienen un caso real?", en: "Do you have a real case?" }, a: { es: "Sí: Ovo Flow, una plataforma de IA para negocios que construimos de punta a punta. Te la mostramos en vivo.", en: "Yes: Ovo Flow, an AI platform for businesses we built end to end. We'll show it to you live." } },
    ],
    cta: { label: { es: "Hablemos de tu proyecto", en: "Let's talk about your project" }, tipo: "agendar" },
    siguiente: "quickstart",
  },
];

// Helper: devuelve node[lang] si es objeto {es,en}, si no el node tal cual.
export function tr(node, lang) {
  if (node && typeof node === "object" && !Array.isArray(node) && ("es" in node || "en" in node)) {
    return node[lang] != null ? node[lang] : node.es;
  }
  return node;
}

export function getPaquete(slug) {
  return PAQUETES.find((p) => p.slug === slug) || null;
}
