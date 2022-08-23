import { beast, cold, superpet } from "../assets";
import { images } from "./imageList";

const { img1, img10, img2, img3, img4, img5, img6, img7, img8, img9 } = images;
interface ICineType {
  img: string;
  title: string;
  description: string;
  showtime: string;
  rating: string | number;
  duration: string;
  genre: string;
  cast: string;
  director: string;
}
export const cineMovies: ICineType[] = [
  {
    img: img1,
    title: "NOPE (2022) HOLLYWOOD",
    description:
      "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.",
    showtime: "4:00pm-6:20pm",
    rating: 18,
    duration: " 2hrs 10 mins",
    genre: "Sci-fi, Horror, Mystery, Thriller",
    cast: " Daniel Kaluuya, Keke Palmer, Brandon Perea",
    director: " Jordan Peele",
  },
  {
    img: img2,
    title: "THE STRANGER I KNOW (2022) NOLLYWOOD",
    description:
      "Janet, an upcoming actor, got her very first lead role in a big budget Nollywood movie, moves to Lagos, and finds herself falling in love with Jonathan, her short-let landlord",
    showtime: "6:31pm-8:34pm",
    rating: 15,
    duration: "1hr 53mins",
    genre: " Drama, Romance",
    cast: " Deyemi Okanlawon, Bimbo Akintola, Toyin Abraham",
    director: " Akin-Tijani Balogun",
  },
  {
    img: img3,
    title: "DRAGON BALL SUPER: SUPER HERO (2022) HOLLYWOOD",
    description:
      "The Red Ribbon Army was once destroyed by Son Goku. Individuals, who carry on its spirit, have created the ultimate Androids, Gamma 1 and Gamma 2. These two Androids call themselves “SuperHeroes”. They start attacking Piccolo and Gohan…What is the New Red Ribbon Army’s objective? In the face of approaching danger, it is time to awaken, Super Hero!",
    showtime: "12:05pm-1:55pm",
    rating: " PG",
    duration: " 1hr 40mins",
    genre: "Animation Action Adventure",
    cast: "Masako Nozawa, Toshio Furukawa",
    director: "Tetsuro Kodama",
  },
  {
    img: img4,
    title: "BEAST (2022) HOLLYWOOD",
    description:
      "A father and his two teenage daughters find themselves hunted by a massive rogue lion intent on proving that the Savanna has but one apex predator.",
    showtime: "2:06pm-3:49pm",
    rating: 18,
    duration: " 1hr33mins",
    genre: "Adventure, Drama, Horror",
    cast: ": Idris Elba, Sharlto Copley, Iyana Halley",
    director: "Baltasar Kormákur",
  },
  {
    img: img5,
    title: "COLD (2022) NOLLYWOOD",
    description:
      "Caught in a web of his own creation, Bishop Charles Richmond is faced with doing whatever it takes in retaining his position as the most popular and influential black preacher with the biggest Congregation even if it means falling out of favor with God. His most trusted ally Pastor Camalot who cunningly finds her way into his heart is determined to take down anyone resisting her rise to the top as the head of the Church with the help of Capone Diabolos    ",
    showtime: "1:59pm-4:45pm",
    rating: 15,
    duration: "2hrs",
    genre: "1:59pm-4:45pm",
    cast: "Richard Mofe Damijo, Pete Edochie, Ireti Doyle, Kanayo O Kanayo, Ik Ogbonna, Hilda Dakubo",
    director: "Bakia T. Thomas",
  },
  {
    img: img6,
    title: "THE SETUP2 (2022) NOLLYWOOD",
    description:
      "Four years later Chike has barely come to terms with her life as a US Government Agent, when she is forced to risk everything she holds dear once again after an international terrorist kidnaps Grace’s daughter in order to blackmail Chike into doing her bidding. Chike & Grace must reunite and build a team to defeat the terrorist and save Grace’s daughter.",
    showtime: "4:33 PM-6:43 PM",
    rating: "TBC",
    duration: "2hrs",
    genre: "Action, drama",
    cast: "Adesua Etomi-Wellington, Kate Henshaw-Nuttal, Kehinde Bankole, Lilian Afegbai, Lota Chukwu, Nancy Isime, Stan Nze, Tina Mba, Tope Olowoniyan, Uzor Arukwe",
    director: "Chinaza Onuzo",
  },
  {
    img: img7,
    title: "BULLET TRAIN (2022) HOLLYWOOD",
    description:
      "Ladybug (Brad Pitt) is an unlucky assassin determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug’s latest mission puts him on a collision course with lethal adversaries from around the globe-all with connected, yet conflicting, objectives-on the world’s fastest train. The end of the line is just the beginning in this non-stop thrill-ride through modern-day Japan..",
    showtime: "4:46 pm – 7:12 pm",
    rating: 18,
    duration: "2hrs60mins",
    genre: "Action, Thriller, Comedy",
    cast: "Brad Pitt, Joey King, Aaron Taylor- Johnson",
    director: "David Leitch",
  },
];

export const ticketList1 = [
  {
    data: "WEEKDAYS (MON - THURS)",
    child: "Child N1,000",
    adult: "Adult N1,500",
  },
];
export const ticketList2 = [
  {
    data: "WEEKENDS (FRI - SUN)",
    child: "Child N1,500",
    adult: "Adult N2,000",
  },
];
export const ticketList3 = [
  {
    data: "Adult N2,000",
    child: "N2,500",
    adult: "",
  },
];
export const navLinks = [
  {
    id: 1,
    title: "contactus",
  },
];

export const carouselAsset = [beast, cold, superpet];
