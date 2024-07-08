import Image from "next/image";
import styles from './page.module.css';
import Link from 'next/link';
import KimImage from './Kim.jpg';
import JungImage from './Jung.jpg';
import KimdojaImage from './Kimdoja.jpg';
import LogorinaImage from './Logorina.jpg';
import VioletImage from './Violet.jpg';
import './globals.css';
import Script from 'next/script';

export default function Home() {
  return (
<>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
    <Link className="navbar-brand" href="/">
      <Image
        src={LogorinaImage}
        alt="Logo"
        width={50} // ปรับขนาดตามต้องการ
        height={50}
      />
    </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
        <li class="nav-item">
        <a href="#" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">SigIn</a>
        </li>
        <li class="nav-item">
        <a href="#" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">SigOut</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>

  <div className="container">

    <div className="row my-3">
      <div className="col-md-12 text-center bg-light p-5 border rounded">
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={KimImage} className="d-block w-100" alt="Kim" />
    </div>
    <div className="carousel-item">
      <Image src={JungImage} className="d-block w-100" alt="Jung" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </div>

    <div className="row mb-3 justify-content-center"> <div className="col-md-4">
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={KimdojaImage} className="card-img-top" alt="Kimdoja" width={286} height={180} />
            <div className="card-body">
                <h5 className="card-title">Kim</h5> 
                <p className="card-text">คิม ด็อกจาคือตัวเอกหลักของOmniscient Reader's Viewpointเขาเป็นนักอ่านคนเดียวของเว็บโนเวลเรื่องThree Ways to Survive in a Ruined Worldซึ่งเป็นเรื่องราวแฟนตาซีเกี่ยวกับวันสิ้นโลก</p>
                {/* เพิ่มเติมปุ่มหรือลิงก์หากต้องการ */}
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={LogorinaImage} className="card-img-top" alt="Logorina" width={286} height={180} />
            <div className="card-body">
                <h5 className="card-title">Rina</h5>
                <p className="card-text">เป็นตัวละครหลักในLove Live! Nijigasaki High School Idol Clubเธอเป็นนักเรียนชั้นปีที่ 1 ของNijigasaki High Schoolเธอเป็นสมาชิกของQU4RTZซึ่งเป็นกลุ่มย่อยของNijigakuสีประจำตัวของเธอคือสีขาวเหมือนกระดาษ แม้ว่าเธอจะแทนด้วยสีเทาก็ตาม</p>
                {/* เพิ่มเติมปุ่มหรือลิงก์หากต้องการ */}
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={VioletImage} className="card-img-top" alt="Violet" width={286} height={180} />
            <div className="card-body">
                <h5 className="card-title">Violet</h5>
                <p className="card-text">ไวโอเล็ต เอเวอร์การ์เดน เป็นชุดนวนิยายจากประเทศญี่ปุ่นประพันธ์โดย Kana Akatsuki และวาดภาพโดย Akiko Takase นิยายเรื่องนี้ได้รับรางวัลใหญ่ในประเภทนวนิยายจากงานเกียวโตแอนิเมชันอวอร์ดครั้งที่ห้าของเกียวโตแอนิเมชันในปี 2014 ซึ่งเป็นผลงานชิ้นแรกที่ได้รับรางวัลใหญ่ในสามประเภท เกียวโตแอนิเมชันตีพิมพ์ไลท์โนเวลเรื่องแรก</p>
                {/* เพิ่มเติมปุ่มหรือลิงก์หากต้องการ */}
            </div>
        </div>
        
    </div>
    
</div>
     
  </div>
</>
  );
}
