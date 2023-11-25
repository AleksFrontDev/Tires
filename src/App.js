import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import CardItem from "./components/CardItem/CardItem";

const tiresArray = [
  {
    title: "RoadMaster Plus",
    price: 120,
    description: "Шины для повседневного использования на городских дорогах.",
  },
  {
    title: "All-Terrain Beast",
    price: 180,
    description: "Универсальные шины для бездорожья и пересеченной местности.",
  },
  {
    title: "EcoDrive Saver",
    price: 100,
    description:
      "Экономичные шины с улучшенным сцеплением для экологичного вождения.",
  },
  {
    title: "WinterFrost Grip",
    price: 150,
    description: "Зимние шины с отличной устойчивостью на скользких дорогах.",
  },
  {
    title: "MaxMileage Runner",
    price: 140,
    description: "Шины с максимальным пробегом для длительного использования.",
  },
  {
    title: "CityCruiser Touring",
    price: 130,
    description: "Шины для комфортной езды по городским улицам.",
  },
  {
    title: "Off-Road Dominator",
    price: 190,
    description: "Прочные шины для бездорожья с повышенной проходимостью.",
  },
  {
    title: "Performance Plus",
    price: 200,
    description:
      "Шины для высокой производительности и улучшенного сцепления с дорогой.",
  },
  {
    title: "RainMaster",
    price: 160,
    description: "Шины с улучшенной устойчивостью на дождливых дорогах.",
  },
  {
    title: "FuelSaver Elite",
    price: 170,
    description:
      "Эффективные шины для экономии топлива и минимального сопротивления качению.",
  },
  {
    title: "UltraGrip Snow",
    price: 210,
    description:
      "Шины с высоким уровнем сцепления для безопасной езды на снегу и льду.",
  },
  {
    title: "ComfortCruise",
    price: 150,
    description:
      "Комфортные шины с улучшенной амортизацией для плавной поездки.",
  },
  {
    title: "RuggedTrail Blazer",
    price: 190,
    description: "Прочные шины для внедорожников с повышенной устойчивостью.",
  },
  {
    title: "StreetSport Pro",
    price: 220,
    description:
      "Шины для спортивных автомобилей с высокими показателями сцепления.",
  },
  {
    title: "CityStar Deluxe",
    price: 130,
    description:
      "Долговечные шины для городского транспорта с повышенным комфортом.",
  },
  {
    title: "TerrainMaster XT",
    price: 200,
    description: "Универсальные шины для экстремальных условий на дороге.",
  },
  {
    title: "EcoMax Fuel Saver",
    price: 170,
    description:
      "Экономичные шины для снижения расхода топлива и улучшенной устойчивости.",
  },
  {
    title: "WinterPro Grip",
    price: 160,
    description: "Зимние шины с превосходным сцеплением на льду и снегу.",
  },
  {
    title: "HighwayHero",
    price: 180,
    description:
      "Надежные шины для путешествий по шоссе с улучшенной долговечностью.",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Pagination />
      {/* <CardItem /> */}
    </div>
  );
}

export default App;
