/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';

import { User } from 'src/models/user';
import { initializeApp } from 'firebase-admin/app';
import { getAuth, UserRecord } from 'firebase-admin/auth';
import { NotFoundError } from 'rxjs';
const mm = '🍎 OnBoardingService 🍎';
//
@Injectable()
export class OnBoardingService {
  async registerUser(user: User): Promise<any> {
    try {
      console.log(`${mm} User to be registered: ${JSON.stringify(user)}`);
      const userRecord: UserRecord = await getAuth().createUser({
        email: user.email,
        password: user.password,
        displayName: user.name,
        // phoneNumber: user.cellphone,
      });
      console.log(
        `${mm} User registered: ${JSON.stringify(userRecord)}, add user to Firestore`,
      );
      user.uid = userRecord.uid;
      // const savedPassword = user.password;
      // user.password = '';
      // const mResult = await new Firestore()
      //   .collection('users')
      //   .doc(user.uid)
      //   .set(user);
      // console.log(`${mm} User added to Firestore: ${mResult}`);
      // user.password = savedPassword;
      return user;
    } catch (error) {
      console.log(`${mm} Shit! We fell down, Boss: ${error}`);
      return new UnauthorizedException(`${error}`);
    }
  }

  async getUserByEmail(email: string): Promise<any> {
    try {
      console.log(`${mm} getUserByEmail: ${email}`);

      const userRecord = await getAuth().getUserByEmail(email);
      console.log(`${mm} User found: ${JSON.stringify(userRecord)}`);
      return userRecord;
    } catch (error) {
      console.log(`${mm} User not found: ${error}`);
      return new NotFoundException('User not found');
    }
  }

  async deleteUser(email: string): Promise<any> {
    const response = await getAuth().deleteUser(email);
    console.log(`${mm} User deleted: ${response}`);
    return response;
  }
}
