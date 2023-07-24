const fs = require("fs");

const jsonFilePath = "./../backend/artifacts/contracts/SHG.sol/SHG.json";
const jsFilePath = "./util.js";

// Read the JSON file
fs.readFile(jsonFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    // Extract the field value from the JSON
    const fieldValue = jsonData.abi;
    const fieldValueJSON = JSON.stringify(fieldValue);


    // Read the JavaScript file
    fs.readFile(jsFilePath, "utf8", (err, jsData) => {
      if (err) {
        console.error("Error reading JavaScript file:", err);
        return;
      }

    //   console.log("fieldValue ", fieldValueJSON);
      // Replace the target field value in the JavaScript file
      const updatedJsData = jsData.replace(
        /let shg_abi = JSON\.parse\(\s*'(.+?)'\s*\);/,
        `let shg_abi = JSON.parse('${fieldValueJSON}');`
      );

    //   console.log('updatedJsData', updatedJsData);
      // Write the updated JavaScript file
      fs.writeFile(jsFilePath, updatedJsData, "utf8", (err, data) => {
        if (err) {
          console.error("Error writing JavaScript file:", err);
        } else {
          console.log("Field value copied and updated successfully!");
        }
      });
    });
  } catch (jsonErr) {
    console.error("Error parsing JSON:", jsonErr);
  }
});
