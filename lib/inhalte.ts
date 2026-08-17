export const methoden = [
  "Akupunktur",
  "Elektroakupunktur",
  "Akupressur",
  "Massage / Tuina",
  "Moxibustion",
  "Schröpfen",
  "Gua Sha",
  "med. Qi Gong",
  "Ernährung nach den 5 Elementen",
  "Taping",
] as const;

export const indikationen = [
  {
    gruppe: "Kopfschmerzen / Kopf",
    punkte: [
      "Kopfschmerzen",
      "Migräne chronisch",
      "Cluster Kopfschmerzen",
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
      "Schmerzen jeglicher Art im Bewegungsapp.",
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
      "Allergischer Juckreiz",
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
} as const;
