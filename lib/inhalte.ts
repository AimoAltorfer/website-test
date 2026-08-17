export const methoden = [
  {
    name: "Akupunktur",
    text: "Feine Nadeln an ausgewählten Punkten entlang der Meridiane. Kein Zauber, sondern altes Handwerk: den Kreislauf dort wieder in Bewegung bringen, wo es staut, leer ist oder schief hängt.",
  },
  {
    name: "Elektroakupunktur",
    text: "Dieselben Punkte, ein leiser elektrischer Impuls dazu. Manchmal braucht es etwas mehr Nachdruck als die Nadel allein — immer dosiert, immer erklärt, bevor es kribbelt.",
  },
  {
    name: "Akupressur",
    text: "Druck statt Stich. Für Kinder, für Nadelmüde, oder wenn die Finger ohnehin schon am richtigen Ort sind. Dieselben Meridiane, nur ohne «Achtung, ich steche!».",
  },
  {
    name: "Massage / Tuina",
    text: "Tuina ist die manuelle Seite der TCM: greifen, schieben, dehnen, lösen. Fliesst bei mir oft ganz selbstverständlich in die Behandlung ein — der Körper mag nicht nur Nadeln.",
  },
  {
    name: "Moxibustion",
    text: "Wärme aus Beifuss, nah an den Punkten. Wo Kälte sitzt oder der Qi-Fluss müde wirkt, darf es wärmer werden. Riecht nach Kräuterfeuer. Ist Absicht.",
  },
  {
    name: "Schröpfen",
    text: "Gläser, Unterdruck, Haut, die Farbe bekommt. Alt, direkt, manchmal etwas wild anzusehen — und oft genau das, was ein fester Rücken oder ein stockender Meridian braucht.",
  },
  {
    name: "Gua Sha",
    text: "Schaben statt drücken. Ein Schaber, Öl, und die Haut erzählt, wo es hängt. Hinterher darf es aussehen, als hätte man etwas erlebt. Hat man auch.",
  },
  {
    name: "med. Qi Gong",
    text: "Bewegung, Atmung, Aufmerksamkeit. Kleine Übungen, die mit nach Hause kommen — oft zu Ihrem Leidwesen. Der Teil der Medizin, den Sie selbst tun müssen.",
  },
  {
    name: "Ernährung nach den 5 Elementen",
    text: "Kein Kalorienzählen. Sondern: was wärmt, was kühlt, was nährt welches Organ. Praktische Hinweise aus der Behandlung, keine Diätmappe ab Stange.",
  },
  {
    name: "Taping",
    text: "Elastische Tapes, die Bewegung erlauben und trotzdem halten. Ergänzung, nicht Show. Manchmal die Brücke zwischen Behandlung und dem, was der Alltag danach verlangt.",
  },
] as const;

export const indikationen = [
  {
    gruppe: "Kopfschmerzen / Kopf",
    punkte: [
      "Kopfschmerzen",
      "Migräne chronisch",
      "Cluster-Kopfschmerzen",
      "zyklusabhängige Kopfschmerzen",
      "Tinnitus",
      "Augenleiden",
    ],
  },
  {
    gruppe: "Atemwege und Lungen",
    punkte: [
      "Asthma",
      "Bronchitis / COPD",
      "chronische Erkältungen",
      "Immunschwäche",
      "Sinusitis",
      "wiederkehrende Mittelohrentzündungen bei Kindern",
    ],
  },
  {
    gruppe: "Bewegungsapparat",
    punkte: [
      "Arthrose",
      "Schmerzen jeglicher Art im Bewegungsapparat",
      "Ischias / Rückenschmerzen / Hexenschuss",
      "Osteoporose",
      "Sportverletzungen",
    ],
  },
  {
    gruppe: "Magen-Darm",
    punkte: [
      "Magersucht",
      "Durchfall / Verstopfung / Blähungen",
      "Reizdarm / Magenschmerzen",
    ],
  },
  {
    gruppe: "Herz-Kreislauf",
    punkte: ["Durchblutungsstörungen", "Bluthochdruck", "Anämie"],
  },
  {
    gruppe: "Unterleib",
    punkte: [
      "Prostatabeschwerden",
      "Wechseljahrbeschwerden",
      "PMS / Ausfluss",
      "Blasenentzündung chronisch",
      "Inkontinenz",
    ],
  },
  {
    gruppe: "Haut",
    punkte: ["Akne", "Ekzem", "Neurodermitis / Psoriasis", "trockene Haut"],
  },
  {
    gruppe: "Nervensystem",
    punkte: [
      "MS",
      "vegetative Störungen",
      "Depression / Angst",
      "Schlafstörungen",
      "Trigeminusneuralgie",
    ],
  },
  {
    gruppe: "Allergien",
    punkte: [
      "allergischer Juckreiz",
      "Heuschnupfen",
      "Nahrungsmittelunverträglichkeiten",
    ],
  },
] as const;

export const kontakt = {
  telefon: "079 200 80 49",
  telefonHref: "tel:+41792008049",
  mail: "akupunktur-wasserschloss@gmx.ch",
  mailHref: "mailto:akupunktur-wasserschloss@gmx.ch",
  adresse: ["Bahnhofstrasse 14 (1. Stock, Eingang seitlich, kein Lift)", "5300 Turgi"],
} as const;
