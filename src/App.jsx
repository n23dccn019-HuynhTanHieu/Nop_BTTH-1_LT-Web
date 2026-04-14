import './App.css'

function App() {
  const products = [
    { id: 1, name: "OPPO Reno15 F 5G", price: "11.690.000đ", img: "/images/sp1.webp" },
    { id: 2, name: "OPPO A6 Pro", price: "7.590.000đ", img: "/images/sp2.webp" },
    { id: 3, name: "OPPO A5i", price: "3.690.000đ", img: "/images/sp3.webp" },
    { id: 4, name: "OPPO Find X9 Pro", price: "22.990.000đ", img: "images/sp4.webp" },
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="navbar">
        <h1 className="logo">My-Shop</h1>
        <nav>
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Chào mừng đến với cửa hàng của chúng tôi</h2>
        <p>Khám phá bộ sưu tập mới nhất với giá ưu đãi.</p>
        <button className="btn-shop">Mua ngay</button>
      </section>

      {/* Product Grid */}
      <main>
        <h3 className="section-title">Sản phẩm nổi bật</h3>
        <div className="product-grid">
          {products.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
              <button className="btn-add">Thêm vào giỏ</button>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2026 My-Shop Project. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
