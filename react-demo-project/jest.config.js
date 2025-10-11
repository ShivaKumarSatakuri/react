export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest", "^.+\\.tsx?$": "babel-jest", // handles TS and TSX files
  },
  moduleFileExtensions: ["js", "jsx","ts", "tsx"],
};
