import React, { useEffect, useState } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyloadingImage/img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
function Herobanner() {
  //=============hooks==========
  const navigate = useNavigate();
  const [background, setbackground] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbackground(bg);
  }, [data]);

  //  ======  Methods=============
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity_layer"></div>

      <ContentWrapper>
        
          <div className="heroBannerContent">
            <span className="title">Welcome to Movie Bliss!</span>
            <span className="subTitle">
            "Lights dim, hearts light up – welcome to our movies hub!"<br/>
            "From classics to blockbusters, it's all here."
            </span>
            <div className="searchInput">
              <input
                type="text"
               placeholder="serachfor  a Movies or TV show"
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        
      </ContentWrapper>
    </div>
  );
}

export default Herobanner;
