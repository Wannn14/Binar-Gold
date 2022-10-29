import React from "react";
import iconcheck from "../assets/image/Group 53.svg";
import hapygirl from "../assets/image/img_service.svg";

const ourSer = () => {
  return (
    <>
      <section className="our-services" id="our-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="hapy-girl">
                <img src={hapygirl} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="deskripsi">
                <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                <p>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <ul>
                  <img src={iconcheck} alt="" />
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                </ul>
                <ul>
                  <img src={iconcheck} alt="" />
                  <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                </ul>
                <ul>
                  <img src={iconcheck} alt="" />
                  <li>Sewa Mobil Jangka Panjang Bulanan</li>
                </ul>
                <ul>
                  <img src={iconcheck} alt="" />
                  <li>Gratis Antar - Jemput Mobil di Bandara</li>
                </ul>
                <ul>
                  <img src={iconcheck} alt="" />
                  <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ourSer;
