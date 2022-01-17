import { buildSchema } from "graphql";

const schema = buildSchema(
  `
        type Debug { found: Int elapsed: Float }

        type Cena { zaplaceno: String kredit: String free: String }

        type ZbyvaDotazu { placenych: Int free: Int }

        type Search { type: String query: String }

        type Info { debug: Debug
        cena: Cena
        zbyva_dotazu: ZbyvaDotazu
        search: Search }

        type Subjects { subject_id: String
        typ_osoby: String
        jmeno: String
        datum_narozeni: String
        ic: String
        adresa: String }

        type Data { subject_count: String
        ex_cislo: String
        cause_id: String
        datetime_zalozeni: String
        datetime_zapisu: String
        posledni_uprava: String
        subjects: [Subjects ] }

        type MainType { status: Int
        dataSource: String
        info: Info
        data: [Data ] }

        type Query{
            loadData: MainType!
        }

        type Mutations{
            saveData: Data!
        }
    
    `
);

export default schema;
