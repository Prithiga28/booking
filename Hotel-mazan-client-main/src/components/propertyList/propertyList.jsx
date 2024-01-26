import axios from "axios";
import { useEffect, useState } from "react";
import "./propertyList.css";

const PropertyList = () => {
  const [data, setData] = useState([])
  // console.log(data[0])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://hotel-server-beryl.vercel.app/hotel/countByType')
        // console.log(res)
        setData(res.data)

      } catch (e) {
        console.log(e)

      }
    }
    fetchData()
  }, [])

  // DATA FETCH LOADER
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, [3000])
    return () => clearTimeout(timeout)
  })

  const images = [
    "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://e1.pxfuel.com/desktop-wallpaper/191/900/desktop-wallpaper-new-york-apartment-luxury-apartment.jpg",
    "https://c4.wallpaperflare.com/wallpaper/814/350/568/spa-beach-hotel-infinity-pool-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/575/667/599/trees-design-house-lawn-wallpaper-preview.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ]

  return (
    <div className="pList container mt-5  pt-4">
      {loading ? (
        "loading, please wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h4>{data[i]?.type}</h4>
                  <h6>{data[i]?.count} {data[i]?.type}</h6>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
