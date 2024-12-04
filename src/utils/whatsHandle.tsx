export function HandleWhatsClick({ phoneNumber, message }: { phoneNumber: string; message: string }): void {
  // Envia o evento de conversão
  if (typeof window.gtag !== "undefined") {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16506400196/8cdpCIHjv84ZEMTb7r49',
      'value': 1.0,
      'currency': 'BRL'
    });
  }

  // Aguarda 300ms para garantir o envio do evento antes de redirecionar
  setTimeout(() => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }, 300);
}
