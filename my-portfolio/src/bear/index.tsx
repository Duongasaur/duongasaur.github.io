import React from "react";
import "./bear.scss";

export const GummyBear = () => {
  return (
    <section className="visualizer">
      <div className="bear">
        <div className="torso">
          <div className="stars">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                className="constellation"
                key={i}
                style={{
                  top: Math.random() * 260,
                  left: Math.random() * 160,
                  transform: `scale(${0.6 * Math.random()})`,
                  opacity: 0.6 + Math.random() * 0.4,
                }}
              >
                +
              </div>
            ))}
          </div>
        </div>
        <div className="head">
          <div className="stars">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                className="constellation"
                key={i}
                style={{
                  top: Math.random() * 80,
                  left: Math.random() * 160,
                  transform: `scale(${0.4 * Math.random()})`,
                  opacity: 0.6 + Math.random() * 0.4,
                }}
              >
                +
              </div>
            ))}
          </div>
          <div className="ears" />
          <div className="ears" />
          <div className="face">
            <div className="eyes" />
            <div className="snout">
              <div className="nose" />
              <div className="mouth">
                <span>꒰</span>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="arm" />
          <div className="belly">
            <div className="tummy" />
          </div>
          <div className="arm" />
          <div className="leg" />
          <div />
          <div className="leg" />
        </div>
      </div>
    </section>
  );
};
