import React from "react";
import { Link, Route, Routes, useParams, useNavigate } from "react-router-dom";

const veri = [
  {
    id: 0,
    category: "Maincart",
    product: "MSI",
    price: 5000,
    explanation: "MSI maincart 3 each DDR5 Slot etc...",
  },
  {
    id: 1,
    category: "Harddisc",
    product: "Western Digital",
    price: 2000,
    explanation: "Western Digital 500GB etc...",
  },
  {
    id: 2,
    category: "Screen Card",
    product: "Nvdia",
    price: 15000,
    explanation: "8 Gb Memory etc...",
  },
  {
    id: 3,
    category: "Mouse",
    product: "Nvdia",
    price: 100,
    explanation: "Bluetooth etc...",
  },
];

const Product = () => {
  let { path, url } = useNavigate();
  return (
    <div className="container">
      <div className="alert alert-primary" role="alert">
        <h3 className="text-center"> Welcome to the Product Page </h3>

        <div className="container">
          <div className="row">
            {veri.map((item) => {
              return (
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title"> {item.category} </h5>
                      <p className="card-text">{item.product}</p>
                      <Link
                        to={`${url}/${item.id}`}
                        className="btn btn-primary"

                      >
                        Go to Detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
    </div>
  );
};



export default Product;
