// Libraru
import React from "react";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      <h1 className="icon" style={styles.title}>
        (ᴗ_ ᴗ。)
      </h1>
      <h2 style={styles.title}>404</h2>
      <p style={styles.text}>
        Oops, the page you're looking for cannot be found.
      </p>
    </motion.div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  icon: {
    width: "20rem",
    height: "20rem",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "5rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1.5rem",
    color: "#333",
  },
};

export default ErrorPage;
