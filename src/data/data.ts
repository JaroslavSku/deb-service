const data = {
  status: 200,
  data: [
    {
      subjects: [
        {
          subject_id: "12345",
          typ_osoby: "F",
          jmeno: "Jan Novák",
          datum_narozeni: "1980-08-08",
          ic: null,
          adresa: "Kaprova 6, 110 00 Praha 1",
        },
      ],
      subject_count: "1",
      ex_cislo: "888EX808080/88",
      cause_id: "Ln4zjM",
      datetime_zalozeni: "2007-10-09",
      datetime_zapisu: "2007-10-09",
      posledni_uprava: "Nařízení exekuce",
    },
    {
      subjects: [
        {
          subject_id: "12345",
          typ_osoby: "F",
          jmeno: "Jan Novák",
          datum_narozeni: "1980-08-08",
          ic: null,
          adresa: "Dělnická 805, 280 02 Kolín",
        },
      ],
      subject_count: "1",
      ex_cislo: "888EX808080/89",
      cause_id: "8Rxq7B",
      datetime_zalozeni: "2008-10-09",
      datetime_zapisu: "2008-10-09",
      posledni_uprava: "Nařízení exekuce",
    },
  ],
  dataSource: "test",
  info: {
    search: {
      type: "rc",
      query: "__HLEADANY_RETEZEC__",
    },
    zbyva_dotazu: {
      placenych: 83,
      free: 100,
    },
    cena: {
      zaplaceno: "bezplatný testovací dotaz",
      kredit: "4980.00",
      free: "100",
    },
    debug: {
      found: 4,
      elapsed: 0.19468712806702,
    },
  },
};

export default data;
