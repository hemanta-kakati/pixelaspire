import React from "react";

const Loading = () => {
  return (
    <section id="preloader-section">
      <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
          <div class="animation-preloader">
            <div class="spinner"></div>

            <div class="txt-loading">
              <span data-text-preloader="P" class="letters-loading">
                P
              </span>
              <span data-text-preloader="I" class="letters-loading">
                I
              </span>
              <span data-text-preloader="X" class="letters-loading">
                X
              </span>
              {/* <span data-text-preloader="" class="letters-loading">
                &nbsp
              </span> */}
              <span data-text-preloader="E" class="letters-loading">
                E
              </span>
              <span data-text-preloader="L" class="letters-loading">
                L
              </span>
              <span data-text-preloader="A" class="letters-loading">
                A
              </span>
              <span data-text-preloader="S" class="letters-loading">
                S
              </span>
              <span data-text-preloader="P" class="letters-loading">
                P
              </span>
              <span data-text-preloader="I" class="letters-loading">
                I
              </span>
              <span data-text-preloader="R" class="letters-loading">
                R
              </span>
              <span data-text-preloader="E" class="letters-loading">
                E
              </span>
            </div>
          </div>

          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
