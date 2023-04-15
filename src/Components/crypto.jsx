import { useState } from "react";
import module from "./crypto.module.css";

export default function Cryptocur() {
  const [qty, setQty] = useState();
  const data = [
    {
      name: "BTC",
      price: 25000,
      img: "https://i.ibb.co/3SMLrjs/bitcoin.png",
    },
    {
      name: "DOGE",
      price: 0.07,
      img: "https://i.ibb.co/WV5vNr2/dogecoin.png",
    },
    {
      name: "RIPPLE",
      price: 0.45,
      img: "https://i.ibb.co/ZMkV65r/ripple.png",
    },
  ];

  var CartData = JSON.parse(localStorage.getItem("cart")) || [];
  const handlebtn = (item) => {
    var obj = {
      name: item.name,
      price: item.price,
      qtydata: qty,
    };

    CartData.push(obj);

    localStorage.setItem("cart", JSON.stringify(CartData));
    alert("Add to Cart");
    window.location.reload();
  };

  return (
    <div>
      <div className={module.maindiv}>
        {data &&
          data.map((item) => (
            <div key={item.name}>
              <div className={module.mapData}>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div className={module.btn}>
                <input
                  type="number"
                  placeholder="Qty"
                  onChange={(e) => setQty(e.target.value)}
                />
                <button onClick={() => handlebtn(item)}>Add To Cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
