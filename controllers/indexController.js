import logger from "../src/logger.js";

export const getIndexPage = async (req, res) => {
  try {
    res.render("index", {
      title: "Aleho-Dev",
      user: { name: "User", image: "./img/user.png" },
    });
  } catch (error) {
    logger.error(error);
    res.status(500).render("error", { error });
  }
};
