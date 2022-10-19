class Controller {
  protected static validator(fields: object) {
    // validating each values of fields
    for (const [key, value] of Object.entries(fields)) {
      if (!value || value === "") {
        return false;
      }
      return true;
    }
  }
}

export default Controller;
