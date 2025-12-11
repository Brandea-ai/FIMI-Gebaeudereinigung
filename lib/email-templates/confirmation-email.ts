interface ConfirmationEmailData {
  name: string
  requestId: string
  service?: string
}

export function generateConfirmationEmail(data: ConfirmationEmailData): string {
  const { name, requestId, service } = data
  const firstName = name.split(' ')[0]

  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ihre Anfrage bei FIMI</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">

          <!-- Header with Logo -->
          <tr>
            <td style="background-color: #012956; padding: 30px 40px; border-radius: 6px 6px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                FIMI Gebäudereinigung
              </h1>
              <p style="margin: 5px 0 0; color: #109387; font-size: 14px; font-weight: 600; letter-spacing: 1px;">
                GmbH • Professionelle Reinigung in Bayern
              </p>
            </td>
          </tr>

          <!-- Success Badge -->
          <tr>
            <td style="background-color: #109387; padding: 20px 40px; text-align: center;">
              <span style="color: #ffffff; font-size: 16px; font-weight: 600;">
                Anfrage erfolgreich eingegangen
              </span>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">

              <h2 style="margin: 0 0 20px; color: #012956; font-size: 24px; font-weight: 700;">
                Herzlichen Dank für Ihre Anfrage, ${firstName}!
              </h2>

              <p style="margin: 0 0 25px; color: #333; font-size: 16px; line-height: 1.7;">
                Das Team von FIMI Gebäudereinigung freut sich über Ihr Interesse${service ? ` an unserer Leistung <strong>${service}</strong>` : ''}. Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 2 Stunden persönlich bei Ihnen melden.
              </p>

              <!-- Request ID Box -->
              <div style="background-color: #f8f9fa; border: 2px solid #109387; border-radius: 6px; padding: 20px; margin: 30px 0; text-align: center;">
                <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                  Ihre Referenznummer
                </p>
                <p style="margin: 0; color: #012956; font-size: 22px; font-weight: 700; font-family: monospace; letter-spacing: 3px;">
                  ${requestId}
                </p>
                <p style="margin: 10px 0 0; color: #666; font-size: 13px;">
                  Bitte bewahren Sie diese Nummer für Rückfragen auf.
                </p>
              </div>

              <!-- What Happens Next -->
              <h3 style="margin: 30px 0 15px; color: #012956; font-size: 18px; font-weight: 700;">
                Wie geht es weiter?
              </h3>

              <table role="presentation" style="width: 100%; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <table role="presentation">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: #109387; border-radius: 50%; text-align: center; line-height: 28px; color: #fff; font-weight: 700; font-size: 14px;">1</div>
                        </td>
                        <td style="vertical-align: top;">
                          <p style="margin: 0; color: #012956; font-size: 15px; font-weight: 600;">Wir prüfen Ihre Anfrage</p>
                          <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Innerhalb von 2 Stunden</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <table role="presentation">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: #109387; border-radius: 50%; text-align: center; line-height: 28px; color: #fff; font-weight: 700; font-size: 14px;">2</div>
                        </td>
                        <td style="vertical-align: top;">
                          <p style="margin: 0; color: #012956; font-size: 15px; font-weight: 600;">Wir melden uns bei Ihnen</p>
                          <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Per Telefon oder E-Mail</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <table role="presentation">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: #109387; border-radius: 50%; text-align: center; line-height: 28px; color: #fff; font-weight: 700; font-size: 14px;">3</div>
                        </td>
                        <td style="vertical-align: top;">
                          <p style="margin: 0; color: #012956; font-size: 15px; font-weight: 600;">Kostenfreie Besichtigung</p>
                          <p style="margin: 5px 0 0; color: #666; font-size: 14px;">Vor Ort bei Ihnen im Unternehmen</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Reply Hint -->
              <div style="background-color: #e8f5f3; border-radius: 6px; padding: 20px; margin-top: 30px;">
                <p style="margin: 0; color: #012956; font-size: 15px; font-weight: 600;">
                  Sie können direkt auf diese E-Mail antworten
                </p>
                <p style="margin: 8px 0 0; color: #666; font-size: 14px; line-height: 1.6;">
                  Bei weiteren Fragen oder Ergänzungen antworten Sie einfach auf diese E-Mail.
                </p>
              </div>

              <!-- Contact Info -->
              <div style="background-color: #012956; border-radius: 6px; padding: 25px; margin-top: 20px;">
                <p style="margin: 0 0 15px; color: #ffffff; font-size: 16px; font-weight: 600;">
                  Sie möchten uns direkt erreichen?
                </p>
                <table role="presentation">
                  <tr>
                    <td style="padding: 8px 0;">
                      <a href="tel:+4987120669360" style="color: #109387; font-size: 18px; font-weight: 700; text-decoration: none;">
                        0871 2066936 0
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <a href="mailto:kontakt@fimi-gebaeudereinigung.de" style="color: rgba(255,255,255,0.8); font-size: 15px; text-decoration: none;">
                        kontakt@fimi-gebaeudereinigung.de
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #01203d; padding: 25px 40px; border-radius: 0 0 6px 6px;">
              <p style="margin: 0 0 10px; color: rgba(255,255,255,0.9); font-size: 15px; text-align: center; font-weight: 700;">
                FIMI Gebäudereinigung GmbH
              </p>
              <p style="margin: 0 0 10px; color: rgba(255,255,255,0.6); font-size: 13px; text-align: center;">
                Kellerstr. 39 • 84036 Landshut • Bayern
              </p>
              <p style="margin: 0; text-align: center;">
                <a href="https://fimi-gebaeudereinigung.de" style="color: #109387; font-size: 13px; text-decoration: none; font-weight: 600;">
                  www.fimi-gebaeudereinigung.de
                </a>
              </p>
            </td>
          </tr>

        </table>

        <!-- Legal Disclaimer -->
        <div style="margin: 25px 0 0; padding: 20px; background-color: #f8f9fa; border-radius: 6px;">
          <p style="margin: 0 0 10px; color: #666; font-size: 11px; text-align: left; line-height: 1.6;">
            <strong style="color: #012956;">Datenschutzhinweis:</strong> Ihre Daten werden gemäß DSGVO verarbeitet und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht.<br>Weitere Informationen: <a href="https://fimi-gebaeudereinigung.de/datenschutz" style="color: #109387; text-decoration: none;">Datenschutzerklärung</a> | Fragen: <a href="mailto:datenschutz@fimi-gebaeudereinigung.de" style="color: #109387; text-decoration: none;">datenschutz@fimi-gebaeudereinigung.de</a>
          </p>
          <p style="margin: 0 0 10px; color: #666; font-size: 11px; text-align: left; line-height: 1.6;">
            <strong style="color: #012956;">Vertraulichkeit:</strong> Diese E-Mail und eventuelle Anhänge sind ausschließlich für den bezeichneten Adressaten bestimmt. Sollten Sie diese E-Mail irrtümlich erhalten haben, informieren Sie uns bitte umgehend und löschen Sie die Nachricht.
          </p>
          <p style="margin: 0; color: #666; font-size: 11px; text-align: left; line-height: 1.6;">
            <strong style="color: #012956;">Rechtlicher Hinweis:</strong> Diese automatische Bestätigung stellt kein verbindliches Angebot dar. Ein Vertrag kommt erst durch eine gesonderte schriftliche Vereinbarung zustande.
          </p>
        </div>

        <!-- Footer Notice -->
        <p style="margin: 15px 0 0; color: #999; font-size: 10px; text-align: center;">
          © ${new Date().getFullYear()} FIMI Gebäudereinigung GmbH • Kellerstr. 39 • 84036 Landshut • <a href="https://fimi-gebaeudereinigung.de/impressum" style="color: #999; text-decoration: none;">Impressum</a>
        </p>

      </td>
    </tr>
  </table>
</body>
</html>
`
}
