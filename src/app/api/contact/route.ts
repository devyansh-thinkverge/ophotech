import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { fileTypeFromBuffer } from 'file-type';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey || apiKey === 'your_resend_api_key_here') {
    return null;
  }

  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const resend = getResendClient();

    if (!resend) {
      return NextResponse.json(
        { success: false, error: 'Email service is not configured yet' },
        { status: 503 }
      );
    }

    // 1. Parse FormData instead of JSON
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const organization = formData.get("organization") as string;
    const role = formData.get("role") as string;
    const industry = formData.get("industry") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const date = formData.get("date") as string;
    const startTime = formData.get("startTime") as string;
    const startPeriod = formData.get("startPeriod") as string;
    const endTime = formData.get("endTime") as string;
    const endPeriod = formData.get("endPeriod") as string;
    const brief = (formData.get("brief") as string) || (formData.get("message") as string);
    const file = formData.get("file") as File | null;

    // 2. Validate Required Fields
    if (!name || !email || !organization) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 3. Process File & Security Check
    const attachments = [];
    let fileNameForTemplate = "None";

    if (file && file.size > 0) {
      // Check 1: Size Limit (Server-side backup)
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "File exceeds 10MB limit" }, { status: 400 });
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Check 2: Magic Number Verification (Security)
      const type = await fileTypeFromBuffer(buffer);
      const allowedMimes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];

      if (!type || !allowedMimes.includes(type.mime)) {
        return NextResponse.json({ error: "Invalid file type. Only PDF and Images allowed." }, { status: 400 });
      }

      // If valid, prepare for Resend
      attachments.push({
        filename: file.name,
        content: buffer,
      });
      fileNameForTemplate = file.name;
    }

    // 4. Format time slot
    const startDisplay = startTime
      ? `${startTime}${startPeriod ? ` ${startPeriod}` : ''}`
      : '';
    const endDisplay = endTime
      ? `${endTime}${endPeriod ? ` ${endPeriod}` : ''}`
      : '';

    const timeSlot = startDisplay && endDisplay
      ? `${startDisplay} - ${endDisplay}`
      : startDisplay
      ? startDisplay
      : endDisplay
      ? endDisplay
      : 'Not specified';

    // 5. Send Admin Email to Multiple Recipients
    if (!process.env.ADMIN_EMAILS) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const adminRecipients = process.env.ADMIN_EMAILS
      .split(',')
      .map((e) => e.trim())
      .filter((e) => e.length > 0);

    const adminHtml = `
      <h1>New Inquiry from ${name}</h1>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Role:</strong> ${role || 'Not specified'}</p>
      <p><strong>Industry:</strong> ${industry || 'Not specified'}</p>
      <p><strong>Work Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Country:</strong> ${country || 'Not specified'}</p>
      <p><strong>Date:</strong> ${date || 'Not specified'}</p>
      <p><strong>Time:</strong> ${timeSlot}</p>
      <p><strong>Brief:</strong> ${brief || 'No message provided'}</p>
      <p><strong>File:</strong> ${fileNameForTemplate}</p>
    `;

    const adminEmail = await resend.emails.send({
      from: 'info@ophotech.com',
      to: adminRecipients,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      attachments: attachments,
      html: adminHtml,
    });

    // 6. Send Email to Lead (User)
    const userHtml = `
      <h1>Thank you, ${name}</h1>
      <p>We received your inquiry and an Opho engineer will get back to you shortly.</p>
      <p><strong>Organization:</strong> ${organization}</p>
    `;

    const userEmail = await resend.emails.send({
      from: 'noreply@ophotech.com',
      to: email,
      subject: 'Thank you for your inquiry',
      html: userHtml,
    });

    if (adminEmail.error || userEmail.error) {
      console.error('Resend Error:', adminEmail.error || userEmail.error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
