import { HttpException, HttpStatus } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

export async function sendMail(
  mailerService: MailerService,
  to: string,
  subject: string,
  text: string,
) {
  try {
    await mailerService.sendMail({
      to,
      subject,
      text,
    });
  } catch (error) {
    throw new HttpException(
      'Failed to send email',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
