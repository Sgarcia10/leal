import { TestBed, inject, async } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { User } from '../../models/user';
import { LoginDTO } from '../../models/loginDTO';
import { UserComponent } from 'src/client/app/containers/user/user.component';
import { UserDTO } from '../../models/userDTO';

describe('AuthService', () => {
  let httpServiceStub: Partial<HttpClient>;
  let http: HttpClient;
  let service: AuthService;
  beforeEach(() => {
    httpServiceStub = {
      post: () => null
    };
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: HttpClient, useValue: httpServiceStub }]
    }).compileComponents();

    http = TestBed.get(HttpClient);
    service = TestBed.get(AuthService);
  });

  it('should be created', async(() => {
    expect(service).toBeTruthy();
  }));

  it('should be created', async(() => {
    const mockUser: User = {
      _id: 'sdasd',
      firstName: 'san',
      lastName: 'gar',
      email: 'garsan@gm'
    };
    const mockUserDTO: Observable<UserDTO> = of({
      code: 210,
      token: 'dadsad@sadsadwq321431d$·"%12',
      user: mockUser
    });
    jest.spyOn(http, 'post').mockReturnValue(mockUserDTO);
    let user: User;
    service.login({} as LoginDTO).subscribe(data => (user = data));
    expect(user._id).toBe(mockUser._id);
  }));
});
