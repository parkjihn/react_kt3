export default function Header() {
    const scrollToFooter = () => {
      document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div className="header">
        <h1>Product Catalog</h1>
        <button onClick={scrollToFooter}>Go to Footer</button>
      </div>
    );
  }
  