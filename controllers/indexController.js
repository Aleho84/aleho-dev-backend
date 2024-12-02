import logger from "../utils/logger.js";

// Render index page
export const getIndexPage = async (req, res, next) => {
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

// Prueba de acceso
export const accessTest = async (req, res, next) => {
  try {
    const { user } = req;
    res.status(200).json({ message: "Test de acceso exitoso!", user });
  } catch (error) {
    next(error);
  }
};
