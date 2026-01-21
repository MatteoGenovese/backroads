import React from "react";
import { services } from "../data/data";
import Service from "./Service";

const Services = () => {
    return (
        <section class="section services" id="services">
            <div class="section-title">
                <h2>
                    our <span>services</span>
                </h2>
            </div>
            <div class="section-center services-center">
                {services.map((service) => {
                    const { id, icon, title, text } = service;
                    return (
                        <Service
                            key={id}
                            icon={icon}
                            title={title}
                            text={text}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
