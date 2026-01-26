import { redirect } from "next/navigation";

export default async function StillsIndex({ params }) {
  const { locale } = await params;
  redirect(`/${locale}/stills/weddings`);
}
