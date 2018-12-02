import { LoginDTO } from '../models/loginDTO';
import { UserDTO } from '../models/userDTO';

export class JwtHelper {
  public static addJwt(): { [Authorization: string]: string } {
    // ensure request options and headers are not null
    // add authorization header with jwt token
    let jwtHeader: { [Authorization: string]: string } = {};
    const currentUser: UserDTO = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      jwtHeader = { Authorization: `Bearer ${currentUser.token}` };
    }

    return jwtHeader;
  }
}
