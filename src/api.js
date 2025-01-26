import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";

/** API Class
 *
 * Static class handling requests to the Jobly API.
 * This keeps API logic centralized, preventing scattered API calls across components.
 *
 */
class JoblyApi {
  // The token for authenticating with the API will be stored here.
  static token;

  /** Generic API request function */
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = JoblyApi.token ? { Authorization: `Bearer ${JoblyApi.token}` } : {};
    const params = method === "get" ? data : {};

    try {
      const response = await axios({ url, method, data, params, headers });
      console.log("API Response:", response.data);
      return response.data;
    } catch (err) {
      let message = "Unknown API error";
      if (err.response && err.response.data && err.response.data.error) {
        message = err.response.data.error.message;
      }
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** Set token for authentication */
  static setToken(token) {
    JoblyApi.token = token;
    localStorage.setItem("jobly-token", token);
  }

  /** Get details on a company by handle */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies (or search by name) */
  static async getCompanies(searchTerm = "") {
    let res = await this.request("companies", searchTerm ? { name: searchTerm } : {});
    return res.companies;
  }

  /** Get all jobs (or search by title) */
  static async getJobs(searchTerm = "") {
    let res = await this.request("jobs", searchTerm ? { title: searchTerm } : {});
    return res.jobs;
  }

  /** Login user and return token */
  static async login(username, password) {
    let res = await this.request("auth/token", { username, password }, "post");
    JoblyApi.setToken(res.token);
    return res.token;
  }

  /** Signup new user and return token */
  static async signup(userData) {
    let res = await this.request("auth/register", userData, "post");
    JoblyApi.setToken(res.token);
    return res.token;
  }

  /** Get current user details */
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Update user profile */
  static async updateProfile(username, userData) {
    let res = await this.request(`users/${username}`, userData, "patch");
    return res.user;
  }


  /** Apply to a job */
  static async applyToJob(username, jobId) {
    return await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
  }
}

// Temporary hardcoded token for testing (remove this later when implementing authentication)
JoblyApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2Vy" +
  "IiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;




