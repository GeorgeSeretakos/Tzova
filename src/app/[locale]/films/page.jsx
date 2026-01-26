import { redirect } from "next/navigation";

export default async function FilmsIndex({ params }) {
  const { locale } = await params;
  redirect(`/${locale}/films/weddings`);
}
