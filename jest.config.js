const config = {
  transformIgnorePatterns: [
    "node_modules/(?!axios|@tanstack/react-query|react-intersection-observer)"
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
};

export default config;
