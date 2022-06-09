import React, { useEffect, useState } from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-masonry-css";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../AppContext";
import SectionHeading from "./SectionHeading";

const ProjectCategories = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await axios.get(
        "https://api.unsplash.com/photos/?client_id=x_EPPWxj_kJzRC3oW7-_lgp8O0nxv_SHs15LYKgfFfY"
      );
      setImages(data);
    };

    getImages();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const { isLoading } = useAppContext();
  return (
    <section
      id="project-categories-list"
      style={{ height: isLoading && "100vh" }}
    >
      <SectionHeading
        heading="What We Do ?"
        subHeading1="Our Best"
        subHeading2="Projects"
      />
      <AnimatePresence>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image) => {
            return (
              <motion.div
                initial={{
                  scale: 0.8,
                }}
                animate={{
                  scale: 1,

                  transition: {
                    duration: 0.5,
                  },
                }}
                // exit={{ opacity: 0 }}
                className="masonry-card"
              >
                <img src={image.urls.small} class="img-fluid w-100" />
                <div className="project-category">
                  <h2 className="display-5 text-white text-center">
                    Category Name
                  </h2>
                </div>
              </motion.div>
            );
          })}
        </Masonry>
      </AnimatePresence>
    </section>
  );
};

export default ProjectCategories;
