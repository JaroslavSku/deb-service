export interface Data {
  status: number;
  data: Datum[];
  dataSource: string;
  info: Info;
}

export interface Datum {
  subjects: Subject[];
  subject_count: string;
  ex_cislo: string;
  cause_id: string;
  datetime_zalozeni: Date;
  datetime_zapisu: Date;
  posledni_uprava: string;
}

export interface Subject {
  subject_id: string;
  typ_osoby: string;
  jmeno: string;
  datum_narozeni: Date;
  ic: null;
  adresa: string;
}

export interface Info {
  search: Search;
  zbyva_dotazu: ZbyvaDotazu;
  cena: Cena;
  debug: Debug;
}

export interface Cena {
  zaplaceno: string;
  kredit: string;
  free: string;
}

export interface Debug {
  found: number;
  elapsed: number;
}

export interface Search {
  type: string;
  query: string;
}

export interface ZbyvaDotazu {
  placenych: number;
  free: number;
}
