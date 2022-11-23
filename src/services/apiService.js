import BaseService from "./baseService";

class ApiService extends BaseService {
  login(data) {
    return this.post("/login", data);
  }
  forgotPassword(data) {
    return this.post("/forgot_password", data);
  }
  register(data) {
    return this.post("/register", data);
  }
}

export default new ApiService();
