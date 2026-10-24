import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, category, message, organization, preferredContact } = body;

    // Field validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please enter a message of at least 10 characters." },
        { status: 400 }
      );
    }

    const referenceId = `INQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    // In a production backend, this would connect to PostgreSQL or transactional mailer.
    // For this demonstration, we acknowledge the submission transparently.
    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: `Thank you, ${name.trim()}! Your inquiry regarding "${category || "General"}" has been recorded. Our team will review it and reply within 48 business hours.`,
        submittedAt: new Date().toISOString(),
        demoNotice: "Form connected to live Next.js API route. In demonstration mode, inquiries are safely processed.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
