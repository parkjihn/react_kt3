function Stars({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = [];
  
    for (let i = 0; i < fullStars; i++) {
      totalStars.push(<span className="fa fa-star active" key={i}></span>);
    }
    if (hasHalfStar) {
      totalStars.push(<span className="fa fa-star-half-o active" key="half"></span>);
    }
    while (totalStars.length < 5) {
      totalStars.push(<span className="fa fa-star" key={totalStars.length}></span>);
    }
  
    return <div>{totalStars}</div>;
  }
  

export default Stars