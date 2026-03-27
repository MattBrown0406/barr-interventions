// Static imports for state hero images
import alabama from "@/assets/states/alabama.jpg";
import alaska from "@/assets/states/alaska.jpg";
import arizona from "@/assets/states/arizona.jpg";
import california from "@/assets/states/california.jpg";
import colorado from "@/assets/states/colorado.jpg";
import florida from "@/assets/states/florida.jpg";
import georgia from "@/assets/states/georgia.jpg";
import hawaii from "@/assets/states/hawaii.jpg";
import illinois from "@/assets/states/illinois.jpg";
import kentucky from "@/assets/states/kentucky.jpg";
import louisiana from "@/assets/states/louisiana.jpg";
import massachusetts from "@/assets/states/massachusetts.jpg";
import michigan from "@/assets/states/michigan.jpg";
import missouri from "@/assets/states/missouri.jpg";
import montana from "@/assets/states/montana.jpg";
import nevada from "@/assets/states/nevada.jpg";
import newYork from "@/assets/states/new-york.jpg";
import northCarolina from "@/assets/states/north-carolina.jpg";
import ohio from "@/assets/states/ohio.jpg";
import oklahoma from "@/assets/states/oklahoma.jpg";
import oregon from "@/assets/states/oregon.jpg";
import pennsylvania from "@/assets/states/pennsylvania.jpg";
import southDakota from "@/assets/states/south-dakota.jpg";
import tennessee from "@/assets/states/tennessee.jpg";
import texas from "@/assets/states/texas.jpg";
import utah from "@/assets/states/utah.jpg";
import virginia from "@/assets/states/virginia.jpg";
import washington from "@/assets/states/washington.jpg";
import wyoming from "@/assets/states/wyoming.jpg";
import defaultState from "@/assets/states/default.jpg";

const stateImages: Record<string, string> = {
  alabama, alaska, arizona, california, colorado, florida, georgia,
  hawaii, illinois, kentucky, louisiana, massachusetts, michigan,
  missouri, montana, nevada,
  "new-york": newYork,
  "north-carolina": northCarolina,
  ohio, oklahoma, oregon, pennsylvania,
  "south-dakota": southDakota,
  tennessee, texas, utah, virginia, washington, wyoming,
};

export const getStateImage = (slug: string): string => {
  return stateImages[slug] || defaultState;
};
