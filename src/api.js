
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";

// /** API Class
//  *
//  * Static class handling requests to the Jobly API.
//  * This keeps API logic centralized, preventing scattered API calls across components.
//  *
//  */
// class JoblyApi {
//   // The token for authenticating with the API will be stored here.
//   static token;

//   /** Generic API request function */
//   static async request(endpoint, data = {}, method = "get") {
//     console.debug("API Call:", endpoint, data, method);

//     const url = `${BASE_URL}/${endpoint}`;
//     const headers = JoblyApi.token ? { Authorization: `Bearer ${JoblyApi.token}` } : {};
//     const params = method === "get" ? data : {};

//     try {
//       const response = await axios({ url, method, data, params, headers });
//       console.log("API Response:", response.data);
//       return response.data;
//     } catch (err) {
//       let message = "Unknown API error";
//       if (err.response && err.response.data && err.response.data.error) {
//         message = err.response.data.error.message;
//       }
//       throw Array.isArray(message) ? message : [message];
//     }
//   }

//   /** Set token for authentication */
//   static setToken(token) {
//     JoblyApi.token = token;
//     localStorage.setItem("jobly-token", token);
//   }

//   /** Get details on a company by handle */
//   static async getCompany(handle) {
//     let res = await this.request(`companies/${handle}`);
//     return res.company;
//   }

//   /** Get all companies (or search by name) */
//   static async getCompanies(searchTerm = "") {
//     let res = await this.request("companies", searchTerm ? { name: searchTerm } : {});
//     return res.companies;
//   }

//   /** Get all jobs (or search by title) */
//   static async getJobs(searchTerm = "") {
//     let res = await this.request("jobs", searchTerm ? { title: searchTerm } : {});
//     return res.jobs;
//   }

//   //** Login user and return token */
// static async login(username, password) {
//   console.log("Attempting login:", { username, password }); // Debugging log
//   try {
//     let res = await this.request("auth/token", { username, password }, "post");
//     console.log("Login successful:", res.token); // Debugging log
//     JoblyApi.setToken(res.token);
//     return res.token;
//   } catch (err) {
//     console.error("API Login Error:", err);
//     throw err;
//   }
// }



//   /** Signup new user and return token */
//   static async signup(userData) {
//     let res = await this.request("auth/register", userData, "post");
//     JoblyApi.setToken(res.token);
//     return res.token;
//   }

//   /** Get current user details */
//   static async getCurrentUser(username) {
//     let res = await this.request(`users/${username}`);
//     return res.user;
//   }

//   /** Update user profile */
//   static async updateProfile(username, userData) {
//     let res = await this.request(`users/${username}`, userData, "patch");
//     return res.user;
//   }


//   /** Apply to a job */
//   static async applyToJob(username, jobId) {
//     return await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
//   }
// }

// // Temporary hardcoded token for testing (remove this later when implementing authentication)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2Vy" +
//   "IiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

// export default JoblyApi;

// -----------------------------------------------
// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL || "https://jobly-backend-wf07.onrender.com";

// /** API Class
//  *
//  * Static class handling requests to the Jobly API.
//  * This keeps API logic centralized, preventing scattered API calls across components.
//  *
//  */
// class JoblyApi {
//   // The token for authenticating with the API will be stored here.
//   static token;

//   /** Generic API request function */
//   static async request(endpoint, data = {}, method = "get") {
//     console.debug("🔵 API Call:", endpoint, data, method);

//     const url = `${BASE_URL}/${endpoint}`;
//     const headers = JoblyApi.token ? { Authorization: `Bearer ${JoblyApi.token}` } : {};
//     const params = method === "get" ? data : {};

//     try {
//       const response = await axios({ url, method, data, params, headers });
//       console.log("✅ API Response:", response.data);
//       return response.data;
//     } catch (err) {
//       console.error("❌ API Error:", err.response ? err.response.data : err);
//       let message = "Unknown API error";
//       if (err.response && err.response.data && err.response.data.error) {
//         message = err.response.data.error.message;
//       }
//       throw Array.isArray(message) ? message : [message];
//     }
//   }

//   /** Set token for authentication */
//   static setToken(token) {
//     JoblyApi.token = token;
//     localStorage.setItem("jobly-token", token);
//   }

//   /** Get details on a company by handle */
//   static async getCompany(handle) {
//     let res = await this.request(`companies/${handle}`);
//     return res.company;
//   }

//   /** Get all companies (or search by name) */
//   static async getCompanies(searchTerm = "") {
//     let res = await this.request("companies", searchTerm ? { name: searchTerm } : {});
//     return res.companies;
//   }

//   /** Get all jobs (or search by title) */
//   static async getJobs(searchTerm = "") {
//     let res = await this.request("jobs", searchTerm ? { title: searchTerm } : {});
//     return res.jobs;
//   }

//   /** Login user and return token */
//   static async login(username, password) {
//     console.log("🔵 Attempting login with:", { username, password });

//     try {
//       let res = await this.request("auth/token", { username, password }, "post");
//       console.log("✅ Login successful, received token:", res.token);
//       JoblyApi.setToken(res.token);
//       return res.token;
//     } catch (err) {
//       console.error("❌ API Login Error:", err);
//       throw err;
//     }
//   }

//   /** Signup new user and return token */
//   static async signup(userData) {
//     try {
//       let res = await this.request("auth/register", userData, "post");
//       console.log("✅ Signup successful, received token:", res.token);
//       JoblyApi.setToken(res.token);
//       return res.token;
//     } catch (err) {
//       console.error("❌ API Signup Error:", err);
//       throw err;
//     }
//   }

//   /** Get current user details */
//   static async getCurrentUser(username) {
//     let res = await this.request(`users/${username}`);
//     return res.user;
//   }

//   /** Update user profile */
//   static async updateProfile(username, userData) {
//     let res = await this.request(`users/${username}`, userData, "patch");
//     return res.user;
//   }

//   /** Apply to a job */
//   static async applyToJob(username, jobId) {
//     return await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
//   }
// }

// // Retrieve token from localStorage if available (ensures persistence)
// JoblyApi.token = localStorage.getItem("jobly-token") || null;

// export default JoblyApi;



import axios from "axios";

// Use environment variable for backend URL or default to Render backend
const BASE_URL = import.meta.env.VITE_BASE_URL || "https://jobly-backend-wf07.onrender.com";

/** API Class
 * Static class to handle requests to the Jobly API.
 */
class JoblyApi {
  // The token for API authentication
  static token = localStorage.getItem("jobly-token") || null;

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
      console.error("API Error:", err.response ? err.response.data : err);
      let message = err.response?.data?.error?.message || "Unknown API error";
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** Store token in memory and localStorage */
  static setToken(token) {
    console.log("Storing token:", token);  // Debugging log
    JoblyApi.token = token;
    localStorage.setItem("jobly-token", token);
    console.log("Token saved in localStorage:", localStorage.getItem("jobly-token")); // Confirm saved
  }
  

  /** Login user and return token */
  static async login(username, password) {
    console.log("Attempting login with:", { username, password });  // Debugging log
    try {
      let res = await this.request("auth/token", { username, password }, "post");
      console.log("Login successful! Token received:", res.token);  // Debugging log
      JoblyApi.setToken(res.token);  
      return res.token;
    } catch (err) {
      console.error("API Login Error:", err);
      throw err;
    }
  }
  
  /** Signup new user and return token */
  static async signup(userData) {
    console.log("Signing up user:", userData);
    try {
      let res = await this.request("auth/register", userData, "post");
      console.log("Signup successful! Token:", res.token);
      JoblyApi.setToken(res.token);
      return res.token;
    } catch (err) {
      console.error("API Signup Error:", err);
      throw err;
    }
  }

  /** Get current user details */
  static async getCurrentUser(username) {
    console.log("Fetching current user:", username);
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Update user profile */
  static async updateProfile(username, userData) {
    console.log("Updating profile for:", username);
    let res = await this.request(`users/${username}`, userData, "patch");
    return res.user;
  }

  /** Get all companies (or search by name) */
  static async getCompanies(searchTerm = "") {
    console.log("Fetching companies with search term:", searchTerm);
    let res = await this.request("companies", searchTerm ? { name: searchTerm } : {});
    return res.companies;
  }

  /** Get details on a single company */
  static async getCompany(handle) {
    console.log("Fetching company details for:", handle);
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all jobs (or search by title) */
  static async getJobs(searchTerm = "") {
    console.log("Fetching jobs with search term:", searchTerm);
    let res = await this.request("jobs", searchTerm ? { title: searchTerm } : {});
    return res.jobs;
  }

  /** Apply to a job */
  static async applyToJob(username, jobId) {
    console.log("Applying user:", username, "to job:", jobId);
    return await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
  }
}

export default JoblyApi;
