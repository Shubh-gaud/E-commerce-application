function Footer() {
  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer
        style={{
          backgroundColor: "#0d1b2a",
          color: "#ffffff",
          padding: "35px 20px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
            textAlign: "left",
          }}
        >
          {/* Brand */}
          <div>
            <h2 style={{ color: "#4cc9f0", marginBottom: "10px" }}>
              BuyNest
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#d1d5db" }}>
              BuyNest is your trusted e-commerce platform offering quality
              products at affordable prices.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h5 style={{ marginBottom: "10px" }}>Product Categories</h5>
            <p>Laptops</p>
            <p>Mobiles</p>
            <p>Electronics</p>
            <p>Fashion</p>
          </div>

          {/* Support */}
          <div>
            <h5 style={{ marginBottom: "10px" }}>Customer Support</h5>
            <p>Fast & Secure Payments</p>
            <p>Easy Returns</p>
            <p>24/7 Customer Assistance</p>
          </div>

          {/* Address */}
          <div>
            <h5 style={{ marginBottom: "10px" }}>Address</h5>
            <p>BuyNest Pvt. Ltd.</p>
            <p>Sector 62, Noida</p>
            <p>Uttar Pradesh, India</p>
          </div>
        </div>

        <hr
          style={{
            margin: "30px 0",
            borderColor: "#374151",
          }}
        />

        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#9ca3af",
          }}
        >
          © {new Date().getFullYear()} BuyNest. All rights reserved.
        </p>
      </footer>
      {/* ================= END FOOTER ================= */}
    </>
  );
}

export default Footer;
