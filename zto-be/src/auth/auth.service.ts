import { Dependencies, Injectable, Param, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService ) {
    // this.usersService = usersService;
  }
    async signIn(@Param('email, pass') email: string, pass:string) {
      console.log("email",email, pass);

    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
       
      throw new UnauthorizedException({message:"Email eswel nuuts ug buruu bna"});
    }
    // ({message:"amjilttai newterlee", user})
    // const { password, ...result } = user;
    const data = {email:user.email, sub:user._id}
    return {
      access_token: await this.jwtService.signAsync(data), user
    }
    // return result;
  }
}
