export function generateWhatsAppLink(text: string): string {
  const phone = "556299844762";
  const message = encodeURIComponent(text);
  const link = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}&type=phone_number&app_absent=0`;

  return link;
}
