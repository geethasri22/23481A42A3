const axios = require("axios");

const Log = async (stack, level, packageName, message, token) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("SUCCESS:", response.data);
  } catch (error) {
    console.log("ERROR:", error.message);
  }
};

module.exports = Log;