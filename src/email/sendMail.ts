import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerModule {
  constructor(private readonly mailerService: MailerService) {}
  async sandMail(to: string, subject: string, text: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        text,
      });
    } catch (error) {
      throw new HttpException('CONFLICT', HttpStatus.CONFLICT);
    }
  }
}
