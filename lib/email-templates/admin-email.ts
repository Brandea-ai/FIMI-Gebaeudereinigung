interface AdminEmailData {
  name: string
  email: string
  phone: string
  company?: string
  postalCode?: string
  website?: string
  employeeCount?: string
  branche?: string
  service?: string
  callbackTime?: string
  message?: string
  requestId: string
  submittedAt: string
}

export function generateAdminEmail(data: AdminEmailData): string {
  const {
    name,
    email,
    phone,
    company,
    postalCode,
    website,
    employeeCount,
    branche,
    service,
    callbackTime,
    message,
    requestId,
    submittedAt
  } = data

  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neue Kontaktanfrage</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">

          <!-- Header -->
          <tr>
            <td style="background-color: #012956; padding: 30px 40px; border-radius: 6px 6px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                Neue Kontaktanfrage
              </h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.7); font-size: 14px;">
                Eingegangen am ${submittedAt}
              </p>
            </td>
          </tr>

          <!-- Request ID Badge -->
          <tr>
            <td style="background-color: #109387; padding: 15px 40px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <span style="color: rgba(255,255,255,0.8); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Referenznummer</span>
                    <br>
                    <span style="color: #ffffff; font-size: 18px; font-weight: 700; font-family: monospace; letter-spacing: 2px;">${requestId}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">

              <!-- Contact Info Section -->
              <h2 style="margin: 0 0 20px; color: #012956; font-size: 18px; font-weight: 700; border-bottom: 2px solid #109387; padding-bottom: 10px;">
                Kontaktdaten
              </h2>

              <table role="presentation" style="width: 100%; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</span><br>
                    <span style="color: #012956; font-size: 16px; font-weight: 600;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</span><br>
                    <a href="mailto:${email}" style="color: #109387; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</span><br>
                    <a href="tel:${phone}" style="color: #109387; font-size: 16px; font-weight: 600; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Unternehmen</span><br>
                    <span style="color: #012956; font-size: 16px; font-weight: 600;">${company}</span>
                  </td>
                </tr>
                ` : ''}
              </table>

              <!-- Details Section -->
              ${(branche || service || callbackTime || postalCode || website || employeeCount) ? `
              <h2 style="margin: 0 0 20px; color: #012956; font-size: 18px; font-weight: 700; border-bottom: 2px solid #109387; padding-bottom: 10px;">
                Anfrage-Details
              </h2>

              <table role="presentation" style="width: 100%; margin-bottom: 30px;">
                ${branche ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Branche</span><br>
                    <span style="color: #012956; font-size: 16px; font-weight: 600;">${branche}</span>
                  </td>
                </tr>
                ` : ''}
                ${service ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Gewünschte Leistung</span><br>
                    <span style="color: #012956; font-size: 16px; font-weight: 600;">${service}</span>
                  </td>
                </tr>
                ` : ''}
                ${postalCode ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Postleitzahl</span><br>
                    <span style="color: #012956; font-size: 16px; font-weight: 600;">${postalCode}</span>
                  </td>
                </tr>
                ` : ''}
                ${website ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Website</span><br>
                    <a href="${website.startsWith('http') ? website : 'https://' + website}" style="color: #109387; font-size: 16px; font-weight: 600; text-decoration: none;">${website}</a>
                  </td>
                </tr>
                ` : ''}
                ${employeeCount ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Mitarbeiteranzahl</span><br>
                    <span style="color: #012956; font-size: 16px; font-weight: 600;">${employeeCount}</span>
                  </td>
                </tr>
                ` : ''}
                ${callbackTime ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Gewünschtes Rückrufzeitfenster</span><br>
                    <span style="color: #109387; font-size: 16px; font-weight: 700;">${callbackTime}</span>
                  </td>
                </tr>
                ` : ''}
              </table>
              ` : ''}

              <!-- Message Section -->
              ${message ? `
              <h2 style="margin: 0 0 20px; color: #012956; font-size: 18px; font-weight: 700; border-bottom: 2px solid #109387; padding-bottom: 10px;">
                Nachricht
              </h2>

              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 30px;">
                <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              ` : ''}

              <!-- Action Buttons -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td align="center" style="padding-top: 20px;">
                    <a href="mailto:${email}?subject=Re: Ihre Anfrage ${requestId}"
                       style="display: inline-block; background-color: #109387; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px; margin-right: 10px;">
                      Per E-Mail antworten
                    </a>
                    <a href="tel:${phone}"
                       style="display: inline-block; background-color: #012956; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px;">
                      Anrufen
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #01203d; padding: 25px 40px; border-radius: 0 0 6px 6px;">
              <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 12px; text-align: center;">
                Diese E-Mail wurde automatisch vom Kontaktformular auf fimi-gebaeudereinigung.de generiert.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}
