import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const location = formData.get('location') as string;
    const role = formData.get('role') as string;
    const linkedin = formData.get('linkedin') as string;
    const cvFile = formData.get('cv') as File;

    if (!name || !location || !role || !cvFile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert file to base64 for email attachment
    const arrayBuffer = await cvFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Content = buffer.toString('base64');

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: ['team@acube-tech.com', 'absaarmalik15@gmail.com'],
      subject: `New Talent Registration: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4;">New Talent Registration</h2>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Location:</strong> ${location}</p>
            <p style="margin: 10px 0;"><strong>Role/Expertise:</strong> ${role}</p>
            ${linkedin ? `<p style="margin: 10px 0;"><strong>LinkedIn:</strong> <a href="${linkedin}" style="color: #06b6d4;">${linkedin}</a></p>` : ''}
          </div>

          <p style="color: #6b7280; font-size: 14px;">CV is attached to this email.</p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px;">
              This is an automated notification from your talent registration form.
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: base64Content,
        },
      ],
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        emailId: data?.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing talent registration:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
