import { Content } from "./models";

export const Contents: { [key: string]: Content } = {
  ru: {
    coverSection: {
      fianceName: "Андрей",
      fianceeName: "Марина",
      month: "июль",
    },
    welcomeSection: {
      title: "Дорогие гости!",
      content:
        "С радостью приглашаем вас разделить с нами особенный день — день нашей свадьбы! Мы будем счастливы видеть вас среди наших самых близких, чтобы отпраздновать этот незабываемый момент вместе.",
    },
    timingSection: {
      title: "Тайминг",
    },
    locationSection: {
      title: "Локация",
    },
    detailsSection: {
      title: "Детали",
      nameFormLabel: "Имя, Фамилия",
      partnerFormLabel: "Имя, Фамилия",
    },
  },
  ro: {
    coverSection: {
      fianceName: "Andrei",
      fianceeName: "Marina",
      month: "iulie",
    },
    welcomeSection: {
      title: "Dragi oaspeți!",
      content:
        "Vă invităm cu plăcere să împărtășiți cu noi ziua noastră specială - ziua nunții noastre! Vom fi bucuroși să vă avem printre cei mai apropiați pentru a sărbători împreună acest moment de neuitat.",
    },
    timingSection: {
      title: "Timing",
    },
    locationSection: {
      title: "Locaţie",
    },
    detailsSection: {
      title: "Detalii",
      nameFormLabel: "Nume, Prenume",
      partnerFormLabel: "Numele, Prenume",
    },
  },
};
