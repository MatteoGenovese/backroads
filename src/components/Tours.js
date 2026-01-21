import React from "react";
import Title from "./Title";
import { tours } from "../data/data";
import Tour from "./Tour";

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title normalText="featured" highlightedText="tours" />

            <div className="section-center featured-center">
                {tours.map((tour) => {
                    return <Tour tour={tour} />;
                })}
            </div>
        </section>
    );
};

export default Tours;
