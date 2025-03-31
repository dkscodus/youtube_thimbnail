import React, { useState, useEffect } from "react";

const thumbnails = [
  { id: 1, title: "썸네일 A", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTNfNjAg%2FMDAxNTk3MzE4OTg2NDM4.v_2qx29Ixw1s_ogiub6VGN1B70QgvtU4bS9Vz_5QgeAg.Q78aijNrBIHmuZGkl5PX_lhk413LpdPJ3rapeYVrtZEg.JPEG.jye5732%2F%25BA%25D2%25B7%25FB%25B0%25F8%25B0%25B3.jpg&type=sc960_832" },
  { id: 2, title: "썸네일 B", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODExMDZfMTYx%2FMDAxNTQxNTA4ODY5MzAz.ib04yMNRS4-VAU83-8puLj3Qj2WOdMFqw5Srpt97e1Ag._XOoosBvQC_0MkB9kIGqXjazlXPqhpPqfY5FnoegvJ4g.JPEG.cross355%2F%25C7%25D6%25B5%25B5%25B1%25D4%25BD%25E6%25B3%25D7%25C0%25CF_%25BD%25B4%25C6%25DB%25BA%25F1%25BF%25CD.JPG&type=sc960_832" },
  { id: 3, title: "썸네일 C", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEyMTFfMzUg%2FMDAxNTQ0NDk4NjI3NzAy.mwrGoEz5huNqWiUwg3vW-jEjBVV0Z3LC2xEVg6Tkvbwg.ZmxjkH3Wxz9LHVlaXjFnCbm8hJfoSYeu8F5jr6k42ygg.JPEG.cross355%2F%25BB%25F5%25BF%25EC%25C6%25BC%25BA%25F1%25B6%25DF%25B6%25DF%25B6%25DF%25B6%25DFX%25C6%25F7%25B3%25AA%25B4%25EB%25C8%25B8%25C3%25E2%25C0%25FC.JPG&type=sc960_832" },
  { id: 4, title: "썸네일 D", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MjhfMTc1%2FMDAxNTI3NDMzMzIwMDg1.GfuuN4qjukMn3dwZPWv8BOvgwNZji5h1pb5uiZYgBtAg.fkwK7SBlnBZOs1owy1abrSy12w_dnxvL3qYHiKONtIEg.JPEG.cross355%2F%25C7%25D6%25B5%25B5%25B1%25D4%25C0%25AF%25C6%25A9%25BA%25EA%25BD%25E6%25B3%25D7%25C0%25CF_%25B1%25E8%25C7%25CF%25BF%25C2_%25C6%25C0%25B4%25EB%25C7%25A5%25B0%25E1%25C1%25A4%25C0%25FC.JPG&type=sc960_832" },
  { id: 5, title: "썸네일 E", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMDJfMjE3%2FMDAxNTM4NDc3NzA2MTY4.sz2VXETVQZy7CLSVsc1-QE8FXQHeZl4G-eu3CoBSv4cg.EWN6RG1fee5LksJHlenTB6cAT9kU2kWIhH__OwNNBtIg.JPEG.cross355%2F%25C3%25CA%25B1%25FA%25BA%25F1%25BD%25E6%25B3%25D7%25C0%25CF_GD%25B5%25FB%25B6%25F3%25C0%25E2%25B1%25E2_%25C5%25A9%25B7%25B9%25BF%25EB.JPG&type=sc960_832" },
];

const ThumbnailList = () => {
  const [shuffledThumbnails, setShuffledThumbnails] = useState([]);

  // 썸네일 섞는 거 
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setShuffledThumbnails(shuffleArray(thumbnails));
  }, []);

  // 사용자가 뭐 클릭했는지 기록하긔윤 
  const handleClick = (id, title) => {
    console.log(`Clicked: ${title}`);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px", maxWidth: "400px", margin: "auto" }}>
      {shuffledThumbnails.map((thumb) => (
        <div key={thumb.id} style={{ textAlign: "center" }}>
          <img 
            src={thumb.img} 
            alt={thumb.title} 
            width="100%" 
            style={{ borderRadius: "10px", cursor: "pointer" }} 
            onClick={() => handleClick(thumb.id, thumb.title)}
          />
          <p>{thumb.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ThumbnailList;
