export class JwtHelper {
  public static addJwt(): { [Authorization: string]: string } {
    // ensure request options and headers are not null
    // add authorization header with jwt token
    let jwtHeader: { [Authorization: string]: string } = {};
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.jwt) {
      jwtHeader = { Authorization: `Bearer ${currentUser.jwt}` };
    }

    return jwtHeader;
  }
}
