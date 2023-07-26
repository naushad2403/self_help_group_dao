const fs = require("fs");

const jsonFilePath = "./../backend/artifacts/contracts/SHG.sol/SHG.json";
const jsFilePath = "./util.js";


const group_jsonFilePath = "./../backend/artifacts/contracts/Groups.sol/Groups.json";


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
          console.log("SHG value copied and updated successfully!");

          // Read the JSON file
          fs.readFile(group_jsonFilePath, "utf8", (err, data) => {
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
                  /let group_abi = JSON\.parse\(\s*'(.+?)'\s*\);/,
                  `let group_abi = JSON.parse('${fieldValueJSON}');`
                );

                //   console.log('updatedJsData', updatedJsData);
                // Write the updated JavaScript file
                fs.writeFile(jsFilePath, updatedJsData, "utf8", (err, data) => {
                  if (err) {
                    console.error("Error writing JavaScript file:", err);
                  } else {
                    console.log(
                      "Group value copied and updated successfully!"
                    );
                  }
                });
              });
            } catch (jsonErr) {
              console.error("Error parsing JSON:", jsonErr);
            }
          });
        }
      });
    });
  } catch (jsonErr) {
    console.error("Error parsing JSON:", jsonErr);
  }
});

