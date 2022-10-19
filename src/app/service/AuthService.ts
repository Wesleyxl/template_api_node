import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@model/User";
import authConfig from "@config/auth";

class AuthService {
  private static createUserToken(userId: number) {
    return jwt.sign({ id: userId }, authConfig.secret, {
      expiresIn: authConfig.expire_in,
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
          // return user + access_token
          const token = AuthService.createUserToken(user.id);

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

  public async register(name: string, email: string, password: string) {
    try {
      const passwordHash = await bcrypt.hash(password, 8);

      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          name: name,
          email: email,
          password: passwordHash,
        },
      });

      if (!created) {
        const token = AuthService.createUserToken(user.id);

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

  public async me(id: number) {
    try {
      const user = await User.findByPk(id, {
        attributes: ["id", "name", "email", "created_at", "updated_at"],
      });

      if (user) {
        return {
          success: true,
          data: user,
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
