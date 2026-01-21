import React from "react";

//     {/* id: 1,
// date: "august 26th, 2020",
// title: "Tibet Adventure",
// text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
// location: "china",
// duration: "6 days",
// price: "$2100", */}

const Tour = ({ tour }) => {
    const { id, date, image, title, text, location, duration, price } = tour;
    return (
        <article className="tour-card" key={id}>
            <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                    <p>
                        <span>
                            <i className="fas fa-map"></i>
                        </span>
                        {location}
                    </p>
                    <p>{duration}</p>
                    <p>from {price}</p>
                </div>
            </div>
        </article>
    );
};

export default Tour;
