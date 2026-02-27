/**
 * OnriviPrompt License Utility Functions
 */

/**
 * 고유 라이선스 키 생성 (형식: ONRIVI-XXXX-XXXX-XXXX)
 */
export function generateLicenseKey(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const segment = () => Array.from({ length: 4 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    return `ONRIVI-${segment()}-${segment()}-${segment()}`;
}

/**
 * 이메일 발송 (Brevo API Mock-up)
 * 추후 실제 API 키 연동 필요
 */
export async function sendLicenseEmail(email: string, key: string): Promise<boolean> {
    console.log(`[Email Engine] Sending license key ${key} to ${email}`);
    // 실제 Brevo API 연동 시 아래 주석 해제 및 설정
    /*
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': 'YOUR_BREVO_API_KEY',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: 'OnriviPrompt', email: 'firstonrivi@onrivi.com' },
        to: [{ email: email }],
        subject: 'Your OnriviPrompt License Key',
        textContent: `Your license key is: ${key}`
      })
    });
    return response.ok;
    */
    return true;
}
