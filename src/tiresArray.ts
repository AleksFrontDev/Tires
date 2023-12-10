export interface Tires {
  id:number;
  title:string;
  rise:boolean;
  seezon:string;
  img:string;
  price:number;
  description:string
}

const tiresArray: Tires[] = [
  {
    id: 0,
    title: "RoadMaster Plus",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/a71/2cf/thumb_198153_190_200_0_0_crop.jpg",
    price: 120,
    description: "Шины для повседневного использования на городских дорогах.",
  },
  {
    id: 1,
    title: "All-Terrain Beag",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/db2/478/thumb_198191_190_200_0_0_crop.jpg",
    price: 180,
    description: "Универсальные шины для бездорожья и пересеченной местности.",
  },
  {
    id: 2,
    title: "EcoDrive Saver",
    rise: false,
    seezon: "Летняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/40b/c05/thumb_198206_190_200_0_0_crop.jpg",
    price: 100,
    description:
      "Экономичные шины с улучшенным сцеплением для экологичного вождения.",
  },
  {
    id: 3,
    title: "WinterFrost Grip",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/be2/880/thumb_198231_190_200_0_0_crop.jpg",
    price: 150,
    description: "Зимние шины с отличной устойчивостью на скользких дорогах.",
  },
  {
    id: 4,
    title: "MaxMileage Runner",
    rise: false,
    seezon: "Летняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/85f/390/thumb_198238_190_200_0_0_crop.jpg",
    price: 140,
    description: "Шины с максимальным пробегом для длительного использования.",
  },
  {
    id: 5,
    title: "CityCruiser Touring",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/d97/a04/thumb_198622_190_200_0_0_crop.jpg",
    price: 130,
    description: "Шины для комфортной езды по городским улицам.",
  },
  {
    id: 6,
    title: "Off-Road Dominator",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/192/0ef/thumb_198834_190_200_0_0_crop.jpg",
    price: 190,
    description: "Прочные шины для бездорожья с повышенной проходимостью.",
  },
  {
    id: 7,
    title: "Performance Plus",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/021/a8a/thumb_198880_190_200_0_0_crop.jpg",
    price: 200,
    description:
      "Шины для высокой производительности и улучшенного сцепления с дорогой.",
  },
  {
    id: 8,
    title: "RainMaster",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/a3a/1e2/thumb_198946_190_200_0_0_crop.jpg",
    price: 160,
    description: "Шины с улучшенной устойчивостью на дождливых дорогах.",
  },
  {
    id: 9,
    title: "FuelSaver Elite",
    rise: false,
    seezon: "Летняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/5e8/91a/thumb_198999_190_200_0_0_crop.jpg",
    price: 170,
    description:
      "Эффективные шины для экономии топлива и минимального сопротивления качению.",
  },
  {
    id: 10,
    title: "UltraGrip Snow",
    rise: false,
    seezon: "Летняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/1a3/133/thumb_198992_190_200_0_0_crop.jpg",
    price: 210,
    description:
      "Шины с высоким уровнем сцепления для безопасной езды на снегу и льду.",
  },
  {
    id: 11,
    title: "ComfortCruise",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/533/5d0/thumb_199078_190_200_0_0_crop.jpg",
    price: 150,
    description:
      "Комфортные шины с улучшенной амортизацией для плавной поездки.",
  },
  {
    id: 12,
    title: "RuggedTrail Blazer",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/a40/5cf/thumb_199109_190_200_0_0_crop.png",
    price: 190,
    description: "Прочные шины для внедорожников с повышенной устойчивостью.",
  },
  {
    id: 13,
    title: "StreetSport Pro",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/ddd/480/thumb_199357_190_200_0_0_crop.jpg",
    price: 220,
    description:
      "Шины для спортивных автомобилей с высокими показателями сцепления.",
  },
  {
    id: 14,
    title: "CityStar Deluxe",
    rise: false,
    seezon: "Летняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/2f1/551/thumb_204797_190_200_0_0_crop.jpg",
    price: 130,
    description:
      "Долговечные шины для городского транспорта с повышенным комфортом.",
  },
  {
    id: 15,
    title: "TerrainMaster XT",
    rise: false,
    seezon: "Летняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/477/b72/thumb_199775_190_200_0_0_crop.jpg",
    price: 200,
    description: "Универсальные шины для экстремальных условий на дороге.",
  },
  {
    id: 16,
    title: "EcoMax Fuel Saver",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/225/e80/thumb_204923_190_200_0_0_crop.jpg",
    price: 170,
    description:
      "Экономичные шины для снижения расхода топлива и улучшенной устойчивости.",
  },
  {
    id: 17,
    title: "WinterPro Grip",
    rise: false,
    seezon: "Летняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/4e4/d0e/thumb_206458_190_200_0_0_crop.jpg",
    price: 160,
    description: "Зимние шины с превосходным сцеплением на льду и снегу.",
  },
  {
    id: 18,
    title: "HighwayHero",
    rise: true,
    seezon: "Зимняя резина",
    img: "https://kolesa-66.ru/storage/app/uploads/public/RTI/107/c50/thumb_206658_190_200_0_0_crop.jpg",
    price: 180,
    description:
      "Надежные шины для путешествий по шоссе с улучшенной долговечностью.",
  },
];

export default tiresArray;
