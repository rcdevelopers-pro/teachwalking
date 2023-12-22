const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://dev.d3p1z9e7ao9s35.amplifyapp.com"
    : "http://localhost:3000";

export default baseUrl;
