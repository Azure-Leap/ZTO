import { Dependencies, Injectable, Param, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService ) {
    // this.usersService = usersService;
  }
    async signIn(@Param('email, pass') email: string, pass:string) {
      try {
            console.log("email",email, pass);
          const user = await this.usersService.findOne(email);
          const checked = bcrypt.compareSync(pass, user.password.toString())
        if (user?.password !== pass) {     
          throw new UnauthorizedException();
        }
        const data = {email:user.email, sub:user._id}
        return {sucess:true,
          access_token: await this.jwtService.signAsync(data), user
}
      } catch (error) {
        console.log("aldaa garlaa bariad avlaa daa");
        return {sucess: false, message: error.message};
      }
  }
 
}
