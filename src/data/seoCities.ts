export interface CityData {
  name: string;
  state: string;
  stateAbbr: string;
  slug: string;
  description: string;
}

export const seoCities: CityData[] = [
  // Texas
  { name: "Houston", state: "Texas", stateAbbr: "TX", slug: "houston-tx", description: "the largest city in Texas and the energy capital of the world" },
  { name: "Dallas", state: "Texas", stateAbbr: "TX", slug: "dallas-tx", description: "a major cultural and economic hub in North Texas" },
  { name: "Austin", state: "Texas", stateAbbr: "TX", slug: "austin-tx", description: "the capital of Texas known for its vibrant culture" },
  { name: "San Antonio", state: "Texas", stateAbbr: "TX", slug: "san-antonio-tx", description: "a historic city with deep cultural roots in South Texas" },
  { name: "Fort Worth", state: "Texas", stateAbbr: "TX", slug: "fort-worth-tx", description: "a city known for its Western heritage in the DFW metroplex" },
  { name: "El Paso", state: "Texas", stateAbbr: "TX", slug: "el-paso-tx", description: "a border city in far West Texas with a unique cultural identity" },
  { name: "Arlington", state: "Texas", stateAbbr: "TX", slug: "arlington-tx", description: "a thriving city between Dallas and Fort Worth" },
  { name: "Corpus Christi", state: "Texas", stateAbbr: "TX", slug: "corpus-christi-tx", description: "a coastal city on the Gulf of Mexico" },
  { name: "Plano", state: "Texas", stateAbbr: "TX", slug: "plano-tx", description: "a major suburb in the Dallas-Fort Worth metroplex" },
  { name: "Lubbock", state: "Texas", stateAbbr: "TX", slug: "lubbock-tx", description: "a West Texas hub known for Texas Tech University" },
  { name: "Laredo", state: "Texas", stateAbbr: "TX", slug: "laredo-tx", description: "a vibrant border city on the Rio Grande" },
  { name: "Irving", state: "Texas", stateAbbr: "TX", slug: "irving-tx", description: "a diverse city in the heart of the DFW metroplex" },
  { name: "Amarillo", state: "Texas", stateAbbr: "TX", slug: "amarillo-tx", description: "a city in the Texas Panhandle along historic Route 66" },
  { name: "Brownsville", state: "Texas", stateAbbr: "TX", slug: "brownsville-tx", description: "the southernmost city in Texas on the Mexico border" },
  { name: "McKinney", state: "Texas", stateAbbr: "TX", slug: "mckinney-tx", description: "one of the fastest-growing cities in the DFW area" },
  // Oklahoma
  { name: "Oklahoma City", state: "Oklahoma", stateAbbr: "OK", slug: "oklahoma-city-ok", description: "the capital and largest city of Oklahoma" },
  { name: "Tulsa", state: "Oklahoma", stateAbbr: "OK", slug: "tulsa-ok", description: "the second-largest city in Oklahoma along the Arkansas River" },
  { name: "Norman", state: "Oklahoma", stateAbbr: "OK", slug: "norman-ok", description: "home to the University of Oklahoma" },
  { name: "Broken Arrow", state: "Oklahoma", stateAbbr: "OK", slug: "broken-arrow-ok", description: "a growing suburb in the Tulsa metropolitan area" },
  { name: "Edmond", state: "Oklahoma", stateAbbr: "OK", slug: "edmond-ok", description: "a thriving suburb north of Oklahoma City" },
  { name: "Lawton", state: "Oklahoma", stateAbbr: "OK", slug: "lawton-ok", description: "the fifth-largest city in Oklahoma near Fort Sill" },
  // Louisiana
  { name: "New Orleans", state: "Louisiana", stateAbbr: "LA", slug: "new-orleans-la", description: "a world-renowned city known for its culture, cuisine, and music" },
  { name: "Baton Rouge", state: "Louisiana", stateAbbr: "LA", slug: "baton-rouge-la", description: "the capital of Louisiana and home to LSU" },
  { name: "Shreveport", state: "Louisiana", stateAbbr: "LA", slug: "shreveport-la", description: "a vibrant city in northwest Louisiana" },
  { name: "Lafayette", state: "Louisiana", stateAbbr: "LA", slug: "lafayette-la", description: "the heart of Cajun and Creole country" },
  { name: "Lake Charles", state: "Louisiana", stateAbbr: "LA", slug: "lake-charles-la", description: "a growing city in southwest Louisiana" },
  { name: "Metairie", state: "Louisiana", stateAbbr: "LA", slug: "metairie-la", description: "a large suburb in the New Orleans metropolitan area" },
];
