import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@model/User";

class AuthService {
  private static createUserToken(userId: number) {
    return jwt.sign({ id: userId }, "secret", {
      expiresIn: "1D",
    });
  }

  public async login(email: string, password: string) {
    try {
      // get user by email
      const user = await User.findOne({ where: { email } });

      // verify if user exists
      if (user) {
        // compare password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
          const token = AuthService.createUserToken(user.id);
          console.log("here " + token);

          return {
            success: true,
            data: {
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
              },
              access_token: token,
            },
          };
        }

        return {
          cess: false,
          message: "Email or password is incorrect",
        };
      }
      return {
        success: false,
        message: "Email or password is incorrect",
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }
}

export default new AuthService();
