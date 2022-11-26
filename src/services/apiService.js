import BaseService from "./baseService";

class ApiService extends BaseService {
  // Auth Routes
  login(data) {
    return this.post("/login", data);
  }
  forgotPassword(data) {
    return this.post("/forgot_password", data);
  }
  register(data) {
    return this.post("/register", data);
  }

  // Other Routes
  // profile
  getOwnProfile() {
    return this.get("/profiles/getOwnProfile");
  }
  updateProfile(data) {
    return this.put(`/profiles/${data?._id}`, data);
  }

  // albums
  addAlbum(data) {
    return this.post("/albums", data);
  }

  getAlbums() {
    return this.get("/albums");
  }

  // stories
  addStory(data) {
    return this.post("/stories", data);
  }
  getStories() {
    return this.get("/stories");
  }
}

export default new ApiService();
