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

  // experience
  addExperience(data) {
    return this.post("/experience", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  updateExperience(data) {
    return this.put(`/experience/${data?._id}`, data);
  }

  addCommentInExperience(data) {
    return this.put(`/experience/comment/${data?._id}`, data);
  }

  updateCommentInExperience(data) {
    return this.put(
      `/experience/comment/${data?._id}/${data?.comment_id}`,
      data
    );
  }

  deleteCommentInExperience(data) {
    return this.delete(`/experience/comment/${data?._id}/${data?.comment_id}`);
  }

  deleteExperience(data) {
    return this.delete(`/experience/${data?._id}`);
  }

  getExperiences() {
    return this.get("/experience");
  }

  getParticularExperience(id) {
    return this.get(`/experience/${id}`);
  }
}

export default new ApiService();
