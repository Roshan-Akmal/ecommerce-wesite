
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.boxSizing = "border-box";
  body.style.fontFamily = "Arial, sans-serif";

  const header = document.querySelector(".Header");
  if (header) {
    Object.assign(header.style, {
      backgroundColor: "#4c6fe2",
      color: "white",
      justifyContent: "space-between",
      padding: "15px 50px",
      textAlign: "center",
      display: "flex",
      fontSize: "20px"
    });
  }

  const navigation = document.querySelector(".navigation");
  if (navigation) {
    navigation.style.margin = "37px";
  }

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(a => {
    Object.assign(a.style, {
      color: "rgb(255, 255, 255)",
      textDecoration: "none",
      fontSize: "20px",
      paddingLeft: "30px"
    });

    a.addEventListener("mouseover", () => {
      a.style.color = "#000000";
    });
    a.addEventListener("mouseout", () => {
      a.style.color = "rgb(255, 255, 255)";
    });
  });

  const products = document.querySelector(".products");
  if (products) {
    Object.assign(products.style, {
      textAlign: "center",
      padding: "20px"
    });
  }

  const productList = document.querySelector(".product-list");
  if (productList) {
    Object.assign(productList.style, {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      justifyContent: "center",
      padding: "20px"
    });
  }

  const productItems = document.querySelectorAll(".product");
  productItems.forEach(product => {
    Object.assign(product.style, {
      background: "#fff",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center"
    });

    const img = product.querySelector("img");
    if (img) {
      Object.assign(img.style, {
        width: "50%",
        maxHeight: "300px",
        objectFit: "cover"
      });
    }
  });

  const productHeaders = document.querySelectorAll(".product h3");
  productHeaders.forEach(h3 => {
    Object.assign(h3.style, {
      margin: "10px 0",
      fontSize: "18px"
    });
  });

  const productPrices = document.querySelectorAll(".product p");
  productPrices.forEach(p => {
    Object.assign(p.style, {
      color: "#03103a",
      fontSize: "16px",
      fontWeight: "bold"
    });
  });

  const productTitle = document.querySelector(".products h2");
  if (productTitle) {
    Object.assign(productTitle.style, {
      fontSize: "30px",
      fontWeight: "bolder",
      color: "#000000"
    });
  }

  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    Object.assign(btn.style, {
      display: "inline-block",
      marginTop: "10px",
      padding: "8px 15px",
      background: "#4c6fe2",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px"
    });

    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "#03103a";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "#4c6fe2";
    });
  });

  const footer = document.querySelector("footer");
  if (footer) {
    Object.assign(footer.style, {
      backgroundColor: "#4c6fe2",
      color: "white",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    });
  }

  const footSections = document.querySelectorAll(".foot1, .foot2");
  footSections.forEach(section => {
    Object.assign(section.style, {
      display: "inline-block",
      width: "45%",
      verticalAlign: "top",
      textAlign: "left",
      padding: "5px"
    });
  });

  const footHeadings = document.querySelectorAll(".feet h4");
  footHeadings.forEach(h4 => {
    Object.assign(h4.style, {
      fontSize: "16px",
      marginBottom: "10px"
    });
  });

  const feetListItems = document.querySelectorAll(".feetlist li");
  feetListItems.forEach(li => {
    Object.assign(li.style, {
      margin: "5px 0",
      listStyle: "none",
      padding: "0"
    });
  });

  const feetListLinks = document.querySelectorAll(".feetlist li a");
  feetListLinks.forEach(a => {
    Object.assign(a.style, {
      color: "white",
      textDecoration: "none",
      fontSize: "17px"
    });

    a.addEventListener("mouseover", () => {
      a.style.textDecoration = "underline";
    });
    a.addEventListener("mouseout", () => {
      a.style.textDecoration = "none";
    });
  });

  const footParagraphs = document.querySelectorAll(".feet1 p, .feet2 p");
  footParagraphs.forEach(p => {
    Object.assign(p.style, {
      fontSize: "15px",
      marginTop: "5px"
    });
  });

  const footerParagraphs = footer?.querySelectorAll("p");
  footerParagraphs?.forEach(p => {
    Object.assign(p.style, {
      fontSize: "12px",
      marginTop: "20px",
      marginBottom: "4px"
    });
  });

  const enddP = document.querySelector(".endd p");
  if (enddP) {
    enddP.style.fontSize = "15px";
  }
});

function applyHomePageStyles() {
  // Body
  Object.assign(document.body.style, {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#000000"
  });

  // .Header
  document.querySelectorAll(".Header").forEach(el => {
    Object.assign(el.style, {
      backgroundColor: "#4c6fe2",
      color: "white",
      justifyContent: "space-between",
      padding: "15px 50px",
      textAlign: "center",
      display: "flex",
      fontSize: "20px"
    });
  });

  // .navigation
  document.querySelectorAll(".navigation").forEach(el => {
    el.style.margin = "37px";
  });

  // nav a
  document.querySelectorAll("nav a").forEach(a => {
    Object.assign(a.style, {
      color: "rgb(255, 255, 255)",
      textDecoration: "none",
      fontSize: "20px",
      paddingLeft: "30px"
    });
    a.addEventListener("mouseenter", () => a.style.color = "#03103a");
    a.addEventListener("mouseleave", () => a.style.color = "rgb(255, 255, 255)");
  });

  // .Start
  document.querySelectorAll(".Start").forEach(el => {
    Object.assign(el.style, {
      textAlign: "center",
      padding: "10px 20px"
    });
  });

  // .Start h2
  document.querySelectorAll(".Start h2").forEach(h2 => {
    Object.assign(h2.style, {
      fontSize: "40px",
      color: "#000000"
    });
  });

  // .Start p
  document.querySelectorAll(".Start p").forEach(p => {
    Object.assign(p.style, {
      margin: "10px 0",
      fontSize: "20px",
      color: "#000000"
    });
  });

  // .btn
  document.querySelectorAll(".btn").forEach(btn => {
    Object.assign(btn.style, {
      display: "inline-block",
      backgroundColor: "#4c6fe2",
      color: "white",
      textDecoration: "none",
      marginTop: "10px",
      marginBottom: "5px",
      borderRadius: "5px",
      padding: "8px 15px"
    });
    btn.addEventListener("mouseenter", () => btn.style.backgroundColor = "#03103a");
    btn.addEventListener("mouseleave", () => btn.style.backgroundColor = "#4c6fe2");
  });

  // .products
  document.querySelectorAll(".products").forEach(el => {
    Object.assign(el.style, {
      textAlign: "center",
      padding: "20px"
    });
  });

  // .product-list
  document.querySelectorAll(".product-list").forEach(el => {
    Object.assign(el.style, {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      padding: "20px"
    });
  });

  // .product
  document.querySelectorAll(".product").forEach(el => {
    Object.assign(el.style, {
      background: "#fff",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center"
    });
  });

  // .product img
  document.querySelectorAll(".product img").forEach(img => {
    Object.assign(img.style, {
      width: "60%",
      maxHeight: "300px"
    });
  });

  // .product h3
  document.querySelectorAll(".product h3").forEach(h3 => {
    Object.assign(h3.style, {
      margin: "10px 0",
      fontSize: "18px"
    });
  });

  // .product p
  document.querySelectorAll(".product p").forEach(p => {
    Object.assign(p.style, {
      color: "#000000",
      fontSize: "16px",
      fontWeight: "bold"
    });
  });

  // footer
  document.querySelectorAll("footer").forEach(footer => {
    Object.assign(footer.style, {
      backgroundColor: "#4c6fe2",
      color: "white",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    });
  });

  // .foot1, .foot2
  document.querySelectorAll(".foot1, .foot2").forEach(el => {
    Object.assign(el.style, {
      display: "inline-block",
      width: "45%",
      verticalAlign: "top",
      textAlign: "left",
      padding: "5px"
    });
  });

  // .feet h4
  document.querySelectorAll(".feet h4").forEach(h4 => {
    Object.assign(h4.style, {
      fontSize: "16px",
      marginBottom: "10px"
    });
  });

  // .feetlist li
  document.querySelectorAll(".feetlist li").forEach(li => {
    Object.assign(li.style, {
      margin: "5px 0",
      listStyle: "none",
      padding: "0"
    });
  });

  // .feetlist li a
  document.querySelectorAll(".feetlist li a").forEach(a => {
    Object.assign(a.style, {
      color: "white",
      textDecoration: "none",
      fontSize: "17px"
    });
    a.addEventListener("mouseenter", () => a.style.textDecoration = "underline");
    a.addEventListener("mouseleave", () => a.style.textDecoration = "none");
  });

  // .feet1 p, .feet2 p
  document.querySelectorAll(".feet1 p, .feet2 p").forEach(p => {
    Object.assign(p.style, {
      fontSize: "15px",
      marginTop: "5px"
    });
  });

  // footer p
  document.querySelectorAll("footer p").forEach(p => {
    Object.assign(p.style, {
      fontSize: "12px",
      marginTop: "20px",
      marginBottom: "4px"
    });
  });

  // .endd p
  document.querySelectorAll(".endd p").forEach(p => {
    p.style.fontSize = "15px";
  });
}

document.addEventListener("DOMContentLoaded", applyHomePageStyles);

function applyProductPageStyles() {
    // Body
    Object.assign(document.body.style, {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
    });
  
    // .Header
    document.querySelectorAll(".Header").forEach(header => {
      Object.assign(header.style, {
        backgroundColor: "#4c6fe2",
        color: "white",
        justifyContent: "space-between",
        padding: "15px 50px",
        textAlign: "center",
        display: "flex",
        fontSize: "20px"
      });
    });
  
    // .navigation
    document.querySelectorAll(".navigation").forEach(nav => {
      nav.style.margin = "37px";
    });
  
    // nav a
    document.querySelectorAll("nav a").forEach(a => {
      Object.assign(a.style, {
        color: "rgb(255, 255, 255)",
        textDecoration: "none",
        fontSize: "20px",
        paddingLeft: "30px"
      });
  
      a.addEventListener("mouseenter", () => {
        a.style.color = "#03103a";
      });
      a.addEventListener("mouseleave", () => {
        a.style.color = "rgb(255, 255, 255)";
      });
    });
  
    // .product-container
    document.querySelectorAll(".product-container").forEach(container => {
      Object.assign(container.style, {
        display: "flex",
        maxWidth: "1100px",
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        margin: "40px auto",
        alignItems: "center"
      });
    });
  
    // .product-image img
    document.querySelectorAll(".product-image img").forEach(img => {
      Object.assign(img.style, {
        width: "100%",
        maxWidth: "350px",
        borderRadius: "10px"
      });
    });
  
    // .product-details
    document.querySelectorAll(".product-details").forEach(details => {
      details.style.marginLeft = "50px";
    });
  
    // h2
    document.querySelectorAll("h2").forEach(h2 => {
      Object.assign(h2.style, {
        fontSize: "36px",
        marginBottom: "10px",
        color: "#000000"
      });
    });
  
    // .price
    document.querySelectorAll(".price").forEach(price => {
      Object.assign(price.style, {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#03103a",
        marginBottom: "15px"
      });
    });
  
    // .buy-now
    document.querySelectorAll(".buy-now").forEach(button => {
      Object.assign(button.style, {
        backgroundColor: "#4c6fe2",
        border: "none",
        color: "rgb(255, 255, 255)",
        fontSize: "16px",
        textAlign: "center",
        width: "100%",
        marginTop: "5px"
      });
  
      // Hover effect
      button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#03103a";
      });
      button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#4c6fe2";
      });
    });
  
    // .care-list li
    document.querySelectorAll(".care-list li").forEach(li => {
      Object.assign(li.style, {
        fontSize: "15px",
        padding: "5px"
      });
    });
  }
  
  // Run after DOM is ready
  document.addEventListener("DOMContentLoaded", applyProductPageStyles);

function applyOutStyles() {
  // Body styles
  Object.assign(document.body.style, {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9"
  });

  // .Outt h1
  document.querySelectorAll(".Outt h1").forEach(h1 => {
    h1.style.textAlign = "center";
    h1.style.color = "#4c6fe2";
  });

  // .end a
  document.querySelectorAll(".end a").forEach(a => {
    Object.assign(a.style, {
      textAlign: "center",
      textDecoration: "none",
      color: "#ffffff",
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "5px",
      paddingRight: "5px",
      marginLeft: "20px",
      alignItems: "center",
      display: "inline-block"
    });
  });

  // .Back button
  document.querySelectorAll(".Back").forEach(btn => {
    Object.assign(btn.style, {
      backgroundColor: "#4c6fe2",
      border: "none",
      color: "rgb(255, 255, 255)",
      fontSize: "16px",
      textAlign: "center",
      width: "100%",
      marginTop: "5px"
    });

    // Hover effect
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "#03103a";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "#4c6fe2";
    });
  });
}

// Apply styles after DOM is ready
document.addEventListener("DOMContentLoaded", applyOutStyles);

function applyLoginStyles() {
  // Body styling
  Object.assign(document.body.style, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "700px",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333"
  });

  // Login container
  document.querySelectorAll(".login-container").forEach(container => {
    Object.assign(container.style, {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "400px",
      height: "400px"
    });
  });

  // h2
  document.querySelectorAll("h2").forEach(h2 => {
    h2.style.marginBottom = "50px";
  });

  // Email field
  document.querySelectorAll(".Email").forEach(el => {
    el.style.paddingBottom = "20px";
  });

  // input fields
  document.querySelectorAll("input").forEach(input => {
    Object.assign(input.style, {
      width: "70%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px"
    });
  });

  // Buttonn class
  document.querySelectorAll(".Buttonn").forEach(btn => {
    Object.assign(btn.style, {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4c6fe2",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      marginTop: "40px"
    });

    // Hover effect
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "#03103a";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "#4c6fe2";
    });
  });
}

// Apply styles after DOM content is loaded
document.addEventListener("DOMContentLoaded", applyLoginStyles);

function applyAboutPageStyles() {
    // Body styling
    Object.assign(document.body.style, {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
    });
  
    // Header
    document.querySelectorAll(".Header").forEach(el => {
      Object.assign(el.style, {
        backgroundColor: "#4c6fe2",
        color: "white",
        justifyContent: "space-between",
        padding: "15px 50px",
        textAlign: "center",
        display: "flex",
        fontSize: "20px",
      });
    });
  
    // Navigation
    document.querySelectorAll(".navigation").forEach(el => {
      el.style.margin = "37px";
    });
  
    // nav a
    document.querySelectorAll("nav a").forEach(a => {
      Object.assign(a.style, {
        color: "rgb(255, 255, 255)",
        textDecoration: "none",
        fontSize: "20px",
        paddingLeft: "30px",
      });
  
      a.addEventListener("mouseenter", () => {
        a.style.color = "#03103a";
      });
      a.addEventListener("mouseleave", () => {
        a.style.color = "rgb(255, 255, 255)";
      });
    });
  
    // info h1
    document.querySelectorAll(".info h1").forEach(h1 => {
      Object.assign(h1.style, {
        textAlign: "center",
        marginTop: "40px",
        marginBottom: "40px"
      });
    });
  
    // detail p
    document.querySelectorAll(".detail p").forEach(p => {
      Object.assign(p.style, {
        fontSize: "20px",
        paddingTop: "10px",
        marginLeft: "300px"
      });
    });
  
    // Footer
    document.querySelectorAll("footer").forEach(footer => {
      Object.assign(footer.style, {
        backgroundColor: "#4c6fe2",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
      });
    });
  
    // foot1 and foot2
    document.querySelectorAll(".foot1, .foot2").forEach(el => {
      Object.assign(el.style, {
        display: "inline-block",
        width: "45%",
        verticalAlign: "top",
        textAlign: "left",
        padding: "5px"
      });
    });
  
    // feet h4
    document.querySelectorAll(".feet h4").forEach(h4 => {
      Object.assign(h4.style, {
        fontSize: "16px",
        marginBottom: "10px"
      });
    });
  
    // feetlist li
    document.querySelectorAll(".feetlist li").forEach(li => {
      Object.assign(li.style, {
        margin: "5px 0",
        listStyle: "none",
        padding: "0"
      });
    });
  
    // feetlist li a
    document.querySelectorAll(".feetlist li a").forEach(a => {
      Object.assign(a.style, {
        color: "white",
        textDecoration: "none",
        fontSize: "17px"
      });
  
      a.addEventListener("mouseenter", () => {
        a.style.textDecoration = "underline";
      });
      a.addEventListener("mouseleave", () => {
        a.style.textDecoration = "none";
      });
    });
  
    // feet1 p, feet2 p
    document.querySelectorAll(".feet1 p, .feet2 p").forEach(p => {
      Object.assign(p.style, {
        fontSize: "15px",
        marginTop: "5px"
      });
    });
  
    // footer p
    document.querySelectorAll("footer p").forEach(p => {
      Object.assign(p.style, {
        fontSize: "12px",
        marginTop: "20px",
        marginBottom: "4px"
      });
    });
  
    // endd p
    document.querySelectorAll(".endd p").forEach(p => {
      p.style.fontSize = "15px";
    });
  }
  
  // Run styles after DOM content loads
  document.addEventListener("DOMContentLoaded", applyAboutPageStyles);

function applyFormStyles() {
    // Body Styles
    Object.assign(document.body.style, {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#000000"
    });
  
    // Header Styles
    document.querySelectorAll(".Header").forEach(el => {
      Object.assign(el.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#4c6fe2",
        color: "white",
        padding: "20px 50px"
      });
    });
  
    // Start1 h1
    document.querySelectorAll(".Start1 h1").forEach(el => {
      el.style.fontSize = "40px";
    });
  
    // Start2 h2
    document.querySelectorAll(".Start2 h2").forEach(el => {
      el.style.fontSize = "22px";
    });
  
    // Box styling
    document.querySelectorAll(".box").forEach(el => {
      Object.assign(el.style, {
        width: "400px",
        margin: "50px auto",
        padding: "30px",
        background: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center"
      });
    });
  
    // Label styling
    document.querySelectorAll(".label").forEach(el => {
      Object.assign(el.style, {
        fontSize: "18px",
        fontWeight: "bold"
      });
    });
  
    // Input fields with class "holder"
    document.querySelectorAll(".holder").forEach(el => {
      Object.assign(el.style, {
        width: "80%",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #e7e7e7",
        borderRadius: "5px",
        fontSize: "16px"
      });
    });
  
    // Button
    document.querySelectorAll(".button").forEach(button => {
      Object.assign(button.style, {
        width: "100%",
        padding: "12px",
        background: "#4c6fe2",
        color: "white",
        fontSize: "18px",
        border: "none",
        borderRadius: "5px",
        textDecoration: "none"
      });
  
      // Hover effect
      button.addEventListener("mouseenter", () => {
        button.style.background = "#03103a";
      });
  
      button.addEventListener("mouseleave", () => {
        button.style.background = "#4c6fe2";
      });
    });
  }
  
  // Call the function after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", applyFormStyles);

function applyStyles() {
    // Body
    Object.assign(document.body.style, {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#000000"
    });
  
    // Header
    document.querySelectorAll(".Header").forEach(el => {
      Object.assign(el.style, {
        backgroundColor: "#4c6fe2",
        color: "white",
        justifyContent: "space-between",
        padding: "15px 50px",
        textAlign: "center",
        display: "flex",
        fontSize: "20px"
      });
    });
  
    // Navigation
    document.querySelectorAll(".navigation").forEach(el => {
      Object.assign(el.style, {
        justifyContent: "space-between",
        textAlign: "center",
        display: "flex",
        margin: "37px"
      });
    });
  
    // nav links
    document.querySelectorAll("nav a").forEach(link => {
      Object.assign(link.style, {
        color: "rgb(255, 255, 255)",
        textDecoration: "none",
        fontSize: "20px",
        paddingLeft: "30px"
      });
  
      link.addEventListener("mouseover", () => link.style.color = "#03103a");
      link.addEventListener("mouseout", () => link.style.color = "rgb(255, 255, 255)");
    });
  
    // About Us Heading
    document.querySelectorAll(".aboutus h1").forEach(el => {
      Object.assign(el.style, {
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px"
      });
    });
  
    // Info and Heds
    document.querySelectorAll(".infos, .heds").forEach(el => {
      Object.assign(el.style, {
        marginLeft: "300px",
        fontSize: "18px",
        marginRight: "300px",
        textAlign: "left"
      });
    });
  
    // Additional info spacing
    document.querySelectorAll(".infos").forEach(el => {
      el.style.lineHeight = "1.8";
    });
  
    document.querySelectorAll(".heds").forEach(el => {
      el.style.paddingTop = "10px";
    });
  
    // List items
    document.querySelectorAll("li").forEach(li => {
      li.style.paddingBottom = "15px";
    });
  
    // Footer
    document.querySelectorAll("footer").forEach(footer => {
      Object.assign(footer.style, {
        backgroundColor: "#4c6fe2",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
      });
    });
  
    // Footer sections
    document.querySelectorAll(".foot1, .foot2").forEach(el => {
      Object.assign(el.style, {
        display: "inline-block",
        width: "45%",
        verticalAlign: "top",
        textAlign: "left",
        padding: "5px"
      });
    });
  
    // Footer headings
    document.querySelectorAll(".feet h4").forEach(h4 => {
      Object.assign(h4.style, {
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: "10px"
      });
    });
  
    // Footer list styles
    document.querySelectorAll(".feetlist ul").forEach(ul => {
      ul.style.listStyle = "none";
      ul.style.padding = "0";
    });
  
    document.querySelectorAll(".feetlist ul li").forEach(li => {
      li.style.margin = "5px 0";
    });
  
    document.querySelectorAll(".feetlist ul li a").forEach(a => {
      Object.assign(a.style, {
        color: "white",
        textDecoration: "none",
        fontSize: "17px"
      });
  
      a.addEventListener("mouseover", () => a.style.textDecoration = "underline");
      a.addEventListener("mouseout", () => a.style.textDecoration = "none");
    });
  
    document.querySelectorAll(".feet1 p, .feet2 p").forEach(p => {
      Object.assign(p.style, {
        fontSize: "15px",
        marginTop: "5px"
      });
    });
  
    document.querySelectorAll("footer p").forEach(p => {
      Object.assign(p.style, {
        fontSize: "12px",
        marginTop: "20px",
        marginBottom: "4px"
      });
    });
  
    document.querySelectorAll(".endd p").forEach(p => {
      p.style.fontSize = "15px";
    });
  }
  
  // Apply styles when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", applyStyles);
