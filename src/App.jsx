import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Categorypage from "./pages/categorypage/Categorypage";
import Productdetail from "./pages/productdetail/Productdetail";
import Contactpage from "./pages/contactpage/Contactpage";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      img: "/imgs/productImg1.png",
      title: "Telefonlar",
      price: "105.00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum dicta possimus atque magnam similique voluptatem earum facilis tempore quam!",
      imgs: [
        "https://images.unsplash.com/photo-1567581935884-3349723552ca?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1730212426666-40145f03d0fa?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1727093493826-ef3de5a38ce8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://cdn.pixabay.com/photo/2024/02/24/19/00/phone-8594571_1280.jpg",
      ],
    },
    {
      id: 2,
      img: "https://frankfurt.apollo.olxcdn.com/v1/files/bb857go4zdnl3-UZ/image;s=800x800",
      title: "Oyoq kiyimlar",
      price: "45.00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum dicta possimus atque magnam similique voluptatem earum facilis tempore quam!",
      imgs: [
        "https://frankfurt.apollo.olxcdn.com/v1/files/g6940labx8iy-UZ/image",
        "https://frankfurt.apollo.olxcdn.com/v1/files/4ezkiehiflpk3-UZ/image",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxH1pAvVrnsJ2GXdTmiAm3tuF5GpAnUog_g&s",
        "https://frankfurt.apollo.olxcdn.com/v1/files/9ks2qt0e23fz2-UZ/image",
      ],
    },
    {
      id: 3,
      img: "https://frankfurt.apollo.olxcdn.com/v1/files/7j9aq6o1jo3g3-UZ/image",
      title: "Palto",
      price: "65.00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum dicta possimus atque magnam similique voluptatem earum facilis tempore quam!",
      imgs: [
        "https://i5.walmartimages.com/seo/POROPL-Men-Trench-Coat-Men-Winter-Casual-Solid-Turndown-Keep-Warm-Single-breasted-Windbreaker-Coat-For-Men_0ff7a33a-1a10-435c-b1f1-490ec0d07ba4.de1cd4e23c291ba38805465e0000634b.jpeg",
        "https://frankfurt.apollo.olxcdn.com/v1/files/imy1fgelf1ld3-UZ/image",
        "https://images-cdn.ubuy.co.in/645da07ed10b35460419e16b-lovskoo-men-casual-slim-fit-solid.jpg",
        "https://frankfurt.apollo.olxcdn.com/v1/files/wed88o9ysyfp2-UZ/image;s=1080x1077",
      ],
    },
    {
      id: 4,
      img: "https://tfstorage.buchet.uz/api/files/2024/11/20/1732133487737-image_cropper_80EDA108-0441-44B1-80AB-47A1805663F4-11466-0000065FB359866D.webp",
      title: "Parfimeriya",
      price: "35.00",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum dicta possimus atque magnam similique voluptatem earum facilis tempore quam!",
      imgs: [
        "https://buchet.uz/_next/image?url=https%3A%2F%2Ftfstorage.buchet.uz%2Fapi%2Ffiles%2F2024%2F12%2F03%2F1733240225730-image_cropper_2A319F95-FE34-4F16-8297-7E8136FA125E-4946-000002ED99F3AAC4.webp&w=1200&q=75",
        "https://frankfurt.apollo.olxcdn.com/v1/files/71jhc82toayh3-UZ/image",
        "https://daryo.uz/image/1920x1080?url=https%3A%2F%2Fdata.daryo.uz%2Fmedia%2F2022%2F06%2FIMG_7226.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE1Xptz0bbg4-3nY6ZHij-nXZxxHujYm8wA&s",
      ],
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage data={data} />} />
          <Route path="/categorypage" element={<Categorypage data={data} />} />
          <Route
            path="/productdetail/:id"
            element={<Productdetail data={data} />}
          />
          <Route path="/contactpage" element={<Contactpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
