import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const RECIPIENTS = ["1tariktek@gmail.com", "erenayd58@gmail.com"];

const transporter = (() => {
  const smtpUrl = process.env.SMTP_URL;
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number.parseInt(process.env.SMTP_PORT, 10)
    : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (smtpUrl) {
    return nodemailer.createTransport(smtpUrl);
  }

  if (host && port && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }

  return null;
})();

const FROM_ADDRESS =
  process.env.SMTP_FROM ||
  process.env.SMTP_USER ||
  "no-reply@kriznet.com";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Geçersiz istek gövdesi" },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = payload;
  const missingFields = [
    !name && "name",
    !email && "email",
    !subject && "subject",
    !message && "message",
  ].filter(Boolean);

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        error: "Zorunlu alanlar eksik",
        fields: missingFields,
      },
      { status: 400 }
    );
  }

  if (!transporter) {
    return NextResponse.json(
      {
        error: "Mail sunucusu yapılandırması bulunamadı",
      },
      { status: 500 }
    );
  }

  const textBody = [
    `Gönderen: ${name}`,
    `E-posta: ${email}`,
    "",
    "Mesaj:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      to: RECIPIENTS,
      from: `KrizNet İletişim <${FROM_ADDRESS}>`,
      replyTo: email,
      subject: subject ?? "KrizNet iletişim formu",
      text: textBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email send failed", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
