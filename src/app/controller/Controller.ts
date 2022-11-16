class Controller {
  protected static validator(fields: object) {
    for (const [key, value] of Object.entries(fields)) {
      if (!value || value === "") {
        return {
          success: false,
          message: `The ${key} is required`,
        };
      }
    }
    return {
      success: true,
    };
  }
}

export default Controller;
