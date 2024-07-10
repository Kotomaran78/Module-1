// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default {
//   webpack: {
//     alias: {
//       "@components": path.resolve(__dirname, "src/components/"),
//       "@pages": path.resolve(__dirname, "src/pages/"),
//       "@styles": path.resolve(__dirname, "src/styles/"),
//       "@assets": path.resolve(__dirname, "src/assets/")
//     }
//   }
// };



const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@assets': path.resolve(__dirname, 'src/assets/')
    }
  }
};

