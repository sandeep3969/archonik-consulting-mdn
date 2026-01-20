from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)  # allow React frontend

# -----------------------
# Helper: Send Email
# -----------------------
def send_email(to_email, subject, body):
    msg = MIMEMultipart()
    msg["From"] = app.config["SMTP_EMAIL"]
    msg["To"] = to_email
    msg["Subject"] = subject

    msg.attach(MIMEText(body, "plain"))

    server = smtplib.SMTP(
        app.config["SMTP_SERVER"],
        app.config["SMTP_PORT"]
    )
    server.starttls()
    server.login(
        app.config["SMTP_EMAIL"],
        app.config["SMTP_PASSWORD"]
    )
    server.send_message(msg)
    server.quit()

# -----------------------
# Contact API
# -----------------------
@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    company = data.get("company")
    interest = data.get("interest")
    submitted_at = datetime.now().strftime("%d %b %Y, %I:%M %p")


    if not name or not email:
        return jsonify({"error": "Name and Email required"}), 400

    # -------- Admin Notification --------
    admin_body = f"""
New Contact Submission 
Date & Time: {submitted_at}
Name: {name}
Email: {email}
Company: {company}
Interest: {interest}
"""

    send_email(
        app.config["ADMIN_EMAIL"],
        "New Contact Form Submission",
        admin_body
    )

    # -------- Auto Reply to User --------
    user_body = f"""
Hi {name},

Thank you for reaching out to Archonik Consulting.

We’ve received your message and our team will get back to you shortly.

— Archonik Consulting
"""

    send_email(
        email,
        "We received your message",
        user_body
    )

    return jsonify({"success": True})

# -----------------------
# Run Server
# -----------------------
if __name__ == "__main__":
   app.run(host="0.0.0.0", port=5000, debug=True)

